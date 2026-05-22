import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { advisoryProcess, successMetrics, whyChooseUs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Scale Alpha's philosophy, planning approach, and positioning as a premium financial advisory brand.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Scale Alpha"
        title="A fintech-fluent advisory brand built to feel premium, clear, and trustworthy."
        description="Scale Alpha is positioned for modern investors who want financial planning, investment strategy, and protection decisions framed with elegance and precision."
        primaryCta={{ label: "Book a Consultation", href: "/#portfolio-review" }}
        secondaryCta={{ label: "See Services", href: "/services" }}
      />
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Brand philosophy"
            title="This frontend is designed to communicate trust without looking dated."
            description="The visual language blends luxury fintech cues with high-conversion advisory messaging so serious investors feel both reassured and engaged."
          />
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

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Advisory workflow"
            title="A relationship model that can scale into a real client operating system."
            description="Discovery, blueprinting, execution, and reviews are arranged like productized advisory milestones for future automation or CRM linkage."
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

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {successMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[28px] border border-slate-200/70 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.24)]"
              >
                <p className="text-4xl font-semibold">
                  {metric.prefix}
                  {metric.value}
                  {metric.suffix}
                </p>
                <p className="mt-3 text-sm font-medium text-slate-200">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

