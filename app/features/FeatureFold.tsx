"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import { useLanguage } from "../i18n/LanguageProvider";
import SectionCard from "./SectionCard";
import VideoPreview from "./VideoPreview";
import type { LightboxState } from "./VideoLightbox";
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
  onOpenVideo: (video: LightboxState) => void;
  children?: ReactNode;
};

export default function FeatureFold({
  content,
  onOpenVideo,
  children,
}: Props) {
  /* The NL route serves the Dutch playlist; everything else falls back to EN. */
  const { locale } = useLanguage();
  const inverse = isInverse(content.tone);
  const accent = inverse ? "text-[#e4fa65]" : "text-[#5b2dce]";
  const bodyColor = inverse ? "text-[#c9c2d4]" : "text-[#625a70]";
  const rowBorder = inverse ? "border-white/[0.13]" : "border-[#0a05161a]";

  return (
    <SectionCard id={content.id} className={TONE_BG[content.tone]}>
      <div
        className={`flex items-center gap-[clamp(34px,5vw,76px)] max-[900px]:flex-col max-[900px]:items-stretch ${
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

        <Reveal
          delay={0.08}
          className="w-[48%] min-w-0 max-[900px]:w-full"
        >
          <VideoPreview
            title={content.videoTitle}
            caption={content.videoCaption}
            thumb={content.videoThumb}
            onOpen={(rect) =>
              onOpenVideo({
                youtubeId: content.youtubeId[locale] ?? content.youtubeId.en,
                title: content.videoTitle,
                origin: rect,
              })
            }
          />
        </Reveal>
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
              className="flex w-full cursor-pointer items-center justify-between gap-[20px] py-[13px] text-left font-sans text-[16px] leading-[1.35] font-bold text-white"
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
