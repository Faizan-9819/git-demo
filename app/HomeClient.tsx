"use client";

import Hero from "./components/sections/Hero";
import ThreePillars from "./components/sections/ThreePillars";
import Evolution from "./components/sections/Evolution";
import FeatureGrid from "./components/sections/FeatureGrid";
import Pricing from "./components/sections/Pricing";
import TradesShowcase from "./components/sections/TradesShowcase";
import CTA from "./components/sections/CTA";
import FAQ from "./components/sections/FAQ";
import JsonLd from "./components/JsonLd";
import { buildFaqJsonLd } from "./lib/faqs";
import { buildPageSchema } from "./lib/seo";
import LocaleMeta from "./components/LocaleMeta";

export default function HomeClient() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  const openBookingForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-booking-form"));
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white lg:pb-0">
      <JsonLd
        data={buildPageSchema(
          "/",
          "Professional Websites for Small Businesses | Growth Rocket",
          "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
        )}
      />
      <JsonLd data={buildFaqJsonLd()} />
      <LocaleMeta
        title={{
          en: "Professional Websites for Small Businesses | Growth Rocket",
          nl: "Professional Websites for Small Businesses | Growth Rocket",
        }}
        description={{
          en: "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
          nl: "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
        }}
      />
      <Hero onStartClick={openLeadForm} onBookClick={openBookingForm} />
      <ThreePillars />
      <Evolution />
      <FeatureGrid />
      <Pricing onStartClick={openLeadForm} />
      <TradesShowcase />
      <CTA onStartClick={openLeadForm} />
      <FAQ onBookClick={openBookingForm} />
    </main>
  );
}
