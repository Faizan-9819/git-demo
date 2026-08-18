import type { ReactNode } from "react";
import Reveal from "../Reveal";

export default function EyebrowLabel({
  children,
  color,
  align = "center",
  className,
}: {
  children: ReactNode;
  color?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={
        (align === "left" ? "text-left" : "text-center") +
        (className ? ` ${className}` : "")
      }
    >
      <span
        className="block font-poppins font-semibold uppercase tracking-[1.5px] text-[13px] leading-[20px]"
        style={{ color: color ?? "var(--color-violet-42)" }}
      >
        {children}
      </span>
    </Reveal>
  );
}
