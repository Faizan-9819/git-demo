import AboutPageClient from "@/components/about/AboutPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Growth Rocket | Beheerde websites voor lokale vakmensen",
  description:
    "Growth Rocket bouwt en beheert professionele websites voor elektriciens, loodgieters en lokale dienstverleners in Nederland. Eén vaste prijs.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/over-ons",
    languages: {
      en: "https://www.getgrowthrocket.com/about",
      nl: "https://www.getgrowthrocket.com/nl/over-ons",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
