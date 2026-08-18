"use client";

// import FloatingBlobs from "@/app/components/FloatingBlobs"; // disabled: causes scroll lag
import AboutCTA from "./AboutCTA";
import AboutEurope from "./AboutEurope";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutParashift from "./AboutParashift";
import AboutPurpose from "./AboutPurpose";
import AboutRoadmap from "./AboutRoadmap";

export default function AboutPageClient() {
  return (
    <main>
      {/* <FloatingBlobs /> */}
      <AboutHero />
      <AboutIntro />
      <AboutPurpose />
      <AboutEurope />
      <AboutRoadmap />
      <AboutParashift />
      <AboutCTA />
    </main>
  );
}
