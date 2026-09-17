import type { ReactNode } from "react";

type Props = {
  id?: string;
  className?: string;
  children: ReactNode;
};

/* Source folds are rounded full-bleed cards: width min(100% - 28px, 1920px).
   The card owns geometry and tint; the inner .fix owns content width. */
export default function SectionCard({ id, className, children }: Props) {
  return (
    <section id={id} className="w-full">
      <div
        className={`w-[calc(100%-28px)] max-w-[1920px] mx-auto rounded-[13px] py-[clamp(46px,5vw,68px)] max-[600px]:w-[calc(100%-20px)] max-[600px]:py-[38px] ${className ?? ""}`}
      >
        <div className="fix">{children}</div>
      </div>
    </section>
  );
}
