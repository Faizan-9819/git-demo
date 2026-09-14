"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TemplateFaq } from "../templates-data";

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="inline-flex items-center justify-center size-[36px] rounded-[10px] bg-[var(--color-violet-98)] shrink-0">
      <svg width="18" height="18" viewBox="0 0 21 21" fill="none" aria-hidden>
        <path
          d="M3 10.5h15"
          stroke="#5b219f"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {!open && (
          <path
            d="M10.5 3v15"
            stroke="#5b219f"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
      </svg>
    </span>
  );
}

export default function TemplateFaqAccordion({
  items,
}: {
  items: TemplateFaq[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-[14px]">
      {items.map((entry, idx) => {
        const isOpen = open === idx;
        return (
          <button
            key={entry.question}
            type="button"
            onClick={() => setOpen(idx)}
            aria-expanded={isOpen}
            className={
              "w-full text-left bg-white rounded-[16px] px-[18px] lg:px-[24px] py-[14px] lg:py-[18px] transition-colors duration-200 border " +
              (isOpen
                ? "border-[var(--color-violet-42)]"
                : "border-[var(--color-slate-200)] hover:border-[var(--color-violet-58)]")
            }
          >
            <div className="flex items-center justify-between gap-[14px]">
              <span
                className={
                  "font-poppins text-[15px] lg:text-[16px] leading-[1.4] " +
                  (isOpen
                    ? "text-[var(--color-violet-42)] font-semibold"
                    : "text-[var(--color-haiti)] font-medium")
                }
              >
                {entry.question}
              </span>
              <ToggleIcon open={isOpen} />
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pt-[10px] font-poppins text-[14px] leading-[1.7] text-[var(--color-dolphin)]">
                    {entry.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
}
