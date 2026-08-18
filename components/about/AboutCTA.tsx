"use client";

import Reveal from "@/app/components/Reveal";
import Button from "@/app/components/ui/Button";

export default function AboutCTA() {
  const openLeadForm = () => {
    window.dispatchEvent(new CustomEvent("open-lead-form"));
  };

  const openBookingForm = () => {
    window.dispatchEvent(new CustomEvent("open-booking-form"));
  };

  return (
    <section className="relative overflow-hidden bg-white py-[72px] lg:py-[108px]">
      <div className="hero-border-l bg-[rgba(148,163,184,.2)]" aria-hidden />
      <div className="hero-border-r bg-[rgba(148,163,184,.2)]" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.16) 0%, rgba(124,58,237,0) 70%)",
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix relative">
        <div className="mx-auto max-w-[850px] text-center">
          <Reveal>
            <span className="font-poppins text-[14px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              Final note
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-[18px] font-poppins text-[clamp(34px,5vw,52px)] font-bold leading-[1.08] tracking-[-1.5px] text-[var(--color-haiti)]">
              Many small businesses are excellent at what they do.{" "}
              <span className="block text-grad-brand">
                They just need better systems around them.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-[18px] max-w-[620px] font-poppins text-[16px] leading-[1.7] text-[var(--color-dolphin)]">
              That is what we are here to build. One business at a time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-[28px] flex flex-col justify-center gap-[12px] sm:flex-row">
              <Button onClick={openLeadForm} arrow="up-right" size="lg">
                Start your Growth Rocket journey
              </Button>
              <Button
                onClick={openBookingForm}
                variant="secondary"
                arrow="right"
                size="lg"
              >
                Talk to the team
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-[18px] flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[10px]">
              {[
                "Live in 7 days",
                "One fixed yearly price",
                "No technical setup",
              ].map((item) => (
                <li key={item} className="flex items-center gap-[6px]">
                  <span className="font-jakarta text-[16px] font-bold leading-[18px] text-[var(--color-green-600)]">
                    <svg
                      width="14"
                      height="14"
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
                  <span className="font-jakarta text-[14px] leading-[18px] text-[var(--color-dolphin)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
