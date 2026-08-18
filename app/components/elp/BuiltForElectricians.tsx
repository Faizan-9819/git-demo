"use client";

import Image from "next/image";
import Reveal from "../Reveal";

const ITEMS = [
  {
    title: "Quote-first lead capture",
    body: "Customers request quotes with job details, urgency, and location before they call.",
  },
  {
    title: "Appointment-ready flow",
    body: "Let customers choose a slot and submit everything you need in one step.",
  },
  {
    title: "Hub built for follow-up",
    body: "Track incoming requests, confirm bookings, and keep your schedule organised.",
  },
];

export default function BuiltForElectricians() {
  return (
    <section className="relative bg-white py-[60px] lg:py-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col gap-[28px] lg:gap-[48px]">
        <div className="mx-auto flex w-full max-w-[912px] flex-col items-center gap-[18px] text-center">
          <Reveal>
            <span className="font-poppins font-semibold uppercase text-[13px] leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              Electrician Focus
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.08] tracking-[-1px] text-[var(--color-haiti)]">
              Built for electricians —
              <br />
              <span className="text-grad-brand">not generic businesses.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-[14px] lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="relative overflow-hidden rounded-[18px] border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-[24px] py-[26px]"
            >
              <h3 className="font-poppins text-[20px] font-semibold leading-[1.3] tracking-[-0.3px] text-[var(--color-haiti)]">
                {item.title}
              </h3>
              <p className="pt-[10px] font-poppins text-[14px] leading-[1.6] text-[var(--color-dolphin)]">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={0.12}
          className="relative overflow-hidden rounded-[24px]"
        >
          <Image
            src="/elp/sec1imgsbg.png"
            alt=""
            width={1328}
            height={1171}
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
