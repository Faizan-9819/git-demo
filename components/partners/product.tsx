"use client";
import Reveal from "@/app/components/Reveal";
import framer from "framer-motion";
import { productCards } from "@/app/partner-network/data";
import { motion } from "framer-motion";
import {
  Globe,
  Inbox,
  Server,
  Headphones,
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";

const ICONS = [Globe, Inbox, Server, Headphones, LayoutDashboard, RefreshCw];

export default function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-white pb-[60px] lg:pb-[92px] lg:pt-[50px] "
    >
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col gap-[28px] lg:gap-[56px]">
        <div className="flex flex-col items-center">
          <Reveal>
            <span className="font-poppins text-[12px] font-semibold uppercase leading-[18px] tracking-[2px] text-[#9A2BA4]">
              The Product
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mt-[18px] text-center font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              A simple website & enquiry
              <br />
              system for small businesses.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-[22px] max-w-[640px] text-center font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              Growth Rocket helps small businesses establish a professional
              online presence — while making it easier to capture, organise, and
              respond to enquiries from one place.
            </p>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-1 gap-[18px] sm:grid-cols-3 duration-100">
          {productCards.map((card, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={card.num}
                className=" group relative flex flex-col gap-[7px] px-[24px] py-[28px] rounded-[16px] transition-all duration-300 hover:shadow-[0_14px_40px_-12px_rgba(91,33,182,0.18)]"
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
                    {card.title}
                  </h3>
                </div>
                <div className="relative pt-[8.6px]">
                  <h3 className="hidden sm:block font-poppins font-semibold text-[18px] leading-[25.5px] tracking-[-0.3px] text-[var(--color-haiti)]">
                    {card.title}
                  </h3>
                </div>
                <p className="relative font-poppins text-[13px] leading-[20.8px] text-[var(--color-slate-500)]">
                  {card.body}
                </p>
              </div>
            );
          })}
        </Reveal>

        <Reveal>
          <p className="text-center lg:-mt-5 font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
            All managed in one simple system.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-[30px] items-center gap-[7px] rounded-full border border-[var(--color-violet-92)] bg-white px-[14px] font-poppins text-[12px] font-medium leading-[16px] text-[var(--color-haiti)]">
      <span className="size-[5px] rounded-full bg-[#B629B5]" aria-hidden />
      {children}
    </span>
  );
}
