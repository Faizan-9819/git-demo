"use client";
import { useCallback, useEffect, useState } from "react";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "../../Reveal";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";
import { withBreaks } from "@/app/lib/withBreaks";

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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white font-poppins text-[18px] text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? "‹" : "›"}
    </button>
  );
}

const QUOTES: { text: Translation; meta: Translation }[] = [
  {
    text: {
      en: '"Quote placeholder — on convenience: everything in one place instead of five separate tools."',
      nl: '"Quote-placeholder — over gemak: alles op één plek in plaats van vijf losse tools."',
    },
    meta: {
      en: "Customer name · Company · Electrician",
      nl: "Naam klant · Bedrijfsnaam · Elektricien",
    },
  },
  {
    text: {
      en: '"Quote placeholder — on looking professional: the website was made for me and is kept up to date."',
      nl: '"Quote-placeholder — over professioneel overkomen: de website is voor mij gemaakt en wordt bijgehouden."',
    },
    meta: {
      en: "Customer name · Company · Salon",
      nl: "Naam klant · Bedrijfsnaam · Salon",
    },
  },
  {
    text: {
      en: '"Quote placeholder — on admin: quotes and invoices from the same client record."',
      nl: '"Quote-placeholder — over administratie: offertes en facturen vanuit dezelfde klantkaart."',
    },
    meta: {
      en: "Customer name · Company · Handyman business",
      nl: "Naam klant · Bedrijfsnaam · Klusbedrijf",
    },
  },
  {
    text: {
      en: '"Quote placeholder — on support: I don\'t have to arrange anything technical myself."',
      nl: '"Quote-placeholder — over support: ik hoef zelf niets technisch te regelen."',
    },
    meta: {
      en: "Customer name · Company · Consultant",
      nl: "Naam klant · Bedrijfsnaam · Consultant",
    },
  },
];

export default function Testimonials() {
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
    <section className="relative overflow-hidden rounded-[28px] bg-[var(--color-violet-98)] py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-5 lg:gap-9">
      <div className="fix-wide flex flex-wrap items-end justify-between gap-3 lg:gap-6">
        <div className="flex flex-col gap-3.5">
          <EyebrowLabel align="left">
            {t({ en: "Experiences", nl: "Ervaringen" })}
          </EyebrowLabel>
          <h2 className="m-0 max-w-160 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
            {withBreaks(
              t({
                en: "What entrepreneurs say about Growth Rocket",
                nl: "Wat ondernemers over Growth Rocket zeggen",
              }),
            )}
          </h2>
          <p className="m-0 font-sans text-[13px] text-[var(--color-dolphin)]">
            {t({
              en: "Placeholders — real customer quotes will go here once they're provided.",
              nl: "Placeholders — hier komen echte klantquotes zodra ze zijn aangeleverd.",
            })}
          </p>
        </div>
        <div className="flex gap-[10px] justify-end w-full">
          <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
          <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
        </div>
      </div>

      <div className="fix-wide pb-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-[18px]">
            {QUOTES.map((q, i) => (
              <Reveal
                key={q.text.en}
                delay={Math.min(i * 0.05, 0.2)}
                className="shrink-0 w-full sm:w-85 flex flex-col gap-[18px] rounded-[26px] border border-[var(--color-slate-200)] bg-white px-7 py-[30px]"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      color="var(--color-amber-500)"
                      fill="var(--color-amber-500)"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="m-0 text-[16px] leading-[26px] font-medium text-[var(--color-haiti)] font-poppins">
                  {t(q.text)}
                </p>
                <div className="mt-auto flex flex-col">
                  <span className="font-poppins text-[14px] font-semibold text-[var(--color-haiti)]">
                    {t(q.meta).split(" · ")[0]}
                  </span>
                  <span className="font-sans text-[12px] text-[var(--color-dolphin)]">
                    {t(q.meta).split(" · ").slice(1).join(" · ")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
