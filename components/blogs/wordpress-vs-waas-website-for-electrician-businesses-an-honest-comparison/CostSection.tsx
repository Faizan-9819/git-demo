"use client";

import { useState } from "react";

function fmt(n: number) {
  return "€" + Math.round(n).toLocaleString("en-IE");
}

const W = 720,
  H = 320,
  PL = 54,
  PB = 34,
  PT = 14,
  PR = 16,
  MAX_Y = 5500;
const PLOT_W = W - PL - PR,
  PLOT_H = H - PT - PB;
const xPos = (m: number) => PL + (m / 36) * PLOT_W;
const yPos = (v: number) => PT + PLOT_H - (Math.min(v, MAX_Y) / MAX_Y) * PLOT_H;

function CostChart({
  wpAt,
  aboAt,
}: {
  wpAt: (m: number) => number;
  aboAt: (m: number) => number;
}) {
  const months = Array.from({ length: 37 }, (_, m) => m);
  const wpPts = months.map((m) => [xPos(m), yPos(wpAt(m))] as const);
  const aboPts = months.map((m) => [xPos(m), yPos(aboAt(m))] as const);
  const toPoly = (pts: readonly (readonly [number, number])[]) =>
    pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const gridVals = [0, 1000, 2000, 3000, 4000, 5000];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height="auto"
      role="img"
      aria-label={`Cumulative cost over 36 months. WordPress ends at ${fmt(wpAt(36))}, WaaS at ${fmt(aboAt(36))}.`}
      style={{ display: "block", maxWidth: "100%" }}
    >
      {gridVals.map((v) => {
        const yy = yPos(v);
        return (
          <g key={v}>
            <line
              x1={PL}
              x2={W - PR}
              y1={yy}
              y2={yy}
              stroke="#EEF0F4"
              strokeWidth={1}
            />
            <text
              x={PL - 9}
              y={yy + 4}
              textAnchor="end"
              fontSize={11}
              fill="#9AA1AC"
              fontFamily="Inter,sans-serif"
            >
              €{v / 1000}k
            </text>
          </g>
        );
      })}
      {[0, 12, 24, 36].map((m) => (
        <text
          key={m}
          x={xPos(m)}
          y={H - 11}
          textAnchor="middle"
          fontSize={11}
          fill="#9AA1AC"
          fontFamily="Inter,sans-serif"
        >
          {m} mo
        </text>
      ))}
      <polyline
        points={toPoly(wpPts)}
        fill="none"
        stroke="#1F2937"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <polyline
        points={toPoly(aboPts)}
        fill="none"
        stroke="#6F4CF5"
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={xPos(36)} cy={yPos(wpAt(36))} r={4.5} fill="#1F2937" />
      <circle cx={xPos(36)} cy={yPos(aboAt(36))} r={4.5} fill="#6F4CF5" />
    </svg>
  );
}

