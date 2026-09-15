import ImagePlaceholder from "@/components/blogs/8-electrician-website-examples-that-actually-win-customers/ImagePlaceholder";

const JUMP_CHIPS = [
  { label: "Ik ben zzp'er", href: "#ex1" },
  { label: "Middelgroot bedrijf", href: "#ex2" },
  { label: "Ik specialiseer me", href: "#ex4" },
  { label: "Ik zoek personeel", href: "#ex6" },
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
            Growth Rocket · Gids
          </span>
          <span className="rounded-full border border-[#E5D5FA] bg-[#F5F3FF] px-3 py-1 font-poppins text-xs font-medium text-[#5B21B6]">
            Voor elektriciens
          </span>
        </div>
        <h1 className="break-words text-wrap font-poppins text-[34px] font-bold leading-[1.1] tracking-[-1px] text-[#0A0516] sm:text-balance sm:text-[44px] lg:text-[52px] lg:leading-[1.06] lg:tracking-[-2px]">
          8 voorbeelden van elektricienwebsites die klanten opleveren
        </h1>
        <p className="mt-[22px] max-w-[680px] text-pretty font-poppins text-lg leading-[1.55] text-[#6B6580] sm:text-xl">
          Nederlandse en internationale sites, geanonimiseerd en ontleed — wat
          elke aanpak goed doet, waar hij tekortschiet, en welk patroon past bij
          jouw bedrijf.
        </p>
        <div className="mb-[30px] mt-4 flex flex-wrap items-center gap-3 font-poppins text-[13px] text-[#64748B]">
          <span>Growth Rocket</span>
          <span aria-hidden="true">·</span>
          <span>15 juli 2026</span>
          <span aria-hidden="true">·</span>
          <span>9 min lezen</span>
        </div>
        <div className="mb-9">
          <div className="mb-2.5 font-poppins text-[13px] text-[#64748B]">
            Waar herken jij je in? Spring naar het patroon dat past:
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
