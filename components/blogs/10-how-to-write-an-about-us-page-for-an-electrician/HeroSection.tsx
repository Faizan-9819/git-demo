import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px]">
      <div>
        <div className="flex flex-wrap items-center gap-3.5">
          <div className="font-sans text-[13px] font-semibold uppercase tracking-[1.04px] text-[#6B7280]">
            <span className="text-[#6F4CF5]">Growth Rocket</span>
            <span className="px-2 text-[#C7CBD1]">&middot;</span>Writing guide
          </div>
          <span className="rounded-full border border-[#E4DCFB] bg-[#F4F1FE] px-3 py-1 font-sans text-[11px] font-semibold text-[#6F4CF5]">
            For electricians
          </span>
        </div>
        <h1
          id="opening"
          className="mt-5.5 scroll-mt-24 text-balance font-sans text-[34px] font-bold leading-[1.17] tracking-[-0.6px] text-[#1F2937] sm:text-[40px] sm:leading-[1.2] lg:text-[46px] lg:leading-[1.17] lg:tracking-[-1.2px]"
        >
          How to write an About Us page for an electrician (that actually builds
          trust)
        </h1>
        <p className="mt-6 max-w-[540px] text-pretty font-sans text-lg leading-8 text-[#6B7280] sm:text-xl">
          Most homeowners decide whether to call you within 30 seconds of
          landing on your About Us page. They are not reading for fun. They are
          checking if you are real, qualified, and the kind of person they want
          inside their home.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <Button href="#step-1" variant="primary" arrow="up-right" size="lg">
            Build your About page
          </Button>
          <a
            href="#before-after"
            className="inline-flex min-h-11 items-center border-0 border-b-[1.5px] border-[#C5B7FB] bg-transparent px-0.5 pb-0.5 font-sans text-[15px] font-semibold text-[#1F2937] no-underline"
          >
            See the before &amp; afters
          </a>
        </div>
        <div className="mt-7.5 flex flex-wrap items-center gap-2.5 font-sans text-sm text-[#9AA1AC]">
          <span>Writing guide</span>
          <span className="text-[#DADDE3]">&middot;</span>
          <span>~9 min read</span>
          <span className="text-[#DADDE3]">&middot;</span>
          <span>Updated July 2026</span>
        </div>
      </div>

      <figure
        role="img"
        aria-label="Electrician shaking hands with a homeowner outside a Dutch family home — trust-building moment for an about us page electrician section"
        className="m-0 overflow-hidden rounded-2xl border border-[#E6E8EF] bg-[#FBFBFD]"
      >
        <div className="relative aspect-4/3 w-full">
          <Image
            src="/blogimages/en/10-how-to-write-an-about-us-page-for-an-electrician/Frame 1618873121 (1).png"
            alt="Electrician holding cable and tools, representing the real person behind the business"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <figcaption className="border-t border-[#EEF0F4] px-4 py-3 font-sans text-[12.5px] leading-4.5 text-[#9AA1AC]"></figcaption>
      </figure>
    </section>
  );
}
