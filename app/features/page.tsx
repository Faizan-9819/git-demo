import type { Metadata } from "next";
import FeaturesClient from "./FeaturesClient";

export const metadata: Metadata = {
  title: "Features — Your Website and Business Tools | Growth Rocket",
  description:
    "A professional website plus the Growth Rocket Hub: enquiries, appointments, your Contact Book, quotes and invoices — connected as one system for your business.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/features",
    languages: {
      en: "https://www.getgrowthrocket.com/features",
      nl: "https://www.getgrowthrocket.com/nl/features",
    },
  },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
