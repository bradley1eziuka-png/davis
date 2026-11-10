import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { BUSINESS_EMAIL, BUSINESS_NAME, BUSINESS_PHONE } from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      title: `Privacy Policy | ${BUSINESS_NAME}`,
      description: `How ${BUSINESS_NAME} handles the information you share when you contact us or request an estimate.`,
      path: "/privacy-policy",
    }),
  component: PrivacyPage,
});

const h2 = "mt-10 font-display text-xl font-semibold tracking-tight text-primary";
const p = "mt-3 text-base leading-relaxed text-muted-foreground";

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="bg-navy pb-14 pt-32 sm:pt-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </section>
      <section className="bg-background py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className={p}>
            This page explains how {BUSINESS_NAME} handles information you share through this
            website.
          </p>

          <h2 className={h2}>Information we collect</h2>
          <p className={p}>
            When you submit an estimate request, we receive the details you enter: your name, phone
            number, email address, the service you need, property type, project location, and
            project description. If you call or email us, we receive whatever you choose to share.
          </p>

          <h2 className={h2}>How we use it</h2>
          <p className={p}>
            We use this information only to respond to your inquiry, discuss your project, and
            provide estimates and services. We do not sell your personal information.
          </p>

          <h2 className={h2}>Sharing</h2>
          <p className={p}>
            Form submissions are delivered through a third-party form service so we can receive
            them. We don't share your information with others except as needed to operate this
            website or as required by law.
          </p>

          <h2 className={h2}>Contact us</h2>
          <p className={p}>
            Questions about this policy? Call {BUSINESS_PHONE}
            {BUSINESS_EMAIL ? ` or email ${BUSINESS_EMAIL}` : ""}.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
