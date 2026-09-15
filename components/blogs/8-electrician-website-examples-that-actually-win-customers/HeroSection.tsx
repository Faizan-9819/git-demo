import ImagePlaceholder from "./ImagePlaceholder";

const JUMP_CHIPS = [
  { label: "I'm a solo operator", href: "#ex1" },
  { label: "Mid-size firm", href: "#ex2" },
  { label: "I specialise", href: "#ex4" },
  { label: "I'm hiring", href: "#ex6" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[70px] -top-[90px] size-[360px] rounded-full opacity-[0.28] blur-[90px]"
        style={{ background: "#A78BFA" }}
      />
      <div className="relative mx-auto max-w-[840px]">
        <div className="mb-[22px] flex flex-wrap items-center gap-3">
          <span className="font-poppins text-[13px] font-semibold uppercase tracking-[2px] text-[#5B21B6]">
            Growth Rocket · Guide
          </span>
          <span className="rounded-full border border-[#E5D5FA] bg-[#F5F3FF] px-3 py-1 font-poppins text-xs font-medium text-[#5B21B6]">
            For electricians
          </span>
        </div>
        <h1 className="text-balance font-poppins text-[34px] font-bold leading-[1.1] tracking-[-1px] text-[#0A0516] sm:text-[44px] lg:text-[52px] lg:leading-[1.06] lg:tracking-[-2px]">
          8 electrician website examples that actually win customers
        </h1>
        <p className="mt-[22px] max-w-[680px] text-pretty font-poppins text-lg leading-[1.55] text-[#6B6580] sm:text-xl">
          Dutch and international sites, kept anonymous and broken down — what
          each approach gets right, where it falls short, and which pattern fits
          your business.
        </p>
        <div className="mb-[30px] mt-4 flex flex-wrap items-center gap-3 font-poppins text-[13px] text-[#64748B]">
          <span>Growth Rocket</span>
          <span aria-hidden="true">·</span>
          <span>15 July 2026</span>
          <span aria-hidden="true">·</span>
          <span>10 min read</span>
        </div>
        <div className="mb-9">
          <div className="mb-2.5 font-poppins text-[13px] text-[#64748B]">
            Which one sounds like you? Jump to the pattern that fits:
          </div>
          <div className="flex flex-wrap gap-2">
            {JUMP_CHIPS.map((chip) => (
              <a
                key={chip.label}
                href={chip.href}
                className="rounded-full border border-[#E2E8F0] bg-white px-3.5 py-2 font-poppins text-[13px] text-[#334155] transition-colors hover:border-[#E5D5FA] hover:bg-[#F5F3FF] hover:text-[#5B21B6]"
                dangerouslySetInnerHTML={{ __html: chip.label }}
              />
            ))}
          </div>
        </div>
        <div className="shadow-[0_12px_32px_rgba(91,33,182,0.10)]">
          <ImagePlaceholder
            src="/blogimages/en/8-electrician-website-examples-that-actually-win-customers/8_electrician_website_examples_that_actually_win_customers_and_what_they_get_right_ (1).webp"
            caption="Collage of electrician websites — hero sections on desktop and mobile"
            aspect="878.4/378.4"
          />
        </div>
      </div>
    </section>
  );
}
