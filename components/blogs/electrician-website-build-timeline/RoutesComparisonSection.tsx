import CostComparisonTable, {
  type ComparisonRow,
} from "@/components/blogs/shared/CostComparisonTable";

export type RoutesComparisonSectionProps = {
  heading: string;
  intro: string;
  columns: [string, string, string];
  rows: ComparisonRow[];
  totalsLabel: string;
  totals: [string, string, string];
  outro: string;
};

export default function RoutesComparisonSection({
  heading,
  intro,
  columns,
  rows,
  totalsLabel,
  totals,
  outro,
}: RoutesComparisonSectionProps) {
  return (
    <section id="routes-comparison" className="scroll-mt-24">
      <h2
        className="mt-12 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-7 w-full font-poppins text-base leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: intro }}
      />

      <CostComparisonTable
        columns={columns.map((label, i) => ({
          label,
          tone: i === columns.length - 1 ? "accent" : "neutral",
          tintAllRows: i === columns.length - 1,
        }))}
        rows={rows}
        footerRow={{ label: totalsLabel, values: totals }}
      />

      <p
        className="mt-7 w-full font-poppins text-sm leading-[23px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: outro }}
      />
    </section>
  );
}
