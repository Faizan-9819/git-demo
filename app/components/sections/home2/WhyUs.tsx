"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

/* ─────────────────────────────────────────────────────────────────────────────
 * PREVIOUS VERSION — kept for reference, superseded by the grsolidvariant.html
 * port below. It used the violet gradient fold, an eyebrow label, Poppins
 * headings, white cards with a deep price card, and a €69 pricing CTA; none of
 * those survive in the HTML the section is now matched against.
 *
 * import { LayoutDashboard, Wrench, Hammer, Zap } from "lucide-react";
 * import Reveal from "../../Reveal";
 * import EyebrowLabel from "../../ui/EyebrowLabel";
 *
 * const FADE_IMAGES = [
 *   "/home/waarom-ondernemer.png",
 *   "/home/waarom-ondernemer-2.png",
 *   "/home/waarom-ondernemer-3.png",
 *   "/home/waarom-ondernemer-4.png",
 * ];
 *
 * function IconBox({
 *   children,
 *   dark,
 * }: {
 *   children: React.ReactNode;
 *   dark?: boolean;
 * }) {
 *   return (
 *     <div
 *       className="flex h-11 w-11 items-center justify-center rounded-[12px]"
 *       style={{
 *         background: dark ? "rgba(255,229,102,0.16)" : "var(--color-violet-98)",
 *       }}
 *     >
 *       {children}
 *     </div>
 *   );
 * }
 *
 * function Card({
 *   icon,
 *   title,
 *   body,
 *   dark,
 *   footer,
 * }: {
 *   icon: React.ReactNode;
 *   title: string;
 *   body: React.ReactNode;
 *   dark?: boolean;
 *   footer?: React.ReactNode;
 * }) {
 *   return (
 *     <Reveal
 *       className={
 *         "flex-1 flex flex-col gap-3 rounded-[26px] p-7 " +
 *         (dark
 *           ? "bg-[var(--color-haiti)] border border-[var(--color-haiti)] shadow-[0_12px_32px_rgba(91,33,182,0.16)]"
 *           : "bg-white border border-[var(--color-slate-200)]")
 *       }
 *     >
 *       {icon}
 *       <h3
 *         className={
 *           "mt-[6px] mb-0 text-[20px] font-semibold tracking-[-0.3px] " +
 *           (dark ? "text-white" : "text-[var(--color-haiti)]")
 *         }
 *       >
 *         {title}
 *       </h3>
 *       <p
 *         className={
 *           "m-0 text-[14px] leading-[22px] " +
 *           (dark ? "text-white/70" : "text-[var(--color-slate-600)]")
 *         }
 *       >
 *         {body}
 *       </p>
 *       {footer}
 *     </Reveal>
 *   );
 * }
 *
 * function FadeImages() {
 *   const [index, setIndex] = useState(0);
 *   const reducedRef = useRef(false);
 *
 *   useEffect(() => {
 *     reducedRef.current = window.matchMedia(
 *       "(prefers-reduced-motion: reduce)",
 *     ).matches;
 *     if (reducedRef.current) return;
 *     const id = setInterval(() => {
 *       setIndex((i) => (i + 1) % FADE_IMAGES.length);
 *     }, 4200);
 *     return () => clearInterval(id);
 *   }, []);
 *
 *   return (
 *     <div className="relative h-full min-h-[280px] lg:min-h-[420px] rounded-[26px] overflow-hidden bg-[var(--color-haiti)]">
 *       {FADE_IMAGES.map((src, i) => (
 *         <Image
 *           key={src}
 *           src={src}
 *           alt=""
 *           fill
 *           sizes="(min-width: 1024px) 33vw, 100vw"
 *           className="object-cover object-top transition-opacity duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]"
 *           style={{ opacity: i === index ? 1 : 0 }}
 *         />
 *       ))}
 *     </div>
 *   );
 * }
 *
 * export default function WhyUs() {
 *   const { t } = useLanguage();
 *
 *   const price: Translation = { en: "€69 per month", nl: "€69 per maand" };
 *
 *   return (
 *     <section
 *       className="relative rounded-[28px] py-[50px] lg:py-28"
 *       style={{ background: "var(--grad-brand)" }}
 *     >
 *       <div className="fix flex flex-col items-center gap-3.5">
 *         <EyebrowLabel color="rgb(216,180,254)">
 *           {t({ en: "Why Growth Rocket", nl: "Waarom Growth Rocket" })}
 *         </EyebrowLabel>
 *         <Reveal delay={0.05}>
 *           <h2 className="m-0 text-center font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-white">
 *             {t({ en: "Why Growth Rocket?", nl: "Waarom Growth Rocket?" })}
 *           </h2>
 *         </Reveal>
 *
 *         <div className="w-full mt-4 lg:mt-11 grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
 *           <div className="order-2 lg:order-1 flex flex-col gap-4">
 *             <Card ... "Everything in one place" />
 *             <Card ... "We take care of it for you" />
 *           </div>
 *           <Reveal delay={0.1} className="order-1 lg:order-2">
 *             <FadeImages />
 *           </Reveal>
 *           <div className="order-3 lg:order-3 flex flex-col gap-4">
 *             <Card ... "Built for freelancers & SMEs" />
 *             <Card dark ... "More for one fixed price" + pricing link />
 *           </div>
 *         </div>
 *       </div>
 *     </section>
 *   );
 * }
 * ──────────────────────────────────────────────────────────────────────────── */

