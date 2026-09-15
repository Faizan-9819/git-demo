"use client";

import Button from "@/app/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-[120px] size-[360px] rounded-full opacity-[0.28] blur-[90px]"
        style={{ background: "#C5B7FB" }}
      />
      <div className="relative flex flex-wrap items-center gap-10 lg:gap-[72px]">
        <div className="min-w-[min(100%,340px)] flex-[1.05_1_340px]">
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.14em] text-[#6F4CF5]">
              Growth Rocket · Guide
            </span>
            <span className="rounded-full border border-[#E6E0FB] bg-[#F4F1FE] px-2.5 py-[5px] font-poppins text-xs font-semibold text-[#5A3CE0]">
              For electricians
            </span>
          </div>
          <h1 className="text-balance font-poppins text-[34px] font-bold leading-[1.13] tracking-[-0.022em] text-[#111827] sm:text-[40px] lg:text-[46px]">
            Mobile Website for Electricians: A Practical Guide to Getting It
            Right
          </h1>
          <p className="mt-[22px] max-w-[600px] text-pretty font-poppins text-lg leading-[1.52] text-[#4B5563] sm:text-xl">
            Most people who visit an electrician&rsquo;s website are on their
            phone. They are usually in a hurry, often standing next to a tripped
            fuse box, and they decide in seconds whether to call you or scroll
            past.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-3.5">
            <Button href="#test" variant="primary" arrow="up-right" size="lg">
              Take the 10-minute audit
            </Button>
            <a
              href="#eisen"
              className="inline-flex min-h-[52px] items-center rounded-[11px] border border-[#E6E8EF] bg-white px-6 font-poppins text-base font-semibold text-[#1F2937] transition-colors hover:border-[#C5B7FB]"
            >
              See the mobile requirements
            </a>
          </div>
          <div className="mt-[26px] flex flex-wrap items-center gap-x-4 gap-y-2 font-poppins text-[13px] text-[#9AA1AC]">
            <span className="font-semibold text-[#6B7280]">Growth Rocket</span>
            <span aria-hidden="true">·</span>
            <span>Updated October 2026</span>
            <span aria-hidden="true">·</span>
            <span>10 min read</span>
          </div>
        </div>

        {/* Hero mockup: phone + desktop */}
        <div className="min-w-[min(100%,300px)] flex-[0.95_1_320px]">
          <figure
            role="img"
            aria-label="Mobile website for electricians shown on a smartphone next to a desktop screen, illustrating responsive design"
            className="relative m-0 flex min-h-[400px] items-center justify-center"
          >
            {/* desktop behind */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-6 w-[min(78%,340px)] overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-white shadow-[0_18px_44px_rgba(17,24,39,0.10)]"
            >
              <div className="flex h-[30px] items-center gap-1.5 border-b border-[#EEF0F4] bg-[#F8F9FC] px-3">
                <span className="size-2 rounded-full bg-[#E2E5EC]" />
                <span className="size-2 rounded-full bg-[#E2E5EC]" />
                <span className="size-2 rounded-full bg-[#E2E5EC]" />
                <span className="ml-2 h-[15px] max-w-[150px] flex-1 rounded-[5px] bg-[#EEF0F4]" />
              </div>
              <div className="p-4">
                <div className="h-[9px] w-[45%] rounded bg-[#DDE1EA]" />
                <div className="mt-2 h-[22px] w-4/5 rounded-[5px] bg-[#E9ECF3]" />
                <div className="mt-3.5 h-14 rounded-lg bg-[#F4F1FE]" />
                <div className="mt-2.5 flex gap-2">
                  <div className="h-[34px] flex-1 rounded-[7px] bg-[#F1F3F8]" />
                  <div className="h-[34px] flex-1 rounded-[7px] bg-[#F1F3F8]" />
                </div>
              </div>
            </div>
            {/* phone front (dominant) */}
            <div className="relative z-[2] w-[min(66%,236px)] rounded-[34px] bg-[#0E0A1C] p-[9px] shadow-[0_26px_58px_rgba(91,33,182,0.22)]">
              <div className="overflow-hidden rounded-[26px] bg-white">
                <div className="flex h-[26px] items-center justify-between bg-white px-4 font-poppins text-[10px] font-semibold text-[#1F2937]">
                  <span>9:41</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-[3px]"
                  >
                    <span className="inline-block h-2 w-[15px] rounded-[2px] border-[1.5px] border-[#1F2937]" />
                  </span>
                </div>
                <div className="flex h-[46px] items-center justify-between border-b border-[#EEF0F4] bg-white/90 px-3">
                  <span className="inline-flex items-center gap-[5px] font-poppins text-xs font-bold text-[#1F2937]">
                    <span className="size-[7px] rounded-full bg-[#6F4CF5]" />
                    Miller Electric
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex flex-col gap-[3px]"
                  >
                    <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
                    <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
                    <span className="h-0.5 w-4 rounded-sm bg-[#1F2937]" />
                  </span>
                </div>
                <div className="px-3.5 pb-1 pt-3.5">
                  <div className="font-poppins text-[15px] font-bold leading-[1.25] text-[#111827]">
                    Power out? On-site within 30 min in your area.
                  </div>
                  <div className="mt-1.5 font-poppins text-[11px] leading-[1.4] text-[#6B7280]">
                    Certified electrician · 24/7 emergency · fixed prices up
                    front.
                  </div>
                  <div className="mt-3 flex h-[46px] items-center justify-center gap-1.5 rounded-[11px] bg-[#16A34A] font-poppins text-sm font-bold text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
                    </svg>
                    Call now 020 - 123 4567
                  </div>
                  <div className="mt-2.5 border-t border-[#F1F3F8] pt-2.5">
                    <div className="font-poppins text-[9px] font-semibold uppercase tracking-[0.1em] text-[#9AA1AC]">
                      Services
                    </div>
                    <div className="mt-1.5 flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 font-poppins text-[11px] text-[#374151]">
                        <span className="size-[5px] rounded-full bg-[#6F4CF5]" />
                        Emergency call-out &amp; faults
                      </div>
                      <div className="flex items-center gap-1.5 font-poppins text-[11px] text-[#374151]">
                        <span className="size-[5px] rounded-full bg-[#6F4CF5]" />
                        Fuse box &amp; wiring
                      </div>
                      <div className="flex items-center gap-1.5 font-poppins text-[11px] text-[#374151]">
                        <span className="size-[5px] rounded-full bg-[#6F4CF5]" />
                        EV charger &amp; solar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute bottom-1.5 left-1.5 z-[3] rounded-full border border-[#EEF0F4] bg-white px-2.5 py-1.5 font-poppins text-[11px] font-semibold text-[#8B8496] shadow-[0_4px_12px_rgba(17,24,39,0.06)]"
            >
              Example · illustration
            </span>
          </figure>
        </div>
      </div>
    </section>
  );
}
