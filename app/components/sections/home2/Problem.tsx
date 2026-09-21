"use client";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import Button from "../../ui/Button";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { withBreaks } from "../../../lib/withBreaks";

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden rounded-[28px]  fix-wide py-[50px] lg:py-30">
      {/* The column layout moved off the <section> and onto the group so the
          two blocks stay one stagger rather than two independent reveals. */}
      <RevealGroup className="flex flex-col items-center gap-11">
        <RevealItem>
          <h2 className="m-0 max-w-295 text-center  font-bold font-bricolage text-[28px] md:text-[48px] leading-[1.2] tracking-[-2.16px] text-[var(--color-haiti)]">
            {withBreaks(
              t({
                en: "For freelancers and small businesses, running a business takes more than a website.",
                nl: "Voor ZZP'ers en MKB'ers draait een <br/> bedrijf op meer dan alleen een website. <br/>",
              }),
            )}{" "}
            <span className="text-[var(--color-dolphin)] font-bricolage">
              {withBreaks(
                t({
                  en: " It takes a simple way to handle the work that follows.",
                  nl: "Aanvragen, afspraken, klanten, offertes <br/> en facturen zitten vaak overal verspreid.",
                }),
              )}
            </span>
          </h2>
        </RevealItem>
        <RevealItem>
          <Button
            href="#oplossing"
            size="md"
            variant="dark"
            arrow="right"
            className="rounded-full! text-[13px]! px-[20px]! py-[14px]! "
            // style={{ ["--btn-radius" as any]: "999px" }}
          >
            {t({
              en: "See the complete package",
              nl: "Bekijk de oplossing",
            })}
          </Button>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
