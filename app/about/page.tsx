import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Scale Alpha & Kaushal Balte",
  description:
    "Learn about Kaushal Balte and Scale Alpha's goal-based financial planning and mutual fund distribution in India.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Scale Alpha"
        description="Led by Kaushal Balte (AMFI ARN-269246), we help investors achieve clarity, discipline, and long-term financial security."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Our Offerings", href: "/offerings" }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          
          {/* Founder Profile Card */}
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 sm:p-8">
            <div className="grid items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-8 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Founder &amp; Principal Distributor
                </span>
                <h2 className="text-2xl font-bold text-emerald-950 sm:text-3xl">
                  Kaushal Balte
                </h2>
                <p className="text-xs font-semibold text-emerald-800">
                  AMFI-Registered Mutual Fund Distributor • ARN-269246
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  Dedicated to delivering transparent, goal-aligned financial planning for families, salaried professionals, and business owners across India.
                </p>
                
                <div className="grid gap-2 pt-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Unbiased, client-centric guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Holistic goal &amp; tax mapping</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col gap-2">
                <div className="rounded-xl border border-emerald-100 bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-950">100+</p>
                  <p className="text-xs text-slate-500">Satisfied Clients</p>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-emerald-950">₹5 Cr+</p>
                  <p className="text-xs text-slate-500">AUM Advised</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Our Vision</span>
              <h3 className="mt-1 text-lg font-bold text-emerald-950">Financial Freedom for Every Family</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To empower investors with clear, goal-backed roadmaps that compound wealth and beat inflation.
              </p>
            </article>
            <article className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Our Mission</span>
              <h3 className="mt-1 text-lg font-bold text-emerald-950">Simple, Transparent Advisory</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                To eliminate guesswork through transparent product selection, paperless execution, and periodic rebalancing.
              </p>
            </article>
          </div>

          {/* Why Choose Us */}
          <div className="mt-10">
            <SectionHeading
              eyebrow="Values"
              title="Why Choose Scale Alpha"
              description="Built on compliance, transparency, and client-first commitment."
              align="center"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.04}>
                  <article className="h-full rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs transition-all hover:border-emerald-300">
                    <item.icon className="h-5 w-5 text-emerald-700" />
                    <h3 className="mt-2 text-base font-bold text-emerald-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
