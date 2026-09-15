import InlineLink from "./InlineLink";

const FAQS = [
  {
    q: "Is WordPress free for electricians?",
    a: "The software is free, but a usable electrician website on WordPress is not. Expect €500–€2,500 for a freelancer build, plus €15–€30/month for hosting, plus plugin and maintenance costs. The “free” part of WordPress is the licence — everything else costs money or time.",
  },
  {
    q: "How long does it take to launch a website for an electrician business?",
    a: "A WaaS site typically goes live within 7 days. A WordPress build by a freelancer usually takes 2–6 weeks, depending on revisions and content readiness.",
  },
  {
    q: "Can I move from WaaS to WordPress later?",
    a: (
      <>
        Sometimes. It depends on the provider. Before signing up for any WaaS,
        ask whether you can export your content (text, images, enquiry data) and
        what the process looks like. A clean exit clause is a fair thing to ask
        for. If you&rsquo;re still weighing , factor that in too.
      </>
    ),
  },
  {
    q: "Does WordPress rank better than WaaS on Google?",
    a: "Not by default. Both can rank well for local searches like “elektricien [city]”. What matters more is your Google Business Profile, reviews, local content, and site speed — all of which are achievable on either platform.",
  },
  {
    q: "Is a managed website really cheaper than WordPress?",
    a: "Over three years, often yes — once you include hosting, plugins, and maintenance time. WordPress can be cheaper if you do all the maintenance yourself and your time is genuinely free.",
  },
  {
    q: "What about security?",
    a: "WordPress sites get targeted because the platform is so common. Keeping plugins, themes, and the core updated is essential, and so are regular backups. WaaS providers handle this as part of the subscription. If security is a worry and you don't want to manage it, that's a strong reason to choose WaaS.",
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
