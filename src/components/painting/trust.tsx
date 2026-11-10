import { ArrowRight } from "lucide-react";

import { COPY, ESTIMATE_HREF, OWNER_NAME } from "@/lib/site-config";
import { PHOTOS } from "@/lib/projects";
import { SectionHeading } from "./section-heading";
import { Photo } from "./photo";
import { ctaButton } from "./buttons";

// About section (#about): real project photo, owner mention, factual copy.
export function Trust() {
  const paragraphs = COPY.about.body.split("\n\n");
  return (
    <section id="about" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            <Photo photo={PHOTOS.stainedDeckBrown} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 right-3 rounded-2xl bg-primary px-5 py-4 shadow-xl sm:-right-3 sm:px-6 sm:py-5">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {COPY.about.badgeTitle}
            </p>
            <p className="mt-1 text-sm text-white/80">{COPY.about.badgeText}</p>
          </div>
        </div>

        <div>
          <SectionHeading align="left" eyebrow={COPY.about.eyebrow} title={COPY.about.title} />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {paragraphs.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-primary">
            {OWNER_NAME} <span className="font-normal text-muted-foreground">· Owner</span>
          </p>
          <div className="mt-6">
            <a href={ESTIMATE_HREF} className={ctaButton({ variant: "solid", size: "md" })}>
              Request an Estimate
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
