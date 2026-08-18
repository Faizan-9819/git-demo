"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LayoutDashboard, Wrench, Hammer, Zap } from "lucide-react";
import Reveal from "../../Reveal";
import EyebrowLabel from "../../ui/EyebrowLabel";
import { useLanguage } from "../../../i18n/LanguageProvider";
import type { Translation } from "../../../i18n/config";

const FADE_IMAGES = [
  "/home/waarom-ondernemer.png",
  "/home/waarom-ondernemer-2.png",
  "/home/waarom-ondernemer-3.png",
  "/home/waarom-ondernemer-4.png",
];

function IconBox({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="flex h-11 w-11 items-center justify-center rounded-[12px]"
      style={{
        background: dark ? "rgba(255,229,102,0.16)" : "var(--color-violet-98)",
      }}
    >
      {children}
    </div>
  );
}

function Card({
  icon,
  title,
  body,
  dark,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  dark?: boolean;
  footer?: React.ReactNode;
}) {
  return (
    <Reveal
      className={
        "flex-1 flex flex-col gap-3 rounded-[26px] p-7 " +
        (dark
          ? "bg-[var(--color-haiti)] border border-[var(--color-haiti)] shadow-[0_12px_32px_rgba(91,33,182,0.16)]"
          : "bg-white border border-[var(--color-slate-200)]")
      }
    >
      {icon}
      <h3
        className={
          "mt-[6px] mb-0 text-[20px] font-semibold tracking-[-0.3px] " +
          (dark ? "text-white" : "text-[var(--color-haiti)]")
        }
      >
        {title}
      </h3>
      <p
        className={
          "m-0 text-[14px] leading-[22px] " +
          (dark ? "text-white/70" : "text-[var(--color-slate-600)]")
        }
      >
        {body}
      </p>
      {footer}
    </Reveal>
  );
}

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
    <div className="relative h-full min-h-[280px] lg:min-h-[420px] rounded-[26px] overflow-hidden bg-[var(--color-haiti)]">
      {FADE_IMAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover object-top transition-opacity duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}

export default function WhyUs() {
  const { t } = useLanguage();

  const price: Translation = { en: "€69 per month", nl: "€69 per maand" };

  return (
    <section
      className="relative rounded-[28px] fix-wide py-[50px] lg:py-28 flex flex-col items-center gap-3.5"
      style={{ background: "var(--grad-brand)" }}
    >
      <EyebrowLabel color="rgb(216,180,254)">
        {t({ en: "Why Growth Rocket", nl: "Waarom Growth Rocket" })}
      </EyebrowLabel>
      <Reveal delay={0.05}>
        <h2 className="m-0 text-center font-poppins font-bold text-[clamp(28px,3.2vw,40px)] leading-[1.12] tracking-[-1px] text-white">
          {t({ en: "Why Growth Rocket?", nl: "Waarom Growth Rocket?" })}
        </h2>
      </Reveal>

      <div className="w-full max-w-[1320px] mt-4 lg:mt-11 grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        <div className="order-2 lg:order-1 flex flex-col gap-4">
          <Card
            icon={
              <IconBox>
                <LayoutDashboard size={22} color="var(--color-violet-42)" />
              </IconBox>
            }
            title={t({
              en: "Everything in one place",
              nl: "Alles op één plek",
            })}
            body={t({
              en: "Your website, requests, appointments, clients, quotes and invoices work together in one clear system.",
              nl: "Je website, aanvragen, afspraken, klanten, offertes en facturen werken samen in één overzichtelijk systeem.",
            })}
          />
          <Card
            icon={
              <IconBox>
                <Wrench size={22} color="var(--color-violet-42)" />
              </IconBox>
            }
            title={t({
              en: "We take care of it for you",
              nl: "Wij regelen het voor je",
            })}
            body={t({
              en: "Your website is professionally set up for you, and we handle hosting, maintenance, security and support.",
              nl: "Je website wordt professioneel voor je opgezet en wij regelen hosting, onderhoud, beveiliging en support.",
            })}
          />
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <FadeImages />
        </Reveal>

        <div className="order-3 lg:order-3 flex flex-col gap-4">
          <Card
            icon={
              <IconBox>
                <Hammer size={22} color="var(--color-violet-42)" />
              </IconBox>
            }
            title={t({
              en: "Built for freelancers & SMEs",
              nl: "Gemaakt voor ZZP & MKB",
            })}
            body={t({
              en: "No complicated business software full of features you'll never use. Just the tools a small business needs every day.",
              nl: "Geen ingewikkelde bedrijfssoftware vol functies die je nooit gebruikt. Alleen de tools die een klein bedrijf dagelijks nodig heeft.",
            })}
          />
          <Card
            dark
            icon={
              <IconBox dark>
                <Zap size={22} color="var(--color-kournikova)" />
              </IconBox>
            }
            title={t({
              en: "More for one fixed price",
              nl: "Meer voor één vaste prijs",
            })}
            body={
              <>
                {t({
                  en: "No separate bills for website, hosting, maintenance, appointments, client management, quotes and invoices. Everything together from ",
                  nl: "Geen losse rekeningen voor website, hosting, onderhoud, afspraken, klantbeheer, offertes en facturen. Alles samen vanaf ",
                })}
                <span className="font-semibold text-[var(--color-kournikova)]">
                  {t(price)}
                </span>
                .
              </>
            }
            footer={
              <a
                href="#prijzen"
                className="mt-auto font-poppins text-[14px] font-semibold text-[var(--color-kournikova)]"
              >
                {t({ en: "See the pricing →", nl: "Bekijk de prijzen →" })}
              </a>
            }
          />
        </div>
      </div>
    </section>
  );
}
