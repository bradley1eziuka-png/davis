import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SiteLayout } from "@/components/painting/site-layout";
import { EstimateFormCard } from "@/components/painting/estimate-form";
import { ServiceAreas } from "@/components/painting/service-areas";
import {
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  LOCATION_LABEL,
} from "@/lib/site-config";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: `Request an Estimate | Contact ${BUSINESS_NAME}`,
      description:
        "Request an estimate from Davis Building Services LLC in Kalamazoo, MI for cleaning, power washing, maintenance, repairs, or improvements. Call (269) 352-6514.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-navy pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Request an Estimate in Kalamazoo, MI
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Tell us about your property and what you need done. We'll follow up to discuss your
            project.
          </p>
        </div>
      </section>

      <section className="bg-background pb-20">
        <div className="mx-auto -mt-8 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <EstimateFormCard id="estimate" variant="full" />

          <aside className="lg:pt-14">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-primary">
              Prefer to Talk It Through?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Call or email Davis Building Services directly. We're happy to answer questions about
              your project.
            </p>
            <ul className="mt-6 space-y-4 text-[0.95rem] text-foreground/85">
              <li className="flex items-center gap-3">
                <Phone className="size-5 shrink-0 text-gold-ink" />
                <a
                  href={BUSINESS_PHONE_TEL}
                  className="font-display text-xl font-semibold text-primary hover:text-gold-ink"
                >
                  {BUSINESS_PHONE}
                </a>
              </li>
              {BUSINESS_EMAIL && (
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-gold-ink" />
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="break-all hover:text-gold-ink">
                    {BUSINESS_EMAIL}
                  </a>
                </li>
              )}
              {BUSINESS_HOURS.map((row) => (
                <li key={row.days} className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0 text-gold-ink" />
                  {row.days}: {row.hours}
                </li>
              ))}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold-ink" />
                Based in {LOCATION_LABEL}. Serving Surrounding Communities
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <ServiceAreas compact />
    </SiteLayout>
  );
}
