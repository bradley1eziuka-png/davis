import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/painting/site-layout";
import { Hero } from "@/components/painting/hero";
import { TrustBar } from "@/components/painting/trust-bar";
import { Services } from "@/components/painting/services";
import { WhyChooseUs } from "@/components/painting/why-choose-us";
import { Gallery } from "@/components/painting/gallery";
import { Trust } from "@/components/painting/trust";
import { ServiceAreas } from "@/components/painting/service-areas";
import { Process } from "@/components/painting/process";
import { Faq } from "@/components/painting/faq";
import { FinalCta } from "@/components/painting/final-cta";
import { ContactSection } from "@/components/painting/contact-section";
import { Testimonials } from "@/components/painting/testimonials";
import { HOME_DESCRIPTION, HOME_TITLE, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Trust />
      <ServiceAreas />
      <Process />
      <Testimonials />
      <Faq />
      <FinalCta />
      <ContactSection />
    </SiteLayout>
  );
}
