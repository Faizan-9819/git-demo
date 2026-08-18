"use client";
import Reveal from "../../Reveal";
import Button from "../../ui/Button";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { withBreaks } from "../../../lib/withBreaks";

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[28px] bg-[var(--color-violet-98)] fix-wide py-[50px] lg:py-30 flex flex-col items-center gap-11">
      <Reveal>
        <h2 className="m-0 max-w-295 text-center font-poppins font-bold text-[clamp(28px,3.6vw,46px)] leading-[1.2] tracking-[-1.2px] text-[var(--color-haiti)]">
          {withBreaks(
            t({
              en: "For freelancers and small businesses, running a company takes more than just a website.",
              nl: "Voor ZZP'ers en MKB'ers draait een <br/> bedrijf op meer dan alleen een website. <br/>",
            }),
          )}{" "}
          <span className="text-[var(--color-dolphin)]">
            {withBreaks(
              t({
                en: "Requests, appointments, clients, quotes and invoices are often scattered everywhere.",
                nl: "Aanvragen, afspraken, klanten, offertes <br/> en facturen zitten vaak overal verspreid.",
              }),
            )}
          </span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <Button
          href="#oplossing"
          size="md"
          variant="dark"
          className="rounded-lg text-[13px]! px-[18px]! py-[10px]! "
          // style={{ ["--btn-radius" as any]: "999px" }}
        >
          {t({ en: "See the solution →", nl: "Bekijk de oplossing →" })}
        </Button>
      </Reveal>
    </section>
  );
}
