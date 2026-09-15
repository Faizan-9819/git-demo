"use client";

import Button from "@/app/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="font-poppins text-[13px] font-semibold uppercase tracking-[1.04px] text-[#6B7280]">
            <span className="text-[#6F4CF5]">Growth Rocket</span>
            <span className="px-2 text-[#C7CBD1]">·</span>Gids
          </span>
          <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-3 py-1 font-poppins text-[11px] font-semibold tracking-[0.4px] text-[#6F4CF5]">
            Gemaakt voor elektriciens
          </span>
        </div>
        <h1 className="mt-5 text-balance font-poppins text-[32px] font-[650] leading-[1.15] tracking-[-0.6px] text-[var(--color-haiti)] sm:text-[40px] lg:text-[46px] lg:leading-[54px]">
          Mobiele website voor elektriciens: waarom het zwaarder telt dan je
          denkt
        </h1>
        <p className="mt-6 max-w-[520px] text-pretty font-poppins text-lg leading-8 text-[#6B7280] sm:text-xl">
          Een spoedzoeker met één duim op de telefoon belt de eerste elektricien
          die bij de eerste tik werkt. Is je site traag of verstopt hij je
          nummer, dan belt hij het volgende resultaat.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="#decision" variant="primary" size="lg" arrow="up-right">
            Doe de mobiele check
          </Button>
          <a
            href="#stappen"
            className="border-b-[1.5px] border-[#C5B7FB] pb-0.5 font-poppins text-[15px] font-semibold text-[#1F2937]"
          >
            Naar de 8 stappen
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2.5 font-poppins text-sm text-[#6B7280]">
          <span>Growth Rocket</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>Juli 2026</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>9 min lezen</span>
        </div>
      </div>

      {/* Phone-frame hero device: mobiele zoekresultaten voor "elektricien spoed" */}
      <div className="flex justify-center">
        <div
          role="img"
          aria-label="Mobiele zoekresultaten voor 'elektricien spoed' op een smartphone, met een opvallende Bel nu-knop bij het bovenste resultaat"
          className="relative w-[300px] flex-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-x-2.5 -inset-y-5 rounded-[60px]"
            style={{
              background:
                "radial-gradient(60% 55% at 50% 30%, rgba(111,76,245,0.18), rgba(111,76,245,0) 70%)",
            }}
          />
          <div className="relative w-[300px] rounded-[42px] bg-[#0E1116] p-[11px] shadow-[0_30px_60px_rgba(17,20,32,0.28),0_4px_12px_rgba(17,20,32,0.14)]">
            <div className="relative overflow-hidden rounded-[32px] bg-[#F4F5F8]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 z-[3] h-6 w-[120px] -translate-x-1/2 rounded-b-[14px] bg-[#0E1116]"
              />
              <div className="flex items-center justify-between px-5 pb-2 pt-[11px] font-poppins text-xs font-semibold text-[#1F2937]">
                <span>22:07</span>
                <span className="tracking-[1px]">● ● ● &nbsp;⌁</span>
              </div>
              <div className="px-3.5 pb-3 pt-1">
                <div className="flex items-center gap-2.5 rounded-full border border-[#E4E7EC] bg-white px-[15px] py-2.5 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9AA1AC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.6" y2="16.6" />
                  </svg>
                  <span className="font-poppins text-sm font-medium text-[#1F2937]">
                    elektricien spoed
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-3.5 pb-[18px] pt-0.5">
                <div className="rounded-2xl border border-[#E4DCFB] bg-white p-[15px] shadow-[0_8px_22px_rgba(111,76,245,0.12)]">
                  <div className="flex items-center gap-2">
                    <div className="flex size-[30px] flex-none items-center justify-center rounded-lg bg-[#F4F1FE] text-[#6F4CF5]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="font-poppins text-[13.5px] font-[650] text-[#1F2937]">
                        Van Dijk Elektro
                      </div>
                      <div className="flex items-center gap-1 font-poppins text-[11px] text-[#6B7280]">
                        <span className="tracking-[-1px] text-[#F59E0B]">
                          ★★★★★
                        </span>
                        <span>4,9 · 128 reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 font-poppins text-[11.5px] text-[#6B7280]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9AA1AC"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    <span>Utrecht · nu bereikbaar</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="flex flex-1 items-center justify-center gap-2 rounded-[11px] bg-[#6F4CF5] px-2.5 py-3 font-poppins text-[14.5px] font-[650] text-white shadow-[0_8px_18px_rgba(111,76,245,0.32)]">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 4h3.5l1.8 4.5-2.2 1.4a11 11 0 0 0 4.8 4.8l1.4-2.2L18.5 15V18.5A1.5 1.5 0 0 1 17 20 14.5 14.5 0 0 1 4 7 1.5 1.5 0 0 1 5.5 5.5" />
                      </svg>
                      Bel nu
                    </div>
                    <div className="flex w-[46px] flex-none items-center justify-center rounded-[11px] border border-[#E4E7EC] bg-white text-[#25a05a]">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="rounded-[14px] border border-[#EDEFF3] bg-white p-3.5 opacity-[0.72]">
                  <div className="font-poppins text-[13px] font-semibold text-[#6B7280]">
                    Spoed Elektra 24/7
                  </div>
                  <div className="mt-[5px] h-2 w-[70%] rounded bg-[#EDEFF3]" />
                  <div className="mt-[7px] h-2 w-[45%] rounded bg-[#F1F2F6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full mt-14 h-px bg-[#EEF0F4]" />
    </section>
  );
}
