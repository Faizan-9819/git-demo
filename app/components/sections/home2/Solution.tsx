"use client";

import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import ArrowIcon from "../../ui/ArrowIcon";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

// ─────────────────────────────────────────────────────────────────────────────
// PREVIOUS VERSION — commented out, superseded by the grsolidvariant.html port
// below. It used the #E3FF64 lime with a violet second headline line, Poppins
// throughout, 28px radii, Reveal entrance animations and the shared Button
// component; none of those survive in the HTML this section is now matched
// against. Kept verbatim (line comments, not a block comment, because the JSX
// comment inside it would close one early).
//
// "use client";
// import type { ReactNode } from "react";
// import { Plus } from "lucide-react";
// import Reveal from "../../Reveal";
// import Button from "../../ui/Button";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import type { Translation } from "../../../i18n/config";
//
// const ACCENT = "#E3FF64";
//
// type FeatureItem = { label: Translation; icon: ReactNode };
//
// function FeatureIcon({ children }: { children: ReactNode }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#E3FF54"
//       strokeWidth={1.65}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       className="h-[17px] w-[17px]"
//     >
//       {children}
//     </svg>
//   );
// }
//
// function HeaderIcon({ children }: { children: ReactNode }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth={1.5}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       aria-hidden="true"
//       className="h-[26px] w-[26px]"
//     >
//       {children}
//     </svg>
//   );
// }
//
// const WEBSITE_FEATURES: FeatureItem[] = [
//   {
//     label: {
//       en: "8–10 pages, built for your business",
//       nl: "8–10 pagina's, gebouwd voor jouw bedrijf",
//     },
//     icon: (
//       <FeatureIcon>
//         <rect x="6" y="3" width="14" height="16" rx="2" />
//         <path d="M3 7v12a3 3 0 0 0 3 3h10M10 8h6M10 12h6" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: {
//       en: "A mobile-friendly website",
//       nl: "Een mobielvriendelijke website",
//     },
//     icon: (
//       <FeatureIcon>
//         <rect x="6" y="2" width="12" height="20" rx="3" />
//         <path d="M10 5h4M11 18h2" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: {
//       en: "Enquiry & contact forms",
//       nl: "Aanvraag- en contactformulieren",
//     },
//     icon: (
//       <FeatureIcon>
//         <rect x="3" y="3" width="18" height="18" rx="3" />
//         <path d="M7 8h10M7 12h5M14 16h3M7 16h2" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: { en: "Your own domain name", nl: "Je eigen domeinnaam" },
//     icon: (
//       <FeatureIcon>
//         <circle cx="12" cy="12" r="9" />
//         <ellipse cx="12" cy="12" rx="4" ry="9" />
//         <path d="M3 12h18" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: { en: "Hosting & SSL included", nl: "Hosting & SSL inbegrepen" },
//     icon: (
//       <FeatureIcon>
//         <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
//         <path d="m8 12 3 3 5-6" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: { en: "Maintenance & updates", nl: "Onderhoud & updates" },
//     icon: (
//       <FeatureIcon>
//         <path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5" />
//       </FeatureIcon>
//     ),
//   },
// ];
//
// const HUB_FEATURES: FeatureItem[] = [
//   {
//     label: {
//       en: "Lead & enquiry management",
//       nl: "Beheer van leads & aanvragen",
//     },
//     icon: (
//       <FeatureIcon>
//         <path d="m5 4-3 9v7h20v-7l-3-9H5Z" />
//         <path d="M2 13h6l2 3h4l2-3h6M12 3v7m-3-3 3 3 3-3" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: { en: "Online appointment booking", nl: "Online afsprakensysteem" },
//     icon: (
//       <FeatureIcon>
//         <rect x="3" y="5" width="18" height="16" rx="3" />
//         <path d="M7 2v6M17 2v6M3 11h18m-13 5 2 2 4-4" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: {
//       en: "Customer & contact records",
//       nl: "Klant- en contactgegevens",
//     },
//     icon: (
//       <FeatureIcon>
//         <circle cx="9" cy="7" r="3" />
//         <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: { en: "Create & send quotes", nl: "Offertes maken & versturen" },
//     icon: (
//       <FeatureIcon>
//         <path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8M8 16h5" />
//       </FeatureIcon>
//     ),
//   },
//   {
//     label: { en: "Create & send invoices", nl: "Facturen maken & versturen" },
//     icon: (
//       <FeatureIcon>
//         <rect x="3" y="3" width="18" height="18" rx="3" />
//         <path d="M16 7h-5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h5M6 10h8M6 14h7" />
//       </FeatureIcon>
//     ),
//   },
// ];
//
// function OfferCard({
//   gradient,
//   headerIcon,
//   titlePrefix,
//   titleHighlight,
//   titleLine2,
//   tagline,
//   features,
//   iconChipClass,
//   headerIconClass = "bg-[#E3FF54] text-[#7b39ea] rounded-2xl",
//   footNote,
//   linkLabel,
//   delay,
// }: {
//   gradient: string;
//   headerIcon: ReactNode;
//   titlePrefix?: Translation;
//   titleHighlight: Translation | string;
//   titleLine2: Translation;
//   tagline: Translation;
//   features: FeatureItem[];
//   iconChipClass: string;
//   headerIconClass?: string;
//   footNote: Translation;
//   linkLabel: Translation;
//   delay: number;
// }) {
//   const { t } = useLanguage();
//
//   return (
//     <Reveal
//       delay={delay}
//       className={`relative flex h-full flex-col rounded-[28px] border border-white/10 p-6 sm:p-10 ${gradient}`}
//     >
//       <div className="flex items-start justify-between gap-4">
//         <h3 className="m-0 font-poppins text-[22px] sm:text-[24px] font-bold leading-[1.2] text-white">
//           {titlePrefix ? t(titlePrefix) : ""}
//           <span style={{ color: ACCENT }}>
//             {typeof titleHighlight === "string"
//               ? titleHighlight
//               : t(titleHighlight)}
//           </span>
//           .
//           <br />
//           {t(titleLine2)}
//         </h3>
//         <span
//           className={`flex h-12 w-12 shrink-0 items-center justify-center ${headerIconClass}`}
//         >
//           {headerIcon}
//         </span>
//       </div>
//
//       <p className="m-0 mt-3 font-poppins text-[14px] leading-[1.5] text-[#D9CDEA]">
//         {t(tagline)}
//       </p>
//
//       <ul className="mt-6 flex flex-col">
//         {features.map((item) => (
//           <li
//             key={item.label.en}
//             className="flex items-center gap-3 border-t border-white/10 !py-3.5 first:pt-0 last:pb-0"
//           >
//             <span
//               className={`flex h-9 w-9 shrink-0 text-[#E3FF54] items-center justify-center rounded-xl ${iconChipClass}`}
//             >
//               {item.icon}
//             </span>
//             <span className="font-poppins text-[18px] leading-[1.4] text-white">
//               {t(item.label)}
//             </span>
//           </li>
//         ))}
//       </ul>
//
//       <p
//         className="m-0  flex items-center gap-2 border-t border-white/10 pt-4 font-poppins text-[14px] text-white/50"
//         style={{ color: ACCENT }}
//       >
//         <span
//           aria-hidden="true"
//           className="text-[25px]"
//           style={{ color: ACCENT }}
//         >
//           ✳
//         </span>
//         {t(footNote)}
//       </p>
//     </Reveal>
//   );
// }
//
// export default function Solution() {
//   const { t } = useLanguage();
//
//   return (
//     <section
//       id="oplossing"
//       className="relative overflow-hidden rounded-[28px]"
//       style={{ background: ACCENT }}
//     >
//       <div className="fix flex flex-col gap-10 py-[50px] lg:gap-12 lg:py-24">
//         <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end lg:gap-10">
//           <div>
//             {/* <Reveal>
//               <p className="m-0 font-poppins text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--color-haiti)]/70">
//                 {t({
//                   en: "01 / The complete picture",
//                   nl: "01 / Het complete plaatje",
//                 })}
//               </p>
//             </Reveal> */}
//             <Reveal delay={0.05}>
//               <h2 className="m-0 mt-2 max-w-[560px] font-poppins text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
//                 {t({
//                   en: "Good on the outside.",
//                   nl: "Goed aan de buitenkant.",
//                 })}
//                 <br />
//                 <span className="text-[var(--color-violet-42)]">
//                   {t({
//                     en: "Connected on the inside.",
//                     nl: "Verbonden aan de binnenkant.",
//                   })}
//                 </span>
//               </h2>
//             </Reveal>
//           </div>
//           <Reveal delay={0.1} className="max-w-[360px] ">
//             <p className="m-0 font-poppins text-[15px] leading-[1.55] text-[var(--color-haiti)]/70">
//               {t({
//                 en: "A professional website ",
//                 nl: "Een professionele website ",
//               })}
//               <strong className="text-[var(--color-haiti)]">
//                 {t({ en: "and", nl: "en" })}
//               </strong>
//               {t({
//                 en: " the tools to run the business behind it. Here's what comes together in your package.",
//                 nl: " de tools om het bedrijf erachter te runnen. Dit komt samen in jouw pakket.",
//               })}
//             </p>
//           </Reveal>
//         </div>
//
//         <div className="relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-4">
//           <OfferCard
//             delay={0.05}
//             // gradient="bg-[linear-gradient(180deg,#181330_0%,#0d0a1d_100%)]"
//             gradient="bg-[linear-gradient(180deg,#2e1754_0%,#1c0c38_100%)]"
//             headerIcon={
//               <HeaderIcon>
//                 <rect x="2" y="4" width="20" height="16" rx="3" />
//                 <path d="M2 9h20M6 6.5h.1M9 6.5h.1M7 14h10M7 17h6" />
//               </HeaderIcon>
//             }
//             titlePrefix={{ en: "Your ", nl: "Jouw " }}
//             titleHighlight={{ en: "Website", nl: "Website" }}
//             titleLine2={{
//               en: "Made for your business.",
//               nl: "Gemaakt voor jouw bedrijf.",
//             }}
//             tagline={{
//               en: "We write it. We build it. We look after it.",
//               nl: "Wij schrijven het. Wij bouwen het. Wij onderhouden het.",
//             }}
//             features={WEBSITE_FEATURES}
//             iconChipClass="bg-white/10 text-white/80"
//             headerIconClass="bg-[#E3FF54] text-[#21182f] rounded-2xl rotate-[-8deg]"
//             footNote={{
//               en: "Built for you. Looked after for you.",
//               nl: "Voor jou gebouwd. Voor jou onderhouden.",
//             }}
//             linkLabel={{
//               en: "See what's included",
//               nl: "Bekijk wat inbegrepen is",
//             }}
//           />
//
//           <span
//             aria-hidden="true"
//             className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#e3ff54] bg-[var(--color-haiti)] md:flex"
//             style={{ color: ACCENT }}
//           >
//             <Plus size={38} strokeWidth={2.5} />
//           </span>
//
//           <OfferCard
//             delay={0.1}
//             // gradient="bg-[linear-gradient(180deg,#53117d_0%,#290842_100%)]"
//             gradient="bg-[linear-gradient(180deg,#7c3aed_0%,#4c1d95_100%)]"
//             headerIcon={
//               <HeaderIcon>
//                 <rect x="8" y="8" width="8" height="8" rx="2" />
//                 <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3m8 8 3 3M19 5l-3 3m-8 8-3 3" />
//               </HeaderIcon>
//             }
//             titleHighlight="Growth Rocket Hub"
//             titleLine2={{
//               en: "Your work, in one place.",
//               nl: "Jouw werk, op één plek.",
//             }}
//             tagline={{
//               en: "Manage customers, bookings, quotes and invoices.",
//               nl: "Beheer klanten, boekingen, offertes en facturen.",
//             }}
//             features={HUB_FEATURES}
//             iconChipClass="bg-white/15 text-white"
//             headerIconClass="bg-white text-[#53117d] rounded-full"
//             footNote={{
//               en: "Your everyday work. All in one place.",
//               nl: "Jouw dagelijkse werk. Alles op één plek.",
//             }}
//             linkLabel={{ en: "See all features", nl: "Bekijk alle functies" }}
//           />
//         </div>
//
//         <Reveal
//           delay={0.15}
//           className="flex flex-col items-center gap-6 border-[var(--color-haiti)]/15  sm:flex-row sm:items-center sm:justify-between"
//         >
//           <div className="flex items-center gap-5">
//             <span
//               aria-hidden="true"
//               className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[50px] text-[#6034cb]"
//             >
//               ✳
//             </span>
//             <div>
//               <p className="m-0 font-poppins text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--color-haiti)]/70">
//                 {t({
//                   en: "Two parts. One complete package.",
//                   nl: "Twee onderdelen. Eén compleet pakket.",
//                 })}
//               </p>
//               <h3 className="m-0 mt-1 font-poppins text-[18px] font-bold text-[var(--color-haiti)]">
//                 {t({
//                   en: "Your website + your business hub.",
//                   nl: "Jouw website + jouw bedrijfshub.",
//                 })}
//               </h3>
//             </div>
//           </div>
//
//           <div className="flex items-center gap-5">
//             <p className="m-0 font-poppins text-[15px] text-[var(--color-haiti)]">
//               {t({ en: "From ", nl: "Vanaf " })}
//               <strong className="text-[22px]">€69</strong>
//               <span className="text-[var(--color-haiti)]/60">
//                 {t({ en: " / month", nl: " / maand" })}
//               </span>
//             </p>
//             <Button href="#pricing" variant="dark" arrow="up-right">
//               {t({ en: "Explore the package", nl: "Bekijk het pakket" })}
//             </Button>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
// ─────────────────────────────────────────────────────────────────────────────

