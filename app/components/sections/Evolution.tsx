"use client";
// import type { CSSProperties, ReactNode } from "react";
// import Reveal from "../Reveal";
// import Parallax from "../Parallax";

// const BEFORE_ITEMS = [
//   t({ en: "Enquiries scattered across WhatsApp, email and calls", nl: "Aanvragen verspreid over WhatsApp, e-mail en telefoontjes" }),
//   t({ en: "Missed messages and forgotten follow-ups", nl: "Gemiste berichten en vergeten opvolgingen" }),
//   "No structure - just noise",
//   t({ en: "Manual back-and-forth just to set a time", nl: "Heen en weer berichten sturen om een afspraak te maken" }),
//   t({ en: "Outdated website nobody maintains", nl: "Verouderde website die niemand bijhoudt" }),
// ];

// const AFTER_ITEMS = [
//   t({ en: "Every enquiry captured with the right details", nl: "Elke aanvraag wordt vastgelegd met de juiste gegevens" }),
//   "One dashboard - see exactly what needs action",
//   t({ en: "Customers book their own appointments", nl: "Klanten plannen zelf hun afspraken" }),
//   t({ en: "Professional website, always maintained", nl: "Professionele website, altijd onderhouden" }),
//   "No technical setup - we handle everything",
// ];

// function ComparePill({
//   children,
//   background,
//   color,
// }: {
//   children: ReactNode;
//   background: string;
//   color: string;
// }) {
//   return (
//     <span
//       className="inline-flex w-fit items-center rounded-[100px] px-[28px] py-[10px] font-poppins text-[13px] lg:text-[16px] font-medium uppercase tracking-[1.5px]"
//       style={{ background, color }}
//     >
//       {children}
//     </span>
//   );
// }

// function BulletRow({
//   tone,
//   children,
// }: {
//   tone: "before" | "after";
//   children: ReactNode;
// }) {
//   const isBefore = tone === "before";

//   return (
//     <li className="flex items-start gap-[10px]">
//       <span
//         className="mt-[2px] inline-flex size-[20px] shrink-0 items-center justify-center rounded-[10px] font-sans text-[10px] font-bold leading-[15px]"
//         style={{
//           background: isBefore ? "var(--color-red-200)" : "rgba(255, 229, 102, 0.2)",
//           color: isBefore ? "var(--color-red-600)" : "var(--color-amber-200)",
//         }}
//       >
//         {isBefore ? <>&#10005;</> : <>&#10003;</>}
//       </span>
//       <span
//         className="font-poppins text-[14px] leading-[21px]"
//         style={{
//           color: isBefore ? "var(--color-red-900)" : "rgba(255,255,255,0.8)",
//         }}
//       >
//         {children}
//       </span>
//     </li>
//   );
// }

// function CompareCard({
//   tone,
//   label,
//   title,
//   items,
//   delay = 0,
// }: {
//   tone: "before" | "after";
//   label: string;
//   title: string;
//   items: string[];
//   delay?: number;
// }) {
//   const isBefore = tone === "before";
//   const cardStyle: CSSProperties = isBefore
//     ? {
//         background: "#f7f4fc",
//         border: "1px solid var(--color-red-200)",
//       }
//     : {
//         background: "var(--color-violet-12)",
//         border: "1px solid rgba(255,255,255,0.04)",
//         boxShadow: "0 16px 48px -28px rgba(10,5,22,0.7)",
//       };

//   return (
//     <Reveal as="article" delay={delay} className="w-full">
//       <div
//         className="flex min-h-[350px] flex-col gap-[28px] rounded-[18px] px-[28px] py-[34px] lg:px-[32px] lg:py-[38px]"
//         style={cardStyle}
//       >
//         <ComparePill
//           background={isBefore ? "#FFEFE0" : "rgba(255, 229, 102, 0.15)"}
//           color={isBefore ? "var(--color-red-600)" : "var(--color-amber-200)"}
//         >
//           {label}
//         </ComparePill>

