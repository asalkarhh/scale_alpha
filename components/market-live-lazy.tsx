"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MarketLive = dynamic(() => import("@/components/MarketLive"));

export function MarketLiveLazy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="min-h-[680px]">
      {shouldLoad && <MarketLive />}
    </div>
  );
}
