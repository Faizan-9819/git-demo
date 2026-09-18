import type { Metadata } from "next";
import FeaturesClient from "@/app/features/FeaturesClient";

export const metadata: Metadata = {
  title: "Functies — Uw website en zakelijke tools | Growth Rocket",
  description:
    "Een professionele website plus de Growth Rocket Hub: aanvragen, afspraken, uw Contactenboek, offertes en facturen — verbonden als één systeem voor uw bedrijf.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/features",
    languages: {
      en: "https://www.getgrowthrocket.com/features",
      nl: "https://www.getgrowthrocket.com/nl/features",
    },
  },
};

export default function NlFeaturesPage() {
  return <FeaturesClient />;
}
