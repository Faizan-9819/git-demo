const FAQS = [
  {
    q: "What's the cheapest way to build an electrician website?",
    a: "DIY with Wix or Squarespace is cheapest on paper — around €150 to €400 in the first year. The real cost is your time. If you value your hours at even €30, a weekend of building quickly matches the cost of a managed yearly subscription.",
  },
  {
    q: "Is a freelancer better than a managed website service?",
    a: "A freelancer is better when you want a fully custom design and want to own the site outright. A managed service is better when you want the site built, hosted, updated, and maintained for one fixed fee — without chasing separate invoices.",
  },
  {
    q: "How long does it take to build an electrician website?",
    a: "DIY: 2 weeks to 3+ months. Freelancer: 4 to 8 weeks on average. Done-For-You: usually 5 to 10 days, because the provider builds using proven structures.",
  },
  {
    q: "Will a website actually bring me more jobs?",
    a: "A website alone won't. A website connected to your Google Business profile, with real reviews, a clear list of services, and a simple way to get in touch, usually will. The model you pick matters less than whether those three pieces are set up properly.",
  },
  {
    q: "Can I move my website to another provider later?",
    a: "With DIY and freelancer builds, usually yes — the files and the domain are yours. With managed services it varies. Before you sign, ask whether you can export your content and keep your domain if you leave.",
  },
  {
    q: "Do I need a booking system, or is a contact form enough?",
    a: "For most small electricians, a simple enquiry form is enough to start. A booking system becomes valuable once you're regularly scheduling calls, quotes, or site visits — and want to stop playing endless phone tag.",
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
          <details key={item.q} className={"group " + (i > 0 ? "border-t border-[#E6E8EF]" : "")}>
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 px-7 py-6">
              <span className="font-sans text-lg font-semibold text-[#1F2937]">{item.q}</span>
              <span
                aria-hidden="true"
                className="flex-none font-sans text-[22px] font-normal leading-none text-[#9AA1AC] transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-[700px] px-7 pb-6 font-sans text-base leading-[1.63] text-[#6B7280]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
