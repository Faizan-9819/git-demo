"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  PREVIOUS FILTER — kept for reference, replaced by the              */
/*  `.designs-filter` / `.filter-control` markup from                  */
/*  Growth Rocket Designs.html.                                        */
/* ------------------------------------------------------------------ */
/*
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { templates } from "./templates-data";

export type Category = {
  id: string;
  label: string;
};

export const categories: Category[] = [
  { id: "Cleaning", label: "Cleaning" },
  ...
];

type CategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    categories.forEach((category) => {
      counts.set(
        category.id,
        templates.filter((t) => t.category === category.id).length,
      );
    });
    return counts;
  }, []);

  function handleCategoryClick(id: string) {
    onCategoryChange(selectedCategory === id ? "all" : id);
    setIsOpen(false);
  }

  const selectedLabel =
    categories.find((category) => category.id === selectedCategory)?.label ??
    "Select Industries";

  return (
    <div
      className="py-[18px] lg:py-5 lg:h-fit flex items-center justify-center px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(90deg, rgb(91, 33, 159) 0%, rgb(146, 38, 152) 100%)",
        borderBottom: "1px solid #ece8f5",
      }}
    >
      <div className="w-full md:max-w-[1400px] md:mx-auto fix flex flex-nowrap items-center gap-3 lg:gap-4">
        <div className="relative shrink-0" ref={containerRef}>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex items-center gap-[10px] rounded-[999px] border border-black bg-black px-[19px] py-[9px] font-semibold text-[13px] text-white transition-all"
          >
            {selectedLabel}
            <svg
              className={`w-[11px] h-[6.5px] transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 11.7071 6.85355"
            >
              <path
                d="M0.353553 0.353553L5.85355 5.85355L11.3536 0.353553"
                stroke="white"
              />
            </svg>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 z-50 mt-2 min-w-[240px] rounded-lg border border-[#e3dff0] bg-white py-2 shadow-lg"
              >
                {categories.map((category) => {
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => handleCategoryClick(category.id)}
                      className={`flex w-full items-center justify-between gap-[12px] border-b border-[#ece8f5] px-4 py-2.5 text-left text-[14px] transition-colors last:border-b-0 ${
                        isActive
                          ? "bg-[#f2eefc] font-semibold text-[#6b2cc9]"
                          : "text-[#6b6880] hover:bg-[#faf9fd]"
                      }`}
                    >
                      <span>{category.label}</span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
*/

export type Category = {
  id: string;
  label: string;
};

/* Unchanged: the page's existing industries. */
export const categories: Category[] = [
  { id: "Cleaning", label: "Cleaning" },
  { id: "dentist", label: "Dentist" },
  { id: "electrician", label: "Electrician" },
  { id: "logistics", label: "Logistics" },
  { id: "physiotherapy", label: "Physiotherapy" },
  { id: "plumber", label: "Plumber" },
  { id: "real-estate", label: "Real Estate Consultant" },
  { id: "salon", label: "Saloon" },
  { id: "solar", label: "Solar Installation" },
];

const ALL = "all";
const ALL_LABEL = "Professional services";

type CategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

/**
 * `div.designs-filter` from Growth Rocket Designs.html — the band that sits
 * flush against the top of the gallery fold.
 *
 * As with the hero, the source stacks several passes over the same selectors;
 * the computed result is what is built here:
 *
 *   .designs-filter   lime band, flex, justify-content flex-start, gap 14px,
 *                     bled out to the fold edges with a negative inset margin,
 *                     padding 25px var(--fold-inset); column + 22px at 600px
 *   .designs-filter p 13px / 500 / opacity .72, sitting after the control
 *   .filter-control   min-width 250px, drop-shadow(0 7px 10px rgb(10 5 22/18%)),
 *                     full width at 600px
 *   select            white pill, 50px tall, padding 0 58px 0 20px,
 *                     600 15px Inter, brand-ink text, inset highlight shadows
 *   span              42px brand-ink disc inset 4px from the pill's edge,
 *                     holding a rotated "‹" chevron
 *
 * The source uses a native <select>; this keeps the page's existing custom
 * dropdown (it is what drives the animated grid) and wears the same shape.
 *
 * The pill is a FIXED 250px above 600px — the source's `.filter-control`
 * floor, as a width rather than a min-width. A shrink-to-fit trigger is the
 * one thing a select must not be: picking "Dentist" after "Professional
 * services" collapsed the pill to roughly half its width and dragged the
 * "Select your industry" label left with it, so the band reflowed on every
 * choice. 250px holds the longest label ("Real Estate Consultant", ~157px at
 * 15px Inter SemiBold) inside the 176px the 20px/54px padding leaves, so
 * nothing truncates and nothing moves. The dropdown panel inherits the same
 * width through `w-full` and keeps `min-w-[250px]` as its own floor.
 *
 * The cost is a gap between a short label and the chevron disc, which is what
 * a fixed-width select looks like. Padding-right stays 54px rather than the
 * source's 58px: the disc is 42px wide and inset 4px, so it ends 46px in, and
 * 58px would leave a 12px lane beside it. The source can afford that — a
 * native <select> centres its own arrow inside the padding — but this pill
 * positions the disc absolutely, so that slack would read as part of the gap.
 */