/**
 * Why Growth Rocket — ported from `section.legacy-why` in grsolidvariant.html.
 *
 * The stylesheet builds this fold up across several later blocks, so the values
 * here are the *resolved* ones rather than what the first `.why-original-*`
 * rules say:
 *
 * - The fold is solid `#5b2dce`. The base rule paints a purple gradient, but
 *   the Variant B block collapses `--gr-brand-surface` to the single Hub purple.
 * - Every card is the same lavender `#f5f3ff` tile. The deep `.why-original-price`
 *   treatment is overridden back to the light card, and its pricing link and
 *   "€69" line are dropped with it ("compact the cards after removing the
 *   price CTA") — so the fourth card is copy only, like the other three.
 * - Icon tiles are lime on brand purple, from the last block that touches them.
 * - Every box lands on the 13px global radius standard, icon tiles included.
 * - Headings are Bricolage 600, body copy Inter — the page's own defaults.
 *
 * The one thing kept from the previous React version, as asked: the centre
 * panel still crossfades through four photos instead of holding the single
 * `<img>` the HTML ships. It is also why this stays a client component.
 *
 * The source sheet is desktop-first with max-width steps at 900px and 760px;
 * those are inverted into min-width steps here, so the base values are the
 * smallest ones and the layout widens 1 → 2 → 3 columns.
 */

const FADE_IMAGES = [
  "/home/waarom-ondernemer.png",
  "/home/waarom-ondernemer-2.png",
  "/home/waarom-ondernemer-3.png",
  "/home/waarom-ondernemer-4.png",
];

/** Shared attributes of the four inline icons, copied from the source markup. */
const SVG_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-[20px] w-[20px]",
} as const;

