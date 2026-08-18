import type { Metadata } from "next";
import AboutPageClient from "@/components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Growth Rocket | Managed Websites for Local Trades",
  description:
    "Growth Rocket builds and manages professional websites for electricians, plumbers, and local service businesses across the Netherlands. One fixed price.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/about",
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
