import type { ReactNode } from "react";

/** Matches the source mockup's a.gr-inline styling exactly — accent color, tinted underline that darkens on hover. */
export default function InlineLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-[#6F4CF5] underline decoration-[#C5B7FB] decoration-1 underline-offset-[3px] transition-colors hover:decoration-[#6F4CF5]"
    >
      {children}
    </a>
  );
}
