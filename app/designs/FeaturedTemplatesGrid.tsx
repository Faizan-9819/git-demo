"use client";

import { AnimatePresence, motion } from "framer-motion";
import { templates } from "./templates-data";
import TemplateCard from "./TemplateCard";

type FeaturedTemplatesGridProps = {
  selectedCategory: string;
};

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
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[24px]"
      >
        {filteredTemplates.map((template, index) => (
          <TemplateCard key={template.slug} template={template} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
