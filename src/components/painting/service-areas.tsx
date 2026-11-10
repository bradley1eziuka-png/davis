import { MapPin } from "lucide-react";

import { BUSINESS_SERVICE_AREAS, LOCATION_LABEL } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";

// Client-provided communities only. No service radius or per-city pages.
export function ServiceAreas({ compact = false }: { compact?: boolean }) {
  if (BUSINESS_SERVICE_AREAS.length === 0) return null;
  return (
    <section
      id="service-areas"
      className={`${compact ? "py-14 sm:py-16" : "section-pad"} scroll-mt-24 bg-secondary/40`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly Serving Kalamazoo & Communities Across Southwest Michigan"
          description={`Based in ${LOCATION_LABEL}, Davis Building Services also works with homeowners and businesses in these surrounding communities. Don't see yours? Just ask.`}
        />
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {BUSINESS_SERVICE_AREAS.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary shadow-[0_2px_12px_-8px_rgba(0,0,0,0.15)]"
            >
              <MapPin className="size-3.5 text-gold-ink" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
