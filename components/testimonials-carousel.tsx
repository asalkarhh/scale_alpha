"use client";

import { useEffect, useEffectEvent, useState } from "react";
import { Star } from "lucide-react";

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
      <div className="rounded-[32px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Client story
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950">
              {active.result}
            </h3>
          </div>
          <div className="flex gap-1 shrink-0">
            {Array.from({ length: active.rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 text-slate-700">“{active.quote}”</p>

        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1f5eff_0%,#35c4ff_48%,#4dd4a3_100%)] text-lg font-semibold text-white shrink-0">
            {active.initials}
          </div>
          <div>
            <p className="font-semibold text-slate-950">{active.name}</p>
            <p className="text-sm text-slate-500">
              {active.role} · {active.location}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                index === activeIndex
                  ? "bg-slate-950 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              {testimonial.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-emerald-50/40 via-white to-slate-50 p-6 shadow-[0_10px_40px_rgba(6,78,59,0.05)] sm:p-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
            <span>Scale Alpha Advisory Standard</span>
          </div>
          <h4 className="mt-4 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
            Relationships that stay active after onboarding
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            High-net-worth style communication, but accessible to serious investors who want structured decisions, ongoing portfolio clarity, and objective guidance.
          </p>
        </div>

        <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Periodic Portfolio Reviews</p>
              <p className="text-[11px] text-slate-500">Goal progression tracking &amp; asset rebalancing</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Direct Distributor Access</p>
              <p className="text-[11px] text-slate-500">Dedicated guidance from Kaushal Balte, ARN-269246</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">No Sales Pressure or Jargon</p>
              <p className="text-[11px] text-slate-500">Transparent mutual fund distribution aligned to your risk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
