const FAQS = [
  {
    q: "Can a website really go live in 7 days?",
    a: "Yes. Because Growth Rocket uses a proven framework and a structured production process, every stage of the project is planned before work begins. Rather than building everything from scratch, our team focuses on tailoring the system to your business, so your website can launch within seven days once we've received everything needed during onboarding.",
  },
  {
    q: "What if I don't have photos of my work?",
    a: "That's perfectly fine. Phone photos are more than enough to get started, and if you don't have any suitable images during onboarding, we can launch using professional stock imagery and replace it with your own work later. Your website doesn't have to wait until you've built a complete photo library.",
  },
  {
    q: "Do I need to write the content myself?",
    a: "No. We'll write the website content for you using the information gathered during your onboarding. Before launch, you'll have the opportunity to review everything and request any changes you'd like us to make.",
  },
  {
    q: "I already have a website. Can I still switch to Growth Rocket?",
    a: "Absolutely. Many electricians move to Growth Rocket because their existing website is outdated, difficult to update or no longer reflects their business. We can use your existing domain while giving you a modern website that's easier to manage and backed by ongoing support.",
  },
  {
    q: "Can I keep my current domain name?",
    a: "Yes. If you already own a domain, we'll connect your new website to it during launch, making the transition as smooth as possible for both you and your customers.",
  },
  {
    q: "What happens after my website goes live?",
    a: "Launch day is the beginning — not the end. Your website continues to be hosted, maintained and supported by Growth Rocket. As your business changes, we can help update your content, keep your website secure and ensure everything continues running smoothly. You'll also be introduced to the Growth Rocket Hub, where your customer enquiries can be organised in one place.",
  },
  {
    q: "Is the 7-day timeline guaranteed?",
    a: "The timeline is based on receiving the required onboarding information at the start of the project. In our experience, the biggest cause of delays isn't the website build itself — it's waiting for missing information. Once everything is in place, our production process is designed to keep your project moving without unnecessary interruptions.",
  },
  {
    q: "Can I make changes after launch?",
    a: "Of course. Your business will continue to evolve, and your website should evolve with it. Whether you want to update your services, replace photos, add new content or make other changes, Growth Rocket continues supporting your website long after it's gone live.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="mt-24 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Frequently asked questions
      </h2>
      <div className="mt-7 overflow-hidden rounded-[14px] border border-[#E6E8EF] bg-[#F8F9FC]">
        {FAQS.map((item, i) => (
          <details key={item.q} className={"group " + (i > 0 ? "border-t border-[#E6E8EF]" : "")}>
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-5 px-7 py-6">
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
