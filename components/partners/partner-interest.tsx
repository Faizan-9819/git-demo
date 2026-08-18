"use client";

import Reveal from "@/app/components/Reveal";
import PartnerNetworkForm from "@/app/components/PartnerNetworkForm";

const checks = [
  {
    en: "We respond within 2 business days",
    nl: "We reageren binnen 2 werkdagen",
  },
  {
    en: "No upfront cost to become a partner",
    nl: "Geen opstartkosten om partner te worden",
  },
  {
    en: "Your data stays private — never shared",
    nl: "Uw gegevens blijven privé — nooit gedeeld",
  },
];

export default function PartnerInterest() {
  return (
    <section className="py-[60px] lg:py-[100px] bg-white overflow-x-hidden">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[64px]">
          {/* Left column */}
          <Reveal className="flex flex-col gap-6 lg:max-w-[480px] lg:pt-6">
            <div className="flex items-center gap-3">
              <span className="font-poppins text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-violet-42)]">
                Partner Interest
              </span>
            </div>

            <h2 className="font-poppins font-bold text-[clamp(32px,5vw,44px)] leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              Partner with{" "}
              <span className="relative">
                Growth Rocket.
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-0.5 h-2.5 bg-amber-200 -z-10 rounded opacity-55"
                />
              </span>
            </h2>

            <p className="font-poppins text-[16px] leading-[1.6] text-[var(--color-dolphin)]">
              Tell us a little about your network. We&apos;ll review your
              application and reach out to discuss next steps.
            </p>

            <ul className="flex flex-col gap-[14px] mt-2">
              {checks.map((item) => (
                <li key={item.en} className="flex items-start gap-3">
                  <span className="mt-[2px] flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-violet-98)] shrink-0">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-violet-42)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-poppins text-[15px] leading-[1.5] text-[var(--color-haiti)]">
                    {item.en}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right column — form card */}
          <Reveal
            delay={0.1}
            className="w-full flex-1 rounded-[24px] bg-white border-white/50 shadow-xl p-5 sm:p-6 lg:p-8"
          >
            <PartnerNetworkForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
