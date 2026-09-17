"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionCard from "./SectionCard";
import { FAQ_ITEMS } from "./data";

export default function FeaturesFaq() {
  /* The source ships the first entry open. */
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <SectionCard id="faq" className="bg-[#eeeeee] text-[#0a0516]">
      <div className="flex gap-[70px] max-[900px]:flex-col max-[900px]:gap-[34px]">
        <Reveal className="w-[32%] max-[900px]:w-full">
          <h2 className="font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            A few questions, <span className="text-[#5b2dce]">answered.</span>
          </h2>
          <p className="mt-[18px] text-[17px] leading-[1.65] text-[#625a70]">
            Clear answers about your Growth Rocket website and connected business
            tools.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="w-[68%] max-[900px]:w-full">
          <div className="flex w-full flex-col">
            {FAQ_ITEMS.map((item, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={`py-[21px] ${
                    index === 0 ? "" : "border-t border-[#0a051626]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-[20px] text-left font-bricolage text-[18px] leading-[1.35] font-bold"
                  >
                    {item.question}
                    <span
                      aria-hidden
                      className={`shrink-0 font-sans text-[28px] leading-none font-normal text-[#5b2dce] transition-transform duration-200 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="mt-[16px] mr-[36px] w-full max-w-[700px] text-[16px] leading-[1.65] text-[#625a70] max-[600px]:mr-0">
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </SectionCard>
  );
}
