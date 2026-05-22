"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { Play, Star } from "lucide-react";

import { testimonials } from "@/lib/site-data";

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cycleForward = useEffectEvent(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      cycleForward();
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Client story
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">
              {active.result}
            </h3>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: active.rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 text-slate-700">“{active.quote}”</p>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1f5eff_0%,#35c4ff_48%,#4dd4a3_100%)] text-lg font-semibold text-white">
            {active.initials}
          </div>
          <div>
            <p className="font-semibold text-slate-950">{active.name}</p>
            <p className="text-sm text-slate-500">
              {active.role} · {active.location}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                index === activeIndex
                  ? "bg-slate-950 text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:text-slate-950"
              }`}
            >
              {testimonial.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[32px] border border-white/10 bg-slate-950 p-6 text-white shadow-[0_30px_100px_rgba(2,6,23,0.36)]">
          <p className="text-xs uppercase tracking-[0.22em] text-sky-100/70">
            Video testimonial placeholder
          </p>
          <div className="mt-5 flex aspect-[16/10] items-center justify-center rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,rgba(31,94,255,0.22)_0%,rgba(77,212,163,0.18)_100%)]">
            <button
              type="button"
              className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white transition-transform duration-300 hover:scale-105"
            >
              <Play className="ml-1 h-8 w-8" />
            </button>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Designed for future client video integrations, founder walkthroughs, or
            portfolio education explainers.
          </p>
        </div>

        <div className="rounded-[32px] border border-slate-200/70 bg-slate-50/80 p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
            Trust signal
          </p>
          <h4 className="mt-3 text-xl font-semibold text-slate-950">
            Relationships that stay active after onboarding
          </h4>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            High-net-worth style communication, but accessible to serious investors
            who want structured decisions and ongoing clarity.
          </p>
        </div>
      </div>
    </div>
  );
}
