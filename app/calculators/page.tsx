import type { Metadata } from "next";

import { CalculatorSuite } from "@/components/calculator-suite";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "SIP & Financial Planning Calculators",
  description:
    "Use free SIP, SWP, lumpsum, EMI, retirement, child education, inflation and insurance planning calculators from Scale Alpha.",
  keywords: [
    "Scale Alpha calculators",
    "SIP calculator India",
    "insurance need calculator",
    "retirement calculator India",
    "lumpsum calculator",
    "SWP calculator",
    "financial health score",
  ],
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: "SIP & Financial Planning Calculators | Scale Alpha",
    description:
      "Free interactive calculators for SIPs, investments, retirement, insurance needs and financial planning.",
    url: "/calculators",
  },
};

export default function CalculatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculators"
        title="Investor-friendly calculators with a premium dashboard experience."
        description="Use these tools for first-level financial planning, then convert the output into a tailored planning roadmap with Scale Alpha."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Back to Home", href: "/" }}
      />
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <CalculatorSuite />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "Built for planning conversations, not performance promises.",
              "Responsive charting and sliders make the tools useful on mobile as well.",
              "Each module is easy to connect later to a CRM, API, or logged-in client dashboard.",
            ].map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.05}>
                <div className="rounded-[28px] border border-slate-200/70 bg-slate-50/80 p-6 text-sm leading-7 text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
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

