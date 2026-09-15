import Button from "@/app/components/ui/Button";

const BRIEF_ITEMS = [
  {
    title: "Build it yourself",
    detail: "€150–€400 per year · high time investment",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="1.5" />
        <line x1="2" y1="19" x2="22" y2="19" />
      </>
    ),
  },
  {
    title: "Freelancer",
    detail: "€1,500–€5,000 upfront · custom built",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.2-3.4 3.8-5 7-5s5.8 1.6 7 5" />
      </>
    ),
  },
  {
    title: "Done-For-You",
    detail: "€690 per year · everything handled",
    icon: (
      <>
        <path d="M12 2l8 3.5v5.5c0 5-3.5 8.5-8 10.5-4.5-2-8-5.5-8-10.5V5.5z" />
        <polyline points="8.5 12 11 14.5 15.5 9.5" />
      </>
    ),
  },
];

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px]">
      <div>
        <div className="flex flex-wrap items-center gap-3.5">
          <div className="font-sans text-[13px] font-semibold uppercase tracking-[1.04px] text-[#6B7280]">
            <span className="text-[#6F4CF5]">Growth Rocket</span>
            <span className="px-2 text-[#C7CBD1]">·</span>Guide
          </div>
          <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-3 py-1 font-sans text-[11px] font-semibold text-[#6F4CF5]">
            Made for electricians
          </span>
        </div>
        <h1 className="mt-5.5 text-balance font-sans text-[34px] font-bold leading-[1.17] tracking-[-0.6px] text-[#1F2937] sm:text-[40px] sm:leading-[1.2] lg:text-[46px] lg:leading-[1.17]">
          DIY vs Done-For-You website for an electrician: which one fits you?
        </h1>
        <p className="mt-6 max-w-[520px] text-pretty font-sans text-lg leading-8 text-[#6B7280] sm:text-xl">
          Three honest routes: build it yourself with Wix or WordPress, hire a
          freelancer, or pay a fixed fee for a fully managed service. No hype —
          just the trade-offs.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="#decision" variant="primary" size="lg" arrow="up-right">
            Compare the three routes
          </Button>
          <a
            href="#tabel"
            className="border-b-[1.5px] border-[#C5B7FB] pb-0.5 font-sans text-[15px] font-semibold text-[#1F2937]"
          >
            See the comparison table
          </a>
        </div>
        <div className="mt-8.5 flex flex-wrap items-center gap-2.5 font-sans text-sm text-[#6B7280]">
          <span>Growth Rocket</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>8 July 2026</span>
          <span className="text-[#D7DAE0]">·</span>
          <span>8 min read</span>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD] p-8.5 sm:p-9">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[1.2px] text-[#9AA1AC]">
          In brief
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {BRIEF_ITEMS.map((item) => (
            <div key={item.title} className="flex items-start gap-3.5">
              <div className="flex size-10 flex-none items-center justify-center rounded-[10px] bg-[#F4F1FE] text-[#6F4CF5]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
              </div>
              <div>
                <div className="font-sans text-[15.5px] font-bold text-[#1F2937]">
                  {item.title}
                </div>
                <div className="mt-0.5 font-sans text-sm leading-[1.5] text-[#6B7280]">
                  {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 h-px bg-[#EEF0F4]" />
        <div className="mt-3.5 font-sans text-[13px] leading-[1.36] text-[#9AA1AC]">
          The right choice depends on your time, your tech confidence, and your
          goal.
        </div>
      </div>
      <div className="col-span-full mt-8 h-px bg-[#EEF0F4]" />
    </section>
  );
}
