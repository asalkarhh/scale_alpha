import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Laptop,
  MessageSquare,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { FAQAccordion } from "@/components/faq-accordion";
import { FinancialNeedsTabs } from "@/components/financial-needs-tabs";
import { HeroVisual } from "@/components/hero-visual";
import { ParticleField } from "@/components/particle-field";
import { ProductBasketGrid } from "@/components/product-basket-grid";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts, siteConfig } from "@/lib/site-data";
import { AdvisoryProcess } from "@/components/advisory-process";
import { ConsultationButton } from "@/components/consultation-button";
import { MarketLiveLazy } from "@/components/market-live-lazy";

export default function Home() {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden px-4 pb-6 pt-4 sm:px-6 sm:pb-10 sm:pt-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_35%),linear-gradient(180deg,#ffffff_0%,#f4fbf7_100%)]" />
        <ParticleField variant="light" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-900 shadow-sm">
                <BadgeCheck className="h-3.5 w-3.5 text-emerald-700" />
                <span>AMFI-Registered MFD • ARN-269246</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1 className="mt-3 max-w-2xl text-2xl font-bold tracking-tight text-emerald-950 sm:text-4xl lg:text-[42px] lg:leading-[1.18]">
                Disciplined Investing for Your Real-Life Goals
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-2.5 max-w-lg text-xs leading-relaxed text-slate-600 sm:text-sm">
                Goal-aligned mutual funds, retirement roadmaps, and insurance planning guided by <strong>Kaushal Balte</strong>. Simple, transparent, and grounded in risk management.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <ConsultationButton variant="hero" />
                <ButtonLink
                  href="/calculators"
                  variant="secondary"
                  className="text-xs px-4 py-2 sm:text-sm"
                >
                  SIP Calculators
                </ButtonLink>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <HeroVisual />
          </ScrollReveal>
        </div>

        {/* Goal Selector */}
        <div className="relative mx-auto mt-6 max-w-7xl">
          <FinancialNeedsTabs />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CREDIBILITY & KEY METRICS (Concise, compliant, honest) */}
      {/* ========================================================================= */}
      <section className="border-y border-emerald-100 bg-white px-4 py-6 sm:px-6 sm:py-8" id="trust">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {[
              { value: "ARN-269246", label: "AMFI Registered", detail: "Authorized MFD" },
              { value: "100+", label: "Families Guided", detail: "Long-term Planning" },
              { value: "₹5 Cr+", label: "AUM Distributed", detail: "Equity & Debt Funds" },
              { value: "4+ Years", label: "Industry Experience", detail: "Market Cycle Support" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-3.5 text-center"
              >
                <p className="text-xl sm:text-2xl font-bold text-emerald-950">{metric.value}</p>
                <p className="mt-0.5 text-xs font-semibold text-emerald-800">{metric.label}</p>
                <p className="text-[10px] text-slate-500">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. 3-STEP ADVISORY WORKFLOW (Interactive Dialogs) */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 px-4 py-8 sm:px-6 sm:py-10" id="advisory-process">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <SectionHeading
              eyebrow="Advisory Approach"
              title="Our 3-Step Advisory Process"
              description="Objective planning, 100% paperless execution, and periodic reviews."
            />
            <ConsultationButton variant="process" />
          </div>
          <div className="mt-5">
            <AdvisoryProcess />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRODUCT BASKET (Interactive Dialogs) */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-10" id="product-basket">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <SectionHeading
              eyebrow="Offerings"
              title="Product Basket"
              description="Click any product below to view suitability, horizon, and key highlights."
            />
            <Link
              href="/offerings/product-basket"
              className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-900 shadow-sm hover:bg-emerald-50 transition-colors shrink-0"
            >
              <span>View Full Offerings</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-5">
            <ProductBasketGrid />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLIENT SERVICES & DIGITAL PORTAL */}
      {/* ========================================================================= */}
      <section className="border-t border-emerald-100 bg-emerald-50/20 px-4 py-8 sm:px-6 sm:py-10" id="client-services">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <SectionHeading
              eyebrow="Technology"
              title="Client Services &amp; Digital Portals"
              description="Single-view family portfolio tracking, instant online investing, and review support."
            />
            <Link
              href="/portal"
              className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-900 hover:bg-emerald-50 transition-colors shadow-sm shrink-0"
            >
              <span>Client Portal</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-5 grid gap-3.5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Client Portal",
                desc: "Consolidated dashboard for family folios, capital gains, and valuation reports.",
                icon: Laptop,
                href: "/portal",
                cta: "Open Client Portal",
              },
              {
                step: "02",
                title: "E-Wealth Account",
                desc: "Paperless KYC onboarding, instant SIP setup, and online mutual fund transactions.",
                icon: Smartphone,
                href: "/portal",
                cta: "E-Wealth Details",
              },
              {
                step: "03",
                title: "Smart Rebalancing",
                desc: "Periodic portfolio health diagnostics to ensure investments remain aligned with goals.",
                icon: RefreshCw,
                href: "/contact",
                cta: "Request Review",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-4.5 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-emerald-800">{s.step}</span>
                    <s.icon className="h-4 w-4 text-emerald-700" />
                  </div>
                  <h3 className="mt-2 text-base font-bold text-emerald-950">{s.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-slate-100">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                  >
                    <span>{s.cta}</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. LIVE MARKET SNAPSHOT */}
      {/* ========================================================================= */}
      <section
        data-header-theme="dark"
        className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8"
        id="market-live"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#064e3b_0%,#052e24_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Market Indices"
            title="Real-Time Market Snapshot"
            description="Live tracking of key benchmark indices and commodities."
            invert
          />
          <div className="mt-4">
            <MarketLiveLazy />
          </div>
        </div>
      </section>



      {/* ========================================================================= */}
      {/* 8. EDUCATIONAL INSIGHTS (Concise) */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 px-4 py-8 sm:px-6 sm:py-10" id="articles">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <SectionHeading
              eyebrow="Knowledge"
              title="Educational Insights"
              description="Objective articles on mutual fund investing, tax saving, and insurance basics."
            />
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-900 shadow-sm hover:bg-emerald-50 transition-colors shrink-0"
            >
              <span>View All Articles</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-5 grid gap-3.5 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="rounded-full bg-emerald-100/80 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">{post.date}</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:text-emerald-950"
                  >
                    <span>Read</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-10" id="testimonials">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Feedback"
            title="Client Experiences"
            description="Observations from investors who partner with Scale Alpha for disciplined planning."
          />
          <div className="mt-5">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ ACCORDION */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 px-4 py-8 sm:px-6 sm:py-10" id="faq">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Clear answers about mutual fund distribution, risk profiling, and reviews."
            align="center"
          />
          <div className="mt-5">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. GROUNDED CLOSING CTA */}
      {/* ========================================================================= */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-10" id="contact">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 rounded-2xl border border-emerald-900 bg-emerald-950 p-6 text-white shadow-lg md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                <span>AMFI-Registered Mutual Fund Distributor</span>
              </div>
              <h3 className="text-lg font-bold sm:text-2xl">
                Have questions about your investments or goals?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl">
                Schedule a 1-on-1 consultation with Kaushal Balte to review your asset allocation or start a goal-based SIP.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <ConsultationButton variant="footer" />
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi Kaushal, I would like to discuss my financial plan."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-700 bg-emerald-900/60 px-4 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-800 transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Statutory AMFI Disclaimer */}
          <div className="mt-6 rounded-xl bg-slate-50 p-3.5 text-center text-[11px] text-slate-500 border border-slate-200/60">
            <strong>Regulatory Disclaimer:</strong> Scale Alpha is an AMFI-Registered Mutual Fund Distributor (ARN-269246). Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
          </div>
        </div>
      </section>

    </>
  );
}
