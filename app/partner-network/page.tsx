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
import Hub from "@/components/partners/hub";

export const metadata: Metadata = {
  title: "Partner Network | Growth Rocket",
  description:
    "Join the Growth Rocket Partner Network. Refer small businesses, earn recurring commissions, and help them grow online.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/partner-network",
    languages: {
      en: "https://www.getgrowthrocket.com/partner-network",
      nl: "https://www.getgrowthrocket.com/nl/partnernetwerk",
    },
  },
};

export default function PartnersPage() {
  return (
    <main>
      <PartnersHero />
      <Opportunity />
      <Product />
      <Hub />
      <WhyWorks />
      <PartnerTypes />
      <Process />
      <Commission />
      <WhyPartners />
      <BiggerVision />
      <PartnersFAQ />
      <PartnersCTA />
      <PartnerInterest />
    </main>
  );
}
