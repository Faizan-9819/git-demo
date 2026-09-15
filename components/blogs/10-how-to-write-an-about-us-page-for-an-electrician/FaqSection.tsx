const FAQS = [
  {
    q: "How long should an electrician's About Us page be?",
    a: "Aim for 400–700 words of body copy, plus team photos and a certifications block. Long enough to cover the six trust signals, short enough that nothing gets skipped.",
  },
  {
    q: "Should I include my prices on the About page?",
    a: "Not full pricing, but a sentence on how you handle pricing helps. Something like “We give a fixed quote before any work starts” addresses the most common customer concern without committing you to numbers.",
  },
  {
    q: "Do I need a professional photographer?",
    a: "For team and founder photos, yes — or at least someone with a decent camera and natural light. Phone photos work if they are well-lit and clearly show the person's face. Avoid stock photos entirely.",
  },
  {
    q: "What if I work alone?",
    a: "A solo electrician's About page is often stronger than a team page, because the customer knows exactly who is showing up. Lead with your name, photo, years of experience, and the type of work you focus on.",
  },
  {
    q: "Should I list customer reviews on the About page?",
    a: "A small number (two or three) can work well at the bottom of the page. Full review sections belong on a separate page or homepage so the About page stays focused on you and your team.",
  },
  {
    q: "How often should I update the About page?",
    a: "Review it once a year. Update team photos when staff changes, add new certifications when you earn them, and refresh the founder note if your focus has shifted.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="mt-24 max-w-[720px] text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Frequently asked questions
      </h2>
      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        {FAQS.map((item, i) => (
          <details
            key={item.q}
            className={"group " + (i > 0 ? "border-t border-[#E6E8EF]" : "")}
          >
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
              <span className="font-sans text-lg font-semibold text-[#1F2937]">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[700px] px-7 pb-6 font-sans text-base leading-[1.63] text-[#6B7280]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
