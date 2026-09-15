"use client";

import Button from "@/app/components/ui/Button";

type HeroStep = {
  label: string;
  sublabel: string;
  emphasis?: boolean;
  icon: React.ReactNode;
};

const STEPS: HeroStep[] = [
  {
    label: "Your business information",
    sublabel: "One simple intake",
    icon: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 3v-.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V3" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="14" y2="13" />
      </>
    ),
  },
  {
    label: "The Growth Rocket system",
    sublabel: "Content · design · build · SEO, in parallel",
    emphasis: true,
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
  },
  {
    label: "Website live",
    sublabel: "On your own domain, in 7 days",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="8" x2="21" y2="8" />
        <circle cx="6" cy="6" r="0.6" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Customer enquiries",
    sublabel: "Organised in one place",
    icon: (
      <>
        <path d="M4 5h16v11H8l-4 4z" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="12" x2="13" y2="12" />
      </>
    ),
  },
];

export default function HeroSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px]">
      <div>
        <div className="flex flex-wrap items-center gap-3.5">
          <div className="font-sans text-[13px] font-semibold uppercase tracking-[1.04px] text-[#6B7280]">
            <span className="text-[#6F4CF5]">Growth Rocket</span>
            <span className="px-2 text-[#C7CBD1]">·</span>Guide
          </div>
          <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-3 py-1 font-sans text-[11px] font-semibold text-[#6F4CF5]">
            Built for electricians
          </span>
        </div>
        <h1 className="mt-5.5 text-balance font-sans text-[34px] font-bold leading-[1.17] tracking-[-0.6px] text-[#1F2937] sm:text-[40px] sm:leading-[1.2] lg:text-[46px] lg:leading-[1.17]">
          How Growth Rocket gets your electrician website live in 7 days
        </h1>
        <p className="mt-6 max-w-[520px] text-pretty font-sans text-lg leading-8 text-[#6B7280] sm:text-xl">
          Not by rushing the work — by replacing a six-to-twelve-week project
          with a complete, managed system that removes the delays.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            onClick={openLeadForm}
            variant="primary"
            size="lg"
            arrow="up-right"
          >
            Start your 7-day intake
          </Button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("timeline")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer border-0 border-b-[1.5px] border-[#C5B7FB] bg-transparent pb-0.5 font-sans text-[15px] font-semibold text-[#1F2937]"
          >
            See how the process works
          </button>
        </div>
        <div className="mt-8.5 flex flex-wrap items-center gap-2.5 font-sans text-sm text-[#6B7280]">
          <span>Growth Rocket</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>July 8, 2026</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>8 min read</span>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-8.5 sm:p-9">
        <div className="mb-6 font-sans text-[11px] font-semibold uppercase tracking-[1.2px] text-[#9AA1AC]">
          The managed system
        </div>
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <div key={step.label} className="contents">
              <div className="flex items-center gap-4">
                <div
                  className={
                    "flex size-11 flex-none items-center justify-center rounded-[11px] border " +
                    (step.emphasis
                      ? "border-[#6F4CF5] bg-[#6F4CF5] text-white shadow-[0_6px_18px_rgba(111,76,245,0.28)]"
                      : "border-[#E1E4EC] bg-white text-[#1F2937]")
                  }
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </svg>
                </div>
                <div>
                  <div className="font-sans text-[15px] font-semibold text-[#1F2937]">
                    {step.label}
                  </div>
                  <div className="font-sans text-[13px] text-[#6B7280]">
                    {step.sublabel}
                  </div>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex w-11 justify-center py-1.5">
                  <div className="h-[22px] w-px bg-[#DCE0E8]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-full mt-8 h-px bg-[#EEF0F4]" />
    </section>
  );
}
