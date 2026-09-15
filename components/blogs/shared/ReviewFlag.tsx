import type { ReactNode } from "react";

/** Highlights an unverified claim/figure — matches the source mockup's review-flag styling. */
export default function ReviewFlag({ children }: { children: ReactNode }) {
  return <span className="rounded-[3px] bg-[#FDECEC] px-[3px] text-[#D64545]">{children}</span>;
}
