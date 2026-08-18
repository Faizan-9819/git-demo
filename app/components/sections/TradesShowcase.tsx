"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import ProofBand from "./ProofBand";
import { useLanguage } from "../../i18n/LanguageProvider";
import { localizedHref } from "../../i18n/locale-href";

type Trade = {
  label: string;
  icon?: string;
  image?: string;
  bg: string;
  href?: string;
};

const getTrades = (t: any): Trade[] => [
  {
    label: t({ en: "Electricians", nl: "Elektriciens" }),
    image: "/figma/icons/one.svg",
    bg: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
    href: "/website-for-electricians",
  },
  {
    label: t({ en: "Plumbers", nl: "Loodgieters" }),
    image: "/figma/icons/two.svg",
    bg: "linear-gradient(135deg, #faf7ff 0%, #a78bfa 100%)",
  },
  {
    label: t({ en: "HVAC", nl: "Klimaat- en installatietechniek" }),
    image: "/figma/icons/3.svg",
    bg: "linear-gradient(135deg, #fef0dc 0%, #bae6fd 100%)",
  },
  {
    label: t({ en: "Salons", nl: "Schoonheidssalons" }),
    image: "/figma/icons/4.png",
    bg: "linear-gradient(135deg, #efe7fb 0%, #fbcfe8 100%)",
  },
  {
    label: t({ en: "Consultants", nl: "Adviseurs en consultants" }),
    image: "/figma/icons/5.png",
    bg: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  },
  {
    label: t({ en: "Coaches", nl: "Coaches" }),
    image: "/figma/icons/6.png",
    bg: "linear-gradient(135deg, #f4eefe 0%, #fed7aa 100%)",
  },
  {
    label: t({ en: "Carpenters", nl: "Timmermannen" }),
    image: "/figma/icons/7.svg",
    bg: "linear-gradient(135deg, #fef0dc 0%, #bae6fd 100%)",
  },
  {
    label: t({ en: "Painters", nl: "Schilders" }),
    image: "/figma/icons/8.svg",
    bg: "linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)",
  },
  {
    label: t({ en: "Roofers", nl: "Dakdekkers" }),
    image: "/figma/icons/9.svg",
    bg: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  },
  {
    label: t({ en: "Solar", nl: "Zonnepanelenbedrijven" }),
    image: "/figma/icons/10.svg",
    bg: "linear-gradient(135deg, #faf7ff 0%, #a78bfa 100%)",
  },
  {
    label: t({ en: "Clinics", nl: "Praktijken en klinieken" }),
    image: "/figma/icons/11.svg",
    bg: "linear-gradient(135deg, #efe7fb 0%, #fbcfe8 100%)",
  },
  {
    label: t({ en: "And more", nl: "En nog veel meer" }),
    image: "/figma/icons/12.svg",
    bg: "linear-gradient(135deg, #f4eefe 0%, #fed7aa 100%)",
  },
];

function TradeBadge({
  t,
  delay,
  locale,
}: {
  t: Trade;
  delay: number;
  locale: string;
}) {
  const icon = (
    <span
      className="flex items-center justify-center size-[84px] rounded-[42px] transition-transform duration-300 hover:scale-[1.06] hover:-translate-y-[2px] shadow-[0_12px_32px_-16px_rgba(0,0,0,.15)]"
      style={{ background: t.bg }}
    >
      {t.image && (
        <Image
          src={t.image}
          alt=""
          width={48}
          height={48}
          className="object-contain"
        />
      )}
    </span>
  );

  return (
    <Reveal delay={delay} className="flex flex-col items-center">
      {t.href ? (
        <Link
          href={localizedHref(t.href, locale as "en" | "nl")}
          className="flex flex-col items-center group"
        >
          {icon}
          <span className="pt-[12px] font-sans font-semibold text-[13px] text-center leading-[19.5px] text-[var(--color-haiti)] group-hover:text-[var(--color-violet-42)] transition-colors">
            {t.label}
          </span>
        </Link>
      ) : (
        <>
          {icon}
          <span className="pt-[12px] font-sans font-semibold text-[13px] text-center leading-[19.5px] text-[var(--color-haiti)]">
            {t.label}
          </span>
        </>
      )}
    </Reveal>
  );
}

export default function TradesShowcase() {
  const { t, locale } = useLanguage();
  return (
    <section
      id="industries"
      className="relative"
      style={{
        background:
          "linear-gradient(to bottom, #faf7ff 0%, #ffffff 56.25%, #deffef 72.81%, #deffef 100%)",
      }}
    >
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center gap-[18px] lg:gap-[36px]">
        <div className="flex flex-col gap-[18px] items-center max-w-[900px] w-full">
          <Reveal>
            <span className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              {t({
                en: "Built for real businesses",
                nl: "Ontwikkeld voor echte ondernemers",
              })}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              <span className="block">
                {t({ en: "One system.", nl: "Eén systeem." })}
              </span>
              <span className="block">
                {t({
                  en: "Many kinds of ",
                  nl: "voor uiteenlopende ",
                })}
                <span className="text-grad-brand">
                  {t({ en: "Real Business.", nl: "MKB-bedrijven." })}
                </span>
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="text-center font-poppins italic font-semibold text-[clamp(20px,2.4vw,28px)] leading-[36.4px] tracking-[-0.5px] text-[var(--color-haiti)] max-w-[846px]">
            {t({
              en: "From the trades floor to the treatment room —",
              nl: "Van vakmensen tot dienstverleners. —",
            })}
            <br className="hidden sm:block" aria-hidden />
            {t({
              en: "Growth Rocket works the way your business actually runs.",
              nl: "Growth Rocket sluit aan op de manier waarop uw bedrijf dagelijks werkt.",
            })}
          </p>
        </Reveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-[14px] gap-y-[24px] w-full max-w-[900px] pt-[24px] pb-6">
          {getTrades(t).map((t, i) => (
            <TradeBadge key={t.label} t={t} delay={i * 0.03} locale={locale} />
          ))}
        </div>
      </div>
      <ProofBand />
    </section>
  );
}
