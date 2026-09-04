import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ProductBasketGrid } from "@/components/product-basket-grid";
import { ClientServicesGrid } from "@/components/client-services-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "All Offerings & Solutions | Scale Alpha",
  description:
    "Explore Scale Alpha's complete suite of financial offerings: Product Basket and Digital Client Services.",
  alternates: { canonical: "/offerings" },
};

export default function OfferingsOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Our Complete Offerings"
        description="Explore our curated product basket and digital client management platforms."
        primaryCta={{ label: "Product Basket", href: "/offerings/product-basket" }}
        secondaryCta={{ label: "Client Services", href: "/offerings/client-services" }}
      />

      {/* Product Basket Overview */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <SectionHeading
              eyebrow="Products"
              title="Product Basket"
              description="Curated investment, retirement, liquidity, and protection instruments."
            />
            <Link
              href="/offerings/product-basket"
              className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 shrink-0 sm:text-sm"
            >
              <span>View In-Depth Details</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-6">
            <ProductBasketGrid />
          </div>
        </div>
      </section>

      {/* Client Services Overview */}
      <section className="bg-emerald-50/25 border-t border-emerald-100 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <SectionHeading
              eyebrow="Platforms"
              title="Client Services"
              description="Family portfolio tracking, paperless transactions, and smart rebalancing."
            />
            <Link
              href="/offerings/client-services"
              className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-bold text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50 shrink-0 sm:text-sm"
            >
              <span>Explore Client Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-6">
            <ClientServicesGrid />
          </div>
        </div>
      </section>
    </>
  );
}
