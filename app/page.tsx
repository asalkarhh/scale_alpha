import Link from "next/link";
import MarketLive from "@/components/MarketLive";

import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Shield,
} from "lucide-react";

import { CalculatorSuite } from "@/components/calculator-suite";
import { ContactGrid } from "@/components/contact-grid";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinancialHealthScore } from "@/components/financial-health-score";
import { HeroVisual } from "@/components/hero-visual";
import { ParticleField } from "@/components/particle-field";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServicesGrid } from "@/components/services-grid";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  siteConfig,
  trustPillars,
  whyChooseUs,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="relative scroll-mt-24 overflow-hidden px-6 pb-20 pt-10 sm:pt-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.13),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f3fbf6_100%)]" />
        <ParticleField variant="light" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="pt-8">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-800">
                <BadgeCheck className="h-4 w-4" />
                AMFI-Registered Mutual Fund Distributor
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-emerald-950 sm:text-6xl lg:text-7xl">
                Smart Financial Planning for a Secure Future
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
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
          </div>

          <ScrollReveal delay={0.16}>
            <HeroVisual />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-emerald-100 bg-white px-6 py-12" id="achievements">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "100+", label: "Happy Clients" },
            { value: "₹5 Cr+", label: "Assets Under Management" },
            { value: "4 yrs+", label: "Years of Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="rounded-[24px] border border-emerald-100 bg-emerald-50/50 p-6 text-center"
            >
              <p className="text-3xl font-semibold text-emerald-950">{metric.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20" id="trust">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#064e3b_0%,#052e24_100%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Authority & trust"
            title="Designed to look credible because it is built around clarity, compliance, and disciplined planning."
            description="Scale Alpha balances premium UI with the cues serious investors expect: transparent process, risk-aware communication, and planning-first positioning."
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
                    "Long-term planning relationship",
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
                    "AMFI-Registered Distribution Base",
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
            description="Each tool includes animated sliders, responsive charts, real-time calculation logic, and clear takeaways that naturally lead into planning conversations."
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_22%),linear-gradient(180deg,#064e3b_0%,#052e24_100%)]" />
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
            title="Strategic wealth planning, framed with premium clarity."
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
            description="Client stories highlight the value of clear planning, disciplined investing, and consistent support."
          />
          <div className="mt-12">
            <TestimonialsCarousel />
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

              {/* Sumit Asalkar */}
          <div className="mt-12 flex flex-col gap-4 rounded-[32px] border border-emerald-800 bg-emerald-950 p-6 text-white shadow-[0_25px_80px_rgba(6,78,59,0.22)] md:flex-row md:items-center md:justify-between">
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
