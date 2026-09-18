"use client";

import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import DesignsFold from "./DesignsFold";
import FeaturedTemplatesGrid from "./FeaturedTemplatesGrid";

/* ------------------------------------------------------------------ */
/*  PREVIOUS GALLERY — kept for reference, replaced by                 */
/*  `section#designs.designs-gallery` from Growth Rocket Designs.html. */
/* ------------------------------------------------------------------ */
/*
  <>
    <CategoryFilter
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
    />

    <section className="fix pt-[32px] lg:pt-[40px] pb-[88px] md:pb-[120px]">
      <div className="mb-[28px] flex flex-col gap-[6px] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-[28px] font-extrabold tracking-[-0.28px] leading-[43.4px] text-[#0d0b1f]">
            Latest designs
          </h2>
        </div>
      </div>

      <FeaturedTemplatesGrid selectedCategory={selectedCategory} />
    </section>
  </>
*/

/**
 * `section#designs.designs-gallery`:
 *
 *   .designs-gallery  padding-top 0 (the lime filter band sits flush against
 *                     the fold's top edge), white surface
 *   .designs-heading  flex, align-items end, justify-content space-between,
 *                     gap 30px, margin 66px 0 32px; column at 900px,
 *                     46px/26px margins at 600px
 *   h2                clamp(36px,4vw,58px), inheriting the fold heading's
 *                     .94 line-height and -.065em tracking
 */
export default function TemplatesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    /* The filter band goes through `bleed` so it runs to the card's edges,
       while the heading and grid sit on the rail inside it. */
    <DesignsFold
      id="designs"
      className="bg-white pt-0! text-[#0a0516]"
      bleed={
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      }
    >
      <div className="mt-[66px] mb-[32px] flex items-end justify-between gap-[30px] max-[900px]:flex-col max-[900px]:items-start max-[600px]:mt-[46px] max-[600px]:mb-[26px]">
        <h2 className="font-bricolage text-[clamp(36px,4vw,58px)] leading-[0.94] font-semibold tracking-[-0.065em]">
          Latest designs
        </h2>
      </div>

      <FeaturedTemplatesGrid selectedCategory={selectedCategory} />
    </DesignsFold>
  );
}
