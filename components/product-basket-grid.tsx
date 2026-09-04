"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info, MessageSquare, ShieldCheck } from "lucide-react";
import { productBasket, siteConfig } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { DialogModal } from "@/components/ui/dialog-modal";

const productExtendedDetails: Record<
  string,
  {
    targetAudience: string;
    highlights: string[];
    timeline: string;
    disclaimer: string;
  }
> = {
  "Mutual Funds": {
    targetAudience: "Salaried professionals, business owners, and long-term goal planners.",
    highlights: [
      "Diversification across equity, hybrid, and debt instruments",
      "Disciplined wealth compounding via monthly SIPs",
      "Tax-saving options under Section 80C (ELSS funds)",
      "High liquidity with transparent daily NAV pricing",
    ],
    timeline: "Medium to Long Term (3 to 10+ Years)",
    disclaimer: "Mutual fund investments are subject to market risks. Read all scheme related documents carefully.",
  },
  "Equity & ETFs": {
    targetAudience: "Investors seeking transparent, low-cost broad-market index participation.",
    highlights: [
      "Low expense ratio index-tracking instruments (Nifty 50, Sensex)",
      "Real-time intraday liquidity on NSE & BSE",
      "Direct exposure to India's top performing enterprises",
      "Ideal complement to active mutual fund portfolios",
    ],
    timeline: "Long Term (5+ Years)",
    disclaimer: "Equities involve market volatility. Asset allocation should align with individual risk tolerance.",
  },
  "NPS (National Pension)": {
    targetAudience: "Individuals looking for structured, low-cost retirement corpus accumulation.",
    highlights: [
      "Exclusive additional tax deduction up to ₹50,000 under Sec 80CCD(1B)",
      "Low fund management charges with regulated pension fund managers",
      "Choice of Active & Auto choice asset allocation options",
      "Regular pension annuity income post-retirement",
    ],
    timeline: "Until Retirement (Age 60)",
    disclaimer: "NPS is a regulated long-term retirement vehicle with statutory withdrawal rules.",
  },
  "PMS (Portfolio Management)": {
    targetAudience: "High Net-worth Individuals (HNIs) seeking focused, professional stock portfolios.",
    highlights: [
      "Customized portfolio strategies with concentrated equity exposure",
      "Direct ownership of high-conviction underlying stocks",
      "Dedicated fund management teams and detailed performance reporting",
      "Minimum statutory ticket size as per SEBI regulations (₹50 Lakhs)",
    ],
    timeline: "Long Term (5+ Years)",
    disclaimer: "PMS investments carry market risk and are suitable for investors with high risk appetite.",
  },
  "Loan Against Mutual Funds": {
    targetAudience: "Investors needing short-term liquidity without liquidating long-term investments.",
    highlights: [
      "Instant digital loan approval against your mutual fund portfolio",
      "Retain ownership, dividend rights, and compounding benefits",
      "Lower interest rates compared to unsecured personal loans",
      "Pay interest only on the utilized credit limit amount",
    ],
    timeline: "Short to Medium Term (1 to 3 Years)",
    disclaimer: "Loan values are based on approved AMC lists and loan-to-value (LTV) limits.",
  },
  "Comprehensive Insurance": {
    targetAudience: "Families, breadwinners, and individuals seeking health and life protection.",
    highlights: [
      "High-cover Pure Term Life Insurance at cost-effective premiums",
      "Comprehensive Health Cover with restoration and super top-up benefits",
      "Motor, travel, and personal accident risk shielding",
      "Dedicated claims assistance and policy renewal tracking",
    ],
    timeline: "Immediate and Ongoing Protection",
    disclaimer: "Insurance is the subject matter of solicitation. Policy terms and conditions apply.",
  },
};

export function ProductBasketGrid() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof productBasket)[0] | null>(null);

  const extended = selectedProduct ? productExtendedDetails[selectedProduct.title] : null;

  return (
    <>
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {productBasket.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <ScrollReveal key={item.title} delay={index * 0.03}>
              <div
                onClick={() => setSelectedProduct(item)}
                className="group relative flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-emerald-100/90 bg-white p-4.5 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-2 text-emerald-800 transition-colors group-hover:bg-emerald-900 group-hover:text-white">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    {item.badge && (
                      <span className="rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-base font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span className="inline-flex items-center gap-1 group-hover:text-emerald-950 transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 text-emerald-600" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Product Detail Dialog */}
      <DialogModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.title}
        subtitle={selectedProduct?.eyebrow}
        maxWidth="lg"
      >
        {selectedProduct && (
          <div className="space-y-4 text-left">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProduct.description}
            </p>

            {extended && (
              <>
                <div className="rounded-xl bg-slate-50 p-3 border border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Suitability &amp; Horizon
                  </p>
                  <p className="mt-0.5 text-xs text-slate-800">
                    <strong>Recommended for:</strong> {extended.targetAudience}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <strong>Time Horizon:</strong> {extended.timeline}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    Key Features &amp; Benefits
                  </p>
                  <div className="space-y-1.5">
                    {extended.highlights.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-emerald-50/50 p-2.5 border border-emerald-100 text-[11px] text-slate-600">
                  <span className="font-semibold text-emerald-900">Compliance Note: </span>
                  {extended.disclaimer}
                </div>
              </>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Kaushal, I would like to know more about ${selectedProduct.title}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-900 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-emerald-800 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Discuss with Kaushal</span>
              </a>
              <Link
                href={selectedProduct.href}
                onClick={() => setSelectedProduct(null)}
                className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <span>Full Page</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </DialogModal>
    </>
  );
}
