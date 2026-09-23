import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * About hero — `section.about-hero` from about.html, carrying about.css's own
 * values rather than this site's fold vocabulary.
 *
 *   .about-page main>section  padding:clamp(48px,6vw,84px) var(--fold-inset)
 *                             border-radius:13px
 *   .about-page h1            max-width:1120px
 *                             font-size:clamp(42px,5.2vw,78px)
 *                             line-height:1.02; letter-spacing:-.05em
 *   .about-hero               background:var(--gr-deep)   #0a0516
 *   .about-hero h1 span       color:var(--gr-lime)        #e4fa65
 *   .about-page p             font-size:18px; line-height:1.65
 *   .about-hero p             max-width:750px; margin-top:26px
 *                             color:var(--gr-text-inverse-muted)  #c9c2d4
 *   .about-hero p+p           margin-top:14px
 *   @600px                    padding:38px 22px; h1:42px; p:17px
 *
 * The two paragraphs stack, as `p+p{margin-top:14px}` says — they are not a
 * two-column row.
 *
 * The one deliberate departure is horizontal spacing: about.css insets every
 * fold with `var(--fold-inset)`, and this uses the shared `.fix` rail instead
 * so the page lines up with the rest of the site.
 */
export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[clamp(48px,6vw,84px)] text-white max-[600px]:py-[38px]"
    >
      <RevealGroup className="fix">
        <RevealItem>
          <h1
            id="about-hero-heading"
            className="m-0 max-w-[1120px] font-bricolage text-[clamp(42px,5.2vw,78px)] leading-[1.02] font-semibold tracking-[-0.05em] text-white max-[900px]:max-w-[850px] max-[600px]:text-[42px]"
          >
            We exist to democratize technology for{" "}
            <span className="text-[#e4fa65]">small businesses.</span>
          </h1>
        </RevealItem>

        <RevealItem>
          <p className="mt-[26px] mb-0 max-w-[750px] font-sans text-[18px] leading-[1.65] text-[#c9c2d4] max-[600px]:text-[17px]">
            A business owner’s ambition should never be limited by their budget,
            technical knowledge or access to the right people. We believe small
            businesses deserve the same opportunity to benefit from technology
            as larger organisations.
          </p>

          <p className="mt-[14px] mb-0 max-w-[750px] font-sans text-[18px] leading-[1.65] text-[#c9c2d4] max-[600px]:text-[17px]">
            Growth Rocket is our way of putting that belief into practice. Our
            purpose is to lower the barriers that keep useful technology out of
            reach, so more people can build a business on their own terms.
          </p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
