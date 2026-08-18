// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { Check } from "lucide-react";
// import Reveal from "../../Reveal";
// import EyebrowLabel from "../../ui/EyebrowLabel";
// import { useLanguage } from "../../../i18n/LanguageProvider";
// import type { Translation } from "../../../i18n/config";

// const EASE = [0.22, 1, 0.36, 1] as const;

// type PackageItem = { label: Translation; indent?: 0 | 1 | 2 | 3 };

// const WEBSITE_ITEMS: PackageItem[] = [
//   { label: { en: "8–10 page website", nl: "Website van 8-10 pagina's" } },
//   { label: { en: "Mobile-friendly website", nl: "Mobielvriendelijke website" } },
//   { label: { en: "Request & contact forms", nl: "Aanvraag- en contactformulieren" } },
//   { label: { en: "Your own domain name", nl: "Eigen domeinnaam" }, indent: 1 },
//   { label: { en: "Hosting & SSL", nl: "Hosting & SSL" }, indent: 2 },
//   { label: { en: "Maintenance & updates", nl: "Onderhoud & updates" }, indent: 3 },
// ];

// const HUB_ITEMS: PackageItem[] = [
//   { label: { en: "Manage leads", nl: "Leads beheren" } },
//   { label: { en: "Online booking system", nl: "Online afsprakensysteem" }, indent: 1 },
//   { label: { en: "Organize client contacts", nl: "Klantcontacten organiseren" }, indent: 1 },
//   {
//     label: { en: "Create & send quotes and invoices", nl: "Offertes en facturen maken en versturen" },
//     indent: 1,
//   },
//   { label: { en: "Manage everything from one place", nl: "Alles beheren vanuit één plek" }, indent: 1 },
// ];

// const INDENT_CLASS = ["pl-0", "pl-6", "pl-11", "pl-16"];

// function PackageHandle() {
//   return (
//     <div
//       aria-hidden
//       className="absolute -top-[26px] left-1/2 -translate-x-1/2 h-[42px] w-[86px] rounded-t-full border-[9px] border-b-0 border-[var(--color-amber-300)]"
//     />
//   );
// }

// function PackageCard({
//   badge,
//   title,
//   items,
//   gradient,
// }: {
//   badge: string;
//   title: string;
//   items: PackageItem[];
//   gradient: string;
// }) {
//   const { t } = useLanguage();
//   return (
//     <div
//       className="relative w-full max-w-[470px] rounded-[32px] px-8 pt-11 pb-9 flex flex-col gap-5 mt-[26px]"
//       style={{ background: gradient }}
//     >
//       <PackageHandle />
//       <span className="self-center rounded-full bg-[var(--color-kournikova)]/15 px-4 py-[6px] font-poppins text-[12px] font-semibold tracking-[0.5px] text-[var(--color-amber-200)]">
//         {badge}
//       </span>
//       <h3 className="m-0 text-center font-poppins text-[22px] font-bold text-white">
//         {title}
//       </h3>
//       <ul className="flex flex-col gap-3">
//         {items.map((item) => (
//           <li
//             key={item.label.en}
//             className={`flex items-center gap-[10px] ${INDENT_CLASS[item.indent ?? 0]}`}
//           >
//             <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-kournikova)]/20">
//               <Check size={12} strokeWidth={3} className="text-[var(--color-amber-200)]" />
//             </span>
//             <span className="font-sans text-[14px] text-white/80">{t(item.label)}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function useStackedLayout() {
//   const [stacked, setStacked] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 819px)");
//     const apply = () => setStacked(mq.matches);
//     apply();
//     mq.addEventListener("change", apply);
//     return () => mq.removeEventListener("change", apply);
//   }, []);
//   return stacked;
// }

// export default function Solution() {
//   const { t } = useLanguage();
//   const stacked = useStackedLayout();

//   return (
//     <section
//       id="oplossing"
//       className="relative overflow-hidden rounded-[28px] bg-[var(--color-haiti)] fix-wide pt-16 lg:pt-28 pb-16 lg:pb-24 flex flex-col items-center gap-[18px]"
//     >
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -top-40 -right-30 w-[460px] h-[460px] rounded-full opacity-45"
//         style={{ background: "var(--color-violet-58)", filter: "blur(140px)" }}
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -bottom-50 -left-35 w-[420px] h-[420px] rounded-full opacity-40"
//         style={{ background: "var(--color-violet-42)", filter: "blur(140px)" }}
//       />