/**
 * The Complete Picture — ported from `#product.offer-section` in
 * grsolidvariant.html (the fold headed "Good on the outside.").
 *
 * As in the WhyUs port, the stylesheet keeps rewriting this fold in later
 * blocks, so the values below are the *resolved* ones, not what the first
 * `.offer-*` rules say:
 *
 * - The fold is the lime surface again (`#e4fa65`) with one dark headline:
 *   the last block restores `background:var(--gr-lime)` after an earlier one
 *   had flipped every light fold to lavender.
 * - Both headline lines are `--gr-deep` (#0a0516). The purple `.offer-heading
 *   h2 span` is overridden away, so "Connected on the inside." is no longer
 *   violet — that is the colour mismatch this port fixes.
 * - Type is the page's own stack: Bricolage 600 for h2/h3, Bricolage 500 for
 *   the feature labels, Inter for body copy — not Poppins.
 * - Every box lands on the 13px global radius standard, the two big header
 *   icons included; the `border-radius:50%` on the Hub icon loses to that
 *   `!important`. The `+` badge is an intentional circle and stays round.
 * - The section runs `data-offer-layout="a"`, whose rules pin the feature rows
 *   (38px icon chips, 14px rows, centred) across every breakpoint, and hide
 *   the `.offer-short-label` alternates. A later block also hides every
 *   `.eyebrow`, which is why neither "01 / THE COMPLETE PICTURE" nor "TWO
 *   PARTS. ONE COMPLETE PACKAGE." is rendered here.
 * - The `+` badge sits between the two cards as asked: absolutely centred on
 *   the column gap from 761px up, and folded back into the flow below that,
 *   overlapping the stacked cards by 8px.
 *
 * The source sheet is desktop-first with steps at 1100px, 760px and 360px;
 * those are inverted into min-width steps here, so the base values are the
 * smallest ones and the layout widens as the viewport does.
 */