//         <div className="flex flex-col gap-[12px]">
//           <h3
//             className="font-poppins text-[22px] font-semibold leading-[25.5px] tracking-[-0.3px]"
//             style={{ color: isBefore ? "var(--color-haiti)" : "#ffffff" }}
//           >
//             {title}
//           </h3>

//           <ul className="flex flex-col gap-[14px] pt-[4px]">
//             {items.map((item) => (
//               <BulletRow key={item} tone={tone}>
//                 {item}
//               </BulletRow>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </Reveal>
//   );
// }

// export default function Evolution() {
//   return (
//     <section id="why-businesses-switch" className="relative overflow-hidden bg-white lg:pb-[100px] pb-[60px]">
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -left-[170px] top-[4px] h-[360px] w-[224px] rotate-[37deg] opacity-70"
//         style={{
//           background:
//             "radial-gradient(50% 50% at 50% 50%, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0) 70%)",
//         }}
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -right-[122px] top-[161px] h-[270px] w-[289px] rotate-[52deg] opacity-80"
//         style={{
//           background:
//             "radial-gradient(50% 50% at 50% 50%, rgba(167, 139, 250, 0.34) 0%, rgba(167, 139, 250, 0) 70%)",
//         }}
//       />

//       <div className="md:max-w-[1400px] md:mx-auto fix relative flex flex-col items-center gap-[48px] lg:gap-[56px]">
//         <div className="flex w-full max-w-[912px] flex-col items-center gap-[18px]">
//           <Reveal>
//             <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
//               Why businesses switch
//             </span>
//           </Reveal>
//           <Reveal delay={0.05}>
//             <Parallax offset={20}>
//               <h2 className="max-w-[912px] text-center font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
//                 <span className="block">Stop running your business</span>
//                 <span className="block">from your inbox.</span>
//               </h2>
//             </Parallax>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <Parallax offset={15}>
//               <p className="max-w-[514px] text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
//                 Enquiries scattered across WhatsApp, email, and missed calls - brought into one
//                 clear place.
//               </p>
//             </Parallax>
//           </Reveal>
//         </div>

//         <div className="grid w-full max-w-[1000px] grid-cols-1 gap-[20px] lg:grid-cols-2">
//           <Parallax offset={10}>
//             <CompareCard
//               tone="before"
//               label="Before"
//               title="Most small businesses live with chaos"
//               items={BEFORE_ITEMS}
//             />
//           </Parallax>
//           <Parallax offset={30}>
//             <CompareCard
//               tone="after"
//               label="With Growth Rocket"
//               title="One organised place for everything"
//               items={AFTER_ITEMS}
//               delay={0.08}
//             />
//           </Parallax>
//         </div>
//       </div>
//     </section>
//   );
// }
import type { CSSProperties, ReactNode } from "react";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/LanguageProvider";

type LocalizedCopy = {
  en: string;
  nl: string;
};

type Copy = string | LocalizedCopy;

type Translate = (copy: LocalizedCopy) => string;

type EvolutionCardContent = {
  label?: Copy;
  title?: Copy;
  items?: Copy[];
};

type EvolutionProps = {
  eyebrow?: Copy;
  mainTitle?: readonly [Copy, Copy];
  titleLines?: readonly [Copy, Copy];
  description?: Copy;
  beforeCard?: EvolutionCardContent;
  afterCard?: EvolutionCardContent;
};

const getBeforeItems = (t: Translate) => [
  t({
    en: "Enquiries scattered across WhatsApp, email and calls",
    nl: "Aanvragen verspreid over WhatsApp, e-mail en telefoon",
  }),
  t({
    en: "Missed messages and forgotten follow-ups",
    nl: "Gemiste berichten en vergeten opvolging",
  }),
  t({
    en: "No structure — just noise",
    nl: "Geen centraal systeem voor klantcontacten",
  }),
  t({
    en: "Manual back-and-forth just to set a time",
    nl: "Te veel tijd kwijt aan het plannen van afspraken",
  }),
  t({
    en: "Outdated website nobody maintains",
    nl: "Een verouderde website die niemand bijhoudt",
  }),
];

