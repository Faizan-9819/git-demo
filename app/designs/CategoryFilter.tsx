"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { templates } from "./templates-data";

export type Category = {
  id: string;
  label: string;
};

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
                      {/* <span
                        className={`text-[11px] font-medium ${isActive ? "text-[#6b2cc9]/70" : "text-[#9a97ab]"}`}
                      >
                        · {categoryCounts.get(category.id) ?? 0}
                      </span> */}
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
