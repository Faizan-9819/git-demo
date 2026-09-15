"use client";

import { ReactNode, useCallback, useEffect } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";

let _lenis: LenisRef["lenis"] | null = null;

export function lenisStop() {
  _lenis?.stop();
}

export function lenisStart() {
  _lenis?.start();
}

/** Smooth-scroll to a target through Lenis so it doesn't fight the library's
 * own scroll loop (native scrollIntoView/scrollTo jerks while Lenis is active). */
export function lenisScrollTo(
  target: string | number | HTMLElement | null | undefined,
  options?: { offset?: number; duration?: number; immediate?: boolean },
) {
  if (target === null || target === undefined) return;
  if (_lenis) {
    _lenis.scrollTo(target, options);
  } else if (typeof target !== "string" && typeof target !== "number") {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const setRef = useCallback((node: LenisRef | null) => {
    _lenis = node?.lenis ?? null;
  }, []);

  useEffect(() => {
    let rafId: number;
    function update(time: number) {
      _lenis?.raf(time);
      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <ReactLenis
      ref={setRef}
      root
      options={{
        autoRaf: false, // Drive manually for maximum frame rate accuracy
      }}
    >
      {children}
    </ReactLenis>
  );
}

