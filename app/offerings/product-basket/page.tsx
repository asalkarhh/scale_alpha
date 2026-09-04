import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Gem,
  Landmark,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Product Basket | Mutual Funds, NPS, PMS & Insurance",
  description:
    "Scale Alpha product basket: Mutual Funds, Equities & ETFs, NPS, PMS, Loan Against MF, and Comprehensive Insurance.",
  alternates: { canonical: "/offerings/product-basket" },
};

const detailedProducts = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    eyebrow: "Core Wealth",
    badge: "Popular",
    icon: PiggyBank,
    shortDesc: "Diversified funds across Equity, Debt, and Hybrid asset classes.",
    features: [
      "SIP & Lumpsum options",
      "Goal-based fund mapping",
      "Tax-saving ELSS (Sec 80C)",
      "Periodic asset rebalancing",
    ],
    idealFor: "Salaried professionals and families building medium to long-term wealth.",
    cta: "Start SIP Plan",
    href: "/calculators",
  },
  {
    id: "equity-etfs",
    title: "Equity & ETFs",
    eyebrow: "Direct Growth",
    badge: "Direct",
    icon: TrendingUp,
    shortDesc: "Direct company ownership and low-cost index Exchange Traded Funds.",
    features: [
      "Low-cost NIFTY 50 / Next 50 index exposure",
      "Sectoral & thematic ETF baskets",
      "Real-time intraday liquidity",
      "Direct demat holding credit",
    ],
    idealFor: "Investors seeking transparent, low-cost exposure to India's top companies.",
    cta: "Consult Strategy",
    href: "/contact",
  },
  {
    id: "nps",
    title: "National Pension System (NPS)",
    eyebrow: "Retirement & Tax",
    badge: "Tax Benefit",
    icon: Landmark,
    shortDesc: "Government-backed retirement scheme with systematic pension accumulation.",
    features: [
      "Extra ₹50,000 tax deduction under Sec 80CCD(1B)",
      "Low fund management costs",
      "Choice of Active vs Auto asset allocation",
      "Lump sum + monthly annuity at retirement",
    ],
    idealFor: "Investors looking to build dedicated retirement corpus with tax efficiency.",
    cta: "Plan NPS",
    href: "/contact",
  },
  {
    id: "pms",
    title: "Portfolio Management Services (PMS)",
    eyebrow: "HNI High-Conviction",
    badge: "Bespoke",
    icon: Gem,
    shortDesc: "Professional portfolio management with concentrated, high-conviction stock portfolios.",
    features: [
      "₹50 Lakhs minimum as per SEBI regulations",
      "Concentrated portfolio of 15–25 quality stocks",
      "Direct demat ownership of equities",
      "Direct access to fund managers & reports",
    ],
    idealFor: "HNIs seeking tailored active stock strategies outperforming broad indices.",
    cta: "Consult PMS",
    href: "/contact",
  },
  {
    id: "loan-against-mf",
    title: "Loan Against Mutual Funds (LAMF)",
    eyebrow: "Instant Liquidity",
    badge: "Instant Cash",
    icon: Banknote,
    shortDesc: "Instant liquidity against your mutual fund units without redeeming.",
    features: [
      "Fast digital pledge process",
      "Zero redemption penalty or loss of compounding",
      "Interest charged only on utilized limit",
      "Repay anytime without lock-in charges",
    ],
    idealFor: "Investors needing short-term funds without liquidating long-term investments.",
    cta: "Check Eligibility",
    href: "/contact",
  },
  {
    id: "insurance",
    title: "Comprehensive Insurance",
    eyebrow: "Risk Protection",
    badge: "Essential",
    icon: ShieldCheck,
    shortDesc: "Term Life, Health, and Motor insurance to protect your wealth foundation.",
    features: [
      "Pure Term Life for income replacement",
      "High-sum-insured Health Cover with cashless claims",
      "Accidental & critical illness riders",
      "Comprehensive vehicle protection",
    ],
    idealFor: "Every earning individual and family seeking safety against life emergencies.",
    cta: "Review Policies",
    href: "/contact",
  },
];

export default function ProductBasketPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Our Product Basket"
        description="A curated suite of mutual funds, equities, retirement plans, liquidity, and insurance."
        primaryCta={{ label: "Start SIP", href: "/calculators" }}
        secondaryCta={{ label: "Talk to Advisor", href: "/contact" }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="6 Offerings"
            title="Complete Financial Basket"
            description="Explore our range of wealth accumulation, liquidity, and security solutions."
            align="center"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailedProducts.map((product, index) => {
              const IconComponent = product.icon;

              return (
                <ScrollReveal key={product.id} delay={index * 0.04}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-800 border border-emerald-100">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                          {product.badge}
                        </span>
                      </div>

                      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                        {product.eyebrow}
                      </p>

                      <h3 className="mt-0.5 text-lg font-bold text-emerald-950">
                        {product.title}
                      </h3>

                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed sm:text-sm">
                        {product.shortDesc}
                      </p>

                      {/* Pointwise features */}
                      <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                        {product.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3.5 rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Best For</p>
                        <p className="text-xs text-slate-700 mt-0.5 leading-snug">{product.idealFor}</p>
                      </div>
                    </div>

                    <div className="mt-5 pt-2">
                      <Link
                        href={product.href}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-emerald-900 py-2.5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
                      >
                        <span>{product.cta}</span>
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
