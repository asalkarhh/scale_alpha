import type { Metadata } from "next";

import { FinancialHealthScore } from "@/components/financial-health-score";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Financial Health Score Diagnostic | Scale Alpha",
  description:
    "Check your financial health score in 2 minutes. Evaluate emergency funds, insurance cover, and retirement readiness with Scale Alpha.",
  alternates: { canonical: "/tools/financial-health-score" },
};

export default function FinancialHealthScorePage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnostic"
        title="Financial Health Score"
        description="A quick 2-minute assessment of your emergency reserves, debt ratio, and retirement readiness."
        primaryCta={{ label: "Start Test", href: "#diagnostic-tool" }}
        secondaryCta={{ label: "All Calculators", href: "/calculators" }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12" id="diagnostic-tool">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Evaluation"
            title="Interactive Financial Check"
            description="Answer 4 quick questions to view your financial readiness score."
            align="center"
          />
          <div className="mt-8">
            <FinancialHealthScore />
          </div>
        </div>
      </section>
    </>
  );
}