//       <div className="relative flex flex-col items-center gap-4">
//         <EyebrowLabel color="var(--color-violet-75)">
//           {t({ en: "The solution", nl: "De oplossing" })}
//         </EyebrowLabel>
//         <Reveal delay={0.05}>
//           <h2 className="m-0 max-w-[820px] text-center font-poppins font-bold text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-[-1px] text-white">
//             {t({
//               en: "Everything comes together in Growth Rocket.",
//               nl: "Alles komt samen in Growth Rocket.",
//             })}
//           </h2>
//         </Reveal>
//         <Reveal delay={0.1}>
//           <p className="m-0 max-w-160 text-center font-poppins text-[17px] leading-[1.55] text-white/68">
//             {t({
//               en: "From your online presence to your customers and admin — managed from a single place.",
//               nl: "Van je online aanwezigheid tot je klanten en administratie — geregeld vanuit één plek.",
//             })}
//           </p>
//         </Reveal>
//       </div>

//       <SolutionReveal stacked={stacked} />

//       <Reveal delay={0.15} className="relative w-full max-w-[1058px] mt-4">
//         <div className="flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-8 py-5">
//           <span className="text-center font-poppins text-[20px] font-medium text-white">
//             {t({
//               en: "One complete package, from €69 per month.",
//               nl: "Eén compleet pakket, vanaf €69 per maand.",
//             })}
//           </span>
//         </div>
//       </Reveal>
//     </section>
//   );
// }

// function SolutionReveal({ stacked }: { stacked: boolean }) {
//   const { t } = useLanguage();
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const inView = useInView(wrapRef, { once: true, amount: 0.3 });

//   const startD1 = stacked ? { y: 24, x: 0 } : { x: "calc(50% + 9px)", y: 0 };
//   const startD2 = stacked ? { y: -24, x: 0 } : { x: "calc(-50% - 9px)", y: 0 };

//   return (
//     <div
//       ref={wrapRef}
//       className="relative w-full max-w-[1320px] mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"
//     >
//       <motion.div
//         initial={startD1}
//         animate={inView ? { x: 0, y: 0 } : startD1}
//         transition={{ duration: 1, ease: EASE }}
//         className="relative z-[2] flex flex-col items-center justify-center gap-5"
//       >
//         <PackageCard
//           badge={t({ en: "PART 1", nl: "DEEL 01" })}
//           title={t({ en: "Professional website", nl: "Professionele website" })}
//           items={WEBSITE_ITEMS}
//           gradient="radial-gradient(120% 100% at 30% 0%, #241a3d 0%, var(--color-haiti) 100%)"
//         />
//         <a
//           href="#"
//           className="inline-flex items-center gap-[6px] font-poppins font-semibold text-[15px] tracking-[-0.2px] text-[var(--color-amber-500)]"
//         >
//           {t({ en: "See what's included →", nl: "See what's included →" })}
//         </a>
//       </motion.div>

//       <motion.div
//         initial={startD2}
//         animate={inView ? { x: 0, y: 0 } : startD2}
//         transition={{ duration: 1, ease: EASE }}
//         className="relative z-[1] flex flex-col items-center justify-center gap-5"
//       >
//         <PackageCard
//           badge={t({ en: "PART 2", nl: "DEEL 02" })}
//           title="Growth Rocket Hub"
//           items={HUB_ITEMS}
//           gradient="radial-gradient(120% 100% at 70% 0%, #58147a 0%, #2a0a3d 100%)"
//         />
//         <a
//           href="#"
//           className="inline-flex items-center gap-[6px] font-poppins font-semibold text-[15px] tracking-[-0.2px] text-[var(--color-amber-500)]"
//         >
//           {t({ en: "See all features →", nl: "See all features →" })}
//         </a>
//       </motion.div>

//       <motion.img
//         src="/home/circle-titles.svg"
//         alt={t({
//           en: "Marketing website + business tools in one",
//           nl: "Marketingwebsite + bedrijfstools in één",
//         })}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//         transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] block"
//         style={{ filter: "drop-shadow(0 24px 60px rgba(91,33,182,0.45))" }}
//       />
//     </div>
//   );
// }
//
//
//
//
//

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "../../Reveal";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