export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  function handleCategoryClick(id: string) {
    onCategoryChange(selectedCategory === id ? ALL : id);
    setIsOpen(false);
  }

  const selectedLabel =
    categories.find((category) => category.id === selectedCategory)?.label ??
    ALL_LABEL;

  return (
    /* Two boxes again, for the same reason the folds have two. The BAND is the
       lime, and it runs the full width of the screen — left edge to right
       edge, at every viewport.

       `full-bleed` is what gets it there, and a negative `--fold-inset` margin
       is not. That margin only cancels the card's own padding, which lands the
       band on the CARD's edges — the screen's edges only while `.newfix-card`
       is still growing. Past ~1948px the card's `max-width: 1920px` binds and
       it centres with real gutters (≈130px each at 2200px, more on a 4K
       panel), so an inset-cancelling band stops dead short of the screen with
       white showing beside it. `full-bleed` is measured against the viewport
       (100vw), so it ignores the cap and holds at any width.

       No `rounded-t-[13px]`: the band's top corners now sit on the viewport
       edges, not on the card's, where a radius would read as two white notches
       rather than as the fold's silhouette. The card's own rounded top is
       behind the band and covered by it (the gallery sets pt-0).

       The band's own `px-[var(--fold-inset)]` is an inner inset, not a bleed:
       it puts the row back where the card's padding had it, and floors it
       below ~1333px where the 1180px rail below has not started binding yet.
       The rail still lines up with the hero heading and the grid: `full-bleed`
       centres on the viewport and so does the card, so `.fix` resolves to the
       same 1180px column in both.

       Below 600px that inset is 14px, not the source's 22px, because the
       gallery drops the fold's phone padding (see TemplatesPageClient) and its
       heading and grid then sit on the card's own edge — 14px off the
       viewport. The band is measured from the viewport, so it has to restate
       that 14px itself to keep the pill under "Latest designs". The vertical
       22px is the source's and stays.

       The ROW inside it rides the page's `.fix` rail, so the pill's left edge
       lines up with "Latest designs", the grid, and the footer below — a bar
       whose control floated 279px left of everything else was the spacing
       inconsistency worth fixing.

       `relative z-30` lifts the whole band above the heading and grid that
       follow it in source order, so the open dropdown paints over them. It
       stays under the navbar, which is z-50 (z-[60] for its mobile sheet). */
    <div className="full-bleed relative z-30 bg-[#e4fa65] px-[var(--fold-inset)] py-[25px] text-[#0a0516] max-sm:px-[14px] max-sm:py-[22px]">
      <div className="fix flex items-center justify-start gap-[14px] px-0! max-sm:flex-col max-sm:items-start">
        {/* The source's drop-shadow belongs to `.filter-control`, but `filter`
          creates a stacking context, which would trap the dropdown inside this
          wrapper. The source can afford it — its control is a native <select>
          whose popup the browser draws outside the DOM — so here the shadow
          moves onto the pill itself and the wrapper stays a plain anchor. */}
        <p className="m-0 text-[13px] block lg:hidden font-medium opacity-[0.72]">
          Select your industry
        </p>
        <div ref={containerRef} className="relative w-[250px] max-sm:w-full">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            className="flex h-[50px] w-full items-center rounded-full bg-white pr-[54px] pl-[20px] text-left font-sans text-[15px] leading-none font-semibold text-[#5b219f] shadow-[inset_0_1px_0_rgb(255_255_255_/_92%),inset_0_-1px_0_rgb(10_5_22_/_9%),0_1px_0_rgb(10_5_22_/_12%)] [filter:drop-shadow(0_7px_10px_rgb(10_5_22_/_18%))]"
          >
            <span className="truncate">{selectedLabel}</span>
            <span
              aria-hidden
              className="pointer-events-none absolute top-[4px] right-[4px] grid h-[42px] w-[42px] place-items-center rounded-full border border-white/[0.38] bg-[#5b219f] text-white"
            >
              {/* The source draws this as `content:"‹"` at font: 400 28px/1,
                rotated -90deg. A glyph carries its own side bearings and sits
                on a baseline, so `place-items:center` centres its em box, not
                the mark you actually see — which is why it read low and left
                in the disc. Same chevron as an SVG: the path is symmetric in
                its own viewBox, so the box centre IS the optical centre. */}
              <svg
                viewBox="0 0 24 24"
                className={`h-[13px] w-[13px] transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 7l10 10L22 7" />
              </svg>
            </span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                role="listbox"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 z-40 mt-2 w-full min-w-[250px] overflow-hidden rounded-[13px] border border-[rgb(10_5_22_/_11%)] bg-white py-2 leading-[1.5] shadow-lg"
              >
                {/* `ALL_LABEL` is the pill's placeholder only — the list itself
                  holds industries. Re-clicking the active one clears back to
                  "all" via handleCategoryClick. */}
                {categories.map((category) => {
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`block w-full border-b border-[#ece8f5] px-4 py-2.5 text-left text-[14px] transition-colors last:border-b-0 ${
                        isActive
                          ? "bg-[#f2eefc] font-semibold text-[#5b219f]"
                          : "text-[#625a70] hover:bg-[#faf9fd]"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="m-0 text-[13px] hidden font-medium opacity-[0.72]">
          Select your industry
        </p>
      </div>
    </div>
  );
}
