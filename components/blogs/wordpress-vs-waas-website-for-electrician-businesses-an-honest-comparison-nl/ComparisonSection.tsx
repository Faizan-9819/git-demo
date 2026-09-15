"use client";

import { useState } from "react";

type Category = "kosten" | "tijd" | "beheer" | "flex" | "eigendom";

type Row = { c: string; wp: string; abo: string; cat: Category };

const ROWS: Row[] = [
  { c: "Kosten vooraf", wp: "€0 software + €500–€2.500 bouw (freelancer)", abo: "€290 eenmalige onboarding, verder in het abonnement", cat: "kosten" },
  { c: "Doorlopende kosten", wp: "€10–€30 per maand hosting + €50–€150 per maand onderhoud (indien uitbesteed)", abo: "€69 per maand (€690 per jaar), alles inbegrepen", cat: "kosten" },
  { c: "Tijd tot lancering", wp: "2–6 weken (afhankelijk van de freelancer)", abo: "binnen 7 dagen", cat: "tijd" },
  { c: "Wie doet de updates", wp: "Jij of je ontwikkelaar", abo: "De aanbieder", cat: "beheer" },
  { c: "Beveiliging en back-ups", wp: "Jouw verantwoordelijkheid", abo: "Inbegrepen", cat: "beheer" },
  { c: "Inhoudswijzigingen", wp: "Zelf inloggen en aanpassen, of betalen per wijziging", abo: "Verzoek insturen, aanbieder voert door", cat: "beheer" },
  { c: "Flexibiliteit", wp: "Zeer hoog — elk ontwerp, elke functie, elke module", abo: "Beperkt tot de opzet en functies van het platform", cat: "flex" },
  { c: "Plafond vindbaarheid", wp: "Hoog, maar alleen bij goed onderhoud", abo: "Solide voor lokale vindbaarheid; plafond hangt af van de aanbieder", cat: "flex" },
  { c: "Eigendom", wp: "De site is volledig van jou", abo: "Je huurt het platform", cat: "eigendom" },
  { c: "Risico als je stopt met betalen", wp: "De site blijft draaien; je betaalt alleen nog hosting", abo: "De site gaat offline", cat: "eigendom" },
  { c: "Past het best bij", wp: "Technische eigenaren of bedrijven met een vaste ontwikkelaar", abo: "Niet-technische vakmensen die een werkende website willen zonder het werk", cat: "beheer" },
];

const CHIPS: { key: Category; label: string }[] = [
  { key: "kosten", label: "Kosten" },
  { key: "tijd", label: "Tijd" },
  { key: "beheer", label: "Beheer" },
  { key: "flex", label: "Flexibiliteit" },
  { key: "eigendom", label: "Eigendom" },
];

export default function ComparisonSection() {
  const [filter, setFilter] = useState<Category | null>(null);

  return (
    <section id="naast-elkaar" className="mt-24 scroll-mt-[88px]">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Naast elkaar
      </h2>
      <p className="mt-4.5">
        Zo verhouden de twee opties zich op de punten die er voor een
        werkende elektricien toe doen.
      </p>

      <div role="group" aria-label="Filter de vergelijking op thema" className="mt-5.5 flex flex-wrap items-center gap-2.5">
        <span className="mr-0.5 font-sans text-[13px] text-[#9AA1AC]">Licht uit:</span>
        {CHIPS.map((chip) => {
          const active = filter === chip.key;
          return (
            <button
              key={chip.key}
              type="button"
              onClick={() => setFilter(chip.key)}
              aria-pressed={active}
              className="min-h-9 cursor-pointer rounded-full border px-3.5 font-sans text-[13.5px] font-semibold transition-all"
              style={
                active
                  ? { background: "#6F4CF5", color: "#FFFFFF", borderColor: "#6F4CF5" }
                  : { background: "#FFFFFF", color: "#1F2937", borderColor: "#E6E8EF" }
              }
              dangerouslySetInnerHTML={{ __html: chip.label }}
            />
          );
        })}
        {filter && (
          <button
            type="button"
            onClick={() => setFilter(null)}
            className="min-h-9 cursor-pointer rounded-full border border-transparent bg-transparent px-3.5 font-sans text-[13.5px] font-semibold text-[#6F4CF5]"
          >
            Alles tonen
          </button>
        )}
      </div>

      {/* Desktop table */}
      <div className="mt-5 hidden overflow-hidden rounded-[18px] border border-[#E6E8EF] sm:block">
        <table className="w-full border-collapse">
          <caption className="sr-only">Vergelijking van WordPress en een website-abonnement op elf onderdelen</caption>
          <thead>
            <tr>
              <th scope="col" className="w-[23%] border-b border-[#E6E8EF] bg-[#FBFBFD] px-4.5 py-4 text-left font-sans text-xs font-semibold uppercase tracking-[0.3px] text-[#9AA1AC]">
                Onderdeel
              </th>
              <th scope="col" className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-4 text-left font-sans text-[14.5px] font-bold text-[#1F2937]">
                WordPress
              </th>
              <th scope="col" className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-4 text-left font-sans text-[14.5px] font-bold text-[#6F4CF5]">
                Website-abonnement
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.c} className="transition-opacity duration-200" style={{ opacity: filter && row.cat !== filter ? 0.32 : 1 }}>
                <th
                  scope="row"
                  className="border-t border-[#EEF0F4] px-4.5 py-4 text-left align-top font-sans text-[14.5px] font-semibold text-[#1F2937]"
                  dangerouslySetInnerHTML={{ __html: row.c }}
                />
                <td
                  className="border-t border-l border-[#EEF0F4] px-4.5 py-4 align-top font-sans text-[14.5px] leading-[1.52] text-[#374151]"
                  dangerouslySetInnerHTML={{ __html: row.wp }}
                />
                <td
                  className="border-t border-l border-[#EEF0F4] bg-[#FBFAFF] px-4.5 py-4 align-top font-sans text-[14.5px] leading-[1.52] text-[#374151]"
                  dangerouslySetInnerHTML={{ __html: row.abo }}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked */}
      <div className="mt-5 flex flex-col gap-3.5 sm:hidden">
        {ROWS.map((row) => (
          <div
            key={row.c}
            className="overflow-hidden rounded-2xl border border-[#E6E8EF] transition-opacity duration-200"
            style={{ opacity: filter && row.cat !== filter ? 0.32 : 1 }}
          >
            <div
              className="border-b border-[#EEF0F4] bg-[#FBFBFD] px-4 py-3 font-sans text-[14.5px] font-bold text-[#1F2937]"
              dangerouslySetInnerHTML={{ __html: row.c }}
            />
            <div className="border-b border-[#EEF0F4] px-4 py-3.5">
              <div className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.5px] text-[#6B7280]">
                WordPress
              </div>
              <div
                className="font-sans text-[15px] leading-[1.47] text-[#374151]"
                dangerouslySetInnerHTML={{ __html: row.wp }}
              />
            </div>
            <div className="bg-[#FBFAFF] px-4 py-3.5">
              <div className="mb-1 font-sans text-xs font-semibold uppercase tracking-[0.5px] text-[#6F4CF5]">
                Website-abonnement
              </div>
              <div
                className="font-sans text-[15px] leading-[1.47] text-[#374151]"
                dangerouslySetInnerHTML={{ __html: row.abo }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
