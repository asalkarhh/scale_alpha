import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { serviceCards } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

type ServicesGridProps = {
  detailed?: boolean;
};

export function ServicesGrid({ detailed = false }: ServicesGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {serviceCards.map((service, index) => (
        <ScrollReveal key={service.title} delay={index * 0.05}>
          <article
            id={service.href.split("#")[1]}
            className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_30px_80px_rgba(31,94,255,0.14)]"
          >
            <div className="absolute -right-10 top-0 h-24 w-24 rounded-full bg-sky-100 blur-3xl transition-transform duration-500 group-hover:scale-125" />
            <div className="relative">
              <div className="inline-flex rounded-2xl bg-[linear-gradient(135deg,rgba(31,94,255,0.12)_0%,rgba(77,212,163,0.16)_100%)] p-3 text-slate-900">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              {detailed ? (
                <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 text-sm leading-7 text-slate-600">
                  Advisory conversations in this area typically cover suitability,
                  allocation logic, implementation steps, and review cadence.
                </div>
              ) : null}
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors group-hover:text-sky-700"
              >
                {service.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}

