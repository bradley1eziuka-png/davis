import { ArrowRight, Check } from "lucide-react";

import { SERVICE_LIST, type ServiceConfig } from "@/lib/services-data";
import { SectionHeading } from "./section-heading";
import { Photo } from "./photo";

const PREVIEW_COUNT = 4;

// Card media: a real project photo when the client supplied one for the
// category, otherwise a branded icon panel (never mismatched stock imagery).
export function ServiceCardMedia({ service }: { service: ServiceConfig }) {
  const Icon = service.icon;
  if (service.cardPhoto) {
    return (
      <Photo
        photo={service.cardPhoto}
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-navy">
      <span className="flex size-20 items-center justify-center rounded-2xl border border-accent/40 text-accent transition-transform duration-500 group-hover:scale-110">
        <Icon className="size-10" strokeWidth={1.5} />
      </span>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Cleaning, Maintenance & Improvements in One Place"
          description="Six categories of residential and commercial services, so you can handle more of your property with one local, family-owned company."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICE_LIST.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ServiceCardMedia service={service} />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-xl font-semibold tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-foreground/80">
                  {service.includes.slice(0, PREVIEW_COUNT).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold-ink" />
                      {item}
                    </li>
                  ))}
                  {service.includes.length > PREVIEW_COUNT && (
                    <li className="pl-6 text-muted-foreground">
                      + {service.includes.length - PREVIEW_COUNT} more
                    </li>
                  )}
                </ul>
                <a
                  href={service.path}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-ink transition-all hover:gap-2.5"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
