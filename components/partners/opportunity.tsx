"use client";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/app/components/Reveal";
import { opportunityBad, opportunityGood } from "@/app/partner-network/data";

function ComparePill({
  children,
  background,
  color,
}: {
  children: ReactNode;
  background: string;
  color: string;
}) {
  return (
    <span
      className="inline-flex w-fit items-center rounded-[100px] px-[28px] py-[10px] font-poppins text-[13px] lg:text-[16px] font-medium uppercase tracking-[1.5px]"
      style={{ background, color }}
    >
      {children}
    </span>
  );
}

function BulletRow({
  tone,
  children,
}: {
  tone: "before" | "after";
  children: ReactNode;
}) {
  const isBefore = tone === "before";

  return (
    <li className="flex items-start gap-[10px]">
      <span
        className="mt-[2px] inline-flex size-[20px] shrink-0 items-center justify-center rounded-[10px] font-sans text-[10px] font-bold leading-[15px]"
        style={{
          background: isBefore
            ? "var(--color-red-200)"
            : "rgba(255, 229, 102, 0.2)",
          color: isBefore ? "var(--color-red-600)" : "var(--color-amber-200)",
        }}
      >
        {isBefore ? <>&#10005;</> : <>&#10003;</>}
      </span>
      <span
        className="font-poppins text-[14px] leading-[21px]"
        style={{
          color: isBefore ? "var(--color-red-900)" : "rgba(255,255,255,0.8)",
        }}
      >
        {children}
      </span>
    </li>
  );
}

function CompareCard({
  tone,
  label,
  title,
  items,
  delay = 0,
}: {
  tone: "before" | "after";
  label: string;
  title: string;
  items: string[];
  delay?: number;
}) {
  const isBefore = tone === "before";
  const cardStyle: CSSProperties = isBefore
    ? {
        background: "#f7f4fc",
        border: "1px solid var(--color-red-200)",
      }
    : {
        background: "var(--color-violet-12)",
        border: "1px solid rgba(255,255,255,0.04)",
        boxShadow: "0 16px 48px -28px rgba(10,5,22,0.7)",
      };

  return (
    <Reveal as="article" delay={delay} className="w-full h-full">
      <div
        className="flex min-h-[425px] h-full flex-col gap-[28px] rounded-[18px] px-[20px] py-[34px] lg:px-[32px] lg:py-[38px]"
        style={cardStyle}
      >
        <ComparePill
          background={isBefore ? "#FFEFE0" : "rgba(255, 229, 102, 0.15)"}
          color={isBefore ? "var(--color-red-600)" : "var(--color-amber-200)"}
        >
          {label}
        </ComparePill>

        <div className="flex flex-col gap-[12px]">
          <h3
            className="font-poppins text-[22px] font-semibold leading-[25.5px] tracking-[-0.3px]"
            style={{ color: isBefore ? "var(--color-haiti)" : "#ffffff" }}
          >
            {title}
          </h3>

          <ul className="flex flex-col gap-[14px] pt-[4px]">
            {items.map((item) => (
              <BulletRow key={item} tone={tone}>
                {item}
              </BulletRow>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Opportunity() {
  return (
    <section
      id="opportunity"
      className="relative overflow-hidden bg-white pb-[60px] lg:pb[100px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[170px] top-[4px] h-[360px] w-[224px] rotate-[37deg] opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[122px] top-[161px] h-[270px] w-[289px] rotate-[52deg] opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(167, 139, 250, 0.34) 0%, rgba(167, 139, 250, 0) 70%)",
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix relative flex flex-col items-center gap-[48px] lg:gap-[52px]">
        <div className="flex w-full max-w-[912px] flex-col items-center gap-[18px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              The Opportunity
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-[912px] text-center font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              <span className="block">Small businesses are still losing</span>
              <span className="block">opportunities online.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[514px] text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              Most local businesses still rely on social DMs and missed calls.
              Their customers expect a professional, organised digital front
              door.
            </p>
          </Reveal>
        </div>

        <div className="grid w-full max-w-[1000px] grid-cols-1 gap-6 lg:gap-[20px] lg:grid-cols-2 items-stretch">
          <CompareCard
            tone="before"
            label="Today's reality"
            title="Where the leaks are happening"
            items={opportunityBad}
          />
          <CompareCard
            tone="after"
            label="What customers expect"
            title="The new minimum bar online"
            items={opportunityGood}
            delay={0.08}
          />
        </div>
        <p className="text-center lg:-mt-5">
          The demand already exists. Most businesses simply need a simpler
          solution.
        </p>
      </div>
    </section>
  );
}
