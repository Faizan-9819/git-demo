import type { ReactNode } from "react";

/**
 * The wireframe's "bento" macro-layout: full-width rounded (28px) cards
 * stacked with a uniform 14px gap, floating over a warm sand backdrop.
 * Scoped to the homepage only — Navbar/Footer carry their own matching
 * margins so they read the same way on every other page too.
 *
 * The top padding clears the fixed Navbar (top-3 = 12px + h-[64px] = 76px)
 * plus the same 12px the sections use between each other, so at scroll 0 the
 * bar sits above the hero instead of floating over it. Once you scroll the
 * content passes under the (now compact) bar as before.
 */
export default function HomeShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white px-3.5 pt-22 pb-3.5">
      <div className="mx-auto max-w-473 flex flex-col gap-3">{children}</div>
    </div>
  );
}
