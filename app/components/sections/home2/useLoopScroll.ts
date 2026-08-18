"use client";
import { useCallback, useRef } from "react";

/**
 * Infinite-feeling horizontal scroll: scrolling past the last (or first)
 * card recycles it to the other end instantly, right after the smooth
 * scroll animation lands, so the loop point is invisible to the user.
 */
export function useLoopScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const busyRef = useRef(false);

  const scroll = useCallback((dir: 1 | -1) => {
    const el = ref.current;
    if (!el || el.children.length < 2 || busyRef.current) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || "0") || 0;
    busyRef.current = true;
    const done = () => {
      busyRef.current = false;
    };

    if (dir > 0) {
      const step = cards[0].getBoundingClientRect().width + gap;
      el.scrollTo({ left: el.scrollLeft + step, behavior: "smooth" });
      setTimeout(() => {
        const prevBehavior = el.style.scrollBehavior;
        el.style.scrollBehavior = "auto";
        el.appendChild(cards[0]);
        el.scrollLeft = Math.max(0, el.scrollLeft - step);
        el.style.scrollBehavior = prevBehavior;
        done();
      }, 460);
    } else {
      const last = cards[cards.length - 1];
      const step = last.getBoundingClientRect().width + gap;
      const prevBehavior = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.insertBefore(last, cards[0]);
      el.scrollLeft = el.scrollLeft + step;
      el.style.scrollBehavior = prevBehavior;
      requestAnimationFrame(() => {
        el.scrollTo({ left: Math.max(0, el.scrollLeft - step), behavior: "smooth" });
        setTimeout(done, 460);
      });
    }
  }, []);

  return {
    ref,
    scrollNext: () => scroll(1),
    scrollPrev: () => scroll(-1),
  };
}
