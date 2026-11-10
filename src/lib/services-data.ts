// ───────────────────────────────────────────────────────────────────────────
// Service content for Davis Building Services LLC.
//
// Six service categories drive the homepage grid, header dropdown, footer,
// estimate-form dropdown, sitemap and the six /services/* pages. Copy sticks to
// the scope the client supplied: no licenses, insurance, warranties, response
// times, pricing promises or project claims beyond the listed services.
//
// To hide a category, remove its key from site.config.json → services.enabled
// (its page then 404s and it leaves nav, footer, homepage and the form).
// ───────────────────────────────────────────────────────────────────────────

import {
  Hammer,
  PaintRoller,
  SprayCan,
  Sparkles,
  Truck,
  Building2,
  type LucideIcon,
} from "lucide-react";

import { siteConfig, type ServiceKey } from "@/config";
import { PHOTOS, type Photo } from "./projects";

export type ServiceStep = { number: string; title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { q: string; a: string };

export interface ServiceConfig {
  key: ServiceKey;
  slug: string;
  path: string;
  /** Card, nav and form label. */
  title: string;
  eyebrow: string;
  /** The page's single H1 (natural local relevance). */
  h1: string;
  /** Short card / hero description. */
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  explanation: { title: string; body: string };
  /** Services included, in the client's own wording. */
  includes: string[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faqs: ServiceFaq[];
  /** Real project photos for this category. Empty = no photo section. */
  gallery: Photo[];
  /** Image on the homepage card; null = branded icon panel. */
  cardPhoto: Photo | null;
  icon: LucideIcon;
  related: ServiceKey[];
}

const PROCESS: ServiceStep[] = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    description: "Share what you need done, the type of property, and where it's located.",
  },
  {
    number: "02",
    title: "Discuss the Details",
    description: "We'll talk through the scope, answer your questions, and agree on next steps.",
  },
  {
    number: "03",
    title: "Get the Work Done",
    description: "With a clear plan in place, the work moves forward with attention to detail.",
  },
];

