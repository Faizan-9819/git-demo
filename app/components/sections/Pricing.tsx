"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "../Reveal";
import Parallax from "../Parallax";
import { useLanguage } from "../../i18n/LanguageProvider";
import Button from "../ui/Button";

type Plan = {
  eyebrow: string;
  eyebrowColor: string;
  desc: string;
  price: string;
  priceMonthly?: string;
  priceColor: string;
  strike?: string;
  strikeMonthly?: string;
  strikeColor?: string;
  period: string;
  periodMonthly?: string;
  periodInline?: string;
  periodInlineMonthly?: string;
  periodColor: string;
  billingNote?: string;
  divider: string;
  checkBg: string;
  checkColor: string;
  textColor: string;
  features: string[];
  button: string;
  buttonVariant: "outline-violet" | "filled-white";
  cardBg: string;
  cardBorder: string;
  recommended?: boolean;
  recommendedLabel?: string;
  className?: string;
};

type BillingPeriod = "annual" | "monthly";

function displayedPrice(p: Plan, billingPeriod: BillingPeriod) {
  if (billingPeriod === "monthly" && p.priceMonthly != null) {
    return {
      price: p.priceMonthly,
      strike: p.strikeMonthly,
      period: p.periodMonthly ?? p.period,
      periodInline: p.periodInlineMonthly,
    };
  }
  return {
    price: p.price,
    strike: p.strike,
    period: p.period,
    periodInline: p.periodInline,
  };
}

const getPlans = (t: any): Plan[] => [
  {
    eyebrow: t({ en: "Pro", nl: "Pro" }),
    eyebrowColor: "var(--color-kournikova)",
    desc: t({
      en: "Everything you need to capture and manage enquiries.",
      nl: "Alles wat u nodig heeft om aanvragen te ontvangen en eenvoudig op te volgen.",
    }),
    price: "€690",
    priceMonthly: "€69",
    priceColor: "#ffffff",
    strike: "€990",
    strikeMonthly: "€99",
    strikeColor: "rgba(255,255,255,0.55)",
    period: t({ en: "per year", nl: "per jaar" }),
    periodMonthly: t({ en: "per month", nl: "per maand" }),
    periodInline: t({ en: "year", nl: "jaar" }),
    periodInlineMonthly: t({ en: "month", nl: "maand" }),
    periodColor: "#d1d5db",
    billingNote: t({
      en: "+ €290 one-time onboarding fee",
      nl: "+ eenmalig €290 opstartkosten",
    }),
    divider: "rgba(255,255,255,0.1)",
    checkBg: "rgba(255,229,102,0.2)",
    checkColor: "var(--color-amber-200)",
    textColor: "#d1d5db",
    features: [
      t({ en: "Everything in Basic +", nl: "Alles uit Basis, plus:" }),
      t({ en: "Up to 8-page website", nl: "Website tot 8 pagina's" }),
      t({
        en: "Booking & appointment system",
        nl: "Online boekings- en afsprakensysteem",
      }),
      t({
        en: "Growth Rocket Hub dashboard",
        nl: "Growth Rocket Hub-dashboard",
      }),
      t({
        en: "30-sec intro video",
        nl: "Professionele introductievideo van 30 seconden",
      }),
      t({
        en: "Free .com domain (1st year)",
        nl: "Gratis .com-domein in het eerste jaar",
      }),
    ],
    button: t({ en: "Start with Pro", nl: "Kies voor Pro" }),
    buttonVariant: "filled-white",
    cardBg: "#160e30",
    cardBorder: "#160e30",
    recommended: false,
    className:
      "relative flex flex-col lg:px-[27px] h-fit lg:py-[31px] z-[10] rounded-[18px] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(91,33,182,0.3)]",
  },
  {
    eyebrow: t({ en: "Custom", nl: "MAATWERK" }),
    eyebrowColor: "var(--color-violet-42)",
    desc: t({
      en: "Bespoke design and advanced features, built around you.",
      nl: "Volledig maatwerk, afgestemd op uw bedrijf en wensen.",
    }),
    price: t({ en: "Bespoke", nl: "Maatwerk" }),
    priceColor: "#263040",
    period: t({
      en: "based on scope",
      nl: "op basis van uw wensen en projectomvang",
    }),
    periodColor: "var(--color-dolphin)",
    divider: "var(--color-slate-200)",
    checkBg: "#efe7fb",
    checkColor: "var(--color-violet-42)",
    textColor: "var(--color-dolphin)",
    features: [
      t({ en: "Everything in Pro", nl: "Alles uit Pro" }),
      t({ en: "Fully custom design", nl: "Uniek ontwerp op maat" }),
      t({
        en: "Flexible structure",
        nl: "Flexibele opbouw en functionaliteiten",
      }),
      t({
        en: "Dedicated project lead",
        nl: "Vast aanspreekpunt voor uw project",
      }),
    ],
    button: t({ en: "Get a quote", nl: "Vraag een offerte aan" }),
    buttonVariant: "outline-violet",
    cardBg: "#ffffff",
    cardBorder: "var(--color-slate-200)",
    className:
      "relative flex flex-col lg:pr-[27px] lg:pl-16 lg:-ml-10 z-[1] h-fit lg:py-[31px] rounded-[18px] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(91,33,182,0.3)]",
  },
];

