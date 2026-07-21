import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Mutual Fund, SIP & Insurance Services",
  description:
    "Explore mutual fund distribution, SIP planning, insurance, retirement planning and tax-saving investment services from Scale Alpha and Kaushal Balte.",
  keywords: [
    "Scale Alpha services",
    "Kaushal Balte mutual fund distributor",
    "mutual fund distribution services",
    "SIP planning",
    "insurance planning",
    "retirement planning",
    "tax-saving investments",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Mutual Fund, SIP & Insurance Services | Scale Alpha",
    description:
      "Goal-based mutual fund distribution, SIP, insurance, retirement and tax-saving investment services.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Distribution and planning services positioned like a premium wealth platform."
        description="Scale Alpha's service architecture is built around goal-based planning, risk-managed investing, protection strategy, and long-term wealth decisions."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Explore Calculators", href: "/calculators" }}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Planning verticals"
            title="Focused services for every stage of your financial journey."
            description="Explore goal-based investing, retirement planning, protection planning, tax-saving investments, and long-term wealth planning."
          />
          <div className="mt-12">
            <ServicesGrid detailed />
          </div>
        </div>
      </section>
    </>
  );
}