const BASE = {
  cleaning: {
    key: "cleaning",
    slug: "commercial-residential-cleaning",
    path: "/services/commercial-residential-cleaning",
    title: "Commercial & Residential Cleaning",
    eyebrow: "Cleaning Services",
    h1: "Commercial & Residential Cleaning in Kalamazoo, MI",
    shortDescription:
      "Dependable cleaning for homes, offices, and commercial properties, plus construction cleanup and everyday property upkeep.",
    seoTitle: "Commercial & Residential Cleaning Kalamazoo, MI | Davis Building Services",
    seoDescription:
      "Residential, commercial, and office cleaning, construction cleanup, and property upkeep in Kalamazoo, MI and nearby areas. Request an estimate.",
    explanation: {
      title: "Clean Properties, Handled with Care",
      body: "A clean property makes a good first impression and a more comfortable place to live or work. Davis Building Services LLC cleans homes, offices, and commercial spaces, and can help clear the mess left behind after construction work. Because we also handle maintenance and repairs, we understand how a property is put together and where the details matter. Tell us about your space and what you need, and we'll talk through the right approach.",
    },
    includes: [
      "Residential cleaning",
      "Commercial cleaning",
      "Office cleaning",
      "Property cleaning",
      "Construction cleanup",
      "General property upkeep",
    ],
    benefits: [
      {
        title: "Homes and Businesses",
        description:
          "One company for residential and commercial cleaning, so you don't have to coordinate multiple providers.",
      },
      {
        title: "Detail-Oriented Work",
        description:
          "We pay attention to the small things that make a space feel genuinely clean and cared for.",
      },
      {
        title: "Beyond Cleaning",
        description:
          "If you also need repairs, exterior cleaning, or maintenance, it can all be discussed in one conversation.",
      },
    ],
    process: PROCESS,
    faqs: [
      {
        q: "Do you clean both homes and businesses?",
        a: "Yes. We provide residential cleaning as well as commercial and office cleaning in Kalamazoo and surrounding communities.",
      },
      {
        q: "Can you help with cleanup after construction work?",
        a: "Construction cleanup is one of the services we offer. Tell us about the project and the property, and we'll discuss what's involved.",
      },
      {
        q: "How do I get a cleaning estimate?",
        a: "Send us a request or call (269) 352-6514 with the type of property, its location, and what you'd like cleaned. We'll follow up to talk through the details.",
      },
    ],
    gallery: [PHOTOS.interiorFloor],
    cardPhoto: PHOTOS.interiorFloor,
    icon: Sparkles,
    related: ["pressureWashing", "maintenance"],
  },

  pressureWashing: {
    key: "pressureWashing",
    slug: "pressure-washing",
    path: "/services/pressure-washing",
    title: "Pressure Washing & Exterior Cleaning",
    eyebrow: "Pressure Washing",
    h1: "Pressure Washing & Exterior Cleaning in Kalamazoo, MI",
    shortDescription:
      "Power washing and exterior cleaning for siding, windows, decks, fences, and gutters to help your property look its best.",
    seoTitle: "Pressure Washing & Exterior Cleaning Kalamazoo, MI | Davis Building Services",
    seoDescription:
      "Power washing, siding, deck, and fence cleaning, window and gutter cleaning in Kalamazoo, MI and surrounding areas. Request an estimate.",
    explanation: {
      title: "Bring Exterior Surfaces Back to Life",
      body: "Dirt, algae, and weathering build up on siding, decks, fences, and other outdoor surfaces over time. Power washing and careful exterior cleaning can make a property look noticeably fresher. Davis Building Services LLC cleans a range of exterior surfaces for homes and commercial properties, and we can talk with you about the best approach for what you have.",
    },
    includes: [
      "Power washing",
      "Exterior surface cleaning",
      "Window cleaning",
      "Deck cleaning",
      "Fence cleaning",
      "Gutter cleaning",
    ],
    benefits: [
      {
        title: "A Fresher Exterior",
        description:
          "Removing built-up grime and discoloration helps siding, decks, and fences look cared for again.",
      },
      {
        title: "Right Approach per Surface",
        description:
          "Different materials call for different methods. We'll talk through what suits your siding, wood, or other surfaces.",
      },
      {
        title: "Ready for What's Next",
        description:
          "Clean surfaces are a good starting point if you're planning to stain, paint, or make repairs.",
      },
    ],
    process: PROCESS,
    faqs: [
      {
        q: "What can be pressure washed?",
        a: "Siding, decks, and fences are common requests, along with other exterior surfaces. Tell us what you'd like cleaned and we'll discuss the best method.",
      },
      {
        q: "Do you clean windows and gutters too?",
        a: "Yes. Window cleaning and gutter cleaning are part of our exterior cleaning services.",
      },
      {
        q: "Can cleaning be combined with staining or painting?",
        a: "Often, yes. Cleaning a deck, fence, or exterior before staining or painting is common, and we can discuss both in one conversation.",
      },
    ],
    gallery: [PHOTOS.sidingCream, PHOTOS.sidingGreen, PHOTOS.garageDoor],
    cardPhoto: PHOTOS.sidingCream,
    icon: SprayCan,
    related: ["painting", "cleaning"],
  },

  maintenance: {
    key: "maintenance",
    slug: "property-maintenance",
    path: "/services/property-maintenance",
    title: "Property Maintenance & Repairs",
    eyebrow: "Maintenance & Repairs",
    h1: "Property Maintenance & Repairs in Kalamazoo, MI",
    shortDescription:
      "Handyman work, minor repairs, custom installations, and home improvements to keep your property in good shape.",
    seoTitle: "Property Maintenance & Handyman Services Kalamazoo, MI | Davis Building Services",
    seoDescription:
      "Handyman work, property maintenance, minor repairs, custom installations, and home improvements in Kalamazoo, MI and nearby communities. Request an estimate.",
    explanation: {
      title: "Keep Your Property in Good Shape",
      body: "Small problems tend to grow when they're ignored, and improvement projects are easier with someone who knows how to do the work. Davis Building Services LLC handles general handyman tasks, repairs, installations, and improvements for homeowners and businesses. With 20 years of industry experience behind the work, we focus on practical solutions and clear communication.",
    },
    includes: [
      "General handyman work",
      "Property maintenance",
      "Minor repairs",
      "Custom installations",
      "Home improvements",
      "Property preservation",
    ],
    benefits: [
      {
        title: "20 Years of Experience",
        description:
          "Industry experience means we know how to approach a wide range of repairs and improvements.",
      },
      {
        title: "Practical Solutions",
        description:
          "We aim for sensible, lasting fixes at competitive prices rather than unnecessary extras.",
      },
      {
        title: "One Call for Many Tasks",
        description:
          "Repairs, installations, and upkeep can often be handled together, saving you time.",
      },
    ],
    process: PROCESS,
    faqs: [
      {
        q: "What kinds of jobs count as handyman work?",
        a: "Maintenance tasks, minor repairs, installations, and small improvement projects are common requests. If you're not sure whether something fits, describe it and we'll let you know.",
      },
      {
        q: "Can you take on custom projects?",
        a: "We can discuss custom installations and improvements. Share the details of what you have in mind and we'll talk through what's possible.",
      },
      {
        q: "Do you work on commercial properties?",
        a: "Yes. Property maintenance and repairs are available for both residential and commercial properties.",
      },
    ],
    gallery: [PHOTOS.newDeckStairs, PHOTOS.newDeckRailing, PHOTOS.newDeckSlider],
    cardPhoto: PHOTOS.newDeckStairs,
    icon: Hammer,
    related: ["painting", "exterior"],
  },

  painting: {
    key: "painting",
    slug: "painting-improvements",
    path: "/services/painting-improvements",
    title: "Painting & Property Improvements",
    eyebrow: "Painting & Improvements",
    h1: "Painting & Property Improvements in Kalamazoo, MI",
    shortDescription:
      "Interior and exterior painting, deck and fence staining, and related drywall and flooring work to refresh your property.",
    seoTitle: "Painting & Staining Services Kalamazoo, MI | Davis Building Services",
    seoDescription:
      "Interior and exterior painting, deck and fence staining, plus drywall and flooring-related work in Kalamazoo, MI and surrounding areas. Request an estimate.",
    explanation: {
      title: "A Fresh Finish for Your Property",
      body: "Paint and stain change how a property looks and help protect the surfaces underneath. Davis Building Services LLC paints and stains interiors and exteriors, including decks and fences, and can help with drywall-related and flooring-related work as part of a larger improvement project. Take a look at the project photos below, then tell us what you have in mind.",
    },
    includes: [
      "Interior painting",
      "Exterior painting",
      "Staining",
      "Deck and fence staining",
      "Drywall-related work",
      "Flooring-related work",
    ],
    benefits: [
      {
        title: "Interior and Exterior",
        description:
          "From a single room to outdoor wood surfaces, painting and staining can be handled by one team.",
      },
      {
        title: "Careful Preparation",
        description:
          "Attention to detail starts before the first coat, because good prep helps a finish look its best.",
      },
      {
        title: "Part of a Bigger Plan",
        description:
          "Drywall and flooring-related work can be discussed alongside painting if your project calls for it.",
      },
    ],
    process: PROCESS,
    faqs: [
      {
        q: "Do you stain decks and fences?",
        a: "Yes. Deck and fence staining is part of our painting and improvement services, and you can see examples of stained decks in our project photos.",
      },
      {
        q: "Can you help with drywall or flooring as well?",
        a: "We offer drywall-related and flooring-related work. Describe your project and we'll discuss what's involved.",
      },
      {
        q: "Do you paint commercial spaces?",
        a: "Painting is available for both residential and commercial properties. Tell us about the space when you request an estimate.",
      },
    ],
    gallery: [
      PHOTOS.stainedRailing,
      PHOTOS.stainedDeckBench,
      PHOTOS.paintedSteps,
      PHOTOS.stainedDeckBrown,
    ],
    cardPhoto: PHOTOS.stainedDeckBench,
    icon: PaintRoller,
    related: ["pressureWashing", "maintenance"],
  },

  exterior: {
    key: "exterior",
    slug: "exterior-maintenance",
    path: "/services/exterior-maintenance",
    title: "Asphalt, Roofing & Exterior Maintenance",
    eyebrow: "Exterior Maintenance",
    h1: "Asphalt, Roofing & Exterior Maintenance in Kalamazoo, MI",
    shortDescription:
      "Blacktop sealing, parking lot striping, roofing and roof coating, and yard maintenance for homes and commercial properties.",
    seoTitle: "Blacktop, Roofing & Exterior Maintenance Kalamazoo, MI | Davis Building Services",
    seoDescription:
      "Blacktop maintenance and sealing, parking lot striping, roofing, roof coating, and yard maintenance in Kalamazoo, MI and nearby. Request an estimate.",
    explanation: {
      title: "Look After the Outside of Your Property",
      body: "The exterior of a property takes the most wear, from weather on roofs to traffic on parking areas and driveways. Davis Building Services LLC offers blacktop maintenance and sealing, parking lot striping, roofing services, roof coating, and yard maintenance. Whether you manage a commercial lot or look after your own home, tell us what needs attention and we'll discuss your options.",
    },
    includes: [
      "Blacktop maintenance",
      "Blacktop sealing",
      "Parking lot striping",
      "Roofing services",
      "Roof coating",
      "Yard maintenance",
    ],
    benefits: [
      {
        title: "Residential and Commercial",
        description:
          "From a home driveway to a business parking lot, exterior work is available for both property types.",
      },
      {
        title: "Experience You Can Talk To",
        description:
          "With 20 years of industry experience, we can walk you through what your property needs.",
      },
      {
        title: "Fewer Contractors to Juggle",
        description:
          "Pavement, roof, and yard needs can be discussed together instead of with separate companies.",
      },
    ],
    process: PROCESS,
    faqs: [
      {
        q: "What does blacktop maintenance include?",
        a: "We offer blacktop maintenance, blacktop sealing, and parking lot striping. Tell us about the surface and what you'd like done, and we'll discuss the details.",
      },
      {
        q: "Do you handle roofing?",
        a: "Roofing services and roof coating are part of our offerings. Describe your roof and what you're looking for, and we'll talk it through.",
      },
      {
        q: "Can you maintain my yard as well?",
        a: "Yard maintenance is available. Share the size and type of property and what you'd like done when you request an estimate.",
      },
    ],
    gallery: [PHOTOS.garageRoof, PHOTOS.garageFraming, PHOTOS.garageSiding],
    cardPhoto: PHOTOS.garageFraming,
    icon: Building2,
    related: ["maintenance", "pressureWashing"],
  },

  specialty: {
    key: "specialty",
    slug: "junk-removal-specialty",
    path: "/services/junk-removal-specialty",
    title: "Junk Removal & Specialty Services",
    eyebrow: "Specialty Services",
    h1: "Junk Removal & Specialty Services in Kalamazoo, MI",
    shortDescription:
      "Junk removal, moving, delivery, demolition, vehicle and fleet detailing, and custom projects, all from one local team.",
    seoTitle: "Junk Removal & Detailing Services Kalamazoo, MI | Davis Building Services",
    seoDescription:
      "Junk removal, moving, delivery, demolition, auto, RV, boat, and aviation detailing, fleet washing, and custom projects in Kalamazoo, MI. Request an estimate.",
    explanation: {
      title: "Specialty Help When You Need It",
      body: "Some jobs don't fit into a standard category. Davis Building Services LLC can help with junk removal, moving, delivery, and demolition, as well as detailing for vehicles, RVs, boats, aircraft, and fleets. If you have a one-off or custom project, describe it and we'll let you know whether we can help.",
    },
    includes: [
      "Junk removal",
      "Moving services",
      "Delivery",
      "Demolition",
      "Auto detailing",
      "RV detailing",
      "Boat detailing",
      "Aviation detailing",
      "Fleet washing and detailing",
      "Custom projects",
    ],
    benefits: [
      {
        title: "A Wide Range, One Team",
        description: "Hauling, demolition, and detailing handled by a single family-owned company.",
      },
      {
        title: "Detailing for More Than Cars",
        description:
          "Auto, RV, boat, and aviation detailing, plus fleet washing and detailing for businesses.",
      },
      {
        title: "Open to Custom Requests",
        description: "Have something unusual in mind? Tell us about it and we'll talk it through.",
      },
    ],
    process: PROCESS,
    faqs: [
      {
        q: "What kinds of detailing do you offer?",
        a: "We offer auto, RV, boat, and aviation detailing, as well as fleet washing and detailing. Let us know what you have and what you'd like done.",
      },
      {
        q: "Can you remove junk and also do demolition?",
        a: "Junk removal and demolition are both services we offer. Describe the job and the property, and we'll discuss next steps.",
      },
      {
        q: "What if my project isn't on your list?",
        a: "Choose “Other / Custom Project” in the estimate form and describe what you need. We'll let you know whether it's something we can help with.",
      },
    ],
    gallery: [],
    cardPhoto: null,
    icon: Truck,
    related: ["cleaning", "exterior"],
  },
} satisfies Record<ServiceKey, ServiceConfig>;

// Apply optional title/description overrides from site.config.json.
export const SERVICES = Object.fromEntries(
  Object.entries(BASE).map(([key, base]) => {
    const o = siteConfig.services.overrides[key as ServiceKey] ?? {};
    return [
      key,
      {
        ...base,
        ...(o.title ? { title: o.title } : {}),
        ...(o.shortDescription ? { shortDescription: o.shortDescription } : {}),
      },
    ];
  }),
) as Record<ServiceKey, ServiceConfig>;

export function isServiceEnabled(key: ServiceKey) {
  return siteConfig.services.enabled.includes(key);
}

// Ordered list for the header dropdown, footer, homepage grid and form.
export const SERVICE_LIST: ServiceConfig[] = siteConfig.services.enabled.map((k) => SERVICES[k]);
