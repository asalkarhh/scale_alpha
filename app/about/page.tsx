import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Kaushal Balte",
  description:
    "Meet Kaushal Balte and learn how Scale Alpha approaches mutual fund distribution, insurance planning and goal-based financial planning in India.",
  keywords: [
    "Kaushal Balte",
    "Scale Alpha",
    "AMFI-registered mutual fund distributor",
    "goal-based financial planning",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kaushal Balte | Scale Alpha",
    description:
      "Learn about Kaushal Balte and Scale Alpha's approach to mutual fund distribution and financial planning.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Scale Alpha"
        title="A fintech-fluent distribution brand built to feel premium, clear, and trustworthy."
        description="Led by Kaushal Balte, Scale Alpha helps modern investors approach mutual funds, financial planning, and protection decisions with clarity and purpose."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "See Services", href: "/services" }}
      />
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Vision & mission"
            title="Financial decisions built around clarity, confidence, and long-term purpose."
            description="Scale Alpha exists to make thoughtful financial planning easier to understand and simpler to act on."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="rounded-[28px] border border-emerald-100 bg-emerald-50/60 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Our vision</p>
              <h2 className="mt-4 text-2xl font-semibold text-emerald-950">Help people build a secure financial future with confidence.</h2>
              <p className="mt-4 leading-8 text-slate-600">To create a trusted financial guidance experience where every decision is clear, considered, and aligned with meaningful life goals.</p>
            </article>
            <article className="rounded-[28px] border border-emerald-100 bg-white p-8 shadow-[0_14px_40px_rgba(6,78,59,0.07)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">Our mission</p>
              <h2 className="mt-4 text-2xl font-semibold text-emerald-950">Make quality financial planning accessible and personal.</h2>
              <p className="mt-4 leading-8 text-slate-600">To simplify complex choices through transparent communication, suitable solutions, and consistent support at every stage of the journey.</p>
            </article>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[28px] border border-slate-200/70 bg-slate-50/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <item.icon className="h-5 w-5 text-sky-700" />
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">
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
    </>
  );
}

