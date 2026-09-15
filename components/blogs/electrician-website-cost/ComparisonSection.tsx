import CostComparisonTable, {
  type ComparisonRow,
} from "@/components/blogs/shared/CostComparisonTable";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-1 flex-none text-[var(--color-violet-42)]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export type ComparisonSectionProps = {
  heading: string;
  columns: [string, string, string];
  rows: ComparisonRow[];
  yearOneEyebrow: string;
  yearOneLead: string;
  yearOneItems: string[];
  yearOneEmphasis: string;
  yearOneOutro: string;
};

export default function ComparisonSection({
  heading,
  columns,
  rows,
  yearOneEyebrow,
  yearOneLead,
  yearOneItems,
  yearOneEmphasis,
  yearOneOutro,
}: ComparisonSectionProps) {
  return (
    <section id="comparison" className="scroll-mt-24">
      <h2
        className="mt-12 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <CostComparisonTable
        columns={columns.map((label, i) => ({
          label,
          tone: i === columns.length - 1 ? "accent" : "neutral",
          tintAllRows: i === columns.length - 1,
        }))}
        rows={rows}
      />

      <div className="mt-11 w-full">
        <div
          className="mb-2.5  font-poppins text-[11px] font-semibold uppercase tracking-[1.1px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: yearOneEyebrow }}
        />
        <p
          className="w-full font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: yearOneLead }}
        />

        <div className="mt-5 flex flex-col gap-3.5 rounded-2xl border border-[var(--color-violet-92)] bg-[var(--color-blog-panel)] p-6 sm:p-7">
          {yearOneItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span
                className="font-poppins text-base leading-[25px] text-[var(--color-haiti)]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>

        <p
          className="mt-7 w-full font-poppins text-[16.5px] font-semibold leading-[26px] text-[var(--color-haiti)]"
          dangerouslySetInnerHTML={{ __html: yearOneEmphasis }}
        />
        <p
          className="mt-3.5 w-full font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: yearOneOutro }}
        />
      </div>
    </section>
  );
}
