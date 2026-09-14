"use client";

import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import FeaturedTemplatesGrid from "./FeaturedTemplatesGrid";

export default function TemplatesPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <section className="fix pt-[32px] lg:pt-[40px] pb-[88px] md:pb-[120px]">
        <div className="mb-[28px] flex flex-col gap-[6px] sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* <div className="text-[11px] font-bold text-[#6b2cc9] tracking-[1.98px] uppercase mb-[6.75px]">
              ALL TEMPLATES
            </div> */}
            <h2 className="text-[28px] font-extrabold tracking-[-0.28px] leading-[43.4px] text-[#0d0b1f]">
              Latest designs
            </h2>
          </div>
        </div>

        <FeaturedTemplatesGrid selectedCategory={selectedCategory} />
      </section>
    </>
  );
}
