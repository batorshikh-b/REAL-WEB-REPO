"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

// Parses a leading number out of strings like "55+", "100%", "99.9%".
// Animatable only when there's a clean leading number whose suffix has no
// further digits (so "24/7" or "ISO 27001" render statically, not as a count).
export function CountUp({ value, className, duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const parsed = value.match(/^(\D*)([\d.]+)(.*)$/s);
  const suffixHasDigit = parsed ? /\d/.test(parsed[3]) : false;
  const animatable = Boolean(parsed) && !suffixHasDigit;

  const [display, setDisplay] = useState(
    animatable ? `${parsed![1]}0${parsed![3]}` : value
  );

  useEffect(() => {
    if (!animatable || !inView) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const prefix = parsed![1];
    const numStr = parsed![2];
    const suffix = parsed![3];
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const current = (target * eased).toFixed(decimals);
      setDisplay(`${prefix}${current}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, animatable]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
