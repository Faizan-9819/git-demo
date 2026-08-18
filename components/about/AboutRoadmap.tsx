"use client";

import Reveal from "@/app/components/Reveal";
import { roadmap } from "./data";

export default function AboutRoadmap() {
  return (
    <section className="relative bg-white py-[60px] lg:py-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="grid gap-[28px] lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-[72px]">
          <div>
            <Reveal>
              <span className="font-poppins text-[14px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
                Beyond websites
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-[18px] max-w-[520px] font-poppins text-[clamp(32px,4vw,44px)] font-bold leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
                Growth Rocket is only the beginning.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p className="max-w-[600px] font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
              Over time we plan to keep expanding the ecosystem around
              small-business operations. Each step is added carefully, in the
              same connected, managed style- not as separate disconnected tools.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-[42px] grid gap-[14px] md:grid-cols-2 lg:grid-cols-5 duration-100">
          {roadmap.map((step, index) => (
            <div
              key={step.marker}
              className={`relative rounded-[16px] border p-[20px] border-[var(--color-slate-200)] bg-white transition-all duration-300 hover:-translate-y-[8px] group hover:border-[var(--color-violet-92)] hover:bg-[var(--color-violet-98)] hover:shadow-[0_14px_40px_-22px_rgba(91,33,182,0.2)] `}
            >
              <div className="flex flex-col justify-between gap-[12px]">
                <span
                  className={`inline-flex size-[34px] items-center border border-violet-42 justify-center rounded-full font-poppins text-[14px] font-bold group-hover:bg-[var(--color-violet-42)] duration-300 group-hover:text-white `}
                >
                  {step.marker}
                </span>
                <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
                  {step.label}
                </span>
              </div>
              <h3 className="mt-[10px] font-poppins text-[17px] font-semibold leading-[1.3] tracking-[-0.3px] text-[var(--color-haiti)]">
                {step.title}
              </h3>
              <p className="mt-[9px] font-poppins text-[14px] leading-[1.6] text-[var(--color-slate-500)]">
                {step.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
