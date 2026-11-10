import { ArrowRight, Phone } from "lucide-react";

import { BUSINESS_PHONE, BUSINESS_PHONE_TEL, COPY, ESTIMATE_HREF } from "@/lib/site-config";
import { IMAGES } from "@/lib/site-images";
import { ctaButton } from "./buttons";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          alt=""
          width={1000}
          height={750}
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/90 to-navy/80" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center sm:py-24 lg:py-28">
        <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {COPY.finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75">
          {COPY.finalCta.body}
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

        <p className="mt-8 text-sm font-medium text-white/60">
          Or call us at{" "}
          <a
            href={BUSINESS_PHONE_TEL}
            className="font-semibold text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {BUSINESS_PHONE}
          </a>
        </p>
      </div>
    </section>
  );
}
