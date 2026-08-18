"use client";
import Reveal from "@/app/components/Reveal";
import { whyWorksItems } from "@/app/partner-network/data";
import {
  MapPin,
  TrendingUp,
  Star,
  Tag,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const ICONS = [MapPin, TrendingUp, Star, Tag, Wrench, ShieldCheck];

export default function WhyWorks() {
  return (
    <section className="relative bg-white py-[60px] lg:py-[100px] ">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-[30px] lg:mb-[56px] gap-[18px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              Why It Works
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              A product small businesses
              <br />
              <span className="text-grad-brand">already need.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[514px] font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              You aren&apos;t selling complexity. You&apos;re helping businesses
              solve a very visible problem.
            </p>
          </Reveal>
        </div>

        <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[14px] duration-100">
          {whyWorksItems.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={item.title}
                className="group relative flex flex-col gap-[7px] px-[24px] py-[28px] rounded-[16px] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_40px_-12px_rgba(91,33,182,0.18)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-[16px] pointer-events-none bg-[var(--color-violet-98)] group-hover:bg-[linear-gradient(170deg,var(--color-violet-98)_0%,var(--color-violet-92)_100%)] transition-colors duration-300"
                />
                <div className="relative flex items-center gap-[10px] lg:flex-col lg:items-start">
                  <span className="flex items-center justify-center size-[44px] rounded-[12px] bg-white border border-[var(--color-amber-50)] shrink-0">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-[var(--color-violet-42)]"
                    />
                  </span>
                  <h3 className="sm:hidden font-poppins font-semibold text-[18px] leading-[25.5px] tracking-[-0.3px] text-[var(--color-haiti)] lg:pt-[8.6px]">
                    {item.title}
                  </h3>
                </div>
                <div className="relative pt-[8.6px]">
                  <h3 className="hidden sm:block font-poppins font-semibold text-[18px] leading-[25.5px] tracking-[-0.3px] text-[var(--color-haiti)]">
                    {item.title}
                  </h3>
                </div>
                <p className="relative font-poppins text-[13px] leading-[20.8px] text-[var(--color-slate-500)]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