const getAfterItems = (t: Translate) => [
  t({
    en: "Every enquiry captured with the right details",
    nl: "Elke aanvraag wordt vastgelegd met alle relevante gegevens",
  }),
  t({
    en: "One dashboard — see exactly what needs action",
    nl: "Eén dashboard met direct inzicht in wat aandacht nodig heeft",
  }),
  t({
    en: "Customers book their own appointments",
    nl: "Klanten kunnen zelf eenvoudig hun afspraken inplannen",
  }),
  t({
    en: "Professional website, always maintained",
    nl: "Een professionele website. Volledig ontzorgd.",
  }),
  t({
    en: "No technical setup — we handle everything",
    nl: "Geen technische zorgen – wij regelen alles voor u",
  }),
];

const resolveCopy = (copy: Copy, t: Translate) =>
  typeof copy === "string" ? copy : t(copy);

const resolveItems = (items: Copy[], t: Translate) =>
  items.map((item) => resolveCopy(item, t));

function ComparePill({
  children,
  background,
  color,
}: {
  children: ReactNode;
  background: string;
  color: string;
}) {
  return (
    <span
      className="inline-flex w-fit items-center rounded-[100px] px-[28px] py-[10px] font-poppins text-[13px] lg:text-[16px] font-medium uppercase tracking-[1.5px]"
      style={{ background, color }}
    >
      {children}
    </span>
  );
}

