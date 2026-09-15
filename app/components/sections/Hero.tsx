"use client";
import Image from "next/image";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import Reveal from "../Reveal";
import Parallax from "../Parallax";
import Button from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageProvider";

function Check() {
  return (
    <span
      aria-hidden
      className="font-jakarta font-bold text-[16px] leading-[18px] text-[var(--color-green-600)] shrink-0"
    >
      ✓
    </span>
  );
}

function HeroCard() {
  return (
    <Reveal
      delay={0.15}
      className="relative box-border w-full rounded-t-[24px] px-[20px] py-[20px] sm:p-[32px]"
      y={32}
    >
      <div
        className="absolute inset-0 rounded-t-[24px] z-10"
        style={{ background: "var(--grad-hero-frame)" }}
        aria-hidden
      />
      <div className="relative z-20 bg-white rounded-[14px] overflow-hidden shadow-[0_-20px_60px_0_rgba(46,16,101,0.12)] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] min-h-[280px]">
        <img src="/figma/leftimg.jpg" alt="" />
        <img src="/figma/rightimg.jpg" alt="" />
      </div>
    </Reveal>
  );
}

export default function Hero({
  onStartClick,
  onBookClick,
}: {
  onStartClick?: () => void;
  onBookClick?: () => void;
}) {
  const { t } = useLanguage();

  // Normalized mouse position -1..1
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  // Shared spring — snappy but still smooth
  const sx = useSpring(mx, { stiffness: 100, damping: 16, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 100, damping: 16, mass: 0.5 });

  // Each element gets its own transform from the same spring (reverse = negate)
  const blob1X = useTransform(sx, (v) => v * -38);
  const blob1Y = useTransform(sy, (v) => v * -28);

  const blob2X = useTransform(sx, (v) => v * 28);
  const blob2Y = useTransform(sy, (v) => v * 22);

  const calX = useTransform(sx, (v) => v * -22);
  const calY = useTransform(sy, (v) => v * -16);

  const tiktokX = useTransform(sx, (v) => v * 18);
  const tiktokY = useTransform(sy, (v) => v * 14);

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, var(--color-violet-98) 100%)",
      }}
    >
      {/* violet blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[407px] -right-[201px] w-[589px] h-[470px] opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.45) 0%, rgba(124,58,237,0) 70%)",
          x: blob1X,
          y: blob1Y,
        }}
      />
      {/* amber blob */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-[110px] -left-[137px] w-[396px] h-[422px] rotate-[37deg] opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(254,215,170,0.6) 0%, rgba(254,215,170,0) 70%)",
          x: blob2X,
          y: blob2Y,
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix border-x-2 border-[rgba(148,163,184,.2)] relative lg:pt-[60px] pt-[60px]">
        {/* Calendar widget — inline to receive mouse values */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-[-60px] top-[290px] w-[200px] h-[200px] overflow-hidden z-0"
          style={{ x: calX, y: calY }}
        >
          <Image
            src="/figma/calender.svg"
            alt=""
            width={200}
            height={200}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>

        <Reveal>
          <div className="flex justify-center">
            <span className="btn-chip p-2 inline-flex items-center gap-2 bg-white border-2 border-gray-100 rounded-[40px]">
              <span className="chip-badge px-5 pt-1.5 pb-1 inline-flex items-center justify-center rounded-[10px]">
                {t({ en: "NEW", nl: "NIEUW" })}
              </span>
              {t({
                en: "Now with booking & Hub dashboard",
                nl: "Alles-in-één: boekingen en Hub-dashboard",
              })}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Parallax offset={20}>
            <h1 className="mx-auto mt-[18px] text-center font-poppins text-[24px] font-bold leading-[1.15] tracking-[-0.8px] text-[var(--color-haiti)] sm:text-[clamp(32px,7vw,56px)] sm:leading-[1.15] sm:tracking-[-2px]">
              <span className="block">
                {t({
                  en: "Not just a website.",
                  nl: "Niet alleen een website.",
                })}
              </span>
              <span className="hidden sm:flex sm:flex-wrap sm:items-baseline sm:justify-center sm:gap-x-[0.25em] border-b-2 border-[rgba(148,163,184,.2)] pb-1">
                <span>{t({ en: "A", nl: "Een" })}</span>
                <span className="text-grad-brand">
                  {t({
                    en: "complete business system",
                    nl: "compleet systeem voor je bedrijf",
                  })}
                </span>
              </span>
              <span className="sm:hidden">
                <span>{t({ en: "A ", nl: "Een " })}</span>
                <span className="text-grad-brand">
                  {t({
                    en: "complete business system",
                    nl: "compleet systeem voor je bedrijf",
                  })}
                </span>
              </span>
            </h1>
          </Parallax>
        </Reveal>

        <Reveal delay={0.1}>
          <Parallax offset={15}>
            <p className="mx-auto mt-[18px] max-w-[340px] text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)] sm:max-w-[810px]">
              {t({
                en: "Your website, your enquiries, and your bookings — all in one managed system.",
                nl: "Je website, je aanvragen en je afspraken — overzichtelijk bij elkaar, alles in een systeem.",
              })}
              <br className="hidden sm:block" aria-hidden />
              {t({
                en: "Built for small businesses who want simple, not complicated.",
                nl: "Speciaal ontwikkeld voor MKB-bedrijven, eenvoudig en overzichtelijk",
              })}
            </p>
          </Parallax>
        </Reveal>

        <Reveal delay={0.15}>
          <Parallax offset={10}>
            <div className="mx-auto mt-[18px] flex w-full max-w-[340px] flex-col justify-center gap-[12px] sm:max-w-none sm:flex-row sm:flex-wrap">
              <Button
                onClick={onStartClick}
                arrow="up-right"
                className="w-full sm:w-auto"
              >
                {t({
                  en: "Start now — it's simple",
                  nl: "Begin nu — zo simpel is het",
                })}
              </Button>
              <Button
                href="#features"
                variant="secondary"
                arrow="right"
                className="w-full sm:w-auto"
              >
                {t({ en: "See how it works", nl: "Bekijk hoe het werkt" })}
              </Button>
            </div>
          </Parallax>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-[18px] flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[10px]">
            {[
              { en: "Live in 7 days", nl: "Binnen 7 dagen online" },
              { en: "One fixed yearly price", nl: "Eén vaste prijs per jaar" },
              {
                en: "No technical setup",
                nl: "Geen technisch gedoe",
              },
            ].map((entry) => (
              <li key={entry.en} className="flex items-center gap-[6px]">
                <Check />
                <span className="font-jakarta text-[14px] leading-[18px] text-[var(--color-dolphin)]">
                  {t(entry)}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-[36px]">
          {/* <Parallax offset={30}> */}
          <HeroCard />
          {/* </Parallax> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
          className="hidden xl:block absolute -left-5 top-[420px] size-[96px] rounded-[16px] overflow-hidden border border-[#e65745]/80 z-30"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,212,206,.3) 0%, rgba(255,255,255,.157) 48%, rgba(255,237,234,.3) 100%)",
            x: tiktokX,
            y: tiktokY,
          }}
        >
          <Image
            src="/figma/hero-tiktok.png"
            alt=""
            width={80}
            height={80}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </motion.div>
      </div>
    </section>
  );
}
