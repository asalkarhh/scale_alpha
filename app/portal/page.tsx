import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Laptop,
  LogIn,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Client Desk & Digital Platforms | Scale Alpha",
  description:
    "Explore Scale Alpha's Client Desk and E-Wealth Account digital platforms. Consolidated family wealth reporting, tax statements, and paperless mutual fund investing.",
  alternates: { canonical: "/portal" },
};

export default function ClientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Platform"
        title="Scale Alpha Client Desk"
        description="Comprehensive family wealth monitoring, tax-ready reporting, and paperless transaction services for disciplined investors."
        primaryCta={{ label: "Go to Investor Login", href: "/login" }}
        secondaryCta={{ label: "Request Account Setup", href: "/contact" }}
      />

      {/* ========================================================================= */}
      {/* 1. CLIENT PLATFORMS OVERVIEW */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gateways"
            title="Our Digital Client Solutions"
            description="Access your consolidated portfolio reports or onboard a new paperless investment account."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Gateway 1: Client Desk */}
            <ScrollReveal delay={0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-emerald-50/30 p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-900 p-2.5 text-white">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                      Existing Clients
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-emerald-950">
                    Client Desk Dashboard
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Single-view consolidated dashboard tracking mutual funds, equities, insurance policies, and deposits for all family members.
                  </p>

                  <div className="mt-4 space-y-2 border-t border-emerald-100 pt-3">
                    {[
                      "Consolidated family net worth tracking",
                      "Tax-ready capital gains P&L statements",
                      "CAGR & XIRR historical performance benchmarks",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 pt-2">
                  <Link
                    href="/login"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-emerald-900 py-2.5 text-xs font-bold text-white hover:bg-emerald-800 transition-colors"
                  >
                    <LogIn className="h-3.5 w-3.5" />
                    <span>Go to Client Desk Login</span>
                  </Link>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      "Hi Kaushal, I need assistance accessing my Client Desk portfolio.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-emerald-200 bg-white py-2 text-xs font-semibold text-emerald-900 hover:bg-emerald-50 transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-700" />
                    <span>WhatsApp Support</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Gateway 2: E-Wealth Account */}
            <ScrollReveal delay={0.12}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-emerald-900 p-2.5 text-white">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                      New Investors
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-emerald-950">
                    Paperless E-Wealth Account
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Open a new mutual fund investment account with 100% paperless digital onboarding and automated monthly SIP mandates.
                  </p>

                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
                    {[
                      "100% paperless Aadhaar & PAN e-KYC",
                      "Instant automated bank SIP mandates",
                      "Direct access to top AMCs on one platform",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 py-2.5 text-xs font-bold text-emerald-900 hover:bg-emerald-100 transition-colors"
                  >
                    <span>Open E-Wealth Account</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REGULATORY ASSURANCE BAR */}
      {/* ========================================================================= */}
      <section className="border-t border-emerald-100 bg-slate-50 px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-100 p-2 text-emerald-800">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-950">
                AMFI Registered Mutual Fund Distributor
              </p>
              <p className="text-[11px] text-slate-500">
                ARN-269246 • Kaushal Balte • Kharghar, Navi Mumbai
              </p>
            </div>
          </div>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-900 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-800 transition-colors shrink-0"
          >
            <span>Login to Portal</span>
            <LogIn className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
