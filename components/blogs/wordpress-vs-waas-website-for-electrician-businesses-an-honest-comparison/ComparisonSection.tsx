"use client";

import { useState } from "react";

type Category = "cost" | "time" | "mgmt" | "flex" | "own";

type Row = { c: string; wp: string; abo: string; cat: Category };

const ROWS: Row[] = [
  {
    c: "Upfront cost",
    wp: "€0 software + €500–€2,500 build (freelancer)",
    abo: "€290 one-off onboarding, then included in the subscription",
    cat: "cost",
  },
  {
    c: "Ongoing cost",
    wp: "€10–€30/month hosting + €50–€150/month maintenance (if outsourced)",
    abo: "€69/month (€690/year), all-in",
    cat: "cost",
  },
  {
    c: "Time to launch",
    wp: "2–6 weeks (freelancer dependent)",
    abo: "within 7 days",
    cat: "time",
  },
  {
    c: "Who handles updates",
    wp: "You or your developer",
    abo: "The provider",
    cat: "mgmt",
  },
  {
    c: "Security & backups",
    wp: "Your responsibility",
    abo: "Included",
    cat: "mgmt",
  },
  {
    c: "Content changes",
    wp: "You log in and edit, or pay per change",
    abo: "Submit a request; the provider applies it",
    cat: "mgmt",
  },
  {
    c: "Flexibility",
    wp: "Very high — any design, any feature, any plugin",
    abo: "Limited to the platform's templates and features",
    cat: "flex",
  },
  {
    c: "SEO ceiling",
    wp: "High, but only if maintained well",
    abo: "Solid for local SEO; ceiling depends on the provider",
    cat: "flex",
  },
  {
    c: "Ownership",
    wp: "You own the site fully",
    abo: "You rent the platform",
    cat: "own",
  },
  {
    c: "Risk if you stop paying",
    wp: "Site keeps running; you still pay hosting",
    abo: "The site goes offline",
    cat: "own",
  },
  {
    c: "Best fit",
    wp: "Technical owners or firms with a long-term developer relationship",
    abo: "Non-technical tradespeople who want a working website without the work",
    cat: "mgmt",
  },
];

const CHIPS: { key: Category; label: string }[] = [
  { key: "cost", label: "Costs" },
  { key: "time", label: "Time" },
  { key: "mgmt", label: "Management" },
  { key: "flex", label: "Flexibility" },
  { key: "own", label: "Ownership" },
];

export default function ComparisonSection() {
  const [filter, setFilter] = useState<Category | null>(null);

  return (
    <section id="side-by-side" className="mt-24 scroll-mt-[88px]">
      <h2 className="w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Side-by-side comparison
      </h2>
      <p className="mt-4.5">
        Here&rsquo;s how the two options compare on the dimensions that matter
        for a working electrician.
      </p>

      <div
        role="group"
        aria-label="Highlight the comparison by theme"
        className="mt-5.5 flex flex-wrap items-center gap-2.5"
      >
        <span className="mr-0.5 font-sans text-[13px] text-[#9AA1AC]">
          Highlight:
        </span>
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
                  ? {
                      background: "#6F4CF5",
                      color: "#FFFFFF",
                      borderColor: "#6F4CF5",
                    }
                  : {
                      background: "#FFFFFF",
                      color: "#1F2937",
                      borderColor: "#E6E8EF",
                    }
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
            Show all
          </button>
        )}
      </div>

      {/* Desktop table */}
      <div className="mt-5 hidden overflow-hidden rounded-[18px] border border-[#E6E8EF] sm:block">
        <table className="w-full border-collapse">
          <caption className="sr-only">
            Comparison of WordPress and WaaS across eleven dimensions
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="w-[23%] border-b border-[#E6E8EF] bg-[#FBFBFD] px-4.5 py-4 text-left font-sans text-xs font-semibold uppercase tracking-[0.3px] text-[#9AA1AC]"
              >
                Dimension
              </th>
              <th
                scope="col"
                className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-4 text-left font-sans text-[14.5px] font-bold text-[#1F2937]"
              >
                WordPress
              </th>
              <th
                scope="col"
                className="border-b border-l border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-4 text-left font-sans text-[14.5px] font-bold text-[#6F4CF5]"
              >
                WaaS
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr
                key={row.c}
                className="transition-opacity duration-200"
                style={{ opacity: filter && row.cat !== filter ? 0.32 : 1 }}
              >
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
                WaaS
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
