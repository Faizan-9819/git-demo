"use client";

import Button from "@/app/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="font-poppins text-[13px] font-semibold uppercase tracking-[1.04px] text-[#6B7280]">
            <span className="text-[#6F4CF5]">Growth Rocket</span>
            <span className="px-2 text-[#C7CBD1]">·</span>Guide
          </span>
          <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-3 py-1 font-poppins text-[11px] font-semibold tracking-[0.4px] text-[#6F4CF5]">
            For Dutch electricians
          </span>
        </div>
        <h1 className="mt-5 text-balance font-poppins text-[32px] font-[650] leading-[1.15] tracking-[-0.6px] text-[var(--color-haiti)] sm:text-[40px] lg:text-[46px] lg:leading-[54px]">
          7 elements of a high-converting electrician homepage
        </h1>
        <p className="mt-6 max-w-[520px] text-pretty font-poppins text-lg leading-8 text-[#6B7280] sm:text-xl">
          Most Dutch electrician sites look professional and still generate few
          enquiries.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="#decision" variant="primary" size="lg" arrow="up-right">
            See the 7 elements
          </Button>
          <a
            href="#comparison"
            className="border-b-[1.5px] border-[#C5B7FB] pb-0.5 font-poppins text-[15px] font-semibold text-[#1F2937]"
          >
            Good vs. bad, side by side
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2.5 font-poppins text-sm text-[#6B7280]">
          <span>Growth Rocket</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>18 July 2026</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>12 min read</span>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[300px] rounded-[40px] border-[9px] border-[#14121A] bg-[#14121A] shadow-[0_30px_70px_rgba(91,33,182,.16)]">
        <div className="absolute left-1/2 top-[13px] z-[3] h-1.5 w-24 -translate-x-1/2 rounded-full bg-[#2A2733]" />
        <div className="overflow-hidden rounded-[32px] bg-[var(--color-blog-panel-light)]">
          <div className="flex items-center justify-between border-b border-[#EEF0F4] bg-white px-3.5 pb-2.5 pt-6">
            <div className="flex items-center gap-1.5">
              <span className="size-[7px] rounded-full bg-[#6F4CF5]" />
              <span className="font-poppins text-[11px] font-bold text-[var(--color-haiti)]">
                Van Dijk Elektro
              </span>
            </div>
            <span className="rounded-md bg-[#16875A] px-2 py-1 font-poppins text-[10px] font-bold text-white">
              📞 Bel
            </span>
          </div>
          <div className="space-y-3 p-3.5 font-poppins">
            <div>
              <p className="text-sm font-bold leading-tight text-[var(--color-haiti)]">
                Erkende elektricien in Utrecht e.o.
              </p>
              <p className="mt-1 text-[10px] text-[#6B7280]">
                Groepenkasten · Laadpalen · Storingen
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["KVK", "Techniek NL", "NEN 1010", "★ 4,8 · 127"].map(
                (label) => (
                  <span
                    key={label}
                    className="rounded-md border border-[#C6EBD8] bg-[#ECFAF3] px-1.5 py-1 text-[8px] font-semibold text-[#16875A]"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                ),
              )}
            </div>
            <div className="rounded-lg border border-[#F3E0BC] bg-[#FDF6EA] px-2 py-2 text-[10px] font-bold text-[#C77A0A]">
              ⚡ Spoed? Binnen 2 uur — 24/7
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                "Groepenkast",
                "Laadpaal",
                "Stopcontact",
                "LED",
                "Zonnepaneel",
                "Storing",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-[#EEF0F4] bg-white p-1.5 text-center text-[8px] text-[var(--color-haiti)]"
                  dangerouslySetInnerHTML={{ __html: label }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="flex h-12 items-end rounded-md bg-[linear-gradient(135deg,#e7e1f5,#d8d2ec)] p-1">
                <span className="text-[7px] font-semibold text-[#6a6480]">
                  Martijn + bus
                </span>
              </div>
              <div className="flex h-12 items-end rounded-md bg-[linear-gradient(135deg,#e7e1f5,#d8d2ec)] p-1">
                <span className="text-[7px] font-semibold text-[#6a6480]">
                  Voor → na
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-[#EEF0F4] bg-white p-2">
              <div className="h-2 rounded bg-[#eff0f4]" />
              <div className="mt-1.5 h-2 w-2/3 rounded bg-[#eff0f4]" />
              <div className="mt-2 flex gap-1.5">
                <span className="flex-1 rounded bg-[#6F4CF5] py-1 text-center text-[8px] font-bold text-white">
                  Verstuur
                </span>
                <span className="flex-1 rounded bg-[#25D366] py-1 text-center text-[8px] font-bold text-white">
                  💬 WhatsApp
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-1.5 border-t border-[#EEF0F4] bg-white p-2.5 text-center text-[9px] font-bold">
            <span className="flex-1 rounded bg-[#16875A] py-1.5 text-white">
              Bellen
            </span>
            <span className="flex-1 rounded bg-[#25D366] py-1.5 text-white">
              WhatsApp
            </span>
            <span className="flex-1 rounded border border-[#E4DCFB] bg-[#F4F1FE] py-1.5 text-[#6F4CF5]">
              Offerte
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-full mt-14 h-px bg-[#EEF0F4]" />
    </section>
  );
}
