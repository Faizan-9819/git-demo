"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!inView || reduced) {
      el.textContent = `${prefix}${to.toLocaleString("en-US")}${suffix}`;
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(value) {
        el.textContent = `${prefix}${Math.round(value).toLocaleString("en-US")}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, reduced, to, duration, prefix, suffix]);

  return <span ref={ref} className={className} />;
}
