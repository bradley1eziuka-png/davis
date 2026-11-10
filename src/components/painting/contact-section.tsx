import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  ESTIMATE_HREF,
  LOCATION_LABEL,
} from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// Homepage "Contact" block: contact details plus a path to the full estimate
// form on /contact. (The quick form lives in the hero.)
export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk About Your Project"
          description="Share a few details about your project and we'll help you take the next step with confidence."
        />

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-secondary/50 p-6 text-left shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] sm:p-8">
          <a
            href={BUSINESS_PHONE_TEL}
            className="flex items-center justify-center gap-3 font-display text-2xl font-semibold tracking-tight text-primary transition-colors hover:text-gold-ink sm:text-3xl"
          >
            <Phone className="size-6 text-gold-ink sm:size-7" />
            {BUSINESS_PHONE}
          </a>
          <ul className="mt-6 space-y-3 text-sm text-foreground/80">
            {BUSINESS_EMAIL && (
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold-ink" />
                <a href={`mailto:${BUSINESS_EMAIL}`} className="break-all hover:text-gold-ink">
                  {BUSINESS_EMAIL}
                </a>
              </li>
            )}
            {BUSINESS_HOURS.map((row) => (
              <li key={row.days} className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-gold-ink" />
                {row.days}: {row.hours}
              </li>
            ))}
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-gold-ink" />
              Based in {LOCATION_LABEL}. Serving Surrounding Communities
            </li>
          </ul>
        </div>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={ESTIMATE_HREF} className={ctaButton({ variant: "gold", size: "lg" })}>
            Request an Estimate
            <ArrowRight className="size-4" />
          </a>
          <a href={BUSINESS_PHONE_TEL} className={ctaButton({ variant: "solid", size: "lg" })}>
            <Phone className="size-4" />
            Call Davis Building Services
          </a>
        </div>
      </div>
    </section>
  );
}
