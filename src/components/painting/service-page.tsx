import { ArrowRight, Check, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, ESTIMATE_HREF } from "@/lib/site-config";
import { SERVICES, type ServiceConfig } from "@/lib/services-data";
import { ServiceAreas } from "./service-areas";
import { Photo } from "./photo";
import { Logo } from "./logo";
import { SectionHeading } from "./section-heading";
import { ctaButton } from "./buttons";

// Generates a complete service page from a single ServiceConfig so all six
// service pages share one cohesive layout, voice, and visual system.
export function ServicePage({ service }: { service: ServiceConfig }) {
  const Icon = service.icon;
  const feature = service.gallery[0] ?? null;
  const related = service.related.map((k) => SERVICES[k]);
  return (
    <>
      {/* ── Service hero: charcoal with a subtle gold line motif (no stretched
           low-resolution photos) ──────────────────────────────────────── */}
      <section id="top" className="relative isolate overflow-hidden bg-navy">
        <svg
          aria-hidden
          className="absolute -right-24 top-10 -z-10 h-[34rem] w-[34rem] text-accent opacity-[0.07]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M12 38h16v50H12zM34 18h24v32L34 62zM44 52l22 12v24H44z" />
          <path d="M2 88h96" />
        </svg>
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-navy via-primary to-navy" />
        <div className="mx-auto w-full max-w-4xl px-4 pb-20 pt-36 text-center sm:px-6 sm:pb-24 sm:pt-40">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <Icon className="size-3.5 text-accent" />
            {service.eyebrow}
          </p>
          <h1 className="font-display text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            {service.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-xl">
            {service.shortDescription}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={ESTIMATE_HREF} className={ctaButton({ variant: "gold", size: "lg" })}>
              Request an Estimate
              <ArrowRight className="size-4" />
            </a>
            <a
              href={BUSINESS_PHONE_TEL}
              className={ctaButton({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="size-4" />
              {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── Explanation ──────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div
          className={`mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 ${feature ? "lg:grid-cols-2 lg:gap-16" : "max-w-3xl"}`}
        >
          <div>
            <SectionHeading align="left" eyebrow="The Service" title={service.explanation.title} />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.explanation.body}
            </p>
            <div className="mt-8">
              <a href={ESTIMATE_HREF} className={ctaButton({ variant: "solid", size: "md" })}>
                Request an Estimate
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
          {feature && (
            <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
              <Photo
                photo={feature}
                sizes="(min-width: 1024px) 560px, 90vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────────────── */}
      <section className="section-pad bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={service.eyebrow}
            title="Services We Offer"
            description="Here's what we can help with in this category. Not seeing exactly what you need? Describe your project and ask."
          />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-[0.95rem] font-semibold text-primary shadow-[0_2px_16px_-12px_rgba(0,0,0,0.14)]"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-accent">
                  <Check className="size-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Davis Building Services"
            title="Family-Owned, Experienced, Detail-Oriented"
            description="20 years of industry experience and a focus on practical solutions at competitive prices."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3 lg:gap-8">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm">
                  <Check className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery (only when real photos exist for this category) ──── */}
      {service.gallery.length > 0 && (
        <section className="section-pad bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Our Work"
              title="Project Photos"
              description="Real projects from Davis Building Services."
            />
            <div
              className={`mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8 ${service.gallery.length >= 3 ? "lg:grid-cols-3" : ""} ${service.gallery.length === 1 ? "mx-auto max-w-md sm:grid-cols-1" : ""}`}
            >
              {service.gallery.map((item) => (
                <figure
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
                >
                  <Photo
                    photo={item}
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/75 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="h-px w-6 bg-accent" />
                    <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-center">
              <a href="/#our-work" className="text-sm font-semibold text-gold-ink hover:underline">
                View Our Work
              </a>
            </p>
          </div>
        </section>
      )}

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple Path from Request to Finished Work"
            description="Three straightforward steps from your first message to a completed project."
          />
          <div className="relative mt-16">
            <div
              className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
              aria-hidden
            />
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
              {service.process.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <span className="flex size-14 items-center justify-center rounded-full border-2 border-gold-rich bg-background font-display text-xl font-semibold text-gold-ink shadow-sm">
                    {step.number}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Service areas ────────────────────────────────────────────── */}
      <ServiceAreas compact />

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Questions & Answers"
            title={`${service.title} FAQ`}
            description="Straightforward answers to help you feel ready to start your project."
          />
          <Accordion type="single" collapsible className="mt-12 space-y-4">
            {service.faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6 shadow-[0_2px_16px_-12px_rgba(0,0,0,0.14)]"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold tracking-tight text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Related services (internal links) ────────────────────────── */}
      <section className="border-t border-border bg-secondary/40 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-primary">
            Related Services
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {related.map((r) => (
              <a
                key={r.slug}
                href={r.path}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-gold-rich hover:text-gold-ink"
              >
                {r.title}
                <ArrowRight className="size-4" />
              </a>
            ))}
            <a
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-gold-rich hover:text-gold-ink"
            >
              All Services
            </a>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section id="estimate-cta" className="relative isolate overflow-hidden bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <div className="mb-8 flex justify-center">
            <Logo onDark className="h-14" />
          </div>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Discuss Your Project?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Tell us what you need and we'll follow up to talk through the details.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={ESTIMATE_HREF} className={ctaButton({ variant: "gold", size: "lg" })}>
              Request an Estimate
              <ArrowRight className="size-4" />
            </a>
            <a
              href={BUSINESS_PHONE_TEL}
              className={ctaButton({ variant: "outlineLight", size: "lg" })}
            >
              <Phone className="size-4" />
              Call Davis Building Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
