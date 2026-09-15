import BlogCtaSection from "@/components/blogs/shared/BlogCtaSection";

export type MidCtaSectionProps = {
  heading: string;
  body: string;
  features: string[];
  ctaLabel: string;
  /** No longer used — the button always opens the lead form. Kept optional so existing call sites don't need to change. */
  ctaHref?: string;
};

export default function MidCtaSection({ heading, body, features, ctaLabel }: MidCtaSectionProps) {
  return <BlogCtaSection id="mid-cta" heading={heading} body={body} features={features} ctaLabel={ctaLabel} />;
}
