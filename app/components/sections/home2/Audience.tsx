// "use client";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback } from "react";
// import Reveal from "../../Reveal";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import type { Translation } from "../../../i18n/config";
// import { withBreaks } from "@/app/lib/withBreaks";

// function ArrowButton({
//   dir,
//   onClick,
// }: {
//   dir: "prev" | "next";
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={dir === "prev" ? "Previous" : "Next"}
//       className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white font-poppins text-[18px] text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)]"
//     >
//       {dir === "prev" ? "‹" : "›"}
//     </button>
//   );
// }

// const TRADES: { name: Translation; image: string }[] = [
//   {
//     name: { en: "Electrician", nl: "Elektricien" },
//     image:
//       "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Plumber", nl: "Loodgieter" },
//     image:
//       "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Cleaning company", nl: "Schoonmaakbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Consultant", nl: "Consultant" },
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Accountant", nl: "Accountant" },
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Hairdresser / salon", nl: "Kapper / salon" },
//     image:
//       "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Coach", nl: "Coach" },
//     image:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Healthcare professional", nl: "Zorgprofessional" },
//     image:
//       "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Handyman business", nl: "Klusbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Business service provider", nl: "Zakelijke dienstverlener" },
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=70",
//   },
// ];

// export default function Audience() {
//   const { t } = useLanguage();
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     dragFree: true,
//     containScroll: "trimSnaps",
//   });

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <section
//       id="voorwie"
//       className="relative overflow-hidden rounded-[28px] bg-white py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-2"
//     >
//       <div className="fix-wide grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
//         <div className="flex flex-col gap-4 max-w-140">
//           <EyebrowLabel align="left">
//             {t({ en: "Who it's for", nl: "Voor wie" })}
//           </EyebrowLabel>
//           <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//             {withBreaks(
//               t({
//                 en: "Built for entrepreneurs like you.",
//                 nl: "Gemaakt voor ondernemers zoals jij.",
//               }),
//             )}
//           </h2>
//         </div>
//         <Reveal
//           delay={0.1}
//           className="self-start justify-self-end pt-[0px] max-w-95"
//         >
//           <p className="m-0 text-[16px] leading-[1.6] text-[var(--color-dolphin)] ">
//             {t({
//               en: "Different businesses, the same basics: coming across as professional, welcoming customers, planning appointments, keeping client details, and sending quotes and invoices.",
//               nl: "Andere bedrijven, dezelfde basis: professioneel overkomen, klanten ontvangen, afspraken plannen, klantgegevens bijhouden, offertes en facturen versturen.",
//             })}
//           </p>
//         </Reveal>
//       </div>

//       <div className="fix-wide overflow-hidden pt-[8px] pb-7" ref={emblaRef}>
//         <div className="flex gap-4">
//           {TRADES.map((trade, i) => (
//             <Reveal
//               key={trade.name.en}
//               delay={Math.min(i * 0.04, 0.3)}
//               className="relative shrink-0 w-[82%] sm:w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
//             >
//               <Image
//                 src={trade.image}
//                 alt={t(trade.name)}
//                 fill
//                 sizes="(max-width: 640px) 82vw, 220px"
//                 className="object-cover"
//               />
//               <span
//                 aria-hidden
//                 className="absolute inset-x-0 bottom-0 h-[55%]"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
//                 }}
//               />
//               <span className="relative font-poppins text-[19px] font-semibold text-white">
//                 {t(trade.name)}
//               </span>
//             </Reveal>
//           ))}
//         </div>
//       </div>

//       <div className="fix-wide flex items-center justify-end gap-[10px]">
//         <ArrowButton dir="prev" onClick={scrollPrev} />
//         <ArrowButton dir="next" onClick={scrollNext} />
//       </div>
//     </section>
//   );
// }

//
//
//

// "use client";
// import Image from "next/image";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback, useEffect, useState } from "react";
// import Reveal from "../../Reveal";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import type { Translation } from "../../../i18n/config";
// import { withBreaks } from "@/app/lib/withBreaks";

// function ArrowButton({
//   dir,
//   disabled,
//   onClick,
// }: {
//   dir: "prev" | "next";
//   disabled: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       disabled={disabled}
//       aria-label={dir === "prev" ? "Previous" : "Next"}
//       className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white font-poppins text-[18px] text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
//     >
//       {dir === "prev" ? "‹" : "›"}
//     </button>
//   );
// }

