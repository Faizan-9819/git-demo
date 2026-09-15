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
    <section className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="font-poppins text-[13px] font-semibold uppercase tracking-[1.04px] text-[var(--color-dolphin)]">
            <span className="text-[var(--color-violet-42)]">Growth Rocket</span>
            <span className="px-2 text-[var(--color-slate-300)]">·</span>Guide
          </span>
          <span className="rounded-full border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-3 py-1 font-poppins text-[11px] font-semibold tracking-[0.4px] text-[var(--color-violet-42)]">
            Built for electricians
          </span>
        </div>

        <h1 className="mt-5 text-balance font-poppins text-[36px] font-bold leading-[1.15] tracking-[-0.6px] text-[var(--color-haiti)] sm:text-[46px] sm:leading-[54px]">
          How Growth Rocket gets your electrician website live in 7 days
        </h1>

        <p className="mt-6 max-w-[520px] text-pretty font-poppins text-lg leading-8 text-[var(--color-dolphin)] sm:text-xl">
          Not by rushing the work — by replacing a six-to-twelve-week project
          with a complete, managed system that removes the delays.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            onClick={openLeadForm}
            variant="primary"
            size="lg"
            arrow="up-right"
            className="w-[267px]"
          >
            Start your 7-day intake
          </Button>
          <button
            type="button"
            onClick={openLeadForm}
            className="border-b-[1.5px] border-[var(--color-violet-76)] pb-0.5 font-poppins text-[15px] font-semibold text-[var(--color-haiti)] no-underline"
          >
            See how the process works
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2.5 font-poppins text-sm text-[var(--color-dolphin)]">
          <span>Growth Rocket</span>
          <span className="text-[var(--color-slate-300)]">·</span>
          <span>July 8, 2026</span>
          <span className="text-[var(--color-slate-300)]">·</span>
          <span>8 min read</span>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-8 lg:p-9">
        <div className="mb-6 font-poppins text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--color-dolphin)]">
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
                      ? "border-[var(--color-violet-42)] bg-[image:var(--grad-brand)] text-white shadow-[0_6px_18px_rgba(91,33,159,0.28)]"
                      : "border-[var(--color-violet-92)] bg-white text-[var(--color-haiti)]")
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
                    aria-hidden
                  >
                    {step.icon}
                  </svg>
                </div>
                <div>
                  <div
                    className="font-poppins text-[15px] font-semibold text-[var(--color-haiti)]"
                    dangerouslySetInnerHTML={{ __html: step.label }}
                  />
                  <div
                    className="font-poppins text-[13px] text-[var(--color-dolphin)]"
                    dangerouslySetInnerHTML={{ __html: step.sublabel }}
                  />
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex w-11 justify-center py-1.5">
                  <div className="h-[22px] w-px bg-[var(--color-violet-92)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
