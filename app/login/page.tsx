import type { Metadata } from "next";
import { ClientDeskLogin } from "@/components/client-desk-login";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Investor Login | Scale Alpha Client Desk",
  description:
    "Showcase investor login portal for Scale Alpha clients. Access consolidated family wealth portfolios, download capital gains statements, and track mutual fund holdings.",
  alternates: { canonical: "/login" },
};

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Access"
        title="Client Portal Login"
        description="Secure investor authentication for Scale Alpha clients to access family wealth tracking and portfolio reports."
        primaryCta={{ label: "Request Live Access", href: `https://wa.me/${siteConfig.whatsappNumber}` }}
        secondaryCta={{ label: "Contact Desk", href: "/contact" }}
      />

      <section className="bg-gradient-to-b from-white via-emerald-50/20 to-slate-50 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <ClientDeskLogin />
        </div>
      </section>
    </>
  );
}