// const TRADES: { name: Translation; image: string }[] = [
//   {
//     name: { en: "Electrician", nl: "Elektricien" },
//     image:
//       "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Plumber", nl: "Loodgieter" },
//     image:
//       "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Cleaning company", nl: "Schoonmaakbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Consultant", nl: "Consultant" },
//     image:
//       "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Accountant", nl: "Accountant" },
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Hairdresser / salon", nl: "Kapper / salon" },
//     image:
//       "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Coach", nl: "Coach" },
//     image:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Healthcare professional", nl: "Zorgprofessional" },
//     image:
//       "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Handyman business", nl: "Klusbedrijf" },
//     image:
//       "https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?auto=format&fit=crop&w=600&q=70",
//   },
//   {
//     name: { en: "Business service provider", nl: "Zakelijke dienstverlener" },
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=70",
//   },
// ];

// export default function Audience() {
//   const { t } = useLanguage();
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     dragFree: true,
//     containScroll: "trimSnaps",
//   });

//   const [canPrev, setCanPrev] = useState(false);
//   const [canNext, setCanNext] = useState(false);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCanPrev(emblaApi.canScrollPrev());
//     setCanNext(emblaApi.canScrollNext());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//   }, [emblaApi, onSelect]);

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   return (
//     <section
//       id="voorwie"
//       className="relative overflow-hidden rounded-[28px] bg-white py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-2"
//     >
//       <div className="fix-wide grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
//         <div className="flex flex-col gap-4 max-w-140">
//           <EyebrowLabel align="left">
//             {t({ en: "Who it's for", nl: "Voor wie" })}
//           </EyebrowLabel>
//           <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//             {withBreaks(
//               t({
//                 en: "Built for entrepreneurs like you.",
//                 nl: "Gemaakt voor ondernemers zoals jij.",
//               }),
//             )}
//           </h2>
//         </div>
//         <Reveal
//           delay={0.1}
//           className="self-start justify-self-end pt-[0px] max-w-95"
//         >
//           <p className="m-0 text-[16px] leading-[1.6] text-[var(--color-dolphin)] ">
//             {t({
//               en: "Different businesses, the same basics: coming across as professional, welcoming customers, planning appointments, keeping client details, and sending quotes and invoices.",
//               nl: "Andere bedrijven, dezelfde basis: professioneel overkomen, klanten ontvangen, afspraken plannen, klantgegevens bijhouden, offertes en facturen versturen.",
//             })}
//           </p>
//         </Reveal>
//       </div>

//       {/* Mobile: unchanged drag carousel */}
//       <div className="fix-wide pt-[8px] pb-7 sm:hidden">
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex gap-4">
//             {TRADES.map((trade, i) => (
//               <Reveal
//                 key={trade.name.en}
//                 delay={Math.min(i * 0.04, 0.3)}
//                 className="relative shrink-0 w-full sm:w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
//               >
//                 <Image
//                   src={trade.image}
//                   alt={t(trade.name)}
//                   fill
//                   sizes="(max-width: 640px) 100vw, 220px"
//                   className="object-cover"
//                 />
//                 <span
//                   aria-hidden
//                   className="absolute inset-x-0 bottom-0 h-[55%]"
//                   style={{
//                     background:
//                       "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
//                   }}
//                 />
//                 <span className="relative font-poppins text-[19px] font-semibold text-white">
//                   {t(trade.name)}
//                 </span>
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="fix-wide flex items-center justify-center gap-[10px] sm:hidden">
//         <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
//         <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
//       </div>

//       {/* Tablet/desktop: auto-sliding marquee, pauses on hover. Same left
//           start as before; right side bleeds to the section's own edge. */}
//       <div className="hidden sm:block group fix-start overflow-hidden mt-5 pt-[8px] pb-7">
//         <div className="flex w-max gap-4 [animation:gr-ticker_45s_linear_infinite] group-hover:[animation-play-state:paused]">
//           {TRADES.concat(TRADES).map((trade, i) => (
//             <div
//               key={`${trade.name.en}-${i}`}
//               className="relative shrink-0 w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
//             >
//               <Image
//                 src={trade.image}
//                 alt={t(trade.name)}
//                 fill
//                 sizes="220px"
//                 className="object-cover"
//               />
//               <span
//                 aria-hidden
//                 className="absolute inset-x-0 bottom-0 h-[55%]"
//                 style={{
//                   background:
//                     "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
//                 }}
//               />
//               <span className="relative font-poppins text-[19px] font-semibold text-white">
//                 {t(trade.name)}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

//
"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-slate-200)] bg-white text-[var(--color-haiti)] transition-colors hover:bg-[var(--color-violet-98)] disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? (
        <ChevronLeft size={18} strokeWidth={2.25} />
      ) : (
        <ChevronRight size={18} strokeWidth={2.25} />
      )}
    </button>
  );
}

