"use client";

import { useState } from "react";

const LABELS = [
  "Site loads in under 3 seconds on mobile data",
  "Phone number is visible in the header without scrolling",
  "Tapping the phone number opens the dialer (tel: link works)",
  "WhatsApp button is available and opens WhatsApp on tap",
  "All buttons are at least 44px and easy to tap with a thumb",
  "Body text is 16px or larger and readable without zooming",
  "No popups appear on the first screen",
  "Contact form has 3 fields or fewer, with a photo upload option",
  "Service area is clearly stated in the top section",
  "KvK number, Techniek Nederland badge, and real team photos are visible",
  "Google review count and rating are shown on the homepage",
];

function tierFor(score: number) {
  if (score >= 9) {
    return {
      label: "Strong",
      message:
        "Your mobile site captures emergency enquiries. Keep it this way and re-test every few months.",
    };
  }
  if (score >= 7) {
    return {
      label: "Almost there",
      message:
        "A few items are still holding back enquiries. Work through them with the eight steps above.",
    };
  }
  if (score >= 4) {
    return {
      label: "Costing you enquiries",
      message: "Under 7: your site is actively costing you enquiries. The eight steps will get you there.",
    };
  }
  return {
    label: "Start over",
    message: "Under 4: starting with a new, mobile-first site is usually faster than patching an old one.",
  };
}

function CheckIcon({ visible }: { visible: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: visible ? 1 : 0, transition: "opacity .15s ease" }}
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export default function AuditChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => new Array(LABELS.length).fill(false));
  const score = checked.filter(Boolean).length;
  const tier = tierFor(score);
  const pct = Math.round((score / LABELS.length) * 100);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = prev.slice();
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <div className="mt-9 rounded-[20px] border border-[#E4DCFB] bg-[#F4F1FE] p-3">
      <div className="flex flex-wrap items-stretch gap-3">
        <div className="flex min-w-[240px] flex-1 flex-col justify-center rounded-2xl border border-[#E4DCFB] bg-white p-[26px_28px]">
          <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
            Your score
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-sans text-[64px] font-light leading-[0.9] text-[#6F4CF5] tabular-nums">
              {score}
            </span>
            <span className="font-sans text-[26px] font-light text-[#C3C8D2]">/ {LABELS.length}</span>
          </div>
          <div className="mt-[18px] h-2 overflow-hidden rounded-[5px] bg-[#EEEAFB]">
            <div
              className="h-full rounded-[5px] bg-[#6F4CF5] transition-[width] duration-200"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div
            className="mt-[18px] font-sans text-[15px] font-[650] text-[#6F4CF5]"
            dangerouslySetInnerHTML={{ __html: tier.label }}
          />
          <div
            className="mt-1.5 font-sans text-sm leading-[21px] text-[#6B7280]"
            dangerouslySetInnerHTML={{ __html: tier.message }}
          />
          <button
            type="button"
            onClick={() => setChecked(new Array(LABELS.length).fill(false))}
            className="mt-[18px] self-start bg-transparent p-0 font-sans text-[13px] font-semibold text-[#9AA1AC] underline decoration-1 underline-offset-[3px]"
          >
            Reset
          </button>
        </div>

        <div className="flex min-w-[300px] flex-[2] flex-col gap-2">
          {LABELS.map((text, i) => {
            const on = checked[i];
            return (
              <div
                key={text}
                role="checkbox"
                tabIndex={0}
                aria-checked={on}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                className="flex cursor-pointer items-center gap-3.5 rounded-xl border border-[#E7E1F7] bg-white px-4 py-[13px]"
              >
                <span
                  className="flex size-6 flex-none items-center justify-center rounded-[7px] border-[1.5px] text-white transition-colors"
                  style={{
                    borderColor: on ? "#6F4CF5" : "#D5D0EA",
                    background: on ? "#6F4CF5" : "#FFFFFF",
                  }}
                >
                  <CheckIcon visible={on} />
                </span>
                <span
                  className="font-sans text-[15.5px] leading-[22px] text-[#1F2937]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
