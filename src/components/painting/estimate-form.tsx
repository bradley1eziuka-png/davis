import { useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone, TriangleAlert } from "lucide-react";

import { submitEstimate, type EstimateValues } from "@/lib/form-submit";
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { SERVICE_LIST } from "@/lib/services-data";
import { ctaButton } from "./buttons";

const SERVICE_OPTIONS = [...SERVICE_LIST.map((s) => s.title), "Other / Custom Project"];
const PROPERTY_TYPES = ["Residential", "Commercial"];

type Values = EstimateValues;
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = {
  name: "",
  phone: "",
  email: "",
  service: "",
  propertyType: "",
  location: "",
  details: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Estimate request form. `compact` (homepage hero) asks for name, phone,
// service and details; `full` (/contact) adds email, property type and
// project location. Delivery is handled by src/lib/form-submit.ts. The
// success state only appears after the provider confirms receipt; with no
// provider configured the form reports "not sent" and offers call/email.
export function EstimateFormCard({
  id,
  className,
  variant = "full",
}: {
  id?: string;
  className?: string;
  variant?: "compact" | "full";
}) {
  const full = variant === "full";
  const uid = useId();
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "unconfigured" | "error"
  >("idle");
  const [honeypot, setHoneypot] = useState("");
  const submitting = useRef(false); // blocks double submits before state updates

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (values.phone.replace(/\D/g, "").length < 10)
      next.phone = "Please enter a valid 10-digit phone number.";
    if (full && !EMAIL_RE.test(values.email.trim())) next.email = "Please enter a valid email.";
    if (!values.service) next.service = "Please select a service.";
    if (full && !values.propertyType) next.propertyType = "Please choose a property type.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting.current || !validate()) return;
    submitting.current = true;
    setStatus("submitting");
    try {
      const result = await submitEstimate(values, honeypot);
      if (result.status === "success") {
        setStatus("success");
        setValues(EMPTY);
      } else if (result.status === "demo") {
        setStatus("unconfigured");
      } else {
        setStatus("error");
      }
    } finally {
      submitting.current = false;
    }
  }

  const mailto = (() => {
    const lines = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Service: ${values.service}`,
      ...(values.propertyType ? [`Property type: ${values.propertyType}`] : []),
      ...(values.location ? [`Location: ${values.location}`] : []),
      "",
      values.details,
    ];
    const body = lines.join("\n");
    return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent("Estimate request")}&body=${encodeURIComponent(body)}`;
  })();

  const fieldBase =
    "h-12 w-full rounded-lg border bg-white px-4 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold-rich/40";
  const fieldOk = "border-border focus:border-gold-rich";
  const fieldErr = "border-destructive focus:border-destructive";
  const labelCls = "mb-1.5 block text-sm font-semibold text-primary";
  const errCls = "mt-1.5 text-xs font-medium text-destructive";
  const req = <span className="text-gold-ink"> *</span>;

  const panel = (
    icon: React.ReactNode,
    title: string,
    body: React.ReactNode,
    action?: React.ReactNode,
  ) => (
    <div
      role="status"
      className="flex flex-col items-center rounded-2xl border border-border bg-secondary/50 px-6 py-10 text-center"
    >
      <span className="flex size-16 items-center justify-center rounded-full bg-accent/25 text-gold-ink">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
        {title}
      </h3>
      <div className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
        {body}
      </div>
      {action}
    </div>
  );

  return (
    <div
      id={id}
      className={
        "scroll-mt-28 rounded-3xl border border-border bg-white p-5 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)] sm:p-7" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="mb-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink">
          Request an Estimate
        </span>
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Discuss Your Project
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
          Tell us a little about what you need and we'll follow up to talk through the details.
        </p>
      </div>

      {status === "unconfigured" ? (
        panel(
          <TriangleAlert className="size-8" />,
          "Your Request Was Not Sent",
          <p>
            Online requests aren't available just yet. Please call{" "}
            <a href={BUSINESS_PHONE_TEL} className="font-semibold text-primary underline">
              {BUSINESS_PHONE}
            </a>{" "}
            or email us and we'll gladly help.
          </p>,
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "md" })}>
              <Phone className="size-4" /> Call Now
            </a>
            {BUSINESS_EMAIL && (
              <a href={mailto} className={ctaButton({ variant: "gold", size: "md" })}>
                <Mail className="size-4" /> Email Instead
              </a>
            )}
          </div>,
        )
      ) : status === "success" ? (
        panel(
          <CheckCircle2 className="size-8" />,
          "Thank You, We'll Be in Touch",
          <p>
            Your estimate request has been received. We'll reach out to learn more about your
            project. Need us sooner? Call{" "}
            <a href={BUSINESS_PHONE_TEL} className="font-semibold text-primary underline">
              {BUSINESS_PHONE}
            </a>
            .
          </p>,
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-gold-ink hover:underline"
          >
            Submit another request
          </button>,
        )
      ) : (
        <form onSubmit={onSubmit} noValidate className="relative space-y-3.5">
          {/* Honeypot: hidden from people, tempting to bots. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label htmlFor={`${uid}-website`}>Leave this field empty</label>
            <input
              id={`${uid}-website`}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor={`${uid}-name`} className={labelCls}>
              {full ? "Full Name" : "Name"}
              {req}
            </label>
            <input
              id={`${uid}-name`}
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            />
            {errors.name && (
              <p id={`${uid}-name-err`} className={errCls}>
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={`${uid}-phone`} className={labelCls}>
              Phone Number{req}
            </label>
            <input
              id={`${uid}-phone`}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="(555) 555-5555"
              className={`${fieldBase} ${errors.phone ? fieldErr : fieldOk}`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
            />
            {errors.phone && (
              <p id={`${uid}-phone-err`} className={errCls}>
                {errors.phone}
              </p>
            )}
          </div>

          {full && (
            <div>
              <label htmlFor={`${uid}-email`} className={labelCls}>
                Email Address{req}
              </label>
              <input
                id={`${uid}-email`}
                type="email"
                inputMode="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@example.com"
                className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${uid}-email-err` : undefined}
              />
              {errors.email && (
                <p id={`${uid}-email-err`} className={errCls}>
                  {errors.email}
                </p>
              )}
            </div>
          )}

          <div>
            <label htmlFor={`${uid}-service`} className={labelCls}>
              Service Needed{req}
            </label>
            <select
              id={`${uid}-service`}
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              className={`${fieldBase} ${errors.service ? fieldErr : fieldOk} cursor-pointer`}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? `${uid}-service-err` : undefined}
            >
              <option value="" disabled>
                Select a service…
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && (
              <p id={`${uid}-service-err`} className={errCls}>
                {errors.service}
              </p>
            )}
          </div>

          {full && (
            <>
              <fieldset>
                <legend className={labelCls}>Property Type{req}</legend>
                <div className="grid grid-cols-2 gap-3">
                  {PROPERTY_TYPES.map((t) => (
                    <label
                      key={t}
                      className={`flex h-12 cursor-pointer items-center justify-center rounded-lg border text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-rich/50 ${
                        values.propertyType === t
                          ? "border-primary bg-primary text-primary-foreground"
                          : errors.propertyType
                            ? "border-destructive bg-white text-foreground"
                            : "border-border bg-white text-foreground hover:border-gold-rich"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`${uid}-property`}
                        value={t}
                        checked={values.propertyType === t}
                        onChange={() => update("propertyType", t)}
                        className="sr-only"
                      />
                      {t}
                    </label>
                  ))}
                </div>
                {errors.propertyType && <p className={errCls}>{errors.propertyType}</p>}
              </fieldset>

              <div>
                <label htmlFor={`${uid}-location`} className={labelCls}>
                  Project Location
                </label>
                <input
                  id={`${uid}-location`}
                  type="text"
                  autoComplete="address-level2"
                  value={values.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="City or town"
                  className={`${fieldBase} ${fieldOk}`}
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor={`${uid}-details`} className={labelCls}>
              Project Details
            </label>
            <textarea
              id={`${uid}-details`}
              rows={full ? 4 : 3}
              value={values.details}
              onChange={(e) => update("details", e.target.value)}
              placeholder="Tell us about the property, what you need done, and any timing you have in mind."
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-gold-rich focus:outline-none focus:ring-2 focus:ring-gold-rich/40"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className={ctaButton({ variant: "solid", size: "lg" }) + " w-full"}
          >
            {status === "submitting" ? "Sending…" : "Request an Estimate"}
          </button>

          {status === "error" && (
            <p role="alert" className="text-center text-sm font-medium text-destructive">
              We couldn't send your request. Please try again or call us at{" "}
              <a href={BUSINESS_PHONE_TEL} className="underline">
                {BUSINESS_PHONE}
              </a>
              .
            </p>
          )}
        </form>
      )}
    </div>
  );
}
