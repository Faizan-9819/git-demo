"use client";

import Button from "@/app/components/ui/Button";
import BlogCtaSection from "@/components/blogs/shared/BlogCtaSection";

const FEATURES = [
  "Professional website",
  "Written-for-you content",
  "Mobile-friendly design",
  "Appointment system connected",
  "Enquiry forms connected",
  "Growth Rocket Hub integration",
  "Hosting, maintenance & ongoing support",
];

export default function FinalCtaSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <BlogCtaSection
      id="final-cta"
      heading="Ready to launch your electrician website?"
      body="Whether you're starting a new electrical business or replacing an outdated website, Growth Rocket gives you everything you need to get online — without the usual delays, technical hassle or endless back-and-forth."
      features={FEATURES}
      ctaLabel="Start your 7-day intake"
    >
      <div className="mt-4.5">
        <Button onClick={openLeadForm} variant="secondary" arrow="up-right" size="lg">
          Check out our professional electrician website designs
        </Button>
      </div>
    </BlogCtaSection>
  );
}
