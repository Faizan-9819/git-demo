"use client";
import Reveal from "../Reveal";
import Button from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section
      className="relative overflow-hidden py-[80px] pt-[79px] mb-[100px]"
      style={{
        background:
          "linear-gradient(174deg, var(--color-violet-42) 0%, var(--color-violet-23) 100%)",
      }}
    >
      {/* Decorative blurs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[145px] -left-[143px] w-[390px] h-[393px] rotate-[52deg] -scale-y-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.25) 0%, rgba(254,229,102,0) 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[120px] -right-[60px] w-[390px] h-[393px] rotate-[127deg]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.3) 0%, rgba(254,229,102,0) 70%)",
          filter: "blur(12px)",
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center gap-[18px] max-w-[1000px]">
        <Reveal>
          <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.15] tracking-[-2px] text-[#faf7ff]">
            {t({
              en: "From €690/year — Everything for Electricians in one simple system.",
              nl: "Vanaf €690/jaar — Alles voor elektriciens in één eenvoudig systeem.",
            })}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[#faf7ff] max-w-[810px] ">
            {t({
              en: "Website, enquiries, bookings, and one simple dashboard — all in one place.",
              nl: "Website, aanvragen, boekingen en één overzichtelijk dashboard — allemaal op één plek.",
            })}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[6px]">
            <Button href="#pricing" arrow="up-right">
              {t({
                en: "View Pricing",
                nl: "Bekijk prijzen",
              })}
            </Button>
            {/* <Button
              variant="secondary"
              arrow="right"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-booking-form"));
                }
              }}
            >
              {t({ en: "Book an Appointment", nl: "Maak een afspraak" })}
            </Button> */}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[10px] pt-[4px]">
            {[
              { en: "Live in 7 days", nl: "Binnen 7 dagen live" },
              { en: "One fixed yearly price", nl: "Eén vaste prijs per jaar" },
              {
                en: "No technical setup",
                nl: "Geen technische installatie nodig",
              },
            ].map((entry) => (
              <li key={entry.en} className="flex items-center gap-[6px]">
                <span className="font-jakarta font-bold text-[16px] leading-[18px] text-[var(--color-green-600)]">
                  ✓
                </span>
                <span className="font-jakarta text-[14px] leading-[18px] text-[#faf7ff]">
                  {t(entry)}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
