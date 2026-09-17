"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionCard from "./SectionCard";
import VideoPreview from "./VideoPreview";
import type { FeatureFoldContent, FoldTone } from "./data";

const TONE_BG: Record<FoldTone, string> = {
  white: "bg-white text-[#0a0516]",
  silver: "bg-[#eeeeee] text-[#0a0516]",
  purple: "bg-[#5b2dce] text-white",
};

/* Purple and deep surfaces flip the accent from brand ink to lime. */
function isInverse(tone: FoldTone) {
  return tone === "purple";
}

type Props = {
  content: FeatureFoldContent;
  children?: ReactNode;
};

export default function FeatureFold({ content, children }: Props) {
  const reduced = useReducedMotion();
  const inverse = isInverse(content.tone);
  const accent = inverse ? "text-[#e4fa65]" : "text-[#5b2dce]";
  const bodyColor = inverse ? "text-[#c9c2d4]" : "text-[#625a70]";
  const rowBorder = inverse ? "border-white/[0.13]" : "border-[#0a05161a]";

  return (
    <SectionCard id={content.id} className={TONE_BG[content.tone]}>
      {/* items-stretch so the video column spans the full fold height — that
          span is the distance its sticky tile travels. */}
      <div
        className={`flex items-stretch gap-[clamp(34px,5vw,76px)] max-[900px]:flex-col ${
          content.reverse ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Reveal className="w-[52%] max-w-[670px] max-[900px]:w-full max-[900px]:max-w-none">
          <p
            className={`mb-[18px] font-sans text-[12px] font-[850] tracking-[0.14em] uppercase ${accent}`}
          >
            {content.kicker}
          </p>
          <h2 className="font-bricolage text-[clamp(34px,3.4vw,54px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            {content.heading}
            <span className={accent}>{content.headingAccent}</span>
          </h2>
          <p
            className={`mt-[15px] w-full max-w-[620px] text-[17px] leading-[1.66] ${bodyColor}`}
          >
            {content.intro}
          </p>

          {content.items.length > 0 ? (
            <ul className="mt-[22px] flex w-full flex-col">
              {content.items.map((item, index) => (
                <li
                  key={item}
                  className={`relative py-[11px] pl-[30px] text-[16px] leading-[1.3] font-medium ${
                    index === content.items.length - 1
                      ? ""
                      : `border-b ${rowBorder}`
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 font-black ${accent}`}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {children}
        </Reveal>

        {/* No Reveal wrapper here: its motion transform would become the
            containing block and stop the sticky column from pinning. The tile
            fades in on its own instead. */}
        <div className="w-[48%] min-w-0 max-[900px]:w-full">
          {/* Same pattern as the blog TOC (components/blogs/shared/BlogToc.tsx):
              a full-height column with the sticky element nested inside it. */}
          <div className="sticky top-[104px] max-[900px]:static">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <VideoPreview
                title={content.videoTitle}
                caption={content.videoCaption}
                bgClass={content.videoBg}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

/* The website fold replaces the checklist with a disclosure list. */
export function WebsiteAccordion({
  rows,
}: {
  rows: ReadonlyArray<{ title: string; body: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <div className="mt-[22px] flex w-full flex-col">
      {rows.map((row, index) => {
        const open = openIndex === index;
        return (
          <div
            key={row.title}
            className={
              index === rows.length - 1 ? "" : "border-b border-white/[0.19]"
            }
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-[20px] py-[13px] text-left font-sans text-[16px] leading-[1.35] font-bold text-white"
            >
              {row.title}
              <span
                aria-hidden
                className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[25px] font-normal text-[#e4fa65] transition-transform duration-200 ${
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
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mr-[35px] mb-[14px] text-[14px] leading-[1.5] text-[#c9c2d4]">
                    {row.body}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