const GridIcon = () => (
  <svg {...SVG_PROPS} aria-hidden>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const WandIcon = () => (
  <svg {...SVG_PROPS} aria-hidden>
    <path d="m14.7 6.3 3 3M5 19l4.7-1.2L19 8.5a2.1 2.1 0 0 0-3-3l-9.3 9.3L5 19Z" />
    <path d="m12 4-1 2-2 .5 1.5 1.5-.3 2.1L12 9l1.8 1.1-.3-2.1L15 6.5 13 6l-1-2Z" />
  </svg>
);

const ToolsIcon = () => (
  <svg {...SVG_PROPS} aria-hidden>
    <path d="m14 4 6 6M4 20l7-7M4 15l5 5M9 4l4 4" />
    <path d="m13 3 8 8-3 3-8-8 3-3Z" />
  </svg>
);

const BoltIcon = () => (
  <svg {...SVG_PROPS} aria-hidden>
    <path d="m13 2-8 12h6l-1 8 9-13h-6V2Z" />
  </svg>
);

/**
 * The hover transition lists `translate` and `scale`, NOT `transform`, and that
 * is the whole reason it reads as smooth rather than as a snap.
 *
 * `hover:-translate-y-1` does not touch `transform` in Tailwind v4 — it
 * compiles to the separate `translate` property:
 *
 *   --tw-translate-y: calc(4px * -1);
 *   translate: var(--tw-translate-x) var(--tw-translate-y);
 *
 * and `hover:scale-[1.01]` likewise compiles to standalone `scale`. So a list
 * naming `transform` transitions a property nothing here animates. The lift
 * then jumped to its end state on the first frame while the colours and shadow
 * eased in behind it over the full duration — two different clocks on one
 * gesture, which is what made the card feel broken rather than quick.
 * Tailwind's own `transition-transform` is `transform, translate, scale,
 * rotate` for exactly this reason; anything added here later has to be named in
 * the list too or it will snap the same way. The matching `translate-y-0` and
 * `scale-100` in the base classes are what give each property a from-value to
 * ease out of on mouse-leave.
 *
 * Enter and leave run on different clocks on purpose. Entering is 300ms on
 * `cubic-bezier(.22,1,.36,1)` — an expo-out that spends most of its distance in
 * the first third, so the card answers the pointer immediately and then settles
 * instead of gliding at a constant speed. Leaving is the longer 380ms on the
 * symmetric `ease-in-out`, because nothing is waiting on it; a fast
 * snap back to rest is what reads as cheap, and the gentler curve lets the card
 * fall away. Tailwind applies the base `duration`/`ease` on leave and the
 * `hover:` ones on enter, which is how both sit on one element.
 *
 * The travel grew from the source's 2px to 4px plus a 1% scale for the same
 * reason: over a readable duration a 2px lift is too small to register as
 * motion, so it only registers as lag. `motion-reduce` keeps the colour change
 * and drops the movement entirely rather than just shortening it.
 */
function Card({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="flex translate-y-0 scale-100 flex-col items-start gap-[14px] rounded-[13px] border border-white/[0.34] bg-[#f5f3ff] px-[23px] pb-[15px] pt-[20px] text-[#0a0516] shadow-[0_14px_34px_rgba(10,5,22,0.08)] transition-[background-color,border-color,translate,scale,box-shadow] duration-380 ease-in-out hover:-translate-y-1 hover:scale-[1.01] hover:border-white/[0.46] hover:bg-[#ebe6ff] hover:shadow-[0_22px_46px_rgba(10,5,22,0.14)] hover:duration-300 hover:ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-[background-color,border-color] motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 min-[901px]:px-[28px] min-[901px]:pb-[16px] min-[901px]:pt-[22px]">
      <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[13px] bg-[#e4fa65] text-[#5b2dce]">
        {icon}
      </span>

      <h3 className="m-0 mt-[5px] font-bricolage text-[25px] font-semibold leading-[1.18] tracking-[-0.03em] min-[761px]:text-[22px] min-[901px]:text-[25px]">
        {title}
      </h3>

      <p className="m-0 font-sans text-[16px] leading-[1.6] text-[#554c64] min-[761px]:text-[15px] min-[901px]:text-[16px]">
        {body}
      </p>
    </article>
  );
}

/**
 * The centre panel. The HTML holds one still photo; this cycles the four with a
 * long crossfade, and honours `prefers-reduced-motion` by never starting the
 * timer — the first image simply stays up.
 *
 * The first photo stays in flow and the other three are layered over it, which
 * is what keeps this fold the height the source gives it. The stylesheet sizes
 * the photo `width: 100%; height: 100%`, and that height is the whole trick:
 * against an auto-height figure the percentage has nothing to resolve against,
 * so it falls back to `auto` and the photo's own ratio sets the figure's
 * height — which the grid row then hands to the cards beside it. Once the cards
 * are the taller side, the row stretches the figure to a definite height and
 * the same `height: 100%` resolves properly and fills it.
 *
 * A `fill` stack cannot do this: every photo would be absolutely positioned,
 * the figure would contribute no height of its own, and it would sit flat on
 * its `min-height` floor with the cards squashed to half of it. Giving the
 * figure an `aspect-ratio` instead only moves the problem — when the cards
 * stretch it, the ratio resolves the *width* from that height and the photo
 * bursts out of its column.
 */
function FadeImages() {
  const [index, setIndex] = useState(0);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedRef.current) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % FADE_IMAGES.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {FADE_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={1155}
          height={1564}
          sizes="(min-width: 901px) 33vw, 100vw"
          className={
            (i === 0 ? "" : "absolute inset-0 ") +
            "h-full w-full object-cover object-top transition-opacity duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]"
          }
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </>
  );
}

export default function WhyUs() {
  const { t } = useLanguage();

  const cards: {
    icon: React.ReactNode;
    title: Translation;
    body: Translation;
  }[] = [
    {
      icon: <GridIcon />,
      title: { en: "Everything in one place", nl: "Alles op één plek" },
      body: {
        en: "Your website, enquiries, appointments, customers, quotes and invoices work together in one clear system.",
        nl: "Je website, aanvragen, afspraken, klanten, offertes en facturen werken samen in één overzichtelijk systeem.",
      },
    },
    {
      icon: <WandIcon />,
      title: {
        en: "We take care of it for you",
        nl: "Wij regelen het voor je",
      },
      body: {
        en: "Your website is professionally set up for you, and we handle hosting, maintenance, security and support.",
        nl: "Je website wordt professioneel voor je opgezet en wij regelen hosting, onderhoud, beveiliging en support.",
      },
    },
    {
      icon: <ToolsIcon />,
      title: {
        en: "Built for freelancers & SMEs",
        nl: "Gemaakt voor ZZP & MKB",
      },
      body: {
        en: "No complicated business software full of features you’ll never use. Just the tools a small business needs every day.",
        nl: "Geen ingewikkelde bedrijfssoftware vol functies die je nooit gebruikt. Alleen de tools die een klein bedrijf dagelijks nodig heeft.",
      },
    },
    {
      icon: <BoltIcon />,
      title: {
        en: "More for one fixed price",
        nl: "Meer voor één vaste prijs",
      },
      body: {
        en: "No separate bills for website, hosting, maintenance, appointments, customer management, quotes and invoices.",
        nl: "Geen losse rekeningen voor website, hosting, onderhoud, afspraken, klantbeheer, offertes en facturen.",
      },
    },
  ];

  return (
    <section
      aria-labelledby="why-heading"
      className="rounded-[13px] bg-[#5b2dce] py-[56px] min-[901px]:py-[64px]"
    >
      <div className="fix flex flex-col items-center text-left">
        <h2
          id="why-heading"
          className="m-0 text-center font-bricolage text-[40px] font-semibold leading-[1.1] tracking-[-0.045em] text-white min-[761px]:text-[clamp(42px,4vw,60px)]"
        >
          {t({ en: "Why Growth Rocket?", nl: "Waarom Growth Rocket?" })}
        </h2>

        {/* 1 → 2 → 3 columns. At the two-column step the photo takes the whole
            right-hand side (`grid-row: 1 / 3`) and the two text columns stack
            down the left; below that it is pulled to the top of the flow, which
            is what `order-first` reproduces from the source's `order: -1`. */}
        <div className="mt-[30px] grid w-full max-w-[1240px] grid-cols-1 items-stretch gap-[14px] min-[761px]:mt-[32px] min-[761px]:grid-cols-2 min-[901px]:grid-cols-3">
          {/* `grid-rows-[1fr_1fr]`, not Tailwind's `grid-rows-2`: that utility
              emits `minmax(0, 1fr)`, which would cap each card at exactly half
              the photo's 450px and crush the copy against the bottom edge. The
              source's plain `1fr` is `minmax(auto, 1fr)` — the rows stay equal
              to each other but grow to fit, and the photo stretches to match. */}
          <div className="grid min-w-0 gap-[14px] min-[761px]:grid-rows-[1fr_1fr]">
            {cards.slice(0, 2).map((card) => (
              <Card
                key={card.title.en}
                icon={card.icon}
                title={t(card.title)}
                body={t(card.body)}
              />
            ))}
          </div>

          <figure className="relative m-0 min-h-[330px] overflow-hidden rounded-[13px] bg-[#0a0516] order-first min-[761px]:order-none min-[761px]:row-start-1 min-[761px]:row-end-3 min-[761px]:min-h-0 min-[901px]:row-auto min-[901px]:min-h-[450px]">
            <FadeImages />
          </figure>

          <div className="grid min-w-0 gap-[14px] min-[761px]:grid-rows-[1fr_1fr]">
            {cards.slice(2).map((card) => (
              <Card
                key={card.title.en}
                icon={card.icon}
                title={t(card.title)}
                body={t(card.body)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
