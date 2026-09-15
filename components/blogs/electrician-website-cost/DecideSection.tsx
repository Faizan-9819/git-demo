import DecideGrid, {
  type DecideItem,
} from "@/components/blogs/shared/DecideGrid";

export type DecideSectionProps = {
  heading: string;
  items: DecideItem[];
  outro: string;
};

export default function DecideSection({
  heading,
  items,
  outro,
}: DecideSectionProps) {
  return (
    <section id="decide" className="scroll-mt-24">
      <h2
        className="mt-12 w-full text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <DecideGrid items={items} />
      <p
        className="mt-8 max-w-[720px] font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: outro }}
      />
    </section>
  );
}
