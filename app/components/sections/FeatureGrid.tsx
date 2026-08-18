"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/LanguageProvider";
import type { Translation } from "../../i18n/config";

type Feature = {
  icon: string;
  title: Translation;
  desc: Translation;
};

const DEFAULT_FEATURES: Feature[] = [
  {
    icon: "/figma/feat-1.svg",
    title: {
      en: "Professional website",
      nl: "Professionele website",
    },
    desc: {
      en: "Designed, built, and deployed — a site that feels made for your business.",
      nl: "Ontworpen, gebouwd en online gebracht – een professionele website die perfect aansluit bij uw bedrijf.",
    },
  },
  {
    icon: "/figma/feat-2.svg",
    title: { en: "Enquiry capture", nl: "Slim aanvraagbeheer" },
    desc: {
      en: "Structured forms with the fields that matter for your service.",
      nl: "Duidelijke formulieren die precies de informatie verzamelen die u nodig heeft om klanten snel en professioneel te helpen.",
    },
  },
  {
    icon: "/figma/feat-3.svg",
    title: { en: "Booking system", nl: "Online afsprakensysteem" },
    desc: {
      en: "Let customers pick a time — confirmed automatically, zero back-and-forth.",
      nl: "Laat klanten zelf een geschikt moment kiezen. Afspraken worden automatisch bevestigd, zonder eindeloos heen en weer communiceren.",
    },
  },
  {
    icon: "/figma/feat-4.svg",
    title: { en: "WhatsApp connect", nl: "Direct contact via WhatsApp" },
    desc: {
      en: "A one-tap chat button for customers already using WhatsApp.",
      nl: "Met één klik kunnen klanten direct contact met u opnemen via WhatsApp.",
    },
  },
  {
    icon: "/figma/feat-5.svg",
    title: { en: "Growth Rocket Hub", nl: "Growth Rocket Hub" },
    desc: {
      en: "One dashboard to see every enquiry and booking at a glance.",
      nl: "Eén centraal dashboard waarin u alle aanvragen en afspraken in één oogopslag ziet.",
    },
  },
  {
    icon: "/figma/feat-6.svg",
    title: {
      en: "EU hosting + SSL",
      nl: "Veilige hosting inclusief SSL",
    },
    desc: {
      en: "Secure European hosting, GDPR-ready, encrypted out of the box.",
      nl: "Uw website wordt veilig gehost in Europa, voldoet aan de AVG en is standaard beschermd met SSL-beveiliging.",
    },
  },
  {
    icon: "/figma/feat-7.svg",
    title: { en: "Content updates", nl: "" },
    desc: {
      en: "Send us changes, we make them. No dashboard to learn, no wait.",
      nl: "Stuur uw wijzigingen naar ons en wij voeren ze door. Geen ingewikkelde systemen en geen technische kennis nodig.",
    },
  },
  {
    icon: "/figma/feat-8.svg",
    title: {
      en: "Monthly maintenance",
      nl: "Onderhoud en beveiliging",
    },
    desc: {
      en: "Updates, backups, security — handled for you every single month.",
      nl: "Updates, back-ups, beveiliging en technisch onderhoud worden maandelijks volledig voor u verzorgd.",
    },
  },
  {
    icon: "/figma/feat-9.svg",
    title: { en: "Ticket support", nl: "Persoonlijke ondersteuning" },
    desc: {
      en: "Email and ticket support from people who actually know your site.",
      nl: "Ondersteuning via e-mail en tickets door specialisten die uw website kennen en snel kunnen helpen.",
    },
  },
];

type FeatureGridProps = {
  eyebrow?: Translation;
  heading?: { line1: Translation; line2: Translation };
  subheading?: Translation;
  features?: Feature[];
};

export default function FeatureGrid({
  eyebrow,
  heading,
  subheading,
  features,
}: FeatureGridProps) {
  const { t } = useLanguage();

  const resolvedEyebrow = eyebrow ?? {
    en: "What you get",
    nl: "Wat u krijgt",
  };
  const resolvedHeading = heading ?? {
    line1: {
      en: "Everything your business needs.",
      nl: "Alles wat uw bedrijf nodig heeft, overzichtelijk.",
    },
    line2: { en: "In one place.", nl: "Op één plek." },
  };
  const resolvedSubheading = subheading ?? {
    en: "Nine core capabilities that come standard with every Growth Rocket plan.",
    nl: "Negen krachtige functies die standaard zijn inbegrepen bij ieder Growth Rocket-pakket.",
  };
  const resolvedFeatures = features ?? DEFAULT_FEATURES;

  return (
    <section
      id="features"
      className="relative bg-white lg:pb-[100px] pb-[60px]"
    >
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center lg:gap-[56px] gap-[28px]">
        <div className="flex flex-col gap-[18px] items-center max-w-[912px] w-full">
          <Reveal>
            <span className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              {t(resolvedEyebrow)}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              <span className="block">{t(resolvedHeading.line1)}</span>
              <span className="block text-grad-brand">
                {t(resolvedHeading.line2)}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              {t(resolvedSubheading)}
            </p>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px] w-full duration-100">
          {resolvedFeatures.map((f, i) => (
            <div
              key={f.title.en}
              className="group relative flex flex-col gap-[7px] px-[24px] py-[28px] rounded-[16px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_40px_-12px_rgba(91,33,182,0.18)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-[16px] pointer-events-none bg-[var(--color-violet-98)] group-hover:bg-[linear-gradient(170deg,var(--color-violet-98)_0%,var(--color-violet-92)_100%)] transition-colors duration-300"
              />
              <div className="relative flex items-center gap-[10px] lg:flex-col lg:items-start">
                <span className="flex items-center justify-center size-[44px] rounded-[12px] bg-white border border-[var(--color-amber-50)] shrink-0">
                  <Image src={f.icon} alt="" width={22} height={22} />
                </span>
                <h3 className="sm:hidden font-poppins font-semibold text-[18px] leading-[25.5px] tracking-[-0.3px] text-[var(--color-haiti)] lg:pt-[8.6px]">
                  {t(f.title)}
                </h3>
              </div>

              <div className="relative pt-[8.6px]">
                <h3 className="hidden sm:block font-poppins font-semibold text-[18px] leading-[25.5px] tracking-[-0.3px] text-[var(--color-haiti)]">
                  {t(f.title)}
                </h3>
              </div>
              <p className="relative font-poppins text-[13px] leading-[20.8px] text-[var(--color-slate-500)]">
                {t(f.desc)}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
