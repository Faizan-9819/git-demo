"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "../../Reveal";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

const STEPS: { title: Translation; body: Translation }[] = [
  {
    title: {
      en: "Tell us about your business",
      nl: "Vertel ons over je bedrijf",
    },
    body: {
      en: "We gather what we need: what you do, who your customers are and how they reach you.",
      nl: "We halen op wat we nodig hebben: wat je doet, voor wie en hoe klanten je bereiken.",
    },
  },
  {
    title: {
      en: "We set up Growth Rocket for you",
      nl: "Wij richten Growth Rocket voor je in",
    },
    body: {
      en: "We build your professional website and set up your requests, appointments, clients and invoicing.",
      nl: "Wij bouwen je professionele website en zetten je aanvragen, afspraken, klanten en facturatie klaar.",
    },
  },
  {
    title: { en: "You get to work", nl: "Jij gaat aan de slag" },
    body: {
      en: "Requests come in, appointments land in your calendar, and you send quotes and invoices from one place.",
      nl: "Aanvragen komen binnen, afspraken staan in je agenda en je stuurt offertes en facturen vanuit één plek.",
    },
  },
];

function ArrowButton({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous" : "Next"}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white font-poppins text-[18px] text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? "‹" : "›"}
    </button>
  );
}

export default function HowItWorks() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative rounded-[28px] bg-white fix-wide py-[50px] lg:py-28 flex flex-col items-center gap-3.5">
      <EyebrowLabel className="order-1">
        {t({ en: "How it works", nl: "Zo werkt het" })}
      </EyebrowLabel>
      <Reveal delay={0.05} className="order-2">
        <h2 className="m-0 text-center font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
          {t({
            en: "Get started in three steps.",
            nl: "In drie stappen aan de slag.",
          })}
        </h2>
      </Reveal>

      <Reveal
        delay={0.2}
        className="order-3 md:order-4 mt-4.5 lg:mt-9 flex items-center gap-4 flex-wrap justify-center rounded-2xl lg:rounded-full bg-[var(--color-haiti)] py-3.5 lg:pl-7 pl-3.5  pr-3.5"
      >
        <span className="font-poppins text-[14px] lg:text-[15px] text-center md:text-start font-semibold text-white">
          {t({
            en: "One system. One subscription. From €69 per month.",
            nl: "Eén systeem. Eén abonnement. Vanaf €69 per maand.",
          })}
        </span>
        <a
          href="#prijzen"
          className="inline-flex items-center rounded-full bg-white/12 px-[18px] py-[9px] font-poppins text-[14px] font-semibold text-[var(--color-kournikova)]"
        >
          {t({ en: "See what's included →", nl: "Bekijk wat inbegrepen is →" })}
        </a>
      </Reveal>

      <div
        className="order-4 md:order-3 relative w-full max-w-[1320px] mt-6 md:mt-12 overflow-hidden md:overflow-visible"
        ref={emblaRef}
      >
        <div className="flex md:grid md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.title.en}
              delay={0.05 + i * 0.05}
              className="shrink-0 w-full md:w-auto relative flex flex-col gap-3 rounded-[26px] bg-[var(--color-violet-98)] py-8 px-7"
            >
              <span
                className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-full font-poppins text-[14px] font-semibold text-white"
                style={{ background: "var(--grad-brand)" }}
              >
                {i + 1}
              </span>
              <h3 className="mt-2 mb-0 text-[20px]  font-semibold tracking-[-0.3px] font-poppins text-[var(--color-haiti)]">
                {t(step.title)}
              </h3>
              <p className="m-0 text-[14px] font-poppins leading-[22px] text-[var(--color-slate-600)]">
                {t(step.body)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="order-5 flex md:hidden items-center gap-[10px] mt-1">
        <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
        <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
      </div>
    </section>
  );
}
