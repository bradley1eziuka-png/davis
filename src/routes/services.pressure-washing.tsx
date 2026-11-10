import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { ServicePage } from "@/components/painting/service-page";
import { isServiceEnabled, SERVICES } from "@/lib/services-data";
import { pageHead, serviceJsonLd } from "@/lib/seo";

const service = SERVICES.pressureWashing;

export const Route = createFileRoute("/services/pressure-washing")({
  // Services removed from site.config.json → services.enabled return a 404.
  beforeLoad: () => {
    if (!isServiceEnabled("pressureWashing")) throw notFound();
  },
  head: () =>
    pageHead({
      title: service.seoTitle,
      description: service.seoDescription,
      path: service.path,
      jsonLd: serviceJsonLd(service),
    }),
  component: PressureWashingPage,
});

function PressureWashingPage() {
  return (
    <SiteLayout>
      <ServicePage service={service} />
    </SiteLayout>
  );
}
