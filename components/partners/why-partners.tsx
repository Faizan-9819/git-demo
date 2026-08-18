"use client";
import Reveal from "@/app/components/Reveal";
import { whyPartnerItems } from "@/app/partner-network/data";
import { RefreshCw, TrendingUp, Users, Headphones, Heart } from "lucide-react";

const ICONS = [RefreshCw, TrendingUp, Users, Headphones, Heart];
const CARD_TONES = [
  {
    bg: "bg-[#F0E7FF] border-[#D9C6FF]",
    iconColor: "text-[var(--color-violet-42)]",
  },
  { bg: "bg-[#FFF1E7] border-[#FFD9BF]", iconColor: "text-[#E8742B]" },
  { bg: "bg-[#E9F8EF] border-[#BDE8CF]", iconColor: "text-[#278F55]" },
  { bg: "bg-[#E9F1FF] border-[#C6DAFF]", iconColor: "text-[#3F74DF]" },
  { bg: "bg-[#FFF1E7] border-[#FFD9BF]", iconColor: "text-[#E8742B]" },
];

export default function WhyPartners() {
  return (
    <section className="relative bg-[#F6F3FF] py-[60px] lg:py-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-[30px] lg:mb-[56px] gap-[18px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              Why Partners Like It
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              Designed for
              <br />
              <span className="text-grad-brand">long-term value.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[14px]">
          {whyPartnerItems.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            const tone = CARD_TONES[index % CARD_TONES.length];
            return (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="relative overflow-hidden rounded-[18px] border border-[var(--color-violet-92)] bg-white px-[24px] py-[26px]"
              >
                <span
                  className={`inline-flex size-[38px] items-center justify-center rounded-[11px] border ${tone.bg} ${tone.iconColor} mb-[14px]`}
                  aria-hidden
                >
                  <Icon size={18} strokeWidth={2.25} />
                </span>
                <h3 className="font-poppins text-[16px] font-semibold leading-[1.3] tracking-[-0.2px] text-[var(--color-haiti)]">
                  {item.title}
                </h3>
                <p className="pt-[10px] font-poppins text-[13px] leading-[1.6] text-[var(--color-dolphin)]">
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
