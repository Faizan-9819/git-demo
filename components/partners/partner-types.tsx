"use client";
import Reveal from "@/app/components/Reveal";
import { partnerTypes } from "@/app/partner-network/data";
import {
  Briefcase,
  PenTool,
  GraduationCap,
  Users,
  Building2,
  Store,
} from "lucide-react";

const ICONS = [Briefcase, PenTool, GraduationCap, Users, Building2, Store];

const CARD_TONES = [
  {
    bg: "bg-[#F0E7FF] border-[#D9C6FF]",
    iconColor: "text-[var(--color-violet-42)]",
  },
  { bg: "bg-[#FFF1E7] border-[#FFD9BF]", iconColor: "text-[#E8742B]" },
  { bg: "bg-[#E9F8EF] border-[#BDE8CF]", iconColor: "text-[#278F55]" },
  { bg: "bg-[#E9F1FF] border-[#C6DAFF]", iconColor: "text-[#3F74DF]" },
  { bg: "bg-[#FFF1E7] border-[#FFD9BF]", iconColor: "text-[#E8742B]" },
  {
    bg: "bg-[#F0E7FF] border-[#D9C6FF]",
    iconColor: "text-[var(--color-violet-42)]",
  },
];

export default function PartnerTypes() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#F6F3FF] py-[60px] lg:py-[92px]"
    >
      <div className="md:max-w-[1400px] md:mx-auto fix grid items-start gap-[34px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-[56px]">
        <div className="max-w-[520px]">
          <Reveal>
            <span className="font-poppins text-[12px] font-semibold uppercase leading-[18px] tracking-[2px] text-[#9A2BA4]">
              Partner Types
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-[18px] font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              If you have trust with
              <br />
              <span className="text-grad-brand">small businesses,</span>
              <br />
              the network is built for you.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-[22px] max-w-[440px] font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              No quotas. No exclusivity. Refer at your own pace.
            </p>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 duration-100">
          {partnerTypes.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            const tone = CARD_TONES[index % CARD_TONES.length];
            return (
              <div
                key={item.title}
                className="group relative flex min-h-[138px] flex-col gap-[10px] rounded-[16px] border border-[#E8E1F5] bg-white px-[24px] py-[24px] shadow-[0_18px_38px_-28px_rgba(46,16,101,0.42)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_22px_42px_-26px_rgba(91,33,182,0.34)]"
              >
                <span
                  className={`inline-flex size-[38px] items-center justify-center rounded-[11px] border ${tone.bg} ${tone.iconColor}`}
                  aria-hidden
                >
                  <Icon size={18} strokeWidth={2.25} />
                </span>
                <div>
                  <h3 className="font-poppins text-[16px] font-semibold leading-[1.35] tracking-[-0.2px] text-[var(--color-haiti)]">
                    {item.title}
                  </h3>
                  <p className="mt-[7px] font-poppins text-[13px] leading-[1.45] text-[var(--color-dolphin)]">
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
