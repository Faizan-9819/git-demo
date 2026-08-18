"use client";
import Reveal from "../../Reveal";
import Button from "../../ui/Button";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { withBreaks } from "@/app/lib/withBreaks";

export default function FinalCta({
  onStartClick,
}: {
  onStartClick?: () => void;
}) {
  const { t } = useLanguage();

  return (
    <section
      id="prijzen"
      className="relative overflow-hidden rounded-[28px] fix-wide py-[50px] lg:py-32 flex flex-col items-center gap-5 text-center"
      style={{
        background: "linear-gradient(120deg, #5b219f 0%, #922698 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-45 -left-25 w-[420px] h-[420px] rounded-full opacity-22"
        style={{ background: "var(--color-kournikova)", filter: "blur(150px)" }}
      />
      <Reveal>
        <h2 className="relative m-0 max-w-190 font-poppins font-bold text-[clamp(30px,3.8vw,46px)] leading-[1.1] tracking-[-1.5px] text-white">
          {withBreaks(
            t({
              en: "Ready to run your business smarter?",
              nl: "Klaar om je bedrijf <br/> slimmer te runnen?",
            }),
          )}
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="relative m-0 text-[19px] font-poppins font-medium text-white/85">
          {t({
            en: "Growth Rocket from €69 per month.",
            nl: "Growth Rocket vanaf €69 per maand.",
          })}
        </p>
      </Reveal>
      <Reveal
        delay={0.1}
        className="relative flex items-center gap-[18px] flex-wrap justify-center mt-3"
      >
        <Button
          size="lg"
          variant="dark"
          onClick={onStartClick}
          className="rounded-lg font-poppins"
          // style={{ ["--btn-radius" as any]: "999px" }}
        >
          {t({ en: "Start with Growth Rocket", nl: "Start met Growth Rocket" })}
        </Button>
        <a
          href="#faq"
          className="font-poppins text-[15px] font-semibold text-[var(--color-kournikova)]"
        >
          {t({ en: "See what's included →", nl: "Bekijk wat inbegrepen is →" })}
        </a>
      </Reveal>
    </section>
  );
}
