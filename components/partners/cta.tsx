"use client";
import Reveal from "@/app/components/Reveal";
import Button from "@/app/components/ui/Button";

export default function PartnersCTA() {
  const openPartnerForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-partner-form"));
    }
  };

  return (
    <section
      className="relative overflow-hidden py-[60px] lg:py-[100px]"
      style={{
        background:
          "linear-gradient(174deg, var(--color-violet-42) 0%, var(--color-violet-23) 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[145px] -left-[143px] w-[390px] h-[393px] rotate-[52deg] -scale-y-100"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.25) 0%, rgba(254,229,102,0) 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[120px] -right-[60px] w-[390px] h-[393px] rotate-[127deg]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(254,229,102,0.3) 0%, rgba(254,229,102,0) 70%)",
          filter: "blur(12px)",
        }}
      />

      <div className="md:max-w-[1400px] md:mx-auto fix flex flex-col items-center gap-[18px] max-w-[1000px]">
        <Reveal>
          <h2 className="text-center font-poppins font-bold text-[clamp(32px,5vw,48px)] leading-[1.15] tracking-[-2px] text-[#faf7ff]">
            Help businesses <br className="lg:hidden" /> grow online.
            <br />
            <span className="text-[var(--color-amber-300)]">
              Build recurring income.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[6px]">
            <Button onClick={openPartnerForm} arrow="up-right">
              Become a Partner
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[10px] pt-[4px]">
            {["Become part of the Growth Rocket Partner Network."].map(
              (item) => (
                <li key={item} className="flex items-center gap-[6px]">
                  <span className="font-jakarta w-full text-center text-[14px] leading-[18px] text-[#faf7ff]">
                    {item}
                  </span>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
