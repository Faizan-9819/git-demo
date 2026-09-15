export default function FundamentalsSection() {
  const fundamentals = [
    {
      num: "01",
      title: "A validated idea.",
      text: "Not validated by friends who say \"cool!\" — validated by people who would actually pay. The simplest test costs nothing: talk to ten potential customers before you build anything. If you can't find ten people willing to discuss the problem, you've learned something valuable before it got expensive.",
    },
    {
      num: "02",
      title: "A clear target audience.",
      text: '"Everyone" is not an audience. The narrower you start, the easier everything becomes — your message, your pricing, your first marketing. You can always broaden later.',
    },
    {
      num: "03",
      title: "A concrete offer.",
      text: 'Not a skill, an offer. "I do social media" is a skill. "I manage Instagram for horeca in Utrecht for a fixed monthly amount" is an offer. Customers buy offers.',
    },
    {
      num: "04",
      title: "A price you can say out loud.",
      text: "A truth almost every first-time founder learns the hard way: your first price will feel uncomfortably high to you — and it's probably still too low. Price with a straight face and adjust with experience.",
    },
    {
      num: "05",
      title: "A way to reach your first customers.",
      text: "Your network, your internship contacts, local communities, one channel done well. First customers rarely come from everywhere; they come from somewhere specific.",
    },
  ];

  return (
    <section id="fundamentals" className="scroll-mt-24 pt-14">
      <h2 className=" text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Launching a business is more than going online
      </h2>

      <p className="mt-7 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
        Let's be honest about the full picture first. Before anything else, a
        first business needs a handful of fundamentals:
      </p>
      <div className="mt-8 flex flex-col gap-6">
        {fundamentals.map((item) => (
          <div key={item.num} className="flex items-start gap-5">
            <div className="flex-none font-poppins text-[15px] font-semibold text-[var(--color-violet-42)]">
              {item.num}
            </div>
            <div className="flex-1">
              <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
                <strong className="font-semibold text-[var(--color-haiti)]">
                  {item.title}
                </strong>{" "}
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-7 max-w-[720px]">
        <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          Each of these is a craft of its own — we'll dig into validating a
          business idea, pricing your services and finding your first customer
          in upcoming articles. Most Dutch graduates who take this road start as
          a zzp'er, and some grow into a full MKB business from there.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          But notice something about that list: every item eventually collides
          with the same requirement. The idea, the audience, the offer, the
          price — none of it matters until customers can <em>find</em> you,{" "}
          <em>believe</em> you, and <em>act</em> on it. That's where most first
          launches quietly go wrong.
        </p>
      </div>
    </section>
  );
}
