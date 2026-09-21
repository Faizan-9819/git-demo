"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../../Reveal";
import ArrowIcon from "../../ui/ArrowIcon";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { HOME_FAQS, type FaqAnswer, type FaqEntry } from "../../../lib/faqs";

/**
 * FAQ — the layout and behaviour of `sections/FAQ.tsx` (sticky copy column on
 * the left, a card accordion on the right, a "still have questions" card under
 * the heading), repainted in the home2 language: Bricolage heading, the 13px
 * fold radius, `#5b2dce` violet and `#e4fa65` lime instead of the magenta /
 * `#fff64c` pair, and the `min-[761px]` step the rest of home2 breaks on.
 *
 * Content is the shared FAQ data rather than the copy the original port of
 * `section.faq-section` carried, so this fold and the `buildFaqJsonLd(HOME_FAQS)`
 * block Home2Client emits now describe the same questions. `items` overrides it
 * for pages that need their own set, exactly as `FAQ.tsx` allows.
 *
 * Two deliberate departures from `FAQ.tsx`:
 *
 * - No scroll window. The source clips the list at 450px with a custom
 *   scrollbar and a fade; here every question sits in the page flow, so there
 *   is no scrollbar beside the questions and nothing to trap the Lenis wheel.
 *   The left column is sticky, which is what keeps the heading in view now that
 *   the list runs the full height of the fold.
 * - The answer panel is a sibling of the question button, not a child of it.
 *   `FAQ.tsx` nests the whole card inside one `<button>`, which puts a `<ul>`
 *   (the bulleted answers in HOME_FAQS) inside button content that may only
 *   hold phrasing; `aria-expanded`/`aria-controls` carry the same semantics
 *   without that.
 */

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="m-0">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="font-semibold text-[#0a0516]">
            {part.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

function AnswerBody({ answer }: { answer: FaqAnswer }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-[8px]">
      {answer.paragraphs.map((p, i) => (
        <RichParagraph key={i} text={t(p)} />
      ))}
      {answer.bullets && (
        <ul className="m-0 ml-[20px] flex list-disc flex-col gap-[4px] p-0 marker:text-[#5b2dce]">
          {answer.bullets.map((b, i) => (
            <li key={i}>{t(b)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** The lime tile from `FAQ.tsx`, in home2's lime and violet. */
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="inline-flex size-[40px] shrink-0 items-center justify-center rounded-[10px] bg-[#e4fa65]">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden>
        <path
          d="M3 10.5h15"
          stroke="#5b2dce"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {!open && (
          <path
            d="M10.5 3v15"
            stroke="#5b2dce"
            strokeWidth="2"
            strokeLinecap="round"
          />
        )}
      </svg>
    </span>
  );
}

function AccordionItem({
  entry,
  index,
  isOpen,
  onToggle,
  delay,
}: {
  entry: FaqEntry;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const { t } = useLanguage();
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <Reveal
      delay={delay}
      className={
        "w-full rounded-[13px] border bg-white transition-colors duration-200 " +
        (isOpen
          ? "border-[#5b2dce]"
          : "border-[#ded8e7] hover:border-[#b9a6f0]")
      }
    >
      {/* The padding lives on the button rather than the card so the whole band
          beside the question is a hit target. */}
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-[14px] px-[18px] py-[14px] text-left md:gap-[16px] md:px-[28px] md:py-[20px]"
      >
        <span
          className={
            "font-sans text-[15px] font-medium leading-[1.45] tracking-[-0.01em] transition-colors duration-200 md:text-[17px] " +
            (isOpen ? "text-[#5b2dce]" : "text-[#0a0516]")
          }
        >
          {t(entry.question)}
        </span>
        <ToggleIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-[18px] pb-[18px] font-sans text-[14px] leading-[1.75] text-[#625a70] md:px-[28px] md:pb-[22px]">
              <AnswerBody answer={entry.answer} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

/** `FAQ.tsx`'s HelpCard, on home2's surface and with its pill CTA. */
function HelpCard({ onBookClick }: { onBookClick?: () => void }) {
  const { t } = useLanguage();

  const label = t({ en: "Book an Appointment", nl: "Plan een afspraak" });
  const ctaClass =
    "arrow-cta mt-[4px] inline-flex min-h-[52px] items-center gap-[8px] self-start rounded-full bg-[#5b2dce] px-[20px] py-[14px] font-sans text-[14px] font-semibold text-white hover:bg-[#e4fa65] hover:text-[#0a0516]";

  return (
    <div className="relative mt-[28px] flex w-full max-w-[378px] flex-col gap-[16px] overflow-hidden rounded-[13px] border border-[#ded8e7] p-[26px] md:mt-[32px] md:p-[30px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[13px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(91,45,206,0.10) 0%, rgba(255,255,255,0) 100%), #ffffff",
        }}
      />
      <div className="relative flex flex-col gap-[14px]">
        <p className="m-0 font-bricolage text-[24px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#5b2dce]">
          {t({ en: "Still have questions?", nl: "Heeft u nog vragen?" })}
        </p>
        <p className="m-0 font-sans text-[15px] leading-[1.6] text-[#625a70]">
          {t({
            en: "Can’t find what you’re looking for? Reach out to our team.",
            nl: "Staat uw vraag er niet tussen? Neem gerust contact met ons op.",
          })}
        </p>

        {/* A real button when the page hands us the booking form, a plain link
            to the contact fold when it does not. */}
        {onBookClick ? (
          <button type="button" onClick={onBookClick} className={ctaClass}>
            {label}
            <ArrowIcon direction="up-right" />
          </button>
        ) : (
          <a href="#contact" className={ctaClass}>
            {label}
            <ArrowIcon direction="up-right" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function FaqAccordion({
  onBookClick,
  items,
}: {
  onBookClick?: () => void;
  items?: FaqEntry[];
} = {}) {
  const { t } = useLanguage();
  const entries = items ?? HOME_FAQS;
  // Exactly one answer is open at all times — the first one on load, and after
  // that whichever question was clicked last. There is deliberately no "all
  // closed" state: clicking the open question is a no-op rather than a toggle,
  // so the fold never collapses to a bare list of headings and the sticky left
  // column always has something beside it. Swapping a closed item in for the
  // open one is also what keeps the two columns near the same height.
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="rounded-[13px] bg-white py-[56px] text-[#0a0516] md:py-[80px]"
    >
      {/* items-start is what lets the left column stick: a grid item stretches
          to the full row height by default, leaving sticky nothing to travel
          in. It only matters from 761px, where the two columns exist. */}
      <div className="fix grid grid-cols-1 items-start gap-[35px] md:grid-cols-[0.85fr_1.15fr] md:gap-[50px] lg:gap-[90px]">
        {/* top-[120px] clears the fixed navbar (76px) with breathing room. */}
        <div className="self-start md:sticky md:top-[120px]">
          {/* <p className="m-0 mb-[20px] flex items-center gap-[10px] font-sans text-[11px] font-semibold leading-[1.5] tracking-[0.07em]">
            07 / GOOD QUESTIONS
          </p> */}

          <h2
            id="faq-heading"
            className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em]"
          >
            {t({ en: "Frequently asked", nl: "Veelgestelde" })}
            <br />
            <span className="text-[#5b2dce]">
              {t({ en: "Questions", nl: "vragen" })}
            </span>
          </h2>

          <HelpCard onBookClick={onBookClick} />
        </div>

        {/* No scroll window and no fade: the list runs the full height of the
            fold, so the page scrollbar is the only one on screen. */}
        <div className="flex w-full flex-col gap-[16px]">
          {entries.map((entry, idx) => (
            <AccordionItem
              key={entry.question.en}
              entry={entry}
              index={idx}
              isOpen={open === idx}
              onToggle={() => setOpen(idx)}
              delay={Math.min(idx * 0.05, 0.2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
