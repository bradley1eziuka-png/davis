// SEO helpers: per-page head tags (title, description, canonical, Open Graph,
// Twitter) and LocalBusiness structured data, all driven by site.config.json.
import { siteConfig } from "@/config";
import { BUSINESS_NAME, BUSINESS_PHONE, LOCATION_LABEL, SITE_URL } from "./site-config";
import { IMAGES } from "./site-images";
import { SERVICE_LIST, type ServiceConfig } from "./services-data";

const { business, seo } = siteConfig;

function absolute(pathOrUrl: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return SITE_URL ? `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}` : pathOrUrl;
}

export const HOME_TITLE =
  seo.title ||
  `Property Maintenance & Cleaning${LOCATION_LABEL ? ` ${LOCATION_LABEL}` : ""} | ${BUSINESS_NAME}`;
export const HOME_DESCRIPTION =
  seo.description ||
  "Commercial and residential cleaning, power washing, property maintenance, and improvements. Request an estimate.";

export function pageHead({
  title,
  description,
  path,
  image,
  jsonLd,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: string;
}) {
  const ogImage = absolute(image || seo.ogImage || IMAGES.ogImage);
  const url = SITE_URL ? `${SITE_URL}${path === "/" ? "" : path}` : "";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      {
        property: "og:image:alt",
        content: `${BUSINESS_NAME}: property services in ${LOCATION_LABEL || "Michigan"}`,
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: BUSINESS_NAME },
      { property: "og:locale", content: seo.locale },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
    ...(jsonLd ? { scripts: [{ type: "application/ld+json", children: jsonLd }] } : {}),
  };
}

function hoursSpec() {
  // Client-confirmed hours: Monday–Sunday, 9:00 AM – 6:00 PM.
  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  };
}

// schema.org LocalBusiness (HomeAndConstructionBusiness). Only confirmed facts
// are emitted: no street address, ratings, reviews, or credentials.
export function localBusinessJsonLd() {
  const a = business.address;
  const hasAddress = Boolean(a.street || a.city || a.state || a.zip);
  const sameAs = Object.values(business.social).filter(Boolean);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_NAME,
    description: HOME_DESCRIPTION,
    telephone: BUSINESS_PHONE,
    image: absolute(IMAGES.ogImage),
    ...(SITE_URL && { url: SITE_URL }),
    ...(business.email && { email: business.email }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        ...(a.street && { streetAddress: a.street }),
        ...(a.city && { addressLocality: a.city }),
        ...(a.state && { addressRegion: a.state }),
        ...(a.zip && { postalCode: a.zip }),
        addressCountry: "US",
      },
    }),
    ...(business.hours.length > 0 && { openingHoursSpecification: [hoursSpec()] }),
    ...(business.serviceAreas.length > 0 && {
      areaServed: business.serviceAreas.map((name) => ({
        "@type": "City",
        name: `${name}, ${a.state || "MI"}`,
      })),
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICE_LIST.flatMap((s) =>
        s.includes.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      ),
    },
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(data);
}

// Per-service structured data for the six service pages.
export function serviceJsonLd(service: ServiceConfig) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
    },
    areaServed: business.serviceAreas.map((name) => ({
      "@type": "City",
      name: `${name}, ${business.address.state || "MI"}`,
    })),
    serviceType: service.includes,
  });
}
