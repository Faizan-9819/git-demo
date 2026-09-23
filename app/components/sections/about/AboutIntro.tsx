import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";

/**
 * "A clear purpose. An experienced team." — `section.about-intro` from
 * about.html, carrying about.css's own values.
 *
 *   .about-intro              display:grid
 *                             grid-template-columns:2fr 3fr
 *                             gap:clamp(30px,6vw,90px); align-items:start
 *   .about-page h2            font-size:clamp(32px,3.4vw,50px)
 *                             line-height:1.06; letter-spacing:-.045em
 *   .about-page p             font-size:18px; line-height:1.65
 *                             color:var(--gr-text-muted)  #625a70
 *   .about-intro p+p          margin-top:14px
 *   .about-company-link       color:var(--gr-brand-ink)   #5b2dce
 *                             font-weight:600; text-decoration:underline
 *                             text-underline-offset:3px
 *                             text-decoration-thickness:1px
 *   .about-company-link:hover color:var(--gr-deep)
 *   @900px                    grid-template-columns:1fr; gap:26px
 *
 * The fold sets no background, so it inherits `.about-page{background:
 * var(--gr-white)}`. The `h2` has no accent rule here — both lines are ink.
 * The company link is a plain underlined link; there is no arrow on it.
 */
export default function AboutIntro() {
  return (
    <section
      aria-labelledby="about-intro-heading"
      className="rounded-[13px] bg-white py-[clamp(48px,6vw,84px)] text-[#0a0516] max-[600px]:py-[38px]"
    >
      <RevealGroup className="fix grid grid-cols-1 items-start gap-[26px] min-[901px]:grid-cols-[2fr_3fr] min-[901px]:gap-[clamp(30px,6vw,90px)]">
        <RevealItem>
          <h2
            id="about-intro-heading"
            className="m-0 font-bricolage text-[clamp(32px,3.4vw,50px)] leading-[1.06] font-semibold tracking-[-0.045em]"
          >
            A clear purpose.
            <br />
            An experienced team.
          </h2>
        </RevealItem>

        <RevealItem>
          <p className="m-0 font-sans text-[18px] leading-[1.65] text-[#625a70] max-[600px]:text-[17px]">
            Growth Rocket is a product initiative by{" "}
            <a
              href="https://parashifttech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#5b2dce] underline decoration-1 underline-offset-[3px] transition-colors hover:text-[#0a0516] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b2dce]"
            >
              Parashift Technologies
            </a>
            . Behind it is a digital and technology team with more than 15 years
            of experience working with businesses of all sizes across Europe,
            the Middle East and Asia.
          </p>

          <p className="mt-[14px] mb-0 font-sans text-[18px] leading-[1.65] text-[#625a70] max-[600px]:text-[17px]">
            Through that work, we saw capable business owners held back by
            technology that was too costly, complicated or disconnected from
            their everyday needs. Growth Rocket grew from a conviction: our
            experience should help make technology more accessible to the people
            who have the least time to figure it out.
          </p>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
