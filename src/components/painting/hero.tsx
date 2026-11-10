import { ArrowRight, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { ctaButton } from "./buttons";
import { EstimateFormCard } from "./estimate-form";

// Two-column hero: headline + description + CTAs on the left, quick estimate
// form card on the right. Stacks on mobile (headline → CTAs → form).
// The background is a real project photo under a dark charcoal overlay; the
// overlay keeps text readable and hides the photo's modest native resolution.
export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-navy">
        <img
          src={IMAGES.hero}
          alt="Detached garage with a new shingled roof and exterior work underway beside a lakeside yard in Michigan"
          width={1000}
          height={750}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/80 via-navy/62 to-navy/55" />
        <div className="absolute inset-0 bg-linear-to-r from-navy/88 via-navy/50 to-navy/10" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {COPY.hero.eyebrow}
            </p>

            <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white [word-break:break-word] sm:text-5xl lg:text-[3.4rem]">
              {COPY.hero.headline}
            </h1>

            <p className="mt-4 font-display text-xl font-medium tracking-tight text-accent sm:text-2xl">
              {COPY.hero.tagline}
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
              {COPY.hero.subheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#estimate" className={ctaButton({ variant: "gold", size: "lg" })}>
                Request an Estimate
                <ArrowRight className="size-4" />
              </a>
              <a href="#services" className={ctaButton({ variant: "outlineLight", size: "lg" })}>
                Explore Our Services
              </a>
            </div>

            <p className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-white/70">
              <Phone className="size-4 text-accent" />
              <span>Prefer to call?</span>
              <a
                href={BUSINESS_PHONE_TEL}
                className="font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {BUSINESS_PHONE}
              </a>
            </p>
          </div>

          <div className="lg:pl-4">
            <EstimateFormCard id="estimate" variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
