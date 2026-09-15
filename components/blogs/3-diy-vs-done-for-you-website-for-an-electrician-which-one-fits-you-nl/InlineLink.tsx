import type { ReactNode } from "react";

/** Matches the mockup's prose link style — inherited color, underline tinted with the brand tint. */
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
      className="text-[#6F4CF5] underline decoration-[#C5B7FB] decoration-1 underline-offset-2 hover:text-[#5A3CE0] hover:decoration-[#5A3CE0]"
    >
      {children}
    </a>
  );
}
