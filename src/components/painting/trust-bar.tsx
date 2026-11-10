import { Award, Building2, Home, MapPin } from "lucide-react";

// Four confirmed, factual trust points (no invented ratings or counts).
const ITEMS = [
  { icon: Award, title: "20 Years", text: "of Experience" },
  { icon: Home, title: "Family-Owned", text: "& Operated" },
  { icon: Building2, title: "Residential", text: "& Commercial" },
  { icon: MapPin, title: "Serving Kalamazoo", text: "& Beyond" },
];

export function TrustBar() {
  return (
    <section aria-label="Why customers choose us" className="border-b border-border bg-card">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center gap-3.5">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
              <Icon className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[0.95rem] font-bold text-primary sm:text-base">
                {title}
              </span>
              <span className="block text-sm text-muted-foreground">{text}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
