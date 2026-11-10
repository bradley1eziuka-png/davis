import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  ESTIMATE_HREF,
} from "@/lib/site-config";
import { SERVICE_LIST } from "@/lib/services-data";
import { ctaButton } from "./buttons";
import { Logo } from "./logo";

// Links after the Services dropdown (absolute paths so they resolve from any route).
const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "Contact", href: "/contact" },
];

const linkClass = "text-sm font-medium text-foreground/80 transition-colors hover:text-gold-ink";

// The header is always a light surface so the charcoal wordmark and gold
// building mark in the logo stay readable over any section beneath it.
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur-md transition-shadow duration-300",
          scrolled
            ? "border-border shadow-[0_8px_30px_-14px_rgba(0,0,0,0.25)]"
            : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="/" className="flex shrink-0 items-center" aria-label={`${BUSINESS_NAME}, home`}>
            <Logo priority />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            <a href="/" className={linkClass}>
              Home
            </a>

            {/* Services dropdown - desktop (hover + keyboard focus) */}
            <div className="group relative">
              <a
                href="/#services"
                className={cn(linkClass, "flex items-center gap-1.5")}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className="size-4 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
              </a>
              <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-border bg-card p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)]">
                  {SERVICE_LIST.map((service) => (
                    <a
                      key={service.slug}
                      href={service.path}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-gold-ink"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={BUSINESS_PHONE_TEL}
              className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold-ink"
            >
              <Phone className="size-4 text-gold-ink" />
              {BUSINESS_PHONE}
            </a>
            <a href={ESTIMATE_HREF} className={ctaButton({ variant: "gold", size: "sm" })}>
              Request an Estimate
            </a>
          </div>

          {/* Mobile: compact estimate CTA + menu button, always visible */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a href={ESTIMATE_HREF} className={ctaButton({ variant: "gold", size: "sm" })}>
              Estimate
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex size-11 items-center justify-center rounded-lg text-primary transition-colors hover:bg-secondary"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div
            className="absolute inset-0 bg-primary/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-background shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-border px-5">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-secondary"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
              aria-label="Mobile"
            >
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              >
                Home
              </a>

              <div>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "size-5 transition-transform duration-200",
                      servicesOpen && "rotate-180",
                    )}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                    {SERVICE_LIST.map((service) => (
                      <a
                        key={service.slug}
                        href={service.path}
                        onClick={() => {
                          setServicesOpen(false);
                          setOpen(false);
                        }}
                        className="block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-gold-ink"
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3.5 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="border-t border-border p-5">
              <a
                href={BUSINESS_PHONE_TEL}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary py-3.5 text-base font-semibold text-primary"
              >
                <Phone className="size-5 text-gold-ink" />
                Call {BUSINESS_PHONE}
              </a>
              <a
                href={ESTIMATE_HREF}
                onClick={() => setOpen(false)}
                className={cn(ctaButton({ variant: "gold", size: "md" }), "mt-3 w-full")}
              >
                Request an Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