const EASE = [0.22, 1, 0.36, 1] as const;

type PackageItem = { label: Translation; indent?: 0 | 1 | 2 | 3 };

const WEBSITE_ITEMS: PackageItem[] = [
  { label: { en: "8–10 page website", nl: "Website van 8–10 pagina's" } },
  {
    label: { en: "Mobile-friendly website", nl: "Mobielvriendelijke website" },
  },
  {
    label: {
      en: "Request & contact forms",
      nl: "Aanvraag- en contactformulieren",
    },
  },
  { label: { en: "Your own domain name", nl: "Eigen domeinnaam" }, indent: 1 },
  { label: { en: "Hosting & SSL", nl: "Hosting & SSL" }, indent: 2 },
  {
    label: { en: "Maintenance & updates", nl: "Onderhoud & updates" },
    indent: 3,
  },
];

const HUB_ITEMS: PackageItem[] = [
  { label: { en: "Manage leads", nl: "Leads beheren" } },
  {
    label: { en: "Online booking system", nl: "Online afsprakensysteem" },
    indent: 1,
  },
  {
    label: { en: "Organize client contacts", nl: "Klantcontacten organiseren" },
    indent: 1,
  },
  {
    label: {
      en: "Create & send quotes and invoices",
      nl: "Offertes en facturen maken en versturen",
    },
    indent: 1,
  },
  {
    label: {
      en: "Manage everything from one place",
      nl: "Alles beheren vanuit één plek",
    },
    indent: 1,
  },
];

const INDENT_CLASS = ["pl-0", "pl-4", "pl-8", "pl-12"];