export default function CostSection() {
  const [maint, setMaint] = useState<"self" | "outsource">("outsource");
  const [hourly, setHourly] = useState("");
  const [showAssump, setShowAssump] = useState(false);

  const zelf = maint === "self";
  const wpMonthly = 15 + 12.5 + (zelf ? 0 : 75);
  const wpAt = (m: number) => 1500 + m * wpMonthly;
  const aboAt = (m: number) => 290 + m * 69;
  const rate = parseFloat(hourly.replace(",", "."));
  const hasRate = !isNaN(rate) && rate > 0;
  const wpMoneyZelf = 1500 + 540 + 450;

  const scenarioText = zelf
    ? hasRate
      ? `Your scenario: ${fmt(wpMoneyZelf + 180 * rate)} over 3 years — ${fmt(wpMoneyZelf)} in cash plus 180 hours × ${fmt(rate)}.`
      : `Your scenario: ${fmt(wpMoneyZelf)} in cash, plus 180 hours of your own time over 3 years (~5 hours per month).`
    : `Outsourced maintenance: roughly ${fmt(wpAt(36))} over 3 years, plus the time you still spend coordinating.`;

  const reset = () => {
    setMaint("outsource");
    setHourly("");
    setShowAssump(false);
  };

  return (
    <section id="costs" className="mt-24 scroll-mt-[88px]">
      <h2 className=" w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Looking at the real costs
      </h2>
      <p className="mt-4.5">
        The headline price tells you very little. What matters is the total cost
        over two or three years — including your own time.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="rounded-[18px] border border-[#E6E8EF] bg-white p-5.5">
          <h3 className="font-sans text-[17px] font-bold text-[#1F2937]">
            WordPress: a realistic three-year cost
          </h3>
          <p className="mt-2 font-sans text-[14.5px] leading-[1.52] text-[#6B7280]">
            For a small electrician business, a typical WordPress setup looks
            like this:
          </p>
          <ul className="m-0 mt-3.5 flex list-none flex-col p-0">
            {[
              ["Freelancer build (one-off)", "€1,500"],
              ["Hosting · €15/mo", "€540 / 3 yrs"],
              ["Premium plugins · €150/yr", "€450 / 3 yrs"],
              ["Maintenance · ~5 h/mo, or €75/mo outsourced", "€2,700 / 3 yrs"],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex justify-between gap-3 border-t border-[#EEF0F4] py-2.5 font-sans text-[14.5px] text-[#374151]"
              >
                <span dangerouslySetInnerHTML={{ __html: label }} />
                <strong
                  className="whitespace-nowrap font-semibold text-[#1F2937]"
                  dangerouslySetInnerHTML={{ __html: value }}
                />
              </li>
            ))}
            <li className="flex justify-between gap-3 border-t-2 border-[#E6E8EF] pt-3 font-sans text-[15px] font-bold text-[#1F2937]">
              <span>Three-year total (outsourced)</span>
              <span className="whitespace-nowrap">≈ €5,200</span>
            </li>
          </ul>
          <p className="mt-2.5 font-sans text-[13px] leading-[1.46] text-[#9AA1AC]">
            Plus the time you still spend coordinating.
          </p>
        </div>
        <div className="rounded-[18px] border border-[#E6E8EF] bg-[#FBFAFF] p-5.5">
          <h3 className="font-sans text-[17px] font-bold text-[#1F2937]">
            WaaS: a realistic three-year cost
          </h3>
          <p className="mt-2 font-sans text-[14.5px] leading-[1.52] text-[#6B7280]">
            With a fully managed subscription the picture is more fixed:
          </p>
          <ul className="m-0 mt-3.5 flex list-none flex-col p-0">
            {[
              ["Subscription · €69/mo, all-in", "€2,484 / 3 yrs"],
              ["Onboarding · one-off", "€290"],
              ["Content changes", "included"],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex justify-between gap-3 border-t border-[#EEF0F4] py-2.5 font-sans text-[14.5px] text-[#374151]"
              >
                <span dangerouslySetInnerHTML={{ __html: label }} />
                <strong
                  className="whitespace-nowrap font-semibold text-[#1F2937]"
                  dangerouslySetInnerHTML={{ __html: value }}
                />
              </li>
            ))}
            <li className="flex justify-between gap-3 border-t-2 border-[#E6E8EF] pt-3 font-sans text-[15px] font-bold text-[#1F2937]">
              <span>Three-year total</span>
              <span className="whitespace-nowrap">≈ €2,750</span>
            </li>
          </ul>
          <p className="mt-2.5 font-sans text-[13px] leading-[1.46] text-[#9AA1AC]">
            With no hidden time cost.
          </p>
        </div>
      </div>

      {/* Interactive explorer */}
      <div className="mt-5.5 rounded-[18px] border border-[#E6E8EF] bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-3.5">
          <div>
            <div className="font-sans text-xs font-semibold uppercase tracking-[0.4px] text-[#6F4CF5]">
              Cost explorer
            </div>
            <div className="mt-1 font-sans text-[17px] font-bold text-[#1F2937]">
              Cost over 36 months
            </div>
          </div>
          <button
            type="button"
            onClick={reset}
            className="min-h-9.5 cursor-pointer rounded-lg border border-[#E6E8EF] bg-white px-3.5 font-sans text-[13.5px] font-semibold text-[#6B7280] hover:border-[#C5B7FB] hover:text-[#6F4CF5]"
          >
            Reset
          </button>
        </div>

        <fieldset className="m-0 mt-4.5 border-0 p-0">
          <legend className="mb-2.5 font-sans text-[13.5px] text-[#6B7280]">
            WordPress maintenance:
          </legend>
          <div
            role="group"
            className="inline-flex gap-1 rounded-[10px] border border-[#E6E8EF] bg-[#F8F9FC] p-1"
          >
            <button
              type="button"
              onClick={() => setMaint("outsource")}
              aria-pressed={!zelf}
              className="min-h-10 cursor-pointer rounded-[7px] px-4.5 font-sans text-sm font-semibold transition-all"
              style={
                !zelf
                  ? {
                      background: "#6F4CF5",
                      color: "#FFFFFF",
                      border: "1px solid #6F4CF5",
                    }
                  : {
                      background: "#FFFFFF",
                      color: "#1F2937",
                      border: "1px solid #E6E8EF",
                    }
              }
            >
              Outsource
            </button>
            <button
              type="button"
              onClick={() => setMaint("self")}
              aria-pressed={zelf}
              className="min-h-10 cursor-pointer rounded-[7px] px-4.5 font-sans text-sm font-semibold transition-all"
              style={
                zelf
                  ? {
                      background: "#6F4CF5",
                      color: "#FFFFFF",
                      border: "1px solid #6F4CF5",
                    }
                  : {
                      background: "#FFFFFF",
                      color: "#1F2937",
                      border: "1px solid #E6E8EF",
                    }
              }
            >
              Do it yourself
            </button>
          </div>
        </fieldset>

        <div className="mt-4 rounded-xl bg-[#F4F1FE] px-4.5 py-3.5 font-sans text-[14.5px] leading-[1.52] text-[#4B3B7A]">
          {scenarioText}
        </div>

        <div className="mt-4.5">
          <label
            htmlFor="rate"
            className="mb-1.5 block font-sans text-[13.5px] text-[#6B7280]"
          >
            Value of your time per hour (optional — for your own scenario)
          </label>
          <div className="flex items-center gap-2.5">
            <span className="font-sans text-[15px] text-[#9AA1AC]">€</span>
            <input
              id="rate"
              type="number"
              min={0}
              step={5}
              inputMode="decimal"
              value={hourly}
              onChange={(e) => setHourly(e.target.value)}
              placeholder="e.g. 45"
              className="min-h-11 w-[130px] rounded-lg border border-[#E6E8EF] px-3 font-sans text-[15px] text-[#1F2937] focus:border-[#6F4CF5] focus:outline-2 focus:outline-[#E5D5FA]"
            />
            <span className="font-sans text-[13px] text-[#9AA1AC]">
              per hour · 5 h/mo
            </span>
          </div>
        </div>

        <div className="mt-5.5">
          <div className="mb-2.5 flex flex-wrap gap-4.5">
            <span className="inline-flex items-center gap-1.5 font-sans text-[13px] text-[#374151]">
              <span
                aria-hidden="true"
                className="inline-block h-[3px] w-4 rounded-sm bg-[#1F2937]"
              />
              WordPress
            </span>
            <span className="inline-flex items-center gap-1.5 font-sans text-[13px] text-[#374151]">
              <span
                aria-hidden="true"
                className="inline-block h-[3px] w-4 rounded-sm bg-[#6F4CF5]"
              />
              WaaS
            </span>
          </div>
          <CostChart wpAt={wpAt} aboAt={aboAt} />
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[380px] border-collapse">
            <caption className="mb-2 text-left font-sans text-[13px] text-[#9AA1AC]">
              Cumulative cost (current setting)
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-2.5 py-2 text-left font-sans text-[12.5px] font-semibold text-[#9AA1AC]"
                />
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-2.5 py-2 text-right font-sans text-[12.5px] font-semibold text-[#9AA1AC]"
                >
                  12 mo
                </th>
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-2.5 py-2 text-right font-sans text-[12.5px] font-semibold text-[#9AA1AC]"
                >
                  24 mo
                </th>
                <th
                  scope="col"
                  className="border-b border-[#EEF0F4] px-2.5 py-2 text-right font-sans text-[12.5px] font-semibold text-[#9AA1AC]"
                >
                  36 mo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="border-b border-[#EEF0F4] px-2.5 py-2.5 text-left font-sans text-sm font-semibold text-[#1F2937]"
                >
                  WordPress
                </th>
                <td className="border-b border-[#EEF0F4] px-2.5 py-2.5 text-right font-sans text-sm text-[#374151]">
                  {fmt(wpAt(12))}
                </td>
                <td className="border-b border-[#EEF0F4] px-2.5 py-2.5 text-right font-sans text-sm text-[#374151]">
                  {fmt(wpAt(24))}
                </td>
                <td className="border-b border-[#EEF0F4] px-2.5 py-2.5 text-right font-sans text-sm text-[#374151]">
                  {fmt(wpAt(36))}
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-2.5 py-2.5 text-left font-sans text-sm font-semibold text-[#6F4CF5]"
                >
                  WaaS
                </th>
                <td className="px-2.5 py-2.5 text-right font-sans text-sm text-[#374151]">
                  {fmt(aboAt(12))}
                </td>
                <td className="px-2.5 py-2.5 text-right font-sans text-sm text-[#374151]">
                  {fmt(aboAt(24))}
                </td>
                <td className="px-2.5 py-2.5 text-right font-sans text-sm text-[#374151]">
                  {fmt(aboAt(36))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <button
          type="button"
          onClick={() => setShowAssump(!showAssump)}
          aria-expanded={showAssump}
          className="mt-3.5 cursor-pointer border-0 bg-transparent py-1.5 font-sans text-[13.5px] font-semibold text-[#6F4CF5]"
        >
          Show assumptions
        </button>
        {showAssump && (
          <div className="mt-1.5 rounded-xl border border-[#EEF0F4] bg-[#FBFBFD] px-4.5 py-4 font-sans text-[13.5px] leading-[1.5] text-[#6B7280]">
            <ul className="m-0 flex flex-col gap-1.5 pl-4.5">
              <li>
                WordPress: €1,500 build (one-off), €15/mo hosting, €150/yr
                plugins. Maintenance €75/mo if outsourced, or ~5 h/mo if you do
                it yourself (180 hours over 3 years).
              </li>
              <li>WaaS: €69/mo (€690/yr), all-in; €290 one-off onboarding.</li>
              <li>
                The &ldquo;your scenario&rdquo; figure comes from the hourly
                value you enter and is separate from the editorial example
                above. Figures are illustrative; no authoritative hourly rate is
                claimed.
              </li>
              <li>
                The calculation stays local in your browser; no data is sent.
              </li>
            </ul>
          </div>
        )}
      </div>

      <p className="mt-5.5">
        The takeaway isn&rsquo;t that WordPress is expensive — it&rsquo;s that
        the visible price hides the maintenance burden. If you do the
        maintenance yourself, you save money but spend hours. If you outsource
        it, the cost climbs above WaaS.
      </p>
    </section>
  );
}
