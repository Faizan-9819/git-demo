"use client";

import { CalendarDays, FileText, MapPin, RefreshCw, Zap } from "lucide-react";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/LanguageProvider";
import type { Translation } from "../../i18n/config";

type Card = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  title: Translation;
  desc: Translation;
  tone: string;
  iconColor: string;
  className: string;
};

const CARDS: Card[] = [
  {
    icon: CalendarDays,
    title: { en: "Scheduled service jobs", nl: "Ingeplande serviceklussen" },
    desc: {
      en: "Customers book a slot that fits, without back-and-forth.",
      nl: "Klanten boeken zelf een passend moment, zonder eindeloos heen-en-weer contact.",
    },
    tone: "bg-[#FFF1E7] border-[#FFD9BF]",
    iconColor: "text-[#E8742B]",
    className: "lg:col-start-2 lg:row-start-1",
  },
  {
    icon: MapPin,
    title: { en: "Local service areas", nl: "Lokale werkgebieden" },
    desc: {
      en: "Structure your service areas properly — so your website reflects where you actually operate.",
      nl: "Richt je servicegebieden goed in, zodat je website duidelijk laat zien waar je daadwerkelijk actief bent.",
    },
    tone: "bg-[#FFF1E7] border-[#FFD9BF]",
    iconColor: "text-[#E8742B]",
    className: "lg:col-span-2 lg:col-start-1 lg:row-start-3",
  },
  {
    icon: Zap,
    title: { en: "Emergency callouts", nl: "Spoedoproepen" },
    desc: {
      en: "Urgent enquiries get through — even when you're mid-job.",
      nl: "Dringende aanvragen komen gewoon binnen, zelfs terwijl je midden in een klus zit.",
    },
    tone: "bg-[#F0E7FF] border-[#D9C6FF]",
    iconColor: "text-[var(--color-violet-42)]",
    className: "lg:col-start-1 lg:row-start-1",
  },
  {
    icon: FileText,
    title: { en: "Quote-based work", nl: "Offertewerk" },
    desc: {
      en: "Capture the right job details for an accurate, fast quote.",
      nl: "Verzamel direct de juiste informatie voor een snelle en nauwkeurige offerte.",
    },
    tone: "bg-[#E9F8EF] border-[#BDE8CF]",
    iconColor: "text-[#278F55]",
    className: "lg:col-start-1 lg:row-start-2",
  },
  {
    icon: RefreshCw,
    title: { en: "Repeat customers", nl: "Terugkerende klanten" },
    desc: {
      en: "Keep every contact on record — easy follow-ups, easy rebookings.",
      nl: "Bewaar alle contactgegevens overzichtelijk voor makkelijke opvolging en snelle herhaalboekingen.",
    },
    tone: "bg-[#E9F1FF] border-[#C6DAFF]",
    iconColor: "text-[#3F74DF]",
    className: "lg:col-start-2 lg:row-start-2",
  },
];

export default function EGridCards() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#F6F3FF] py-[60px] lg:py-[92px]">
      <div className="md:max-w-[1400px] md:mx-auto fix grid items-center gap-[34px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-[78px]">
        <div className="max-w-[520px]">
          <Reveal>
            <span className="font-poppins text-[12px] font-semibold uppercase leading-[18px] tracking-[2px] text-[#9A2BA4]">
              {t({ en: "Built for the trade", nl: "Gebouwd voor het vak" })}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-[18px] font-poppins text-[clamp(32px,5vw,47px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              {t({
                en: "Built for electricians —",
                nl: "Gebouwd voor elektriciens —",
              })}
              <br />
              <span className="text-grad-brand">
                {t({
                  en: "not generic businesses.",
                  nl: "niet voor algemene bedrijven.",
                })}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-[22px] max-w-[440px] font-poppins text-[15px] leading-[1.45] tracking-[0.1px] text-[var(--color-dolphin)]">
              {t({
                en: "Growth Rocket is designed around how electrical businesses actually work — from emergency callouts at 10pm to recurring maintenance with your best clients.",
                nl: "Growth Rocket is ontwikkeld rondom hoe elektrotechnische bedrijven écht werken — van spoedoproepen om 22:00 uur tot terugkerend onderhoud voor vaste klanten.",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-[24px] flex flex-wrap gap-[10px]">
              <Badge>
                {t({
                  en: "Trade-specific workflows",
                  nl: "Vakgerichte workflows",
                })}
              </Badge>
              <Badge>
                {t({
                  en: "Trusted by businesses",
                  nl: "Vertrouwd door bedrijven",
                })}
              </Badge>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-3">
          {CARDS.map((card, index) => (
            <TradeCard key={card.title.en} card={card} delay={index * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-[30px] items-center gap-[7px] rounded-full border border-[var(--color-violet-92)] bg-white px-[14px] font-poppins text-[12px] font-medium leading-[16px] text-[var(--color-haiti)]">
      <span className="size-[5px] rounded-full bg-[#B629B5]" aria-hidden />
      {children}
    </span>
  );
}

function TradeCard({ card, delay }: { card: Card; delay: number }) {
  const { t } = useLanguage();
  const Icon = card.icon;

  return (
    <Reveal
      delay={delay}
      className={`group relative flex min-h-[138px] flex-col gap-[10px] rounded-[16px] border border-[#E8E1F5] bg-white px-[24px] py-[24px] shadow-[0_18px_38px_-28px_rgba(46,16,101,0.42)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_22px_42px_-26px_rgba(91,33,182,0.34)] ${card.className}`}
    >
      <span
        className={`inline-flex size-[38px] items-center justify-center rounded-[11px] border ${card.tone} ${card.iconColor}`}
        aria-hidden
      >
        <Icon size={18} strokeWidth={2.25} />
      </span>
      <div>
        <h3 className="font-poppins text-[16px] font-semibold leading-[1.35] tracking-[-0.2px] text-[var(--color-haiti)]">
          {t(card.title)}
        </h3>
        <p className="mt-[7px] font-poppins text-[13px] leading-[1.45] text-[var(--color-dolphin)]">
          {t(card.desc)}
        </p>
      </div>
    </Reveal>
  );
}
