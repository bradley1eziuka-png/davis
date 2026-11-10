import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { pageHead, serviceJsonLd } from "@/lib/seo";

const service = SERVICES.exterior;

export const Route = createFileRoute("/services/exterior-maintenance")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("exterior")) throw notFound();
  },
  head: () =>
    pageHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: service.path,
      jsonLd: serviceJsonLd(service),
    }),
  component: ExteriorMaintenancePage,
});

function ExteriorMaintenancePage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
