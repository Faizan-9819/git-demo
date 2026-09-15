"use client";

import { useState } from "react";

const LABELS = [
  "De site laadt binnen 3 seconden op mobiele data",
  "Het telefoonnummer is zichtbaar in de kop, zonder scrollen",
  "Tikken op het nummer opent het belscherm (tel-link werkt)",
  "Er is een WhatsApp-knop die bij één tik WhatsApp opent",
  "Alle knoppen zijn minimaal 44 pixels en makkelijk met een duim te raken",
  "Lopende tekst is 16 pixels of groter en leesbaar zonder inzoomen",
  "Op het eerste scherm verschijnen geen pop-ups",
  "Het contactformulier heeft maximaal 3 velden, met foto-upload",
  "Het werkgebied staat duidelijk in het bovenste blok",
  "KVK-nummer, Techniek Nederland en echte teamfoto's zijn zichtbaar",
  "Het Google-reviewaantal en de beoordeling staan op de homepage",
];

function tierFor(score: number) {
  if (score >= 9) {
    return {
      label: "Sterk",
      message: "Je mobiele site vangt spoedaanvragen op. Houd hem zo en test elke paar maanden opnieuw.",
    };
  }
  if (score >= 7) {
    return {
      label: "Bijna goed",
      message: "Een paar punten houden nog aanvragen tegen. Werk ze af met de acht stappen hierboven.",
    };
  }
  if (score >= 4) {
    return {
      label: "Kost je aanvragen",
      message: "Onder de 7: je site kost je actief aanvragen. De acht stappen brengen je erbovenop.",
    };
  }
  return {
    label: "Opnieuw beginnen",
    message: "Onder de 4: opnieuw beginnen met een mobielgerichte site is meestal sneller dan oplappen.",
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
          <div className="font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[#9AA1AC]">
            Jouw score
          </div>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-poppins text-[64px] font-light leading-[0.9] text-[#6F4CF5] tabular-nums">
              {score}
            </span>
            <span className="font-poppins text-[26px] font-light text-[#C3C8D2]">/ {LABELS.length}</span>
          </div>
          <div className="mt-[18px] h-2 overflow-hidden rounded-[5px] bg-[#EEEAFB]">
            <div
              className="h-full rounded-[5px] bg-[#6F4CF5] transition-[width] duration-200"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div
            className="mt-[18px] font-poppins text-[15px] font-[650] text-[#6F4CF5]"
            dangerouslySetInnerHTML={{ __html: tier.label }}
          />
          <div
            className="mt-1.5 font-poppins text-sm leading-[21px] text-[#6B7280]"
            dangerouslySetInnerHTML={{ __html: tier.message }}
          />
          <button
            type="button"
            onClick={() => setChecked(new Array(LABELS.length).fill(false))}
            className="mt-[18px] self-start bg-transparent p-0 font-poppins text-[13px] font-semibold text-[#9AA1AC] underline decoration-1 underline-offset-[3px]"
          >
            Opnieuw
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
                  className="font-poppins text-[15.5px] leading-[22px] text-[#1F2937]"
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
