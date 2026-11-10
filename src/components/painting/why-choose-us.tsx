import { Award, Gem, HandCoins, Users } from "lucide-react";

import { SectionHeading } from "./section-heading";

const REASONS = [
  {
    icon: Award,
    title: "20 Years of Experience",
    description:
      "Two decades in the industry means knowledgeable service and a practical understanding of how properties work.",
  },
  {
    icon: Users,
    title: "Family-Owned & Operated",
    description:
      "A local family business that treats your home or property with the care we'd want for our own.",
  },
  {
    icon: HandCoins,
    title: "Competitive Pricing",
    description:
      "Practical solutions at competitive prices, discussed openly so you know what to expect.",
  },
  {
    icon: Gem,
    title: "Detail-Oriented Workmanship",
    description:
      "From cleaning to repairs to finishing work, we pay attention to the details that make a difference.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-pad scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Dependable Service for Homes and Businesses"
          description="Experience, honest communication, and attention to detail on every project, big or small."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_20px_-14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_45px_-22px_rgba(0,0,0,0.25)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-accent shadow-sm transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-primary">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
