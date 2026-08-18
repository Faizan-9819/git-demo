"use client";
import Reveal from "../Reveal";
import Button from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function CTA({ onStartClick }: { onStartClick?: () => void }) {
  const { t } = useLanguage();
  return (
    <section
      className="relative overflow-hidden py-[80px] pt-[79px]"
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
          <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-[-2px] text-[#faf7ff]">
            {t({
              en: "Ready to get organised?",
              nl: "Klaar voor meer overzicht?",
            })}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[#faf7ff] max-w-[810px]">
            {t({
              en: "Your website, your enquiries, and your bookings — all in one managed system. Live in 7 days. Simple as that.",
              nl: "Uw website, aanvragen en afspraken overzichtelijk samengebracht in één systeem. Binnen 7 dagen online. Zo eenvoudig is het.",
            })}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[6px]">
            <Button onClick={onStartClick} arrow="up-right">
              {t({
                en: "Start now — it’s simple",
                nl: "Begin vandaag nog",
              })}
            </Button>
            <Button
              variant="secondary"
              arrow="right"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-booking-form"));
                }
              }}
            >
              {t({ en: "Book an Appointment", nl: "Plan een afspraak" })}
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[10px] pt-[4px]">
            {[
              { en: "Live in 7 days", nl: "Binnen 7 dagen online" },
              { en: "One fixed yearly price", nl: "Eén vaste prijs per jaar" },
              {
                en: "No technical setup",
                nl: "Geen technisch gedoe",
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
