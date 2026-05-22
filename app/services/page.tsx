import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServicesGrid } from "@/components/services-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { advisoryProcess } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Scale Alpha's mutual fund, SIP, insurance, retirement, and wealth management advisory services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advisory services positioned like a premium wealth platform."
        description="Scale Alpha's service architecture is built around goal-based planning, risk-managed investing, protection strategy, and long-term wealth decisions."
        primaryCta={{ label: "Book Free Consultation", href: "/#portfolio-review" }}
        secondaryCta={{ label: "Explore Calculators", href: "/calculators" }}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Advisory verticals"
            title="Every service card is structured to educate quickly and convert naturally."
            description="This page expands the main homepage grid with stronger detail blocks and clear anchor targets for future backend or CMS integration."
          />
          <div className="mt-12">
            <ServicesGrid detailed />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How we work"
            title="A planning workflow that feels methodical, premium, and easy to trust."
            description="The process is intentionally framed like a modern advisory operating model rather than a product-led sales funnel."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {advisoryProcess.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.05}>
                <article className="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
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
        </div>
      </section>
    </>
  );
}

