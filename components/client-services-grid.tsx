"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Laptop, RefreshCw, ShieldCheck } from "lucide-react";
import { clientServicesList } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

const serviceIcons = [Laptop, ShieldCheck, RefreshCw];

export function ClientServicesGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {clientServicesList.map((service, index) => {
        const IconComponent = serviceIcons[index] || Laptop;

        return (
          <ScrollReveal key={service.step} delay={index * 0.08}>
            <div className="group relative flex h-full flex-col justify-between rounded-[32px] border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/30 p-8 shadow-[0_12px_40px_rgba(6,78,59,0.06)] transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_22px_55px_rgba(6,78,59,0.13)] hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl font-bold text-emerald-800">
                      {service.step}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      Platform Pillar
                    </span>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-white p-3 text-emerald-800 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="h-5 w-5 text-emerald-700" />
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-emerald-950">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {service.description}
                </p>

                <div className="mt-6 space-y-2.5 border-t border-emerald-100/70 pt-5">
                  {service.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={service.href}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white py-3 text-xs font-bold text-emerald-900 shadow-sm transition-all duration-300 hover:bg-emerald-900 hover:text-white hover:shadow-md sm:text-sm"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
