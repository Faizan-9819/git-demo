"use client";

import HomeShell from "../components/sections/home2/HomeShell";
import Hero2 from "../components/sections/home2/Hero2";
import Problem from "../components/sections/home2/Problem";
import Solution from "../components/sections/home2/Solution";
import Audience from "../components/sections/home2/Audience";
import WhyUs from "../components/sections/home2/WhyUs";
import HowItWorks from "../components/sections/home2/HowItWorks";
import Testimonials from "../components/sections/home2/Testimonials";
import Examples from "../components/sections/home2/Examples";
import FinalCta from "../components/sections/home2/FinalCta";
import Faq2 from "../components/sections/home2/Faq2";
import BlogTeaser from "../components/sections/home2/BlogTeaser";
import JsonLd from "../components/JsonLd";
import { buildFaqJsonLd, HOME_FAQS } from "../lib/faqs";
import { buildPageSchema } from "../lib/seo";
import LocaleMeta from "../components/LocaleMeta";

export default function Home2Client() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <main className="relative min-h-screen lg:pb-0">
      <JsonLd
        data={buildPageSchema(
          "/home2",
          "Professional Websites for Small Businesses | Growth Rocket",
          "A professional website for your small business — built, hosted and managed for you. Fixed yearly price, live in 7 days. See how it works.",
        )}
      />
      <JsonLd data={buildFaqJsonLd(HOME_FAQS)} />
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
      <HomeShell>
        <Hero2 onStartClick={openLeadForm} />
        <Problem />
        <Solution />
        <Audience />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Examples />
        <FinalCta onStartClick={openLeadForm} />
        <Faq2 />
        <BlogTeaser />
      </HomeShell>
    </main>
  );
}
