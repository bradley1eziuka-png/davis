import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/config";
import {
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  BUSINESS_SERVICE_AREAS,
  COPY,
  ESTIMATE_HREF,
  LOCATION_LABEL,
} from "@/lib/site-config";
import { SERVICE_LIST } from "@/lib/services-data";
import { Logo } from "./logo";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Request an Estimate", href: ESTIMATE_HREF },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const SOCIAL_LABELS: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  google: "Google",
  yelp: "Yelp",
  nextdoor: "Nextdoor",
  youtube: "YouTube",
};

const headingCls = "font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/55";
const linkCls = "text-sm text-white/75 transition-colors hover:text-accent";

export function Footer() {
  const year = new Date().getFullYear();
  // Only confirmed social profiles configured in site.config.json are shown.
  const socials = Object.entries(siteConfig.business.social).filter(([, url]) => url);

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr]">
          <div>
            <Logo onDark className="h-12 sm:h-14" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {COPY.footerBlurb}
            </p>
            <a
              href={BUSINESS_PHONE_TEL}
              className="mt-6 inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60 hover:bg-white/10"
            >
              <Phone className="size-4 text-accent" />
              {BUSINESS_PHONE}
            </a>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              {BUSINESS_EMAIL && (
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0 text-accent" />
                  {BUSINESS_EMAIL}
                </a>
              )}
              {BUSINESS_HOURS.map((row) => (
                <p key={row.days} className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>
                    {row.days}: {row.hours}
                  </span>
                </p>
              ))}
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Based in {LOCATION_LABEL}. Serving Surrounding Communities</span>
              </p>
              {socials.length > 0 && (
                <p className="flex flex-wrap gap-x-4 gap-y-1">
                  {socials.map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white/85 transition-colors hover:text-accent"
                    >
                      {SOCIAL_LABELS[key] ?? key}
                    </a>
                  ))}
                </p>
              )}
            </div>
          </div>

          <div>
            <h3 className={headingCls}>Explore</h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkCls}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingCls}>Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LIST.map((service) => (
                <li key={service.slug}>
                  <a href={service.path} className={linkCls}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingCls}>
              <a href="/#service-areas" className="transition-colors hover:text-accent">
                Service Areas
              </a>
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {BUSINESS_SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <a href="/#service-areas" className={linkCls}>
                    {area}, MI
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/60 sm:text-left">
            © {year} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/60">Family-Owned · Kalamazoo, Michigan</p>
        </div>
      </div>
    </footer>
  );
}
