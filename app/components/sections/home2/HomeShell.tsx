import type { ReactNode } from "react";

/**
 * The wireframe's "bento" macro-layout: full-width rounded (28px) cards
 * stacked with a uniform 14px gap, floating over a warm sand backdrop.
 * Scoped to the homepage only — Navbar/Footer carry their own matching
 * margins so they read the same way on every other page too.
 */
export default function HomeShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--color-sand)] px-3.5 pt-3.5 pb-3.5">
      <div className="mx-auto max-w-473 flex flex-col gap-3">{children}</div>
    </div>
  );
}
