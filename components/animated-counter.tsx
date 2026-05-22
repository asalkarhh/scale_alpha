"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);

  const runAnimation = useEffectEvent(() => {
    const start = performance.now();

    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(value * eased);

      if (progress < 1) {
        window.requestAnimationFrame(frame);
      }
    };

    window.requestAnimationFrame(frame);
  });

  useEffect(() => {
    if (!ref.current || started) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  const formatted =
    Number.isInteger(value) || value >= 10
      ? Math.round(displayValue).toLocaleString("en-IN")
      : displayValue.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
