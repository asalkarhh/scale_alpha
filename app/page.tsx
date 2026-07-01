import Link from "next/link";
import MarketLive from "@/components/MarketLive";

import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Shield,
} from "lucide-react";

import { AnimatedCounter } from "@/components/animated-counter";
import { BlogFilter } from "@/components/blog-filter";
import { CalculatorSuite } from "@/components/calculator-suite";
import { ContactGrid } from "@/components/contact-grid";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinancialHealthScore } from "@/components/financial-health-score";
import { HeroVisual } from "@/components/hero-visual";
import { ParticleField } from "@/components/particle-field";
import { PortfolioReviewForm } from "@/components/portfolio-review-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServicesGrid } from "@/components/services-grid";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  advisoryProcess,
  heroMetrics,
  siteConfig,
  successMetrics,
  trustPillars,
  whyChooseUs,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-10 sm:pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(53,196,255,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(77,212,163,0.18),transparent_20%),linear-gradient(180deg,#06111f_0%,#081323_58%,#0b1727_100%)]" />
        <ParticleField variant="dark" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="pt-8">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-100">
                <BadgeCheck className="h-4 w-4" />
                SEBI Registered Advisory Experience
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Smart Financial Planning for a Secure Future
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {siteConfig.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/#calculators">Start Investing</ButtonLink>
                <ButtonLink
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Hi Scale Alpha, I would like to discuss my financial plan.",
                  )}`}
                  variant="secondary"
                >
                  Talk on WhatsApp
                </ButtonLink>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {heroMetrics.map((metric, index) => (
                <ScrollReveal
                  key={metric.label}
                  delay={0.24 + index * 0.05}
                  className="rounded-[28px] border border-white/10 bg-white/6 p-5 backdrop-blur-2xl"
                >
                  <p className="text-3xl font-semibold text-white">
                    {metric.label === "SEBI Registered" ? (
                      metric.label
                    ) : (
                      <AnimatedCounter
                        value={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    )}
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-200">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {metric.detail}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.16}>
            <HeroVisual />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20" id="trust">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b1523_0%,#0d1727_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Authority & trust"
            title="Designed to look credible because it is built around clarity, compliance, and disciplined planning."
            description="Scale Alpha balances premium UI with the cues serious investors expect: transparent process, risk-aware communication, and advisory-first positioning."
            invert
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {trustPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 0.05}>
                <article className="rounded-[30px] border border-white/10 bg-white/6 p-6 backdrop-blur-2xl">
                  <div className="inline-flex rounded-2xl bg-white/8 p-3 text-sky-200">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.24em] text-sky-100/65">
                    {pillar.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {pillar.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <ScrollReveal>
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-6 backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">
                  Compliance UI module
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {[
                    "Suitability-led planning approach",
                    "Document-ready review structure",
                    "Transparent risk positioning",
                    "Long-term advisory relationship",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-4 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <div className="rounded-[32px] border border-white/10 bg-slate-950/50 p-6 text-white backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-sky-200" />
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100/70">
                    Certification badges
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    "SEBI Registered Advisory Positioning",
                    "Transparent Planning Framework",
                    "Goal-based portfolio design",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20" id="services">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Interactive service architecture built for affluent, planning-led investors."
            description="The design language stays premium while each service card explains value quickly and pushes the visitor toward a consultation or deeper page."
            align="center"
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" id="calculators">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Calculators"
            title="Premium planning calculators that feel like a fintech dashboard, not a static lead form."
            description="Each tool includes animated sliders, responsive charts, real-time calculation logic, and clear takeaways that naturally lead into advisory conversations."
          />
          <div className="mt-12">
            <CalculatorSuite />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20" id="health-score">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Financial health score"
            title="Turn curiosity into action with a quick, intelligent financial readiness check."
            description="This section is designed like a premium onboarding diagnostic. It helps visitors self-identify gaps and nudges them toward a personalized plan."
          />
          <div className="mt-12">
            <FinancialHealthScore />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20" id="market-live">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,196,255,0.18),transparent_22%),linear-gradient(180deg,#06111f_0%,#081323_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Market live section"
            title="A clean market snapshot block ready for real-time feeds and richer investor dashboards."
            description="NIFTY, SENSEX, gold, and USD-INR are presented in a modern, animated card system with ticker-style motion cues."
            invert
          />
          <div className="mt-12">
            <MarketLive />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" id="why-us">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why choose us"
            title="Strategic wealth advisory, framed with premium clarity."
            description="These feature blocks reinforce the brand promise: long-term partnership, personalized planning, and goal-based execution."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                  <div className="inline-flex rounded-2xl bg-[linear-gradient(135deg,rgba(31,94,255,0.12)_0%,rgba(77,212,163,0.16)_100%)] p-3 text-slate-900">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20" id="testimonials">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="Social proof presented in a refined, high-trust format."
            description="The carousel, story cards, and video placeholders are designed to support future client onboarding and reputation building."
          />
          <div className="mt-12">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-18">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111d_0%,#0d1d31_55%,#081323_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Success metrics"
            title="The numbers are designed to build confidence at a glance."
            description="Animated counters create energy while reinforcing the authority and scale expected from a premium advisory brand."
            invert
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {successMetrics.map((metric, index) => (
              <ScrollReveal key={metric.label} delay={index * 0.05}>
                <div className="rounded-[30px] border border-white/10 bg-white/6 p-6 text-white backdrop-blur-2xl">
                  <p className="text-4xl font-semibold">
                    <AnimatedCounter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  </p>
                  <p className="mt-4 text-base font-medium text-slate-200">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {metric.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" id="blogs">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Knowledge center"
            title="Modern editorial cards and category filters that position Scale Alpha as a thinking partner."
            description="The blog layout is tuned for SEO, investor education, and future publishing workflows."
          />
          <div className="mt-12">
            <BlogFilter />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20" id="portfolio-review">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(53,196,255,0.18),transparent_26%),linear-gradient(180deg,#07111d_0%,#081323_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Free portfolio review"
            title="High-conversion lead capture, built to feel premium instead of pushy."
            description="The form is intentionally structured for future CRM, email, and backend integrations while already supporting WhatsApp and email handoff flows."
            invert
          />
          <div className="mt-12">
            <PortfolioReviewForm />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20" id="faq">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for the questions investors ask before they book a conversation."
            description="The accordion keeps the section compact on mobile while still offering high trust and decision support."
            align="center"
          />
          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" id="contact">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact"
            title="Built for consultation-led conversion across WhatsApp, email, and direct contact."
            description="The contact section combines action-first cards, a location embed, and structured contact details without falling into an old-fashioned agency template."
          />
          <div className="mt-12">
            <ContactGrid />
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {advisoryProcess.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.05}>
                <article className="rounded-[28px] border border-slate-200/70 bg-slate-50/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <step.icon className="h-5 w-5 text-sky-700" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-[32px] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-[0_25px_80px_rgba(2,6,23,0.28)] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">
                Final CTA
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Ready to build a cleaner financial strategy?
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Book consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
