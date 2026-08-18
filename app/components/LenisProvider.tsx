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

