import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Laptop,
  RefreshCw,
  Smartphone,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { clientServicesList } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Client Services & Platforms | Scale Alpha",
  description:
    "Scale Alpha client services: Client Desk family tracking, E-Wealth Account paperless transactions, and Smart Rebalancing.",
  alternates: { canonical: "/offerings/client-services" },
};

const serviceIcons = [Laptop, Smartphone, RefreshCw];

export default function ClientServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Platforms"
        title="Client Services &amp; Portals"
        description="Consolidated wealth reporting, 100% paperless transactions, and ongoing risk management."
        primaryCta={{ label: "Access Client Portal", href: "/portal" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Pillars"
            title="Our 3 Client Service Pillars"
            description="Technology and advisory designed to give you clarity and control over your wealth."
            align="center"
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {clientServicesList.map((service, index) => {
              const IconComponent = serviceIcons[index] || Laptop;

              return (
                <ScrollReveal key={service.step} delay={index * 0.05}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl font-bold text-emerald-800">
                          {service.step}
                        </span>
                        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-2 text-emerald-800">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      <span className="mt-3 inline-block rounded-md bg-emerald-100/70 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-800">
                        {service.subtitle}
                      </span>

                      <h3 className="mt-1 text-lg font-bold text-emerald-950">
                        {service.title}
                      </h3>

                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-2">
                      <Link
                        href={service.href}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-emerald-900 py-2.5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
