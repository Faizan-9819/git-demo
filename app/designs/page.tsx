import type { Metadata } from "next";
import DesignsCta from "./DesignsCta";
import DesignsHero from "./DesignsHero";
import TemplatesPageClient from "./TemplatesPageClient";

export const metadata: Metadata = {
  title: "Lorem Ipsum Templates | Growth Rocket",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/designs",
  },
};

/* ------------------------------------------------------------------ */
/*  PREVIOUS PAGE — kept for reference, replaced by the                */
/*  `body.designs-page` folds from Growth Rocket Designs.html.         */
/* ------------------------------------------------------------------ */
/*
export default function TemplatesPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--fg)]">
      <div className="w-full bg-[#F2EEFC]">
        <section className="fix pt-[64px] pb-[44px]  md:pt-[160px] md:pb-[56px]">
          <h1 className="mx-auto mb-4 font-inter text-[30px] sm:text-[40px] lg:text-[56px] font-bold tracking-[-1px] lg:tracking-[-2px] leading-tight text-[var(--color-haiti)]">
            Choose Your Design:
            <span className="text-grad-brand"> Go Live.</span>
          </h1>
          <p className="mt-[18px] max-w-[760px]  font-poppins text-[17px] font-normal leading-[26px] text-[rgb(107,101,128)]">
            Pick a professional design, customize it, and go live instantly—{" "}
            simple and hassle-free.
          </p>
        </section>
      </div>

      <TemplatesPageClient />
    </main>
  );
}
*/

/**
 * `.designs-page main{display:grid;gap:14px;padding-top:14px}` — three stacked
 * folds on the page's own white, 14px apart.
 *
 * `leading-[1.65]` restates the source's `body{line-height:1.65}`. Tailwind's
 * preflight puts 1.5 on <html>, so without this every paragraph that inherits
 * its leading in the source (the card subtitles, the filter label, the closing
 * copy) would sit tighter here than in the design. Headings and the folds that
 * set their own line-height override it as usual.
 */
export default function TemplatesPage() {
  return (
    <main
      id="main"
      className="relative flex min-h-screen flex-col gap-[14px] bg-white pt-[14px] pb-[14px] text-[16px] leading-[1.65] text-[#0a0516]"
    >
      <DesignsHero />
      <TemplatesPageClient />
      <DesignsCta />
    </main>
  );
}
