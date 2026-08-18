"use client";

import type { BlogPost } from "../../lib/blog-posts";
// import FloatingBlobs from "../FloatingBlobs"; // disabled: causes scroll lag
import JsonLd from "../JsonLd";
import CTA from "../sections/CTA";
import Evolution from "../sections/Evolution";
import FAQ from "../sections/FAQ";
import FeatureGrid from "../sections/FeatureGrid";
import Pricing from "../sections/Pricing";
import ThreePillars from "../sections/ThreePillars";
import TradesShowcase from "../sections/TradesShowcase";
import RelatedPostsCarousel from "../blog/RelatedPostsCarousel";
import Button from "../ui/Button";
import BuiltForElectricians from "./BuiltForElectricians";
import HeroELP from "./HeroELP";
import { buildFaqJsonLd } from "../../lib/faqs";
import { buildPageSchema } from "../../lib/seo";
import { localizedHref } from "../../i18n/locale-href";
import type { Locale } from "../../i18n/config";

export default function ELPPageClient({
  relatedPosts,
  locale,
}: {
  relatedPosts: BlogPost[];
  locale: Locale;
}) {
  const openLeadForm = () => {
    window.dispatchEvent(new CustomEvent("open-lead-form"));
  };

  const openBookingForm = () => {
    window.dispatchEvent(new CustomEvent("open-booking-form"));
  };

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden pb-[80px] lg:pb-0">
      <JsonLd
        data={buildPageSchema(
          "/elp",
          "Electrician Landing Page Services | Growth Rocket",
          "Electrician-focused website funnels, enquiry capture, and booking workflows by Growth Rocket.",
        )}
      />
      <JsonLd data={buildFaqJsonLd()} />
      {/* <FloatingBlobs /> */}
      <HeroELP onStartClick={openLeadForm} onBookClick={openBookingForm} />
      <BuiltForElectricians />
      <ThreePillars />
      <Evolution />
      <FeatureGrid />
      <Pricing onStartClick={openLeadForm} />
      <TradesShowcase />
      <CTA onStartClick={openLeadForm} />
      <FAQ onBookClick={openBookingForm} />

      {relatedPosts.length > 0 && (
        <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-poppins text-sm font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
                  More articles
                </p>
                <h2 className="mt-3 font-poppins text-[28px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[36px]">
                  Keep reading with more
                  <br />
                  <span className="text-grad-brand">
                    Growth Rocket insights.
                  </span>
                </h2>
              </div>
              <Button
                href={localizedHref("/blog", locale)}
                variant="primary"
                arrow="up-right"
                className="self-start sm:self-end"
              >
                View all posts
              </Button>
            </div>

            <RelatedPostsCarousel posts={relatedPosts} />
          </div>
        </section>
      )}
    </main>
  );
}
