import type { ReactNode } from "react";

type Props = {
  id?: string;
  /** Card shell: surface colour and vertical rhythm only, never width. */
  className?: string;
  /** Content rail: this fold's own inner layout. */
  innerClassName?: string;
  /** Rendered inside the card but OUTSIDE the rail, for bands that run
   *  edge to edge (the gallery's lime filter strip). */
  bleed?: ReactNode;
  children: ReactNode;
};

/**
 * Fold shell for the designs page — ported from
 * `.designs-hero, .designs-gallery, .designs-cta` in Growth Rocket Designs.html:
 *
 *   width: min(calc(100% - 28px), 1920px)
 *   margin: 0 auto
 *   border-radius: 13px
 *   padding: clamp(52px, 7vw, 104px) var(--fold-inset)
 *
 * The width/centering half is exactly `.newfix-card` in globals.css, including
 * the 600px step that narrows the gutter from 28px to 20px, so only the padding
 * is restated here (the source drops it to 46px/22px at that same step).
 *
 * Two boxes, like the Features folds:
 *
 *   .newfix-card  the coloured, rounded, near-full-bleed shell — 1892px wide,
 *                 14px off each viewport edge, identical to the card the site
 *                 footer sits in (SiteFooter's `px-3.5` + `max-w-473`)
 *   .fix          the content rail inside it — the site-wide 1180px rail
 *
 * The source has no inner rail; it puts the inset straight on the card, which
 * ran this page's content out to ~1738px while every other page on the site —
 * about, contact, blog, partner-network, electricians and this page's own
 * /designs/[slug] detail view — sits on `.fix` at 1180px. That put the closing
 * CTA's copy ~279px left of the footer heading immediately below it. Adding the
 * rail lines all three folds up with the footer and the detail page exactly.
 *
 * The card keeps `px-[var(--fold-inset)]` as a floor: `.fix` is padding-free
 * above 768px, so without it copy would touch the rounded card edge at every
 * width below ~1313px, where the 1180px cap has not started binding yet.
 * Anything passed through `bleed` sits inside that inset, so it has to break
 * out on its own. Cancelling the inset with a negative margin only reaches the
 * CARD's edges, which stop matching the screen's once the 1920px max-width
 * binds — `.full-bleed` is what actually spans the viewport. See the band
 * comment in CategoryFilter, which pairs with this.
 *
 * The floor is there for the COLOURED folds. The gallery cancels its phone
 * step through `className` (`max-[600px]:px-0!`) because its card is white on
 * a white page: there is no edge for copy to touch, and 22px of invisible
 * padding only pushed the grid inside the hero and CTA card edges above and
 * below it.
 *
 * `px-0!` is load-bearing, not tidying. `.fix` is unlayered CSS while Tailwind
 * utilities live in `@layer utilities`, so unlayered wins on order alone — the
 * `!` is what lets this cancel `.fix`'s sub-768px `padding-inline: 20px`, which
 * would otherwise stack on the card's own inset and push the rail in past the
 * bleeding filter band beside it.
 */
export default function DesignsFold({
  id,
  className,
  innerClassName,
  bleed,
  children,
}: Props) {
  return (
    <section id={id} className="w-full">
      <div
        className={`newfix-card rounded-[13px] px-[var(--fold-inset)] py-[clamp(52px,7vw,104px)] max-[600px]:px-[22px] max-[600px]:py-[46px] ${className ?? ""}`}
      >
        {bleed}
        <div className={`fix px-0! ${innerClassName ?? ""}`}>{children}</div>
      </div>
    </section>
  );
}
