import BlogCtaSection from "@/components/blogs/shared/BlogCtaSection";

export type FinalThoughtSectionProps = {
  heading: string;
  paragraphs: string[];
  ctaHeading: string;
  ctaBody: string;
  features: string[];
  ctaLabel: string;
  /** No longer used — the button always opens the lead form. Kept optional so existing call sites don't need to change. */
  ctaHref?: string;
};

export default function FinalThoughtSection({
  heading,
  paragraphs,
  ctaHeading,
  ctaBody,
  features,
  ctaLabel,
}: FinalThoughtSectionProps) {
  return (
    <section id="final-thought" className="scroll-mt-24">
      <h2
        className="mt-12 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div className="w-full">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="mt-7 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>

      <BlogCtaSection
        heading={ctaHeading}
        body={ctaBody}
        features={features}
        ctaLabel={ctaLabel}
        topSpacing="embedded"
      />
    </section>
  );
}
