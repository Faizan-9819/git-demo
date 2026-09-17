"use client";
import Image from "next/image";
import ArrowIcon from "../../ui/ArrowIcon";

/* ------------------------------------------------------------------ */
/*  PREVIOUS HERO — kept for reference, replaced by the                */
/*  `section.legacy-hero` markup from grsolidvariant.html (Variant B). */
/* ------------------------------------------------------------------ */
/*
import Image from "next/image";
import { CalendarCheck, Globe } from "lucide-react";
import Reveal from "../../Reveal";
import Button from "../../ui/Button";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { withBreaks } from "../../../lib/withBreaks";

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-[26px] w-[26px] sm:h-[34px] sm:w-[34px] shrink-0 items-center justify-center rounded-full"
      style={{ background: "var(--grad-brand)" }}
    >
      {children}
    </span>
  );
}

function FloatingPill({
  icon,
  label,
  iconPosition,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  iconPosition: "start" | "end";
  className?: string;
}) {
  return (
    <div
      className={
        "absolute flex items-center gap-[6px] sm:gap-[12px] rounded-full bg-white py-[5px] sm:py-[8px] shadow-[0_10px_30px_rgba(10,5,22,0.12)] font-poppins text-[11px] sm:text-[15px] font-medium text-[var(--color-haiti)] whitespace-nowrap max-w-[calc(100%-16px)] overflow-hidden text-ellipsis " +
        className
      }
    >
      {iconPosition === "start" && icon}
      {label}
      {iconPosition === "end" && icon}
    </div>
  );
}

export default function Hero2({ onStartClick }: { onStartClick?: () => void }) {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 items-stretch pt-19"
    >
      // Left: headline card
      <div className="relative overflow-hidden rounded-[28px] bg-white px-5 sm:px-10 lg:px-8 xl:px-[94px] 2xl:pl-[140px] min-[1900px]:pl-[200px]! py-12 sm:py-16 lg:py-14 xl:py-24 flex items-center">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[140px] -left-[120px] w-[420px] h-[420px] rounded-full opacity-35"
          style={{
            background: "var(--color-amber-300)",
            filter: "blur(120px)",
          }}
        />
        <div className="relative flex flex-col items-start gap-[28px] max-w-[560px]">
          <Reveal>
            <h1 className="m-0 font-poppins font-bold text-[clamp(34px,4.4vw,60px)] leading-[1.06] tracking-[-2px] text-[var(--color-haiti)]">
              {withBreaks(
                t({
                  en: "Not just a website.",
                  nl: "Niet alleen een website.",
                }),
              )}
              <br />
              <span className="text-grad-brand">
                {t({
                  en: "A complete system for your business",
                  nl: "Een compleet systeem voor je bedrijf",
                })}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center  gap-[14px] flex-wrap">
              <Button
                variant="dark"
                onClick={onStartClick}
                className="rounded-lg px-[22px]! py-[16px]! text-[15px]!"
              >
                {t({
                  en: "Start with Growth Rocket",
                  nl: "Start met Growth Rocket",
                })}
              </Button>
              <a
                href="#oplossing"
                className="font-poppins text-[15px] font-semibold text-[var(--color-violet-42)] hover:text-[var(--color-violet-58)] transition-colors"
              >
                {t({ en: "See how it works →", nl: "Bekijk hoe het werkt →" })}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-center gap-[10px] -mt-4 md:mt-0 lg:pt-[8px]">
              <span className="inline-block w-[8px] h-[8px] rounded-full bg-[var(--color-green-600)]" />
              <span className="font-sans text-[13px] text-[var(--color-dolphin)]">
                {t({
                  en: "For freelancers and small businesses · from €69/month",
                  nl: "Voor ZZP'ers en MKB · vanaf €69 per maand",
                })}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      // Right: product visual
      <Reveal
        delay={0.1}
        y={16}
        className="relative overflow-hidden rounded-[28px] min-h-[420px] lg:min-h-[680px]"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, var(--color-violet-98) 0%, #e7e1f5 100%)",
          }}
        />
        <Image
          src="/home/hero-professionals.png"
          alt={t({
            en: "Freelancers: a tradesperson and a healthcare professional",
            nl: "ZZP'ers: een vakman en een zorgprofessional",
          })}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[50%_20%]"
          priority
        />

        <FloatingPill
          className="top-[12px] left-[8px] sm:top-[20px] sm:left-[10px] pl-[10px] pr-[6px] sm:pl-[22px] sm:pr-[8px]"
          iconPosition="end"
          label={t({
            en: "Requests & appointments",
            nl: "Aanvragen & afspraken",
          })}
          icon={
            <IconCircle>
              <CalendarCheck size={17} color="#fff" />
            </IconCircle>
          }
        />

        <FloatingPill
          className="top-[12px] right-[8px] sm:top-[100px] sm:right-[10px] lg:top-[56%] lg:right-12 pr-[10px] pl-[6px] sm:pr-[22px] sm:pl-[8px]"
          iconPosition="start"
          label={t({ en: "Professional website", nl: "Professionele website" })}
          icon={
            <IconCircle>
              <Globe size={17} color="#fff" />
            </IconCircle>
          }
        />

        <div className="absolute bottom-[14px] left-[14px] sm:bottom-[28px] sm:left-[28px] w-[calc(100%-28px)] sm:w-[min(64%,300px)] flex flex-col gap-[8px] sm:gap-[12px] rounded-[16px] sm:rounded-[20px] bg-white p-[14px] sm:p-[20px] shadow-[0_16px_40px_rgba(10,5,22,0.14)]">
          <div className="flex items-center justify-between gap-[10px]">
            <span className="font-poppins text-[13px] sm:text-[15px] font-semibold text-[var(--color-haiti)]">
              {t({ en: "Requests", nl: "Aanvragen" })}
            </span>
            <span className="rounded-full bg-[var(--color-violet-98)] px-[8px] sm:px-[10px] py-[3px] sm:py-[4px] font-sans text-[10px] sm:text-[11px] text-[var(--color-dolphin)] whitespace-nowrap">
              {t({ en: "This month", nl: "Deze maand" })}
            </span>
          </div>
          <span className="font-poppins text-[26px] sm:text-[34px] font-bold leading-none tracking-[-1px] text-[var(--color-violet-42)]">
            24
          </span>
          <div className="flex h-[48px] sm:h-[74px] items-end gap-[6px] sm:gap-[8px]">
            {[38, 58, 34, 46, 74, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-full"
                style={{
                  height: `${h}%`,
                  background:
                    i < 3
                      ? "var(--color-violet-92)"
                      : "linear-gradient(180deg, #922698 0%, #5b219f 100%)",
                }}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
*/

