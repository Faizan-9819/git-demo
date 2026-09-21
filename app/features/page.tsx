import type { Metadata } from "next";
import FeaturesClient from "./FeaturesClient";
import type { AnimationStyle } from "./FeatureReveal";

/* Scroll-reveal style for this page. See app/features/animationStyle.md.
   "stagger" — children rise, scale and un-blur in sequence; headlines by word.
   "simple"  — the original fade + 24px rise, whole blocks at once. */
const animationStyle: AnimationStyle = "simple";

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
  return <FeaturesClient animationStyle={animationStyle} />;
}