const TRADES: { name: Translation; image: string }[] = [
  {
    name: { en: "Electrician", nl: "Elektricien" },
    image: "/home2/elec.jpg",
  },
  {
    name: { en: "Plumber", nl: "Loodgieter" },
    image: "/home2/plumber.jpg",
  },
  {
    name: { en: "Cleaning company", nl: "Schoonmaakbedrijf" },
    image: "/home2/cleaning.jpg",
  },
  {
    name: { en: "Consultant", nl: "Consultant" },
    image: "/home2/consultant.jpg",
  },
  {
    name: { en: "Accountant", nl: "Accountant" },
    image: "/home2/accountant.jpg",
  },
  {
    name: { en: "Hairdresser / salon", nl: "Kapper / salon" },
    image: "/home2/hairdresser].jpg",
  },
  {
    name: { en: "Coach", nl: "Coach" },
    image: "/home2/coach.jpg",
  },
  {
    name: { en: "Healthcare professional", nl: "Zorgprofessional" },
    image: "/home2/healthcare.jpg",
  },
  {
    name: { en: "Handyman business", nl: "Klusbedrijf" },
    image: "/home2/handyman.jpg",
  },
  {
    name: { en: "Business service provider", nl: "Zakelijke dienstverlener" },
    image: "/home2/business-service .jpg",
  },
];