/**
 * Hero — ported 1:1 from `section.legacy-hero` in grsolidvariant.html.
 *
 * The stylesheet there is layered: the base `.legacy-hero` rules are later
 * overridden by the "Variant B" blocks, so the values below are the final
 * computed ones (deep #0a0516 copy panel, purple #5b2dce glow + CTA, lime
 * #e4fa65 accent line). Variant B also hides the floating chips and the
 * "Enquiries" stat card over the photo (`display:none !important`), so they
 * are intentionally not reproduced.
 *
 * The 900px breakpoint of the original is kept as-is via `min-[901px]:` /
 * `max-[900px]:` rather than being rounded to Tailwind's `lg`.
 */
export default function Hero2({ onStartClick }: { onStartClick?: () => void }) {
  return (
    <section id="home" className="">
      <div className=" grid grid-cols-1 min-[901px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-0 overflow-hidden rounded-[13px]">
        {/* Left: copy panel */}

        <div className="fix-left relative flex items-center overflow-hidden rounded-t-[13px] min-[901px]:rounded-l-[13px] min-[901px]:rounded-tr-none bg-[#0a0516] min-h-[480px] min-[521px]:min-h-[510px] min-[901px]:min-h-[650px] py-[70px]">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-[120px] -top-[130px] h-[410px] w-[410px] rounded-full bg-[#5b2dce] opacity-[0.18] blur-[110px]"
          />

          <div className="relative max-w-[560px]">
            <h1 className="m-0 font-bricolage text-[40px] min-[521px]:text-[clamp(42px,4.3vw,62px)] font-semibold leading-[1.05] tracking-[-0.06em] text-white">
              Not just a website.
              <br />
              <span className="text-[#e4fa65]">A complete system</span>
              <br />
              <span className="text-white">for your business.</span>
            </h1>

            <div className="mt-[30px] flex flex-wrap items-center gap-[18px]">
              <button
                type="button"
                onClick={onStartClick}
                className="arrow-cta inline-flex min-h-[52px] items-center gap-[18px] rounded-full bg-[#5b2dce] px-[20px] py-[14px] font-sans text-[14px] font-semibold text-white hover:bg-[#e4fa65] hover:text-[#0a0516]"
              >
                Start with Growth Rocket <ArrowIcon direction="right" />
              </button>

              <a
                href="#product"
                className="arrow-cta inline-flex items-center gap-[8px] border-b border-white/55 font-sans text-[14px] font-semibold text-white"
              >
                See how it works <ArrowIcon direction="right" />
              </a>
            </div>

            <p className="mt-[30px] flex items-center gap-[10px] font-sans text-[13px] text-[#c9c2d4]">
              <i className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#e4fa65]" />
              For freelancers and small businesses · from €69 per month
            </p>
          </div>
        </div>

        {/* Right: photo panel */}
        <div className="relative overflow-hidden rounded-b-[13px] min-[901px]:rounded-r-[13px] min-[901px]:rounded-bl-none bg-[#e7e1f5] min-h-[480px] min-[901px]:min-h-[650px]">
          <Image
            src="/home2/hero-electrician.png"
            alt="Electrician using his phone beside a work van"
            fill
            sizes="(min-width: 901px) 50vw, 100vw"
            className="object-cover object-[38%_50%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
