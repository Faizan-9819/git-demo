"use client";

import Button from "@/app/components/ui/Button";

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-0.5 flex-none text-[var(--color-violet-42)]"
    >
      <polyline points="4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export type BlogCtaSectionProps = {
  /** Defaults to "cta". */
  id?: string;
  heading: string;
  body: string;
  features: string[];
  ctaLabel: string;
  /**
   * "section" (default) renders this as its own top-level <section> with the
   * mt-24 spacing used between TOC-anchored sections. "embedded" drops the
   * <section> wrapper and uses the smaller mt-14 gap appropriate for a CTA
   * card that follows body paragraphs inside another section.
   */
  topSpacing?: "section" | "embedded";
  /** Optional extra content rendered after the primary CTA button (e.g. a secondary button or caption). */
  children?: React.ReactNode;
};

export default function BlogCtaSection({
  id = "cta",
  heading,
  body,
  features,
  ctaLabel,
  topSpacing = "section",
  children,
}: BlogCtaSectionProps) {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  const card = (
    <div
      className={
        (topSpacing === "embedded" ? "mt-7" : "mt-12") +
        " rounded-[20px] border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-9 lg:p-12"
      }
    >
      <h2
        className="max-w-[560px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.3px] text-[var(--color-haiti)] sm:text-[32px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-4.5 max-w-[600px] text-pretty font-poppins text-lg leading-7 text-[var(--color-dolphin)]"
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <div className="mt-8 grid max-w-[760px] gap-3.5 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <CheckIcon />
            <span
              className="font-poppins text-base leading-6 text-[var(--color-haiti)]"
              dangerouslySetInnerHTML={{ __html: feature }}
            />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Button
          onClick={openLeadForm}
          variant="primary"
          arrow="up-right"
          size="lg"
          className="blog-cta-button"
        >
          <span dangerouslySetInnerHTML={{ __html: ctaLabel }} />
        </Button>
      </div>

      {children}
    </div>
  );

  if (topSpacing === "embedded") return card;

  return (
    <section id={id} className="scroll-mt-24">
      {card}
    </section>
  );
}
