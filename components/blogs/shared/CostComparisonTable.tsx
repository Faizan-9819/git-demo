import type { ReactNode } from "react";

export type ComparisonCell = string | string[] | ReactNode;

export type ComparisonRow = {
  label: string;
  values: ComparisonCell[];
  /** Tint this row's cells using each column's tone (e.g. a closing "which wins" row). */
  emphasize?: boolean;
};

export type ComparisonFooterRow = {
  label: string;
  values: ComparisonCell[];
};

export type ComparisonColumnTone = "neutral" | "accent" | "good" | "bad";

export type ComparisonColumn = {
  label: ReactNode;
  tone?: ComparisonColumnTone;
  /** Tint every body row's cell in this column with the tone's wash background, not just an emphasized row. */
  tintAllRows?: boolean;
  /** Grid track size for this column, e.g. "1.2fr" or "220px". Defaults to "1.2fr". */
  width?: string;
};

const HEADER_TONE_CLASS: Record<ComparisonColumnTone, string> = {
  neutral: "bg-[var(--color-blog-panel-light)] text-[var(--color-dolphin)]",
  accent: "bg-[var(--color-violet-98)] text-[var(--color-violet-42)]",
  good: "bg-[#ECFAF3] text-[#16875A]",
  bad: "bg-[#FDF2F2] text-[#D64545]",
};

const CELL_WASH_CLASS: Record<ComparisonColumnTone, string> = {
  neutral: "",
  accent: "bg-[var(--color-blog-panel-wash)]",
  good: "bg-[#ECFAF3]",
  bad: "bg-[#FDF2F2]",
};

const FOOTER_CELL_TONE_CLASS: Record<ComparisonColumnTone, string> = {
  neutral: "font-bold text-[var(--color-haiti)]",
  accent: "font-extrabold text-[var(--color-violet-42)]",
  good: "font-extrabold text-[#16875A]",
  bad: "font-extrabold text-[#D64545]",
};

function Cell({ value }: { value: ComparisonCell }) {
  if (Array.isArray(value)) {
    return (
      <ul className="list-none space-y-1.5 whitespace-normal font-poppins text-[13px] leading-[19px] text-[var(--color-dolphin)]">
        {value.map((item) => (
          <li key={item} className="flex items-start gap-1.5">
            <span className="mt-[3px] flex-none text-[var(--color-violet-42)]">
              –
            </span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    );
  }
  if (typeof value === "string") {
    return <span dangerouslySetInnerHTML={{ __html: value }} />;
  }
  return <>{value}</>;
}

function TextOrNode({ value }: { value: ReactNode }) {
  if (typeof value === "string") {
    return <span dangerouslySetInnerHTML={{ __html: value }} />;
  }
  return <>{value}</>;
}

export default function CostComparisonTable({
  labelColumnWidth = "1fr",
  labelColumnHeader,
  columns,
  rows,
  footerRow,
  wrapCells = false,
}: {
  /** Grid track size for the leftmost label column, e.g. "auto", "0.9fr", or "180px". Use "auto" to size it exactly to its longest label instead of guessing a fraction. Defaults to "1fr". */
  labelColumnWidth?: string;
  /** Optional header text for the leftmost (row-label) column, e.g. "Element". Leave unset for a blank corner cell. */
  labelColumnHeader?: ReactNode;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  /** Optional emphasized totals row, rendered inside the same bordered card as the table body — no seam. */
  footerRow?: ComparisonFooterRow;
  /**
   * Let cell text wrap and size the table to the card's own width instead of
   * the default nowrap/scroll-on-mobile behavior. Turn this on for prose-heavy
   * cells (sentences) — the default suits short figures (prices, counts) where
   * keeping every cell on one line and scrolling horizontally on narrow
   * screens reads better than wrapping.
   */
  wrapCells?: boolean;
}) {
  const gridTemplateColumns = [labelColumnWidth, ...columns.map((column) => column.width ?? "1.2fr")].join(" ");

  return (
    <div className="mt-11 overflow-hidden rounded-2xl border border-[var(--color-violet-92)]">
      <div className="overflow-x-auto">
        <div
          className={"grid " + (wrapCells ? "w-full" : "w-max min-w-full whitespace-nowrap")}
          style={{ gridTemplateColumns }}
        >
          <div className="flex items-center border-b border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] px-3 py-3.5 font-poppins text-xs font-semibold uppercase tracking-[1px] text-[var(--color-dolphin)] sm:px-5 sm:py-4.5">
            <TextOrNode value={labelColumnHeader} />
          </div>
          {columns.map((column, i) => (
            <div
              key={i}
              className={
                "flex items-center gap-1.5 border-b border-l border-[var(--color-violet-92)] px-3 py-3.5 font-poppins text-xs font-semibold uppercase tracking-[1px] sm:px-5 sm:py-4.5 " +
                HEADER_TONE_CLASS[column.tone ?? "neutral"]
              }
            >
              <TextOrNode value={column.label} />
            </div>
          ))}

          {rows.map((row, rowIndex) => {
            const isLastRow = !footerRow && rowIndex === rows.length - 1;
            return (
              <div key={row.label} className="contents">
                <div
                  className={
                    "flex items-center bg-[var(--color-blog-panel-light)] px-3 py-3 font-poppins text-sm font-semibold text-[var(--color-haiti)] sm:px-5 sm:py-4 " +
                    (isLastRow ? "" : "border-b border-[var(--color-violet-92)]")
                  }
                  dangerouslySetInnerHTML={{ __html: row.label }}
                />
                {row.values.map((value, i) => {
                  const tone = columns[i]?.tone ?? "neutral";
                  const tint = columns[i]?.tintAllRows || row.emphasize;
                  return (
                    <div
                      key={i}
                      className={
                        "flex items-center border-l border-[var(--color-violet-92)] px-3 py-3 font-poppins text-sm leading-[21px] text-[var(--color-dolphin)] sm:px-5 sm:py-4 " +
                        (isLastRow ? "" : "border-b ") +
                        (tint ? CELL_WASH_CLASS[tone] : "")
                      }
                    >
                      <Cell value={value} />
                    </div>
                  );
                })}
              </div>
            );
          })}

          {footerRow && (
            <div className="contents">
              <div
                className="flex items-center bg-[var(--color-violet-98)] px-3 py-4 font-poppins text-[15px] font-bold text-[var(--color-haiti)] sm:px-5 sm:py-5"
                dangerouslySetInnerHTML={{ __html: footerRow.label }}
              />
              {footerRow.values.map((value, i) => (
                <div
                  key={i}
                  className={
                    "flex items-center border-l border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-3 py-4 font-poppins text-[15px] sm:px-5 sm:py-5 " +
                    FOOTER_CELL_TONE_CLASS[columns[i]?.tone ?? "neutral"]
                  }
                >
                  <Cell value={value} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
