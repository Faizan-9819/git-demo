"use client";
import Reveal from "@/app/components/Reveal";
import { processSteps } from "@/app/partner-network/data";

export default function Process() {
  return (
    <section className="relative bg-[#F6F3FF] pb-[60px] lg:pb-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-[30px] lg:mb-[56px] gap-[18px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              The Process
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              A simple referral process.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)] max-w-[514px]">
              Four steps. We handle the work. You stay focused on relationships.
            </p>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 lg:gap-6">
          {/* Connector line — desktop only, centered on step numbers */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-px top-[32px]"
            style={{
              background:
                "repeating-linear-gradient(to right, #00000060 0 6px, transparent 6px 12px)",
            }}
          />

          {processSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.07}>
              <div className="relative z-10 flex flex-col items-center text-center gap-[16px]">
                <div
                  className="w-[64px] h-[64px] rounded-[18px] bg-white flex items-center justify-center font-poppins font-bold text-[20px] shadow-[0_8px_24px_-8px_rgba(91,33,182,0.28)]"
                  style={{
                    color: "var(--color-violet-42)",
                    border: "1.5px solid var(--color-violet-92)",
                  }}
                >
                  {step.n}
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-[18px] leading-[1.3] tracking-[-0.3px] text-[var(--color-haiti)]">
                    {step.title}
                  </h4>
                  <p className="mt-[8px] font-poppins text-[14px] leading-[1.6] text-[var(--color-dolphin)]">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="text-center mt-[48px] font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
            No technical work. No project management. You focus on
            introductions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
