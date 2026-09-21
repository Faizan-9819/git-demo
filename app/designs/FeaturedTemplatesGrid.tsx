"use client";

import { AnimatePresence, motion } from "framer-motion";
import { templates } from "./templates-data";
import TemplateCard from "./TemplateCard";

/* ------------------------------------------------------------------ */
/*  PREVIOUS GRID — kept for reference, replaced by `.designs-grid`    */
/*  from Growth Rocket Designs.html.                                   */
/* ------------------------------------------------------------------ */
/*
  <motion.div
    key={selectedCategory}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[24px]"
  >
    {filteredTemplates.map((template, index) => (
      <TemplateCard key={template.slug} template={template} index={index} />
    ))}
  </motion.div>
*/

type FeaturedTemplatesGridProps = {
  selectedCategory: string;
};

/**
 * `.designs-grid` — three columns with a 14px gutter, two under 900px and one
 * under 600px. The category crossfade is the page's existing behaviour.
 */
export default function FeaturedTemplatesGrid({
  selectedCategory,
}: FeaturedTemplatesGridProps) {
  const filteredTemplates = templates.filter(
    (t) => selectedCategory === "all" || t.category === selectedCategory,
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-sm:grid-cols-1"
      >
        {filteredTemplates.map((template, index) => (
          <TemplateCard key={template.slug} template={template} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
