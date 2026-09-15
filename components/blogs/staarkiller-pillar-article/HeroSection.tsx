import Image from "next/image";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  metaDate: string;
  metaReadTime: string;
};

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  metaDate,
  metaReadTime,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[70px] -top-[90px] size-[360px] rounded-full opacity-[0.28] blur-[90px]"
        style={{ background: "#A78BFA" }}
      />
      <div className="relative mx-auto max-w-[840px]">
        <div
          className="mb-[22px] font-poppins text-[13px] font-semibold uppercase tracking-[2px] text-[#6B6580]"
          dangerouslySetInnerHTML={{ __html: eyebrow }}
        />

        <h1
          className="text-balance font-poppins text-[34px] font-bold leading-[1.1] tracking-[-1px] text-[#0A0516] sm:text-[44px] lg:text-[52px] lg:leading-[1.06] lg:tracking-[-2px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p
          className="mt-[22px] max-w-[680px] text-pretty font-poppins text-lg leading-[1.55] text-[#6B6580] sm:text-xl"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />

        <div className="mt-4 flex flex-wrap items-center gap-3 font-poppins text-[13px] text-[#64748B]">
          <span>Growth Rocket</span>
          <span aria-hidden="true">·</span>
          <span dangerouslySetInnerHTML={{ __html: metaDate }} />
          <span aria-hidden="true">·</span>
          <span dangerouslySetInnerHTML={{ __html: metaReadTime }} />
        </div>

        <div className="relative mt-9 aspect-video w-full overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-[0_12px_32px_rgba(91,33,182,0.10)]">
          <Image
            src="/blogimages/en/staarkiller-pillar-article/33722-1280-1.webp"
            alt="Recent graduate working on a laptop, laying the foundation for their first business"
            fill
            sizes="(max-width: 768px) 100vw, 840px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
