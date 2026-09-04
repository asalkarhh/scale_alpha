"use client";

import React, { useState } from "react";
import { CheckCircle2, Compass, Info, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import { advisoryWorkflow, siteConfig } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { DialogModal } from "@/components/ui/dialog-modal";

const stepIcons = [Compass, ShieldCheck, TrendingUp];

const stepDeepDive: Record<
  string,
  {
    whatWeDo: string[];
    whatYouGet: string[];
    turnaround: string;
  }
> = {
  "01": {
    whatWeDo: [
      "Understand your current financial standing, income sources, and liabilities",
      "Assess risk appetite and goal timeline (Short, Medium, or Long Term)",
      "Design an objective asset allocation framework across equity, debt, and insurance",
    ],
    whatYouGet: [
      "Personalized Goal-Investment Roadmap",
      "Emergency Fund & Liquidity Strategy",
      "Tax-efficient investment recommendations",
    ],
    turnaround: "Initial 1-on-1 Consultation (30-45 mins)",
  },
  "02": {
    whatWeDo: [
      "Initiate 100% digital, paperless KYC onboarding",
      "Set up automated monthly SIP mandates directly with leading AMCs",
      "Integrate insurance and pension (NPS) registrations seamlessly",
    ],
    whatYouGet: [
      "Direct AMC Folio Numbers & Confirmation",
      "Automated bank mandate activation",
      "Instant login to Client Desk mobile & web portal",
    ],
    turnaround: "1 to 2 Business Days",
  },
  "03": {
    whatWeDo: [
      "Track scheme performance against respective benchmark indices",
      "Conduct periodic reviews (half-yearly/annual) to identify allocation drift",
      "Rebalance assets when goals near maturity or risk profiles evolve",
    ],
    whatYouGet: [
      "Consolidated Family Portfolio Statements",
      "Tax Capital Gains summary reports",
      "Direct ongoing advisory support with Kaushal Balte",
    ],
    turnaround: "Continuous & Ongoing Support",
  },
};

export function AdvisoryProcess() {
  const [selectedStep, setSelectedStep] = useState<(typeof advisoryWorkflow)[0] | null>(null);

  const deepDive = selectedStep ? stepDeepDive[selectedStep.step] : null;

  return (
    <>
      <div className="grid gap-3.5 md:grid-cols-3">
        {advisoryWorkflow.map((item, index) => {
          const IconComponent = stepIcons[index] || Compass;

          return (
            <ScrollReveal key={item.step} delay={index * 0.04}>
              <div
                onClick={() => setSelectedStep(item)}
                className="group flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-4.5 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-emerald-800">
                      Step {item.step}
                    </span>
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-2 text-emerald-800 transition-colors group-hover:bg-emerald-900 group-hover:text-white">
                      <IconComponent className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="mt-2.5 text-base font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span className="inline-flex items-center gap-1 group-hover:text-emerald-950 transition-colors">
                    <span>View Deliverables</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 text-emerald-600" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Advisory Step Modal */}
      <DialogModal
        isOpen={!!selectedStep}
        onClose={() => setSelectedStep(null)}
        title={`Step ${selectedStep?.step}: ${selectedStep?.title}`}
        subtitle="3-Step Advisory Methodology"
        maxWidth="lg"
      >
        {selectedStep && deepDive && (
          <div className="space-y-4 text-left">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedStep.description}
            </p>

            <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Timeline &amp; Turnaround
              </p>
              <p className="mt-0.5 text-xs font-semibold text-slate-800">
                {deepDive.turnaround}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-emerald-50/40 p-3 border border-emerald-100">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                  What We Do
                </p>
                <div className="space-y-1.5">
                  {deepDive.whatWeDo.map((p) => (
                    <div key={p} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-white p-3 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  What You Receive
                </p>
                <div className="space-y-1.5">
                  {deepDive.whatYouGet.map((p) => (
                    <div key={p} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="w-full rounded-xl bg-emerald-900 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        )}
      </DialogModal>
    </>
  );
}