const CARD_SHELL =
  "flex min-w-0 flex-col rounded-[13px] px-[18px] pt-6 text-white " +
  "min-[361px]:px-[23px] min-[361px]:pt-7 min-[761px]:px-[25px] min-[1101px]:px-[34px] min-[1101px]:pt-[35px]";

type FeatureItem = { label: Translation; icon: ReactNode };

/** Shared attributes of the feature-row icons, copied from the source markup. */
function FeatureIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.65}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[23px] w-[23px]"
    >
      {children}
    </svg>
  );
}

/** The rotated card-header icon. Same SVG attributes, four size steps. */
function BigIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.65}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6 min-[361px]:h-7 min-[361px]:w-7 min-[761px]:h-[29px] min-[761px]:w-[29px] min-[1101px]:h-8 min-[1101px]:w-8"
    >
      {children}
    </svg>
  );
}

const WEBSITE_FEATURES: FeatureItem[] = [
  {
    label: {
      en: "8–10 pages, built for your business",
      nl: "8–10 pagina's, gebouwd voor jouw bedrijf",
    },
    icon: (
      <FeatureIcon>
        <rect x="6" y="3" width="14" height="16" rx="2" />
        <path d="M3 7v12a3 3 0 0 0 3 3h10M10 8h6M10 12h6" />
      </FeatureIcon>
    ),
  },
  {
    label: {
      en: "A mobile-friendly website",
      nl: "Een mobielvriendelijke website",
    },
    icon: (
      <FeatureIcon>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M10 5h4M11 18h2" />
      </FeatureIcon>
    ),
  },
  {
    label: {
      en: "Enquiry & contact forms",
      nl: "Aanvraag- en contactformulieren",
    },
    icon: (
      <FeatureIcon>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 8h10M7 12h5M14 16h3M7 16h2" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Your own domain name", nl: "Je eigen domeinnaam" },
    icon: (
      <FeatureIcon>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Hosting & SSL included", nl: "Hosting & SSL inbegrepen" },
    icon: (
      <FeatureIcon>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Maintenance & updates", nl: "Onderhoud & updates" },
    icon: (
      <FeatureIcon>
        <path d="M20 8a8 8 0 0 0-14-3L3 8m0-5v5h5M4 16a8 8 0 0 0 14 3l3-3m0 5v-5h-5" />
      </FeatureIcon>
    ),
  },
];

const HUB_FEATURES: FeatureItem[] = [
  {
    label: {
      en: "Lead & enquiry management",
      nl: "Beheer van leads & aanvragen",
    },
    icon: (
      <FeatureIcon>
        <path d="m5 4-3 9v7h20v-7l-3-9H5Z" />
        <path d="M2 13h6l2 3h4l2-3h6M12 3v7m-3-3 3 3 3-3" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Online appointment booking", nl: "Online afsprakensysteem" },
    icon: (
      <FeatureIcon>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M7 2v6M17 2v6M3 11h18m-13 5 2 2 4-4" />
      </FeatureIcon>
    ),
  },
  {
    label: {
      en: "Customer & contact records",
      nl: "Klant- en contactgegevens",
    },
    icon: (
      <FeatureIcon>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Create & send quotes", nl: "Offertes maken & versturen" },
    icon: (
      <FeatureIcon>
        <path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8M8 16h5" />
      </FeatureIcon>
    ),
  },
  {
    label: { en: "Create & send invoices", nl: "Facturen maken & versturen" },
    icon: (
      <FeatureIcon>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M16 7h-5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h5M6 10h8M6 14h7" />
      </FeatureIcon>
    ),
  },
];

/**
 * One package card. `evenRows` is the Website card's `grid-template-rows:
 * repeat(6,1fr)` — the six rows share the leftover height so both cards end up
 * the same length; the Hub list is a plain block under `data-offer-layout="a"`.
 */
function OfferCard({
  id,
  surface,
  headerIcon,
  headerIconClass,
  titlePrefix,
  titleHighlight,
  titleLine2,
  tagline,
  taglineClass,
  features,
  featureIconClass,
  evenRows,
  footNote,
}: {
  id: string;
  surface: string;
  headerIcon: ReactNode;
  headerIconClass: string;
  titlePrefix?: Translation;
  titleHighlight: Translation | string;
  titleLine2: Translation;
  tagline: Translation;
  taglineClass: string;
  features: FeatureItem[];
  featureIconClass: string;
  evenRows?: boolean;
  footNote: Translation;
}) {
  const { t } = useLanguage();

  return (
    <article className={`${CARD_SHELL} ${surface}`} aria-labelledby={id}>
      <header>
        <div className="flex items-center justify-between gap-[13px] min-[761px]:gap-3 min-[1101px]:gap-5">
          <h3
            id={id}
            className="m-0 font-bricolage text-[28px] font-semibold leading-[1.14] tracking-[-0.035em] min-[361px]:text-[31px] min-[761px]:text-[30px] min-[1101px]:text-[33px]"
          >
            {titlePrefix ? t(titlePrefix) : ""}
            <span className="text-[#e4fa65]">
              {typeof titleHighlight === "string"
                ? titleHighlight
                : t(titleHighlight)}
            </span>
            .
            <br />
            {t(titleLine2)}
          </h3>

          <span
            className={`grid h-[39px] w-[39px] flex-shrink-0 place-items-center rounded-[13px] min-[361px]:h-12 min-[361px]:w-12 min-[761px]:h-[49px] min-[761px]:w-[49px] min-[1101px]:h-[52px] min-[1101px]:w-[52px] ${headerIconClass}`}
          >
            {headerIcon}
          </span>
        </div>

        <p
          className={`mt-[15px] mb-[22px] font-sans text-[16px] leading-[1.7] min-[761px]:mb-[23px] min-[761px]:min-h-[54px] min-[1101px]:min-h-0 ${taglineClass}`}
        >
          {t(tagline)}
        </p>
      </header>

      <ul
        className={
          "m-0 flex-1 list-none p-0 " +
          (evenRows
            ? "min-[761px]:grid min-[761px]:[grid-template-rows:repeat(6,1fr)]"
            : "")
        }
      >
        {features.map((item) => (
          <li
            key={item.label.en}
            className="flex items-center gap-[15px] border-t border-[#ffffff29] py-[14px]"
          >
            <span
              className={`grid h-[38px] w-[38px] flex-shrink-0 place-items-center rounded-[13px] text-[#e4fa65] ${featureIconClass}`}
            >
              {item.icon}
            </span>
            <h4 className="m-0 font-bricolage text-[20px] font-medium leading-[1.18] tracking-[-0.02em] min-[361px]:text-[21px] min-[1101px]:text-[22px]">
              {t(item.label)}
            </h4>
          </li>
        ))}
      </ul>

      <p className="m-0 flex items-center gap-[10px] border-t border-white/25 pt-[17px] pb-[19px] font-sans text-[13px] font-medium text-[#e4fa65] min-[761px]:gap-[13px] min-[1101px]:text-[14px]">
        <span
          aria-hidden="true"
          className="text-[23px] leading-none min-[761px]:text-[27px]"
        >
          ✳
        </span>
        {t(footNote)}
      </p>
    </article>
  );
}

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section
      id="oplossing"
      aria-labelledby="offer-heading"
      className="rounded-[13px] bg-[#e4fa65] pt-14 pb-14 text-[#0a0516] min-[761px]:pt-20 min-[761px]:pb-16"
    >
      <div className="fix">
        {/* The `.eyebrow` ("01 / THE COMPLETE PICTURE") is display:none in the
            source, so it is left out rather than rendered and hidden. */}
        <div className="mb-[44px] grid grid-cols-1 items-end gap-[21px] min-[761px]:grid-cols-[2fr_1fr] min-[761px]:gap-[30px] min-[1101px]:grid-cols-[1.9fr_1fr] min-[1101px]:gap-[55px]">
          <h2
            id="offer-heading"
            className="m-0 font-bricolage text-[clamp(35px,9.7vw,52px)] font-semibold leading-[1.07] tracking-[-0.045em] min-[761px]:text-[clamp(40px,4.6vw,65px)]"
          >
            {t({ en: "Good on the outside.", nl: "Goed aan de buitenkant." })}
            <br />
            <span>
              {t({
                en: "Connected on the inside.",
                nl: "Verbonden aan de binnenkant.",
              })}
            </span>
          </h2>

          <p className="m-0 font-sans text-[16px] leading-[1.6] text-[#625a70] min-[761px]:mb-[5px] min-[761px]:ml-auto min-[761px]:max-w-[340px]">
            {t({
              en: "A professional website ",
              nl: "Een professionele website ",
            })}
            <strong className="font-semibold text-[#0a0516]">
              {t({ en: "and", nl: "en" })}
            </strong>
            {t({
              en: " the tools to run the business behind it. Here’s what comes together in your package.",
              nl: " de tools om het bedrijf erachter te runnen. Dit komt samen in jouw pakket.",
            })}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-0 min-[761px]:grid-cols-2 min-[761px]:gap-6">
          <OfferCard
            id="website-heading"
            surface="bg-[#0a0516]"
            headerIcon={
              <BigIcon>
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M2 9h20M6 6.5h.1M9 6.5h.1M7 14h10M7 17h6" />
              </BigIcon>
            }
            headerIconClass="rotate-[-7deg] bg-[#e4fa65] text-[#0a0516]"
            titlePrefix={{ en: "Your ", nl: "Jouw " }}
            titleHighlight={{ en: "Website", nl: "Website" }}
            titleLine2={{
              en: "Made for your business.",
              nl: "Gemaakt voor jouw bedrijf.",
            }}
            tagline={{
              en: "We write it. We build it. We look after it.",
              nl: "Wij schrijven het. Wij bouwen het. Wij onderhouden het.",
            }}
            taglineClass="text-[#c9c2d4]"
            features={WEBSITE_FEATURES}
            featureIconClass="bg-[#ffffff0d]"
            evenRows
            footNote={{
              en: "Built for you. Looked after for you.",
              nl: "Voor jou gebouwd. Voor jou onderhouden.",
            }}
          />

          {/* The `+` that joins the two cards. From 761px up it is absolutely
              centred on the column gap in *both* axes — the source pins it near
              the top (`top:46/51px`), which is the one place this port departs
              from the HTML. Below 761px it folds back into the flow so it
              straddles the two stacked cards. */}
          <span
            aria-hidden="true"
            className="relative z-[1] mx-auto my-[-8px] grid h-[74px] w-[74px] place-items-center rounded-full border-[6px] border-[#e4fa65] bg-[#0a0516] text-[#e4fa65] min-[761px]:absolute min-[761px]:top-1/2 min-[761px]:left-1/2 min-[761px]:mx-0 min-[761px]:my-0 min-[761px]:h-[68px] min-[761px]:w-[68px] min-[761px]:-translate-x-1/2 min-[761px]:-translate-y-1/2 min-[1101px]:h-[76px] min-[1101px]:w-[76px]"
          >
            <Plus size={38} strokeWidth={2.5} />
          </span>

          <OfferCard
            id="hub-heading"
            surface="bg-[#5b2dce]"
            headerIcon={
              <BigIcon>
                <rect x="8" y="8" width="8" height="8" rx="2" />
                <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3m8 8 3 3M19 5l-3 3m-8 8-3 3" />
              </BigIcon>
            }
            headerIconClass="rotate-[7deg] bg-white text-[#5b2dce]"
            titleHighlight="Growth Rocket Hub"
            titleLine2={{
              en: "Your work, in one place.",
              nl: "Jouw werk, op één plek.",
            }}
            tagline={{
              en: "Manage customers, bookings, quotes and invoices.",
              nl: "Beheer klanten, boekingen, offertes en facturen.",
            }}
            taglineClass="text-white/[0.88]"
            features={HUB_FEATURES}
            featureIconClass="bg-white/[0.12]"
            footNote={{
              en: "Your everyday work. All in one place.",
              nl: "Jouw dagelijkse werk. Alles op één plek.",
            }}
          />
        </div>

        {/* Package summary bar. Its eyebrow ("TWO PARTS. ONE COMPLETE
            PACKAGE.") is hidden by the same global rule as the one above. */}
        <div className="block pt-[30px] min-[761px]:flex min-[761px]:items-start min-[761px]:justify-between min-[761px]:gap-[25px] min-[761px]:pt-9 min-[1101px]:items-center">
          <div className="flex items-center gap-[13px] min-[761px]:gap-5">
            <span
              aria-hidden="true"
              className="flex-shrink-0 text-[39px] leading-none text-[#5b2dce] min-[761px]:text-[57px]"
            >
              ✳
            </span>
            <h3 className="m-0 font-bricolage text-[27px] font-semibold leading-[1.12] tracking-[-0.035em] min-[761px]:text-[26px] min-[1101px]:text-[29px]">
              {t({
                en: "Your website + your business hub.",
                nl: "Jouw website + jouw bedrijfshub.",
              })}
            </h3>
          </div>

          <div className="mt-[25px] flex flex-wrap items-start justify-between gap-[18px] min-[761px]:mt-0 min-[761px]:flex-col min-[761px]:flex-nowrap min-[761px]:items-end min-[761px]:justify-start min-[761px]:gap-[14px] min-[1101px]:flex-row min-[1101px]:items-center min-[1101px]:gap-6">
            <p className="m-0 font-sans text-[14px] leading-[1.3] whitespace-nowrap">
              {t({ en: "From ", nl: "Vanaf " })}
              <strong className="font-bricolage text-[40px] font-semibold tracking-[-0.05em] min-[761px]:text-[42px]">
                €69
              </strong>
              <span>{t({ en: " / month", nl: " / maand" })}</span>
            </p>

            {/* Same CTA behaviour as every other call to action on the page
                (cf. "View full pricing" in PricingTeaser): `arrow-cta` supplies
                the hover lift and drives ArrowIcon's two-slot swap. No colour
                change on hover — the source's `#49217b` is dropped so this
                reacts like the rest. */}
            <a
              href="#pricing"
              className="arrow-cta inline-flex min-h-[51px] items-center justify-center gap-4 rounded-full border border-transparent bg-[#0a0516] px-[17px] py-[13px] font-sans text-[14px] font-semibold leading-[1.35] whitespace-nowrap text-[#e4fa65] min-[761px]:min-h-[52px] min-[761px]:gap-6 min-[761px]:px-5 min-[761px]:py-[14px] min-[761px]:text-[15px]"
            >
              {t({ en: "Explore the package", nl: "Bekijk het pakket" })}
              <ArrowIcon direction="up-right" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
