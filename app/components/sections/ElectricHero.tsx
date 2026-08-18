"use client";

import Image from "next/image";
import Reveal from "../Reveal";
import Button from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

function Check() {
  return (
    <span
      aria-hidden
      className="font-jakarta text-[16px] font-bold leading-[18px] text-[var(--color-green-600)]"
    >
      {"\u2713"}
    </span>
  );
}

function ElectricHeroVisual({
  t,
}: {
  t: (e: { en: string; nl: string }) => string;
}) {
  return (
    <Reveal
      delay={0.12}
      y={24}
      className="relative mx-auto h-[360px] w-full max-w-[560px] sm:h-[440px] lg:h-[560px] lg:max-w-none mb-[-28px]"
    >
      <Image
        src="/figma/sec1imgsbg.png"
        alt=""
        width={668}
        height={589}
        priority
        className="absolute rounded-t-[30px] inset-0 h-full w-full object-fill"
      />

      <Image
        src="/figma/bigweb.png"
        alt={t({
          en: "Example website for electrician on mobile",
          nl: "Voorbeeld website voor elektricien op mobiel",
        })}
        width={536}
        height={587}
        priority
        className="absolute left-[4%] top-[7%] z-10 w-[76%] rounded-t-[14px] max-w-[536px]"
      />

      <Image
        src="/figma/smallweb.png"
        alt={t({
          en: "Growth Rocket Hub dashboard for electrical contractors",
          nl: "Dashboard Growth Rocket Hub voor installateurs",
        })}
        width={378}
        height={291}
        priority
        className="absolute rounded-t-[14px] bottom-[5%] right-[-3%] z-20 w-[58%] max-w-[378px] drop-shadow-[0_18px_36px_rgba(46,16,101,0.18)]"
      />

      <Image
        src="/figma/cursor.svg"
        alt=""
        width={108}
        height={108}
        priority
        className="absolute right-[3%] top-[39%] z-30 w-[15%] min-w-[58px] max-w-[108px]"
      />
    </Reveal>
  );
}

export default function ElectricHero({
  onStartClick,
}: {
  onStartClick?: () => void;
  onBookClick?: () => void;
}) {
  const { t } = useLanguage();

  const benefits = [
    { en: "Live in 7 days", nl: "Binnen 7 dagen live" },
    { en: "One fixed yearly price", nl: "Eén vaste prijs per jaar" },
    { en: "No technical setup", nl: "Geen technische installatie nodig" },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #f4edff 0%, #ffffff 42%, #f8f3ff 100%)",
      }}
    >
      <div className="md:max-w-[1400px] md:mx-auto fix relative flex min-h-[720px] flex-col items-center gap-[34px] px-5 pt-[58px] lg:min-h-[590px] lg:flex-row lg:items-end lg:justify-between lg:gap-[42px] lg:px-0 lg:pt-[56px] ">
        <div className="relative z-10 w-full max-w-[550px] pt-0 text-center lg:max-w-[540px] lg:pt-[2px] pb-5 lg:pb-[50px] lg:text-left">
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <span className="btn-chip inline-flex items-center gap-2 rounded-[40px] border-2 border-gray-100 bg-white p-2">
                <span className="chip-badge inline-flex items-center justify-center rounded-[10px] px-5 pb-1 pt-1.5">
                  {t({ en: "NEW", nl: "NIEUW" })}
                </span>
                {t({
                  en: "Now with booking & Hub dashboard",
                  nl: "Nu met boekingssysteem en Hub-dashboard",
                })}
              </span>
            </div>
          </Reveal>

          {/* <Reveal delay={0.05}>
            <p className="mt-[21px] max-w-[440px] font-poppins text-[20px] font-bold leading-[1.2] tracking-[-0.5px] text-[var(--color-haiti)] sm:text-[24px] lg:mx-0">
              {t({
                en: "A complete website, booking & enquiry system built for electricians.",
                nl: "Een complete website, boekings- en aanvraagsysteem speciaal gebouwd voor elektriciens.",
              })}
            </p>
          </Reveal> */}

          <Reveal delay={0.1}>
            <h1 className="mt-[18px] font-poppins text-[40px] font-bold leading-[1.15] tracking-[-1.7px] text-[var(--color-haiti)] sm:text-[clamp(44px,6vw,56px)] lg:max-w-[560px] lg:tracking-[-2px]">
              <span className="block">
                {t({
                  en: "A website for electricians",
                  nl: "Een website voor elektriciens",
                })}
              </span>
              <span className="block">
                <span className="text-grad-brand">
                  {t({
                    en: "that works for your business.",
                    nl: "die werkt voor uw bedrijf.",
                  })}
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-[20px] max-w-[470px] font-poppins text-[16px] leading-[1.42] tracking-[0.16px] text-[var(--color-dolphin)] lg:mx-0">
              {t({
                en: "No more missed calls. No more WhatsApp chaos. Just a simple system that works while you're on-site.",
                nl: "Geen gemiste oproepen meer. Geen WhatsApp-chaos meer. Gewoon een simpel systeem dat doorwerkt terwijl jij op locatie bezig bent.",
              })}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-[22px] flex w-full flex-col justify-center gap-[12px] sm:flex-row lg:justify-start flex-wrap">
              <Button
                onClick={onStartClick}
                arrow="right"
                className="w-full sm:w-auto"
              >
                {t({
                  en: "Start now — it's simple",
                  nl: "Start vandaag nog — eenvoudig geregeld",
                })}
              </Button>
              <Button
                href="#how"
                variant="secondary"
                arrow={false}
                className="w-full sm:w-auto"
              >
                {t({ en: "See how it works", nl: "Bekijk hoe het werkt" })}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-[23px] flex flex-wrap items-center justify-center gap-x-[24px] gap-y-[10px] lg:justify-start">
              {benefits.map((entry) => (
                <li key={entry.en} className="flex items-center gap-[7px]">
                  <Check />
                  <span className="font-jakarta text-[14px] leading-[18px] text-[var(--color-dolphin)]">
                    {t(entry)}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="w-full flex-1 lg:pt-0">
          <ElectricHeroVisual t={t} />
        </div>
      </div>
    </section>
  );
}
