import type { Metadata } from "next";

import { AdvisoryProcess } from "@/components/advisory-process";
import { ClientServicesGrid } from "@/components/client-services-grid";
import { PageHero } from "@/components/page-hero";
import { ProductBasketGrid } from "@/components/product-basket-grid";
import { ServicesGrid } from "@/components/services-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Offerings & Services | Mutual Funds, NPS, PMS & Protection",
  description:
    "Explore Scale Alpha's comprehensive product basket and client services: Mutual Funds, Equities, NPS, PMS, LAMF, and Insurance.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Services &amp; Offerings"
        description="Goal-based mutual fund investments, retirement planning, liquidity, and insurance distribution."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Calculators", href: "/calculators" }}
      />

      {/* 3-Step Advisory Workflow */}
      <section className="bg-slate-50 px-4 py-8 sm:px-6 sm:py-12" id="workflow">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="Our 3-Step Workflow"
            description="Plan with clarity, execute seamlessly, and manage risk through regular rebalancing."
            align="center"
          />
          <div className="mt-6">
            <AdvisoryProcess />
          </div>
        </div>
      </section>

      {/* Product Basket */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12" id="product-basket">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Offerings"
            title="Our Product Basket"
            description="Curated suite of investment, liquidity, and protection solutions."
          />
          <div className="mt-6">
            <ProductBasketGrid />
          </div>
        </div>
      </section>

      {/* Client Services & Platforms */}
      <section className="bg-emerald-50/25 border-y border-emerald-100 px-4 py-8 sm:px-6 sm:py-12" id="client-services">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Platforms"
            title="Client Services &amp; Digital Portals"
            description="Consolidated wealth reporting, digital E-Wealth accounts, and smart rebalancing."
            align="center"
          />
          <div className="mt-6">
            <ClientServicesGrid />
          </div>
        </div>
      </section>

      {/* Detailed Service Verticals */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12" id="verticals">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Planning Verticals"
            title="Goal Planning For Every Life Stage"
            description="Goal-based investing, retirement planning, insurance cover, and tax optimization."
          />
          <div className="mt-6">
            <ServicesGrid detailed />
          </div>
        </div>
      </section>
    </>
  );
}
