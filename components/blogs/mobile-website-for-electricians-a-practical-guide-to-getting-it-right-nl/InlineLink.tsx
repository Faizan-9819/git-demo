import type { ReactNode } from "react";

/** Matches the mockup's inline link style — inherited text color, weight 600, tinted underline. */
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
      className="font-semibold underline decoration-[#C5B7FB] underline-offset-2"
    >
      {children}
    </a>
  );
}
