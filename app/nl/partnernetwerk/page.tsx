import type { Metadata } from "next";
import PartnersHero from "@/components/partners/hero";
import Opportunity from "@/components/partners/opportunity";
import PartnerTypes from "@/components/partners/partner-types";
import Product from "@/components/partners/product";
import Process from "@/components/partners/process";
import Commission from "@/components/partners/commission";
import WhyWorks from "@/components/partners/why-works";
import WhyPartners from "@/components/partners/why-partners";
import BiggerVision from "@/components/partners/bigger-vision";
import PartnersFAQ from "@/components/partners/faq";
import PartnersCTA from "@/components/partners/cta";
import PartnerInterest from "@/components/partners/partner-interest";

export const metadata: Metadata = {
  title: "Partnernetwerk | Growth Rocket",
  description:
    "Word onderdeel van het Growth Rocket Partnernetwerk. Verwijs kleine bedrijven, verdien terugkerende commissies en help ze online groeien.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/partnernetwerk",
    languages: {
      en: "https://www.getgrowthrocket.com/partner-network",
      nl: "https://www.getgrowthrocket.com/nl/partnernetwerk",
    },
  },
};

export default function NlPartnernetwerkPage() {
  return (
    <main>
      <PartnersHero />
      <Opportunity />
      <PartnerTypes />
      <Product />
      <Process />
      <Commission />
      <WhyWorks />
      <WhyPartners />
      <BiggerVision />
      <PartnersFAQ />
      <PartnersCTA />
      <PartnerInterest />
    </main>
  );
}
