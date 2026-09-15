import MoreLinksAccordion, {
  type MoreLinksGroup,
} from "@/components/blogs/shared/MoreLinksAccordion";

export type MoreForElectriciansSectionProps = {
  heading: string;
  intro: string;
  toggleLabel: string;
  groups: MoreLinksGroup[];
};

export default function MoreForElectriciansSection({
  heading,
  intro,
  toggleLabel,
  groups,
}: MoreForElectriciansSectionProps) {
  return (
    <section id="more" className="scroll-mt-24">
      <h2
        className="mt-12 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-3.5 max-w-[720px] font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: intro }}
      />
      <MoreLinksAccordion toggleLabel={toggleLabel} groups={groups} />
    </section>
  );
}
