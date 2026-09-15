import type { ReactNode } from "react";

/** Highlights an unverified claim/figure — matches the source mockup's .gr-flag styling exactly (pale red wash + red underline via inset box-shadow, no text-color change). */
export default function Flag({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-[3px] px-[2px]"
      style={{ background: "#FEE2E2", boxShadow: "inset 0 -2px 0 #DC2626" }}
    >
      {children}
    </span>
  );
}
