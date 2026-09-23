import type { Metadata } from "next";
import HomeShell from "../components/sections/home2/HomeShell";
import PricingHero from "../components/sections/pricing/PricingHero";
import PricingPlan from "../components/sections/pricing/PricingPlan";
import BespokeBanner from "../components/sections/pricing/BespokeBanner";
import PricingFaq from "../components/sections/pricing/PricingFaq";
import { PRICING_FAQS } from "../components/sections/pricing/faqs";
import JsonLd from "../components/JsonLd";
import { buildFaqJsonLdFromItems, buildPageSchema } from "../lib/seo";

const TITLE = "Pricing — One Package, One Price | Growth Rocket";
const DESCRIPTION =
  "Your website, Growth Rocket Hub, hosting, support and everyday business tools in one package. €690 a year or €69 a month, plus a one-time €290 onboarding fee.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.getgrowthrocket.com/pricing",
  },
};

/**
 * /pricing — the port of Pricing.html.
 *
 * The page is a server component: only the billing switch inside `PricingPlan`
 * and the shared footer are client components, so nothing else ships JS.
 *
 * `HomeShell` is reused rather than reproduced. It is what gives /home2 its
 * bento macro-layout — full-width rounded cards over white, a uniform gap, and
 * the top padding that clears the fixed Navbar — and the source page is built
 * the same way, out of `width: min(100% - 28px, 1920px)` folds with a 13px
 * radius. Every fold below then takes its horizontal spacing from the shared
 * `.fix` rail instead of the source's `--fold-inset`, which is what keeps the
 * heading, the cards, the banner and the FAQ on one set of margins and lines
 * this page up with the rest of the site.
 *
 * The source's last two folds are not ported here at all: its
 * `section#contact.contact-section` ("Big plans? Let's make room for them.") and
 * its footer are `ContactCta` and `Footer2`, which the root layout already
 * mounts through `SiteFooter` — so this page ends at the FAQ and they arrive
 * underneath it.
 */
export default function PricingPage() {
  const faqSchema = buildFaqJsonLdFromItems(
    PRICING_FAQS.map(({ q, a }) => ({ question: q, answer: a })),
  );

  return (
    <main className="relative min-h-screen">
      <JsonLd data={buildPageSchema("/pricing", TITLE, DESCRIPTION)} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <HomeShell>
        <PricingHero />
        <PricingPlan />
        <BespokeBanner />
        <PricingFaq />
      </HomeShell>
    </main>
  );
}