function BulletRow({
  tone,
  children,
}: {
  tone: "before" | "after";
  children: ReactNode;
}) {
  const isBefore = tone === "before";

  return (
    <li className="flex items-start gap-[10px]">
      <span
        className="mt-[2px] inline-flex size-[20px] shrink-0 items-center justify-center rounded-[10px] font-sans text-[10px] font-bold leading-[15px]"
        style={{
          background: isBefore
            ? "var(--color-red-200)"
            : "rgba(255, 229, 102, 0.2)",
          color: isBefore ? "var(--color-red-600)" : "var(--color-amber-200)",
        }}
      >
        {isBefore ? <>&#10005;</> : <>&#10003;</>}
      </span>
      <span
        className="font-poppins text-[14px] leading-[21px]"
        style={{
          color: isBefore ? "var(--color-red-900)" : "rgba(255,255,255,0.8)",
        }}
      >
        {children}
      </span>
    </li>
  );
}

function CompareCard({
  tone,
  label,
  title,
  items,
  delay = 0,
}: {
  tone: "before" | "after";
  label: string;
  title: string;
  items: string[];
  delay?: number;
}) {
  const isBefore = tone === "before";
  const cardStyle: CSSProperties = isBefore
    ? {
        background: "#f7f4fc",
        border: "1px solid var(--color-red-200)",
      }
    : {
        background: "var(--color-violet-12)",
        border: "1px solid rgba(255,255,255,0.04)",
        boxShadow: "0 16px 48px -28px rgba(10,5,22,0.7)",
      };

  return (
    <Reveal as="article" delay={delay} className="w-full">
      <div
        className="flex min-h-[425px]! flex-col gap-[28px] rounded-[18px] px-[20px] py-[34px] lg:px-[32px] lg:py-[38px]"
        style={cardStyle}
      >
        <ComparePill
          background={isBefore ? "#FFEFE0" : "rgba(255, 229, 102, 0.15)"}
          color={isBefore ? "var(--color-red-600)" : "var(--color-amber-200)"}
        >
          {label}
        </ComparePill>

        <div className="flex flex-col gap-[12px]">
          <h3
            className="font-poppins text-[22px] font-semibold leading-[25.5px] tracking-[-0.3px]"
            style={{ color: isBefore ? "var(--color-haiti)" : "#ffffff" }}
          >
            {title}
          </h3>

          <ul className="flex flex-col gap-[14px] pt-[4px]">
            {items.map((item) => (
              <BulletRow key={item} tone={tone}>
                {item}
              </BulletRow>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Evolution({
  eyebrow,
  mainTitle,
  titleLines,
  description,
  beforeCard,
  afterCard,
}: EvolutionProps = {}) {
  const { t } = useLanguage();
  const defaultEyebrow = t({
    en: "Why businesses switch",
    nl: "Waarom bedrijven overstappen",
  });
  const defaultTitleLines: [string, string] = [
    t({
      en: "Stop running your business",
      nl: "Beheer uw bedrijf niet langer",
    }),
    t({ en: "from your inbox.", nl: "vanuit uw inbox" }),
  ];
  const defaultDescription = t({
    en: "Enquiries scattered across WhatsApp, email, and missed calls - brought into one clear place.",
    nl: "Aanvragen verspreid over WhatsApp, e-mail en gemiste oproepen worden overzichtelijk samengebracht op één centrale plek.",
  });
  const resolvedTitleLines = mainTitle
    ? mainTitle.map((line) => resolveCopy(line, t))
    : titleLines
      ? titleLines.map((line) => resolveCopy(line, t))
      : defaultTitleLines;
  const resolvedBeforeCard = {
    label: beforeCard?.label
      ? resolveCopy(beforeCard.label, t)
      : t({ en: "Before", nl: "Voor" }),
    title: beforeCard?.title
      ? resolveCopy(beforeCard.title, t)
      : t({
          en: "Most small businesses live with chaos",
          nl: "Veel MKB-bedrijven lopen omzet mis door gebrek aan overzicht.",
        }),
    items: beforeCard?.items
      ? resolveItems(beforeCard.items, t)
      : getBeforeItems(t),
  };
  const resolvedAfterCard = {
    label: afterCard?.label
      ? resolveCopy(afterCard.label, t)
      : t({ en: "With Growth Rocket", nl: "Met Growth Rocket" }),
    title: afterCard?.title
      ? resolveCopy(afterCard.title, t)
      : t({
          en: "One organised place for everything",
          nl: "Eén centrale plek voor alles ",
        }),
    items: afterCard?.items
      ? resolveItems(afterCard.items, t)
      : getAfterItems(t),
  };

  return (
    <section
      id="why-businesses-switch"
      className="relative overflow-hidden bg-white lg:pb-[100px] pb-[60px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[170px] top-[4px] h-[360px] w-[224px] rotate-[37deg] opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[122px] top-[161px] h-[270px] w-[289px] rotate-[52deg] opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(167, 139, 250, 0.34) 0%, rgba(167, 139, 250, 0) 70%)",
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix relative flex flex-col items-center gap-[48px] lg:gap-[56px]">
        <div className="flex w-full max-w-[912px] flex-col items-center gap-[18px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              {eyebrow ? resolveCopy(eyebrow, t) : defaultEyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-[912px] text-center font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              <span className="block">{resolvedTitleLines[0]}</span>
              <span className="block">{resolvedTitleLines[1]}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[514px] text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              {description ? resolveCopy(description, t) : defaultDescription}
            </p>
          </Reveal>
        </div>

        <div className="grid w-full max-w-[1000px] grid-cols-1 gap-6 lg:gap-[20px] lg:grid-cols-2">
          <CompareCard
            tone="before"
            label={resolvedBeforeCard.label}
            title={resolvedBeforeCard.title}
            items={resolvedBeforeCard.items}
          />
          <CompareCard
            tone="after"
            label={resolvedAfterCard.label}
            title={resolvedAfterCard.title}
            items={resolvedAfterCard.items}
            delay={0.08}
          />
        </div>
      </div>
    </section>
  );
}
