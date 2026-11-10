// ───────────────────────────────────────────────────────────────────────────
// Estimate form delivery. Provider is chosen in site.config.json → form.
//
//   formspree    POST to https://formspree.io/f/<formspreeId>
//   ghl-webhook  POST JSON to a GoHighLevel workflow "Inbound Webhook" URL
//   demo         not connected - NEVER reports success
//
// Success is returned only when the receiving service answers 2xx. Network
// failures, CORS blocks, and non-2xx answers all return { status: "error" }.
// No secrets live here: a Formspree ID and a GHL inbound-webhook URL are
// public form endpoints by design (private API keys must never go in this file).
// ───────────────────────────────────────────────────────────────────────────
import { siteConfig } from "@/config";
import { BUSINESS_NAME } from "./site-config";

export type EstimateValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType: string;
  location: string;
  details: string;
};

export type SubmitResult =
  { status: "success" } | { status: "demo" } | { status: "error"; message: string };

const { provider, formspreeId, webhookUrl } = siteConfig.form;

function providerConfigured() {
  if (provider === "formspree") return /^[A-Za-z0-9_-]+$/.test(formspreeId);
  if (provider === "ghl-webhook") return /^https:\/\//i.test(webhookUrl);
  return false;
}

export const FORM_IS_LIVE = providerConfigured();
export const FORM_IS_DEMO = !FORM_IS_LIVE;

const GENERIC_ERROR = "We couldn't send your request.";

export async function submitEstimate(
  values: EstimateValues,
  honeypot: string,
): Promise<SubmitResult> {
  if (honeypot) return { status: "error", message: GENERIC_ERROR }; // bot filled the hidden field
  if (FORM_IS_DEMO) return { status: "demo" };

  const common = {
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    service: values.service,
    property_type: values.propertyType,
    project_location: values.location.trim(),
    message: values.details.trim(),
    business: BUSINESS_NAME,
    page: typeof window !== "undefined" ? window.location.href : "",
  };

  try {
    let res: Response;
    if (provider === "formspree") {
      res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...common,
          _subject: `New estimate request: ${BUSINESS_NAME} (${common.service})`,
        }),
      });
    } else {
      res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: common.name,
          phone: common.phone,
          email: common.email,
          service_needed: common.service,
          property_type: common.property_type,
          project_location: common.project_location,
          message: common.message,
          source: "website-estimate-form",
          business: common.business,
          page: common.page,
        }),
      });
    }
    if (res.ok) return { status: "success" };
    return { status: "error", message: GENERIC_ERROR };
  } catch {
    return { status: "error", message: GENERIC_ERROR };
  }
}
