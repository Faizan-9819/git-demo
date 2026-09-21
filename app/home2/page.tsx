import type { Metadata } from "next";
import Home2Client from "./Home2Client";
import type { AnimationStyle } from "../features/FeatureReveal";

/* Scroll-reveal style for this page. See app/features/animationStyle.md.
   "stagger" — children rise, scale and un-blur in sequence.
   "simple"  — the original fade + 24px rise, whole blocks at once. */
const animationStyle: AnimationStyle = "stagger";

export const metadata: Metadata = {
  title: "Professional Websites for Small Businesses | Growth Rocket",
  description:
    "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/home2",
  },
};

export default function Home2Page() {
  return <Home2Client animationStyle={animationStyle} />;
}
