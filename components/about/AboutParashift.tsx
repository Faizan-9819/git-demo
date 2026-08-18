"use client";

import Reveal from "@/app/components/Reveal";
import { parashiftStats, timeline } from "./data";

export default function AboutParashift() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-violet-98)] py-[60px] lg:py-[100px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[180px] top-[40px] h-[460px] w-[520px] opacity-70"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0) 70%)",
        }}
      />
      <div className="md:max-w-[1400px] md:mx-auto fix relative grid gap-[42px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-[80px]">
        <div>
          <Reveal>
            <span className="font-poppins text-[14px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              About Parashift Technologies
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-[18px] max-w-[520px] font-poppins text-[clamp(32px,4vw,44px)] font-bold leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
              Backed by real operational experience.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-[18px] max-w-[600px] font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
              Parashift Technologies is a digital and technology company with
              operations in India and Europe. Since 2009 we have worked across
              web development, digital infrastructure, content systems,
              marketing and technology-driven business solutions. Growth Rocket
              is one focused initiative inside that work, supporting small
              businesses with simpler, more accessible digital systems.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-[28px] grid grid-cols-2 gap-[12px]">
              {parashiftStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[14px] border border-[var(--color-slate-200)] bg-white p-[18px]"
                >
                  <div className="font-poppins text-[28px] font-bold leading-none text-[var(--color-haiti)]">
                    {stat.value}
                    {stat.unit ? (
                      <span className="ml-[2px] text-[16px] text-[var(--color-violet-42)]">
                        {stat.unit}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-[9px] font-jakarta text-[12px] leading-[1.4] text-[var(--color-dolphin)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <ol className="relative flex flex-col gap-[24px]">
            <span
              className="absolute bottom-[14px] left-[10px] top-[12px] w-px bg-[var(--color-violet-92)]"
              aria-hidden
            />
            {timeline.map((item) => (
              <li key={item.year} className="relative grid gap-[8px] pl-[36px]">
                <span className="absolute left-[3px] top-[5px] size-[15px] rounded-full border-[3px] border-white bg-[var(--color-violet-42)] shadow-[0_0_0_4px_var(--color-violet-92)]" />
                <span className="font-poppins text-[14px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
                  {item.year}
                </span>
                <h3 className="font-poppins text-[18px] font-semibold leading-[1.3] text-[var(--color-haiti)]">
                  {item.title}
                </h3>
                <p className="font-poppins text-[14px] leading-[1.7] text-[var(--color-dolphin)]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