function Check({ bg, color }: { bg: string; color: string }) {
  return (
    <span
      className="inline-flex items-center justify-center size-[17px] rounded-[8.5px] shrink-0"
      style={{ background: bg }}
    >
      <span
        className="font-sans font-bold text-[9px] leading-[12.6px]"
        style={{ color }}
      >
        ✓
      </span>
    </span>
  );
}

// Desktop Plan Card
function PlanCard({
  p,
  delay,
  billingPeriod,
  onStartClick,
  className,
}: {
  p: Plan;
  delay: number;
  billingPeriod: BillingPeriod;
  onStartClick?: () => void;
  className?: string;
}) {
  const { price, strike, period, periodInline } = displayedPrice(
    p,
    billingPeriod,
  );
  return (
    <Reveal
      delay={delay}
      className={
        "" +
        (p.recommended
          ? " shadow-[0_24px_60px_-20px_rgba(22,14,48,0.4)]"
          : "") +
        (className ? " " + className : "")
      }
    >
      <div
        className="absolute inset-0 rounded-[18px] pointer-events-none"
        aria-hidden
        style={{ background: p.cardBg, border: `1px solid ${p.cardBorder}` }}
      />

      {p.recommended && (
        <span
          aria-hidden
          className="absolute left-[26px] -top-[13px] rounded-[100px] px-[14px] py-[4px] font-sans font-bold text-[10px] leading-[15px] tracking-[0.3px] bg-[var(--color-amber-200)] text-[var(--color-violet-21)]"
        >
          {p.recommendedLabel}
        </span>
      )}

      <div className="relative flex flex-col">
        <span
          className="pb-[12px] font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px]"
          style={{ color: p.eyebrowColor }}
        >
          {p.eyebrow}
        </span>

        <p
          className="min-h-[56px] pb-[2px] font-poppins text-[13px] leading-[20.8px]"
          style={{ color: p.textColor }}
        >
          {p.desc}
        </p>

        <div className="pb-[2px] flex flex-col">
          {strike && (
            <span
              className="pb-[5px] font-bricolage font-semibold text-[19.6px] leading-[19.6px]"
              style={{ color: p.strikeColor }}
            >
              <span className="relative inline-block">
                <span>{strike}</span>
                <span className="absolute left-0 top-1/2 w-full h-0.5 bg-white/30 -translate-y-1/2" />
              </span>
            </span>
          )}
          <span
            className="font-poppins font-bold text-[46px] leading-[46px] tracking-[-1px]"
            style={{ color: p.priceColor }}
            // style={{ color: "#ffe566" }}
          >
            {price}
            {periodInline && (
              <span
                className="font-poppins font-normal text-[16px] tracking-normal"
                style={{ color: p.periodColor }}
                // style={{ color: "#ffe566" }}
              >
                {" "}
                / {periodInline}
              </span>
            )}
          </span>
        </div>

        {!periodInline && (
          <span
            className="font-poppins text-[12px] leading-[20.8px]"
            style={{ color: p.periodColor }}
          >
            {period}
          </span>
        )}

        {p.billingNote && (
          <span
            // className="pb-[22px] pt-[6px] font-poppins text-[11px] leading-[16px]"
            className="pb-[22px] pt-[0px] font-poppins text-[13px] leading-[13px]"
            style={{ color: "#ffe566" }}
          >
            {p.billingNote}
          </span>
        )}
        {!p.billingNote && <div className="pb-[22px]" />}

        <div
          className="h-px w-full mb-[20px]"
          style={{ background: p.divider }}
        />

        <ul className="pb-[26px] flex flex-col gap-[11px]">
          {p.features.map((f, i) => (
            <li key={i} className="flex items-start gap-[9px]">
              <Check bg={p.checkBg} color={p.checkColor} />
              <span
                className="font-poppins text-[13px] leading-[20.8px]"
                style={{ color: p.textColor }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        <Button
          variant={
            p.buttonVariant === "filled-white" ? "secondary" : "secondary"
          }
          arrow="right"
          fullWidth
          onClick={onStartClick}
          style={
            p.buttonVariant === "filled-white"
              ? {
                  background: "#ffffff",
                  color: "var(--color-violet-42)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }
              : {
                  background: "#ffffff",
                  color: "var(--color-violet-42)",
                  border: "1px solid var(--color-violet-42)",
                }
          }
        >
          {p.button}
        </Button>
      </div>
    </Reveal>
  );
}

// Mobile Accordion Card
function AccordionPlanCard({
  p,
  isOpen,
  billingPeriod,
  onToggle,
  onStartClick,
  className,
}: {
  p: Plan;
  isOpen: boolean;
  billingPeriod: BillingPeriod;
  onToggle: () => void;
  onStartClick?: () => void;
  className?: string;
}) {
  const { price, strike, periodInline } = displayedPrice(p, billingPeriod);
  return (
    <div className={["w-full relative", className].filter(Boolean).join(" ")}>
      <div
        className={`rounded-[18px] overflow-hidden border transition-all duration-300 ${
          isOpen
            ? "border-violet-500 shadow-xl"
            : "border-slate-300 hover:border-slate-300"
        }`}
        style={{ background: p.cardBg }}
      >
        {/* Header */}
        <button
          onClick={onToggle}
          className="w-full px-6 pt-5 pb-4 flex items-center justify-between text-left"
          aria-expanded={isOpen}
        >
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-1">
              <span
                className="font-poppins font-semibold uppercase text-[13px] tracking-[2px]"
                style={{ color: p.eyebrowColor }}
              >
                {p.eyebrow}
              </span>
              {p.recommended && (
                <span className="rounded-full bg-[var(--color-amber-200)] text-[var(--color-violet-21)] text-[10px] font-bold px-3 py-0.5 tracking-wider uppercase">
                  {p.recommendedLabel}
                </span>
              )}
            </div>

            {/* Description hidden here on mobile, shown below the button row */}
            <p
              className="hidden font-poppins text-[13px] leading-[20px]"
              style={{ color: p.textColor }}
            >
              {p.desc}
            </p>
          </div>

          {/* Price */}
          <div className="flex lg:gap-0 gap-1 lg:flex-col items-end shrink-0">
            {strike && (
              <span
                className="lg:text-[13.2px] text-[14px] leading-none line-through mb-1"
                style={{ color: p.strikeColor }}
              >
                {strike}
              </span>
            )}
            <span
              className="font-poppins font-bold text-[20px] lg:text-[28px] leading-none tracking-[-0.6px]"
              style={{ color: p.priceColor }}
            >
              {price}
              {periodInline && (
                <span
                  className="font-poppins font-normal text-[12px] tracking-normal"
                  style={{ color: p.periodColor }}
                >
                  {" "}
                  / {periodInline}
                </span>
              )}
            </span>
          </div>

          <ChevronDown
            className={`w-5 h-5 ml-4 transition-transform duration-300 shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
            style={{
              color:
                p.priceColor === "#ffffff"
                  ? "#d1d5db"
                  : "var(--color-violet-42)",
            }}
          />
        </button>

        {p.billingNote && (
          <p
            className="px-6 font-poppins text-[13px] leading-[20px] font-semibold"
            style={{ color: "#ffe566" }}
          >
            {p.billingNote}
          </p>
        )}

        {/* Full-width description below the header row */}
        <p
          className="px-6 pb-4 pt-1 font-poppins text-[13px] leading-[20px]"
          style={{ color: p.textColor }}
        >
          {p.desc}
        </p>

        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="px-6 pb-8 pt-4 border-t"
            style={{ borderColor: p.divider }}
          >
            {/* Features */}
            <ul className="space-y-[11px] mb-8">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-[9px]">
                  <Check bg={p.checkBg} color={p.checkColor} />
                  <span
                    className="font-poppins text-[13px] leading-[20.8px]"
                    style={{ color: p.textColor }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Button
              variant="secondary"
              arrow="right"
              fullWidth
              onClick={onStartClick}
              style={
                p.buttonVariant === "filled-white"
                  ? {
                      background: "#ffffff",
                      color: "var(--color-violet-42)",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }
                  : {
                      background: "#ffffff",
                      color: "var(--color-violet-42)",
                      border: "1px solid var(--color-violet-42)",
                    }
              }
            >
              {p.button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function Pricing({
  onStartClick,
}: {
  onStartClick?: () => void;
}) {
  const { t } = useLanguage();
  const plans = getPlans(t);

  const [openIndex, setOpenIndex] = useState<number>(1); // Pro open by default
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("annual");

  const togglePlan = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="pricing"
      className="relative bg-[#faf7ff] lg:py-[100px] py-[60px]"
    >
      <div className="fix px-5 flex flex-col items-center gap-[28px]">
        {/* Header */}
        <div className="flex flex-col gap-[18px] items-center max-w-[912px] w-full">
          <Reveal>
            <span className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              {t({ en: "Transparent Pricing", nl: "Transparante prijzen" })}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            {/* <Parallax offset={20}> */}
            <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              {t({
                en: "One yearly price.",
                nl: "Eén vaste prijs per jaar.",
              })}{" "}
              <span className="text-grad-brand">
                {t({ en: "No surprises.", nl: "Geen verrassingen." })}
              </span>
            </h2>
            {/* </Parallax> */}
          </Reveal>

          <Reveal delay={0.1}>
            {/* <Parallax offset={15}> */}
            <p className="text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              {t({
                en: "No setup fees. No monthly bills. No hidden charges. One fixed amount per year.",
                nl: "Geen opstartkosten, geen maandlasten en geen verborgen kosten.",
              })}
            </p>
            {/* </Parallax> */}
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div
            role="group"
            aria-label={t({ en: "Billing period", nl: "Facturatieperiode" })}
            className="inline-flex items-center rounded-[10px] border border-[var(--color-slate-200)] bg-white p-[3px]"
          >
            {(
              [
                { key: "annual", label: t({ en: "Annual", nl: "Jaarlijks" }) },
                {
                  key: "monthly",
                  label: t({ en: "Monthly", nl: "Maandelijks" }),
                },
              ] as const
            ).map(({ key, label }) => {
              const active = billingPeriod === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setBillingPeriod(key)}
                  aria-pressed={active}
                  className={
                    "rounded-[8px] px-[18px] py-[8px] font-poppins font-semibold text-[13px] transition-colors cursor-pointer " +
                    (active
                      ? "bg-[var(--color-violet-42)] text-white"
                      : "text-[var(--color-haiti)] hover:text-[var(--color-violet-42)]")
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Pricing Content */}
        <div className="w-full max-w-[750px]">
          {/* Desktop Grid */}
          <div className="hidden lg:flex items-center gap-0">
            {plans.map((p, i) => (
              <PlanCard
                key={p.eyebrow}
                p={p}
                delay={i * 0.07}
                billingPeriod={billingPeriod}
                onStartClick={onStartClick}
                className={p.className}
              />
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden flex flex-col gap-4">
            {plans.map((p, i) => (
              <AccordionPlanCard
                key={p.eyebrow}
                p={p}
                isOpen={openIndex === i}
                billingPeriod={billingPeriod}
                onToggle={() => togglePlan(i)}
                onStartClick={onStartClick}
                className={p.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