export default function Audience() {
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
    <section
      id="voorwie"
      className="relative rounded-[28px] bg-white py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-2"
    >
      {/* `.legacy-section-head` from grsolidvariant.html: a `1fr
          minmax(260px,420px)` grid with a 42px gap, bottom-aligned, collapsing
          to one column with an 18px gap at the source's 900px step (`md:` is
          the nearest one this project defines). */}
      <div className="fix grid grid-cols-1 items-start gap-[18px] md:grid-cols-[1fr_minmax(260px,420px)] md:items-end md:gap-[42px]">
        <div className="flex flex-col gap-4">
          {/* <EyebrowLabel align="left">
            {t({ en: "Who it's for", nl: "Voor wie" })}
          </EyebrowLabel> */}
          {/* Copy and type both come from `.legacy-who .legacy-section-head h2`
              in grsolidvariant.html: Bricolage 600 at clamp(40px,4vw,58px),
              1.1 line-height and -0.04em tracking (the "One typography and
              control language" block wins over the earlier 43px rule), on
              #0a0516 — which is what `--color-haiti` holds. The line break is
              the source's own `<br>`; nothing there pins the heading to one
              line, so it wraps on its own when the column gets narrow. */}
          <h2 className="m-0 font-bricolage font-semibold text-[clamp(40px,4vw,58px)] leading-[1.1] tracking-[-0.04em] text-[var(--color-haiti)]">
            {withBreaks(
              t({
                en: "Made for the people<br/>who make things happen.",
                nl: "Gemaakt voor de mensen<br/>die dingen voor elkaar krijgen.",
              }),
            )}
          </h2>
        </div>
        <Reveal delay={0.1}>
          {/* The fold's second column in the source. Five rules in
              grsolidvariant.html hit it, all at the same specificity, so each
              property is settled by the last one to declare it:

                `.legacy-section-head p`   font:700 11px Inter; ls .13em; #5b21b6
                `.legacy-section-head>p`   margin:0 0 4px; #6b6580; font:16px/1.6 Inter
                `.legacy-section-head p`   font-size:12px; letter-spacing:.1em
                `.legacy-section-head>p`   font-size:16px; line-height:1.6
                `.legacy-section-head p`   color:var(--gr-brand-ink)

              leaving Inter 400 16px/1.6, 0.1em tracking and #5b2dce. The two
              surprises are both spill from rules written for the eyebrow: the
              `font` shorthand never resets `letter-spacing`, so the 0.1em
              survives, and the last colour rule is a descendant selector that
              reaches this paragraph as well. `--gr-brand-ink` is redefined
              further down the sheet, so it resolves to #5b2dce, not #5b219f. */}
          <p className="m-0 mb-[4px] font-sans text-[16px] leading-[1.6] tracking-[0.1em] text-[#5b2dce]">
            {t({
              en: "For freelancers and small businesses who want to look professional, stay organised and spend more time on the work they love.",
              nl: "Voor ZZP'ers en MKB'ers die professioneel willen overkomen, georganiseerd willen blijven en meer tijd willen besteden aan het werk waar ze van houden.",
            })}
          </p>
        </Reveal>
      </div>
      {/*  */}
      {/* Mobile: unchanged drag carousel */}
      <div className="fix-wide pt-[8px] pb-7 sm:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {TRADES.map((trade, i) => (
              <Reveal
                key={trade.name.en}
                delay={Math.min(i * 0.04, 0.3)}
                className="relative shrink-0 w-full sm:w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
              >
                <Image
                  src={trade.image}
                  alt={t(trade.name)}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
                  }}
                />
                <span className="relative font-bricolage text-[19px] font-semibold text-white">
                  {t(trade.name)}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="fix-wide flex items-center justify-end gap-[10px] sm:hidden">
        <ArrowButton dir="prev" disabled={!canPrev} onClick={scrollPrev} />
        <ArrowButton dir="next" disabled={!canNext} onClick={scrollNext} />
      </div>

      {/* Tablet/desktop: auto-sliding marquee, pauses on hover.
          `fix-start` only provides the left offset — the nested div does the
          clipping, so its left edge sits exactly at the left margin and cards
          disappear there instead of running into the gutter. */}
      {/* <div className="hidden sm:block group mt-5 ml-[max(20px,calc((100%_-_var(--content-width))_/_2))] md:ml-[max(0px,calc((100%_-_var(--content-width))_/_2))]">
        <div className="overflow-hidden pt-[8px]">
          <div className="flex w-max gap-4 [animation:gr-ticker_45s_linear_infinite] group-hover:[animation-play-state:paused]">
            {TRADES.concat(TRADES).map((trade, i) => (
              <div
                key={`${trade.name.en}-${i}`}
                className="relative shrink-0 w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
              >
                <Image
                  src={trade.image}
                  alt={t(trade.name)}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
                  }}
                />
                <span className="relative font-poppins text-[19px] font-semibold text-white">
                  {t(trade.name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Desktop marquee runs edge to edge: `full-bleed` cancels HomeShell's
          side padding + max-width centering so the strip starts at the
          viewport's left edge and bleeds off the right. The section drops its
          own `overflow-hidden` for this — the inner div below still clips the
          ticker, so nothing else escapes. */}
      <div className="hidden sm:block gr-marquee-hover-pause mt-5 full-bleed">
        <div className="overflow-hidden pt-[8px]">
          {/* Three copies and `mr-4` on the cards (never a flex `gap`) are what
              the -100%/3 keyframe depends on, and hover pausing comes from
              `gr-marquee-hover-pause` on the wrapper rather than a
              `group-hover:` utility — see gr-marquee-left in globals.css for
              why, before changing any of it. */}
          <div
            style={{ "--marquee-duration": "45s" } as CSSProperties}
            className="gr-marquee-left-track flex w-max"
          >
            {[...TRADES, ...TRADES, ...TRADES].map((trade, i) => (
              <div
                key={`${trade.name.en}-${i}`}
                aria-hidden={i >= TRADES.length}
                className="relative shrink-0 mr-4 w-[220px] h-[300px] rounded-[26px] overflow-hidden flex flex-col justify-end p-[22px]"
              >
                <Image
                  src={trade.image}
                  alt={t(trade.name)}
                  fill
                  sizes="220px"
                  // The repeats scroll in from off-screen; decoding them lazily
                  // mid-animation drops frames, so the strip's images load up
                  // front (all 30 cards share the same 10 files).
                  loading="eager"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,5,22,0), rgba(10,5,22,0.78))",
                  }}
                />
                <span className="relative font-bricolage text-[19px] font-semibold text-white">
                  {t(trade.name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
