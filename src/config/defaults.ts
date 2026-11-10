// ───────────────────────────────────────────────────────────────────────────
// Default copy for Davis Building Services LLC. Every field can still be
// overridden in site.config.json → content. Only client-confirmed facts live
// here: no licenses, insurance, warranties, ratings, reviews or customer counts.
// ───────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONTENT = {
  hero: {
    eyebrow: "Family-Owned · Kalamazoo, MI",
    headline: "Commercial & Residential Property Services in Kalamazoo",
    tagline: "Cleaning, Maintenance & Improvements, All in One Place",
    subheadline:
      "From property cleaning and power washing to repairs, painting, and exterior improvements, Davis Building Services LLC helps homeowners and businesses keep their properties looking their best. Family-owned with 20 years of industry experience.",
  },
  about: {
    eyebrow: "About Davis Building Services",
    title: "Family-Owned. Experienced. Focused on Quality.",
    body: "Davis Building Services LLC is a family-owned property maintenance and cleaning company based in Kalamazoo, Michigan.\n\nWith 20 years of industry experience and nearly four years operating the business, the team provides a wide range of residential and commercial services, from routine cleaning and exterior maintenance to repairs and property improvements.\n\nWe believe in knowledgeable service, attention to detail, and giving customers practical solutions at competitive prices.\n\nWhether you need a property cleaned, maintained, repaired, or improved, Davis Building Services is ready to discuss your project.",
    badgeTitle: "20 Years",
    badgeText: "of industry experience",
  },
  faqs: [
    {
      q: "What services does Davis Building Services offer?",
      a: "We provide residential and commercial cleaning, pressure washing and exterior cleaning, property maintenance and repairs, painting and property improvements, asphalt, roofing and exterior maintenance, and junk removal and specialty services. If your project doesn't fit neatly into one category, ask us about it.",
    },
    {
      q: "Do you work on both residential and commercial properties?",
      a: "Yes. We serve homeowners as well as businesses and other commercial properties throughout Kalamazoo and surrounding Michigan communities.",
    },
    {
      q: "How do I request an estimate?",
      a: "Use the request form on this site or call (269) 352-6514. Tell us about the property, the service you need, and where the project is located, and we'll follow up to discuss next steps.",
    },
    {
      q: "What areas do you serve?",
      a: "We're based in Kalamazoo and serve Portage, Schoolcraft, Battle Creek, Comstock, Three Rivers, Allegan, Grand Rapids, Holland, Grandville, Hudsonville, Grand Haven, South Haven, Benton Harbor, Lansing, and nearby communities. If you're close by but don't see your town, just ask.",
    },
    {
      q: "How long has Davis Building Services been in business?",
      a: "The business has been operating for nearly four years, and our team brings 20 years of industry experience to every project. We're family-owned and operated.",
    },
  ],
  footerBlurb:
    "Family-owned cleaning, property maintenance, repair, and improvement services for homes and businesses in Kalamazoo and surrounding Michigan communities.",
  finalCta: {
    title: "Ready to Discuss Your Project?",
    body: "Whether you need a property cleaned, maintained, repaired, or improved, the first step is a conversation.",
  },
} as const;

// Hero / About / social-preview images (served from /public).
export const DEFAULT_IMAGES = {
  hero: "/images/projects/garage-exterior-roof.webp",
  about: "/images/projects/new-deck-stairs.webp",
  ogImage: "/images/og-image.jpg",
} as const;
