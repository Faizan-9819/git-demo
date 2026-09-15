import OptionCard, {
  type OptionCardProps,
} from "@/components/blogs/shared/OptionCard";

export type OptionSectionProps = {
  id: string;
  option: OptionCardProps;
  outro?: string;
  midCta?: { text: string; label: string; href: string };
};

export default function OptionSection({
  id,
  option,
  outro,
  midCta,
}: OptionSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <OptionCard {...option} />

      {midCta && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-5 rounded-xl border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-5 py-5 sm:px-6">
          <span
            className="font-poppins text-base leading-6 text-[var(--color-haiti)]"
            dangerouslySetInnerHTML={{ __html: midCta.text }}
          />
          <a
            href={midCta.href}
            className="flex-none border-b-[1.5px] border-[var(--color-violet-76)] pb-0.5 font-poppins text-sm font-semibold text-[var(--color-violet-42)] no-underline"
            dangerouslySetInnerHTML={{ __html: midCta.label }}
          />
        </div>
      )}

      {outro && (
        <p
          className="mt-6 w-full font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: outro }}
        />
      )}
    </section>
  );
}
