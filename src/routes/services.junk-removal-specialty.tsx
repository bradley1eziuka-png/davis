import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { pageHead, serviceJsonLd } from "@/lib/seo";

const service = SERVICES.specialty;

export const Route = createFileRoute("/services/junk-removal-specialty")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("specialty")) throw notFound();
  },
  head: () =>
    pageHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: service.path,
      jsonLd: serviceJsonLd(service),
    }),
  component: JunkRemovalSpecialtyPage,
});

function JunkRemovalSpecialtyPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
