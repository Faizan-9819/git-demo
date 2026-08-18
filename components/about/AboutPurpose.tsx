"use client";

import Reveal from "@/app/components/Reveal";

export default function AboutPurpose() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-haiti)] py-[76px] lg:py-[116px]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[720px] -translate-x-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.38) 0%, rgba(124,58,237,0) 70%)",
        }}
      />
      <div className="md:max-w-[1400px] md:mx-auto fix relative">
        <div className="mx-auto max-w-[840px] text-center">
          <Reveal>
            <span className="font-poppins text-[14px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-76)]">
              Our purpose
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            {/* text-[clamp(34px,5vw,54px)] */}
            <h2 className="mt-[20px] w-full font-poppins font-bold text-[clamp(34px,5vw,54px)]  leading-[1.08] tracking-[-1.5px] text-[#faf7ff]">
              To help small businesses operate with clearer, simpler,{" "}
              <span className="text-[var(--color-kournikova)]">
                more organised
              </span>{" "}
              digital systems.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-[24px] max-w-[760px] text-center font-poppins text-[16px] leading-[1.75] text-white/70">
              We believe small businesses deserve access to professional digital
              infrastructure - without enterprise budgets, and without technical
              expertise. Growth Rocket starts with a website, but is designed as
              a broader business system that connects online presence,
              enquiries, bookings and operational simplicity.
            </p>
          </Reveal>
          <div className="w-[80px] h-[1px] bg-[#ffffff33] m-[24px_auto_0] md:m-[48px_auto_0]"></div>
          <Reveal delay={0.15}>
            <div className="mx-auto mt-[18px] md:mt-[36px] inline-flex max-w-full flex-wrap items-center justify-center gap-[8px] rounded-full border border-white/10 bg-white/5 px-[16px] py-[10px] font-jakarta text-[14px] leading-[1.4] text-white/70">
              <span className="inline-flex size-[18px] items-center justify-center rounded-full border border-[var(--color-violet-76)] text-[var(--color-violet-76)]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Infrastructure for small business —
              <strong className="font-semibold text-white">
                not just another website builder.
              </strong>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
