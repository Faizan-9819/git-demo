import Link from "next/link";
import type { ReactNode } from "react";
import ArrowIcon, { type ArrowDirection } from "../components/ui/ArrowIcon";

/* The arrow and its hover swap come from the home page: ArrowIcon renders the
   two .btn-arrow__slot spans, and the .btn class in globals.css drives the
   swap on hover. Geometry comes from this page's own .button rule
   (min-height 52px, padding 14px 20px, radius 999px, gap 32px), applied after
   .btn so the Features shape wins. */
const BASE =
  "btn !min-h-[52px] !gap-[8px] !rounded-full !px-[20px] !py-[14px] !text-[15px] !leading-[1.35] !font-semibold !font-sans " +
  /* The Features page transitions colour only — cancel .btn's scale-on-hover. */
  "!transition-colors !duration-200 hover:!scale-100 active:!scale-100";

type Props = {
  href: string;
  arrow?: ArrowDirection;
  className?: string;
  children: ReactNode;
};

export default function FeatureButton({
  href,
  arrow = "up-right",
  className,
  children,
}: Props) {
  const cls = `${BASE} ${className ?? ""}`;
  const content = (
    <>
      <span className="btn__label">{children}</span>
      <ArrowIcon direction={arrow} />
    </>
  );

  /* mailto:/tel: links must stay plain anchors. */
  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}
