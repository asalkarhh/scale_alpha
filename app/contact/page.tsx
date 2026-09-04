import type { Metadata } from "next";

import { ContactGrid } from "@/components/contact-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Kaushal Balte | Scale Alpha",
  description:
    "Connect with Kaushal Balte at Scale Alpha for mutual fund distribution, SIP planning, insurance, and portfolio reviews.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Connect with Kaushal Balte for a 1-on-1 consultation, portfolio review, or investment query."
        primaryCta={{ label: "Chat on WhatsApp", href: `https://wa.me/${siteConfig.whatsappNumber}` }}
        secondaryCta={{ label: "Back to Home", href: "/" }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Consultation & Direct Desk"
            title="Reach Scale Alpha"
            description="Submit your investment goals below for custom recommendations, or connect directly via WhatsApp, phone, and email."
          />
          <div className="mt-6">
            <ContactGrid />
          </div>
        </div>
      </section>
    </>
  );
}
