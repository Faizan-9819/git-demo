"use client";
import type { CSSProperties, ReactNode } from "react";
import Reveal from "@/app/components/Reveal";

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

function CommissionCard({
  dark,
  pill,
  pillBg,
  pillColor,
  amount,
  amountSup,
  supColor,
  title,
  description,
  tags,
  delay,
}: {
  dark?: boolean;
  pill: string;
  pillBg: string;
  pillColor: string;
  amount: string;
  amountSup: string;
  supColor: string;
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}) {
  const cardStyle: CSSProperties = dark
    ? {
        background: "var(--color-violet-12)",
        border: "1px solid rgba(255,255,255,0.04)",
        boxShadow: "0 16px 48px -28px rgba(10,5,22,0.7)",
      }
    : {
        background: "#ffffff",
        border: "1px solid var(--color-violet-92)",
        boxShadow: "0 4px 24px -8px rgba(91,33,182,0.10)",
      };

  return (
    <Reveal delay={delay} className="w-full h-full">
      <div
        className="flex min-h-[320px] h-full flex-col gap-[24px] rounded-[18px] px-[32px] py-[38px]"
        style={cardStyle}
      >
        <ComparePill background={pillBg} color={pillColor}>
          {pill}
        </ComparePill>

        <div
          className="font-poppins font-bold leading-none tracking-[-0.04em] flex items-end gap-[4px]"
          style={{ color: dark ? "#ffffff" : "var(--color-haiti)" }}
        >
          <span className="lg:text-[84px] text-[62px]">{amount}</span>
          <span
            className="font-semibold lg:text-[38px] text-[28px] pb-[6px]"
            style={{ color: supColor }}
          >
            {amountSup}
          </span>
        </div>

        <div className="flex flex-col gap-[10px]">
          <h3
            className="font-poppins font-semibold text-[20px] leading-[1.3] tracking-[-0.3px]"
            style={{ color: dark ? "#ffffff" : "var(--color-haiti)" }}
          >
            {title}
          </h3>
          <p
            className="font-poppins text-[15px] leading-[1.5]"
            style={{
              color: dark ? "rgba(255,255,255,0.7)" : "var(--color-dolphin)",
            }}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-[8px] mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-poppins text-[12px] font-medium px-[12px] py-[6px] rounded-full"
              style={{
                background: dark
                  ? "rgba(255,255,255,0.1)"
                  : "var(--color-violet-98)",
                color: dark ? "#ffffff" : "var(--color-violet-42)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Commission() {
  return (
    <section
      id="commission"
      className="relative overflow-hidden bg-white py-[60px] lg:py-[100px]"
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

      <div className="md:max-w-[1400px] md:mx-auto fix relative flex flex-col items-center gap-[48px] lg:gap-[56px]">
        <div className="flex w-full max-w-[912px] flex-col items-center gap-[18px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              Commissions
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-[912px] text-center font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              Transparent and recurring.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[514px] text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              Two simple commission structures designed for long-term
              partnerships.
            </p>
          </Reveal>
        </div>

        <div className="grid w-full max-w-[1000px] grid-cols-1 gap-6 lg:gap-[20px] lg:grid-cols-2 items-stretch">
          <CommissionCard
            pill="Website Plans"
            pillBg="rgba(146,39,153,0.08)"
            pillColor="var(--color-violet-42)"
            amount="15"
            amountSup="%"
            supColor="var(--color-dolphin)"
            title="Recurring website commission"
            description="Paid every year, as long as the client remains active on a Growth Rocket website plan."
            tags={["Annual plan", "Recurring", "No cap"]}
            delay={0.05}
          />
          <CommissionCard
            dark
            pill="Upsell Services"
            pillBg="rgba(255, 229, 102, 0.15)"
            pillColor="var(--color-amber-200)"
            amount="10"
            amountSup="%"
            supColor="var(--color-amber-300)"
            title="On qualifying services"
            description="Applies to digital marketing, SEO, content services and qualifying Growth Rocket services."
            tags={["Marketing", "SEO", "Content"]}
            delay={0.1}
          />
        </div>
        <p className="text-center">
          Excludes domain bookings, standalone hosting, and pass-through
          infrastructure services.
        </p>
      </div>
    </section>
  );
}
