"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type BlogAccordionItem = {
  key: string;
  header: ReactNode;
  content: ReactNode;
  /** Overrides the default trigger button className for this item. */
  headerClassName?: string;
};

export type BlogAccordionProps = {
  items: BlogAccordionItem[];
  /**
   * Controlled open index. When omitted, the accordion manages its own
   * single-open state internally (uncontrolled), defaulting to none open.
   */
  openIndex?: number | null;
  /** Called when a trigger is clicked, with the next open index (or null to close). */
  onOpenIndexChange?: (index: number | null) => void;
  /** Wrapper className — defaults to the shared card look used across the site. */
  className?: string;
};

const DEFAULT_HEADER_CLASS =
  "flex w-full cursor-pointer items-center justify-between gap-5 px-7 py-6 text-left font-poppins text-lg font-semibold text-[var(--color-haiti)]";

export default function BlogAccordion({
  items,
  openIndex: controlledOpenIndex,
  onOpenIndexChange,
  className = "mt-7 overflow-hidden rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)]",
}: BlogAccordionProps) {
  const [uncontrolledOpenIndex, setUncontrolledOpenIndex] = useState<
    number | null
  >(0);
  const isControlled = controlledOpenIndex !== undefined;
  const openIndex = isControlled ? controlledOpenIndex : uncontrolledOpenIndex;

  const toggle = (index: number) => {
    // If clicking the currently open item, do nothing (it stays open)
    if (openIndex === index) return;

    // Otherwise, open the clicked item
    if (!isControlled) setUncontrolledOpenIndex(index);
    onOpenIndexChange?.(index);
  };

  return (
    <div className={className}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.key}
            className={
              i < items.length - 1
                ? "border-b border-[var(--color-violet-92)]"
                : ""
            }
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className={item.headerClassName ?? DEFAULT_HEADER_CLASS}
            >
              {item.header}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex-none font-light text-[22px] leading-none text-[var(--color-dolphin)]"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
