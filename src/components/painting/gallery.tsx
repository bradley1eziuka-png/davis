import { useState } from "react";

import { cn } from "@/lib/utils";
import { GALLERY_PHOTOS, PHOTO_CATEGORIES, type PhotoCategory } from "@/lib/projects";
import { SectionHeading } from "./section-heading";
import { Photo } from "./photo";

// "Our Work": real project photos with simple category filters. No photo is
// labelled before/after because none has a clearly established sequence.
export function Gallery() {
  const [filter, setFilter] = useState<PhotoCategory | "all">("all");
  const items = GALLERY_PHOTOS.filter((p) => filter === "all" || p.category === filter);
  const tabs = [{ key: "all" as const, label: "All Projects" }, ...PHOTO_CATEGORIES];

  return (
    <section id="our-work" className="section-pad scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Work"
          title="See the Difference Quality Work Makes"
          description="Explore real maintenance, cleaning, and improvement projects completed by Davis Building Services."
        />

        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter projects"
        >
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setFilter(t.key)}
              aria-pressed={filter === t.key}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                filter === t.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/75 hover:border-gold-rich hover:text-primary",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-6 min-[480px]:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((item) => (
            <figure
              key={item.id}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_20px_-14px_rgba(0,0,0,0.18)]"
            >
              <Photo
                photo={item}
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/80 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="h-px w-6 bg-accent" />
                <span className="text-sm font-semibold tracking-wide">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
          Project photos from Davis Building Services
        </p>
      </div>
    </section>
  );
}
