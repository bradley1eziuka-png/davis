import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { pageHead, serviceJsonLd } from "@/lib/seo";

const service = SERVICES.cleaning;

export const Route = createFileRoute("/services/commercial-residential-cleaning")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("cleaning")) throw notFound();
  },
  head: () =>
    pageHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: service.path,
      jsonLd: serviceJsonLd(service),
    }),
  component: CommercialResidentialCleaningPage,
});

function CommercialResidentialCleaningPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
