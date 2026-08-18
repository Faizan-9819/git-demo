"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../Reveal";
import Parallax from "../Parallax";
import Button from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageProvider";
import { FAQS, type FaqAnswer, type FaqEntry } from "../../lib/faqs";

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span key={i} className="font-bold">
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
    <div className="flex flex-col gap-2">
      {answer.paragraphs.map((p, i) => (
        <RichParagraph key={i} text={t(p)} />
      ))}
      {answer.bullets && (
        <ul className="list-disc ml-5 flex flex-col gap-1">
          {answer.bullets.map((b, i) => (
            <li key={i}>{t(b)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span className="inline-flex items-center justify-center size-[40px] rounded-[10px] bg-[#fff64c] shrink-0">
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden>
        <path
          d="M3 10.5h15"
          stroke="#7F56D9"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {!open && (
          <path
            d="M10.5 3v15"
            stroke="#7F56D9"
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
  isOpen,
  onToggle,
  delay,
}: {
  entry: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const { t } = useLanguage();
  return (
    <Reveal delay={delay} className="w-full">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={
          "group w-full text-left bg-white rounded-[18px] px-[10px] lg:px-[30px] py-[12px] lg:py-[20px] transition-colors duration-200 border " +
          (isOpen
            ? "border-[#781d7d]"
            : "border-[#dadada] hover:border-[#a78bfa]")
        }
      >
        <div className="flex items-center justify-between gap-[12px] lg:gap-[16px]">
          <span
            className={
              "font-poppins lg:text-[18px] text-[16px] leading-[25.5px] tracking-[-0.3px] " +
              (isOpen ? "text-[#8a2591]" : "text-[var(--color-dolphin)]")
            }
          >
            {t(entry.question)}
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
              <div className="pt-[10px] font-poppins text-[14px] leading-[20.8px] text-[var(--color-dolphin)]">
                <AnswerBody answer={entry.answer} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </Reveal>
  );
}

function Accordion({ items }: { items: FaqEntry[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="relative">
      <div
        className="faq-scroll overflow-y-auto max-h-[450px] pr-[10px] flex flex-col gap-[16px] w-full"
        data-lenis-prevent
      >
        {items.map((entry, idx) => (
          <AccordionItem
            key={entry.question.en}
            entry={entry}
            isOpen={open === idx}
            onToggle={() => setOpen(open === idx ? -1 : idx)}
            delay={idx * 0.05}
          />
        ))}
        <div className="h-[40px] shrink-0" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />

      <style jsx global>{`
        .faq-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .faq-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .faq-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #5b219f 0%, #922698 100%);
          border-radius: 999px;
        }
        .faq-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #7c3aed 0%, #a21caf 100%);
        }
        .faq-scroll {
          scrollbar-width: thin;
          scrollbar-color: #7c2ba0 transparent;
        }
      `}</style>
    </div>
  );
}

function HelpCard({ onBookClick }: { onBookClick?: () => void }) {
  const { t } = useLanguage();
  return (
    <Reveal
      delay={0.1}
      className="relative rounded-[18px] border border-[#dadada] p-[30px] flex flex-col gap-[20px] w-full max-w-[378px] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-[18px]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(146,39,153,0.11) 0%, rgba(255,255,255,0) 100%), #ffffff",
        }}
      />
      <div className="relative flex flex-col gap-[20px]">
        <p className="font-poppins text-[24px] leading-[42px] text-[#8a2591]">
          {t({ en: "Still have questions?", nl: "Heeft u nog vragen?" })}
        </p>
        <p className="font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
          {t({
            en: "Can’t find what you’re looking for? Reach out to our team.",
            nl: "Staat uw vraag er niet tussen? Neem gerust contact met ons op.",
          })}
        </p>
        <Button
          onClick={onBookClick}
          arrow="up-right"
          size="lg"
          className="self-start"
        >
          {t({ en: "Book an Appointment", nl: "Plan een afspraak" })}
        </Button>
      </div>
    </Reveal>
  );
}

export default function FAQ({
  onBookClick,
  items,
}: {
  onBookClick?: () => void;
  items?: FaqEntry[];
}) {
  const { t } = useLanguage();
  return (
    <section id="faq" className="relative bg-white lg:pt-[100px] pt-[60px]">
      <div className="md:max-w-[1400px] md:mx-auto fix grid grid-cols-1 lg:grid-cols-[472px_1fr] gap-x-[60px] gap-y-[40px] items-start">
        <div className="flex flex-col gap-[24px]">
          <Reveal>
            <Parallax offset={20}>
              <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[48px] tracking-[-1px] text-[var(--color-haiti)]">
                {t({ en: "Frequently asked", nl: "Veelgestelde" })}
                <br />
                <span className="text-grad-brand">
                  {t({ en: "Questions", nl: "vragen" })}
                </span>
              </h2>
            </Parallax>
          </Reveal>
          <Parallax offset={15}>
            <HelpCard onBookClick={onBookClick} />
          </Parallax>
        </div>

        <Accordion items={items ?? FAQS} />
      </div>
    </section>
  );
}
