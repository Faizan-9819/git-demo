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
import { useCallback, useEffect, useState } from "react";
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

const TRADES: { name: Translation; image: string }[] = [
  {
    name: { en: "Electrician", nl: "Elektricien" },
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Plumber", nl: "Loodgieter" },
    image:
      "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Cleaning company", nl: "Schoonmaakbedrijf" },
    image:
      "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Consultant", nl: "Consultant" },
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Accountant", nl: "Accountant" },
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Hairdresser / salon", nl: "Kapper / salon" },
    image:
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Coach", nl: "Coach" },
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Healthcare professional", nl: "Zorgprofessional" },
    image:
      "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Handyman business", nl: "Klusbedrijf" },
    image:
      "https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?auto=format&fit=crop&w=600&q=70",
  },
  {
    name: { en: "Business service provider", nl: "Zakelijke dienstverlener" },
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=70",
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
      className="relative overflow-hidden rounded-[28px] bg-white py-[50px] lg:pt-28 lg:pb-24 flex flex-col gap-2"
    >
      <div className="fix-wide grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div className="flex flex-col gap-4 max-w-140">
          <EyebrowLabel align="left">
            {t({ en: "Who it's for", nl: "Voor wie" })}
          </EyebrowLabel>
          <h2 className="m-0 font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
            {withBreaks(
              t({
                en: "Built for entrepreneurs like you.",
                nl: "Gemaakt voor ondernemers zoals jij.",
              }),
            )}
          </h2>
        </div>
        <Reveal
          delay={0.1}
          className="self-start justify-self-end pt-[0px] max-w-95"
        >
          <p className="m-0 text-[16px] leading-[1.6] text-[var(--color-dolphin)] ">
            {t({
              en: "Different businesses, the same basics: coming across as professional, welcoming customers, planning appointments, keeping client details, and sending quotes and invoices.",
              nl: "Andere bedrijven, dezelfde basis: professioneel overkomen, klanten ontvangen, afspraken plannen, klantgegevens bijhouden, offertes en facturen versturen.",
            })}
          </p>
        </Reveal>
      </div>

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
                <span className="relative font-poppins text-[19px] font-semibold text-white">
                  {t(trade.name)}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="fix-wide flex items-center justify-center gap-[10px] sm:hidden">
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
      <div className="hidden sm:block group mt-5">
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
      </div>
    </section>
  );
}
