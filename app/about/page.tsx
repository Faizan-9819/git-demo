import type { Metadata } from "next";
import HomeShell from "../components/sections/home2/HomeShell";
import AboutHero from "../components/sections/about/AboutHero";
import AboutIntro from "../components/sections/about/AboutIntro";
import AboutPurpose from "../components/sections/about/AboutPurpose";
import AboutClosing from "../components/sections/about/AboutClosing";
import JsonLd from "../components/JsonLd";
import { buildPageSchema } from "../lib/seo";

/* ------------------------------------------------------------------ */
/*  PREVIOUS ABOUT PAGE — kept for reference, replaced by the port of  */
/*  about.html below. The old folds still live in components/about/.   */
/* ------------------------------------------------------------------ */
/*
import AboutPageClient from "@/components/about/AboutPageClient";

export default function AboutPage() {
  return <AboutPageClient />;
}
*/

const TITLE = "About Growth Rocket | Technology for Small Businesses";
const DESCRIPTION =
  "Meet the purpose and people behind Growth Rocket, a Parashift Technologies initiative to democratize technology for small businesses.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.getgrowthrocket.com/about",
    languages: {
      en: "https://www.getgrowthrocket.com/about",
      nl: "https://www.getgrowthrocket.com/nl/over-ons",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * /about — the port of about.html.
 *
 * The page is a server component; only the reveal wrappers inside each fold and
 * the shared footer are client components, so nothing else ships JS.
 *
 * Every fold carries about.css's own values — surfaces, type scale and
 * breakpoints — rather than this site's fold vocabulary; each component's
 * header lists the rules it is built from.
 *
 *   .about-hero      AboutHero      deep  #0a0516
 *   .about-intro     AboutIntro     white (inherited from .about-page)
 *   .about-purpose   AboutPurpose   violet #5b2dce (--gr-brand-surface)
 *   .about-closing   AboutClosing   lime  #e4fa65
 *
 * `HomeShell` stands in for `.about-page main{display:flex;gap:14px}` plus
 * `main>section{width:min(calc(100% - 28px),1920px);border-radius:13px}` — the
 * same macro-layout, and also what /home2 and /pricing use, so it brings the
 * top padding that clears the fixed Navbar along with it. Every fold then takes
 * its horizontal spacing from the shared `.fix` rail instead of about.css's
 * `var(--fold-inset)`. That is the one deliberate departure from the source,
 * and it is what keeps all four folds on one set of margins and lines this page
 * up with the rest of the site.
 *
 * The source's last two blocks are not ported here at all: its
 * `.footer-loop-strip` and `footer.legacy-footer.fresh-footer` are
 * `FooterLoopStrip` and `Footer2`, which the root layout already mounts through
 * `SiteFooter` — so this page ends at the closing fold and they arrive
 * underneath it, together with the shared contact CTA.
 */
export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <JsonLd data={buildPageSchema("/about", TITLE, DESCRIPTION)} />

      <HomeShell>
        <AboutHero />
        <AboutIntro />
        <AboutPurpose />
        <AboutClosing />
      </HomeShell>
    </main>
  );
}
