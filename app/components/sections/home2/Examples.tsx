"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Reveal from "../../Reveal";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";
import { withBreaks } from "@/app/lib/withBreaks";

const CASES: { name: string; meta: Translation; image: string }[] = [
  {
    name: "TCM Mina",
    meta: {
      en: "Nutrition advice · Austria",
      nl: "Voedingsadvies · Oostenrijk",
    },
    image: "/home/case-tcm-mina.png",
  },
  {
    name: "Motor Expert",
    meta: { en: "Car service · Vienna", nl: "Autoservice · Wenen" },
    image: "/home/case-motorexpert.png",
  },
  {
    name: "Zenwise Academy",
    meta: {
      en: "Language education · Netherlands",
      nl: "Taalonderwijs · Nederland",
    },
    image: "/home/case-zenwise.jpg",
  },
  {
    name: "Seabulk International Trading",
    meta: { en: "Trade & logistics · UAE", nl: "Handel & logistiek · UAE" },
    image: "/home/case-seabulk.png",
  },
  {
    name: "Reifen Auto Service Shahmirani",
    meta: { en: "Tire service · Vienna", nl: "Bandenservice · Wenen" },
    image: "/home/case-reifen-shahmirani.png",
  },
  {
    name: "SLP Logistics Group",
    meta: { en: "Transport · India", nl: "Transport · India" },
    image: "/home/case-slp-logistics.png",
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
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/22 bg-white/6 text-white transition-colors hover:bg-white/12 disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? (
        <ChevronLeft size={18} strokeWidth={2.25} />
      ) : (
        <ChevronRight size={18} strokeWidth={2.25} />
      )}
    </button>
  );
}

export default function Examples() {
  const { t } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
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
    <section
      id="voorbeelden"
      className="relative overflow-hidden rounded-[28px] bg-[#263040] py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-6 lg:gap-8"
    >
      <div className="fix-wide flex flex-wrap items-end justify-between gap-3 md:gap-6">
        <div className="flex flex-col gap-3.5 max-w-155">
          <EyebrowLabel align="left" color="rgb(216,180,254)">
            {t({ en: "Examples", nl: "Voorbeelden" })}
          </EyebrowLabel>
          <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-white">
            {withBreaks(
              t({
                en: "See what we build for entrepreneurs",
                nl: "Bekijk wat we voor ondernemers maken",
              }),
            )}
          </h2>
          <p className="m-0 text-[16px] leading-[1.6] text-white/68">
            {withBreaks(
              t({
                en: "Your website is professionally built for you — as part of Growth Rocket.",
                nl: "Je website wordt professioneel voor je gemaakt — <br/> als onderdeel van Growth Rocket.",
              }),
            )}
          </p>
        </div>
        <div className="flex gap-[10px] w-full justify-end">
          <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
          <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
        </div>
      </div>

      <div className="fix-wide pb-6">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {CASES.map((c, i) => (
              <div key={c.name} className="shrink-0 w-full pl-5 sm:w-1/3">
                <Reveal
                  delay={Math.min(i * 0.05, 0.2)}
                  className="flex h-full flex-col gap-4 rounded-[28px] border border-white/10 bg-white/6 p-5"
                >
                  <div className="relative rounded-[16px] overflow-hidden bg-white shadow-[0_12px_30px_rgba(10,5,22,0.08)] aspect-[3/2]">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px] px-[6px] pb-[6px]">
                    <span className="font-poppins text-[17px] font-semibold text-white">
                      {c.name}
                    </span>
                    <span className="font-sans text-[13px] text-white/60">
                      {t(c.meta)}
                    </span>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