function PackageHandle() {
  return (
    <div
      aria-hidden
      className="absolute -top-[36px] left-1/2 -translate-x-1/2 h-[52px] w-[140px] rounded-t-[20px] border-[14px] border-b-0 border-[#f2d89c]"
      style={{
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    />
  );
}

function PackageCard({
  badge,
  title,
  items,
  gradient,
}: {
  badge: string;
  title: string;
  items: PackageItem[];
  gradient: string;
}) {
  const { t } = useLanguage();
  return (
    <div
      className="relative w-full max-w-[470px] rounded-[40px] px-2 lg:px-8 pt-10 pb-12 flex flex-col items-center gap-5 mt-[36px] border border-white/10 shadow-2xl"
      style={{ background: gradient }}
    >
      <PackageHandle />

      <span className="self-center rounded-full bg-white/10 border border-white/10 px-5 py-[5px] font-poppins text-[11.4px] font-semibold tracking-[0.8px] text-amber-200/90 uppercase">
        {badge}
      </span>

      <h3 className="m-0 text-center font-poppins text-[22px] font-semibold text-white mb-2">
        {title}
      </h3>

      <ul className="flex flex-col gap-3.5  w-full items-center">
        {items.map((item) => (
          <li
            key={item.label.en}
            className={`flex items-center justify-center gap-2.5 w-full ${INDENT_CLASS[item.indent ?? 0]}`}
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-200/20">
              <Check size={10} strokeWidth={3} className="text-amber-200" />
            </span>
            <span className="font-poppins text-[14px] text-white/80 ">
              {t(item.label)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function useStackedLayout() {
  const [stacked, setStacked] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 819px)");
    const apply = () => setStacked(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return stacked;
}

export default function Solution() {
  const { t } = useLanguage();
  const stacked = useStackedLayout();

  return (
    <section
      id="oplossing"
      className="relative overflow-hidden rounded-[28px] bg-[var(--color-haiti)] fix-wide py-[50px] lg:pt-28 lg:pb-24 flex flex-col items-center gap-[18px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-30 w-[460px] h-[460px] rounded-full opacity-45"
        style={{ background: "var(--color-violet-58)", filter: "blur(140px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-50 -left-35 w-[420px] h-[420px] rounded-full opacity-40"
        style={{ background: "var(--color-violet-42)", filter: "blur(140px)" }}
      />

      <div className="relative flex flex-col items-center gap-4">
        <EyebrowLabel color="var(--color-violet-75)">
          {t({ en: "The solution", nl: "De oplossing" })}
        </EyebrowLabel>
        <Reveal delay={0.05}>
          <h2 className="m-0 max-w-[820px] text-center font-poppins font-bold text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-[-1px] text-white">
            {t({
              en: "Everything comes together in Growth Rocket.",
              nl: "Alles komt samen in Growth Rocket.",
            })}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="m-0 max-w-160 text-center font-poppins text-[17px] leading-[1.55] text-white/68">
            {t({
              en: "From your online presence to your customers and admin — managed from a single place.",
              nl: "Van je online aanwezigheid tot je klanten en administratie — geregeld vanuit één plek.",
            })}
          </p>
        </Reveal>
      </div>

      <SolutionReveal stacked={stacked} />

      <Reveal delay={0.15} className="relative w-full max-w-[1058px] mt-4">
        <div className="flex items-center justify-center rounded-2xl lg:rounded-full border border-white/12 bg-white/6 px-8 py-5">
          <span className="text-center font-poppins text-[14px] lg:text-[20px] font-medium text-white">
            {t({
              en: "One complete package, from €69 per month.",
              nl: "Eén compleet pakket, vanaf €69 per maand.",
            })}
          </span>
        </div>
      </Reveal>
    </section>
  );
}

function SolutionReveal({ stacked }: { stacked: boolean }) {
  const { t } = useLanguage();
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.3 });

  const startD1 = stacked ? { y: 24, x: 0 } : { x: "calc(50% + 9px)", y: 0 };
  const startD2 = stacked ? { y: -24, x: 0 } : { x: "calc(-50% - 9px)", y: 0 };

  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[1320px] mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch"
    >
      <motion.div
        initial={startD1}
        animate={inView ? { x: 0, y: 0 } : startD1}
        transition={{ duration: 1, ease: EASE }}
        className="relative z-[2] flex flex-col items-center justify-center gap-5"
      >
        <PackageCard
          badge={t({ en: "PART 1", nl: "DEEL 01" })}
          title={t({ en: "Professional website", nl: "Professionele website" })}
          items={WEBSITE_ITEMS}
          gradient="linear-gradient(180deg, #181330 0%, #0d0a1d 100%)"
        />
        <a
          href="#"
          className="inline-flex items-center gap-[6px] font-poppins font-semibold text-[15px] tracking-[-0.2px] text-[var(--color-amber-500)]"
        >
          {t({ en: "See what's included →", nl: "See what's included →" })}
        </a>
      </motion.div>

      {/* On mobile the badge sits in normal flow, overlapping the seam between
          the stacked cards. From md up it becomes an absolutely centered
          circle straddling the two side-by-side cards, as on desktop. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
        className="relative z-[3] mx-auto my-6 sm:my-8 md:mt-0 md:mb-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] flex items-center justify-center rounded-full md:rounded-full pointer-events-none text-center"
        style={{
          background: "#b3a5fa",
          border: "8px solid #ebe3de",
          filter: "drop-shadow(0 24px 60px rgba(91,33,182,0.45))",
        }}
      >
        <span className="flex flex-col items-center gap-0.5 px-4 font-poppins leading-tight mt-5 font-semibold">
          <span className="text-[15px] sm:text-[20px]  text-[var(--color-violet-42)]">
            {t({ en: "Marketing website", nl: "Marketingwebsite" })}
          </span>
          <span className="text-[16px] sm:text-[20px]  text-[var(--color-haiti)]">
            +
          </span>
          <span className="text-[15px] sm:text-[19px]  text-[var(--color-violet-42)]">
            {t({ en: "business tools", nl: "bedrijfstools" })}
          </span>
          <span className="text-[14px] sm:text-[17px]  text-[var(--color-haiti)]">
            {t({ en: "in one", nl: "in één" })}
          </span>
        </span>
      </motion.div>

      <motion.div
        initial={startD2}
        animate={inView ? { x: 0, y: 0 } : startD2}
        transition={{ duration: 1, ease: EASE }}
        className="relative z-[1] flex flex-col items-center justify-center gap-5"
      >
        <PackageCard
          badge={t({ en: "PART 2", nl: "DEEL 02" })}
          title="Growth Rocket Hub"
          items={HUB_ITEMS}
          gradient="linear-gradient(180deg, #53117d 0%, #290842 100%)"
        />
        <a
          href="#"
          className="inline-flex items-center gap-[6px] font-poppins font-semibold text-[15px] tracking-[-0.2px] text-[var(--color-amber-500)]"
        >
          {t({ en: "See all features →", nl: "See all features →" })}
        </a>
      </motion.div>
    </div>
  );
}
