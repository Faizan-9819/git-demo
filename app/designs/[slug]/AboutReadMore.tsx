"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutReadMore({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  const [open, setOpen] = useState(false);

  if (paragraphs.length === 0) {
    return null;
  }

  return (
    <div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 pb-1">
              {paragraphs.map((p) => (
                <p
                  key={p}
                  className="font-poppins text-[16px] leading-[1.8] text-[var(--color-dolphin)]"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-1 font-poppins text-[14px] font-medium text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)]"
      >
        {open ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
