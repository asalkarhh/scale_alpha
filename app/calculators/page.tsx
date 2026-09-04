import type { Metadata } from "next";

import { CalculatorSuite } from "@/components/calculator-suite";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "SIP & Financial Planning Calculators | Scale Alpha",
  description:
    "Free SIP, Step-Up SIP, Lumpsum, SWP, Delay Cost, and Insurance planning calculators from Scale Alpha.",
  alternates: { canonical: "/calculators" },
};

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="Interactive Financial Calculators"
        description="Model your SIP wealth accumulation, step-up goals, lumpsum growth, and SWP monthly income."
        primaryCta={{ label: "Start SIP", href: "/contact" }}
        secondaryCta={{ label: "Health Diagnostic", href: "/tools/financial-health-score" }}
      />
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <CalculatorSuite />
          
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Goal-based simulations factoring compounding & inflation.",
              "Interactive sliders for quick scenario testing on mobile & web.",
              "Direct consultation available with Kaushal Balte to execute your plan.",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.04}>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-4 text-xs sm:text-sm text-slate-700">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
