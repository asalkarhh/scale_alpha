import type { Metadata } from "next";

import { ContactGrid } from "@/components/contact-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact Kaushal Balte",
  description:
    "Contact Kaushal Balte at Scale Alpha for mutual fund distribution, SIP planning, insurance and financial planning discussions in India.",
  keywords: [
    "contact Scale Alpha",
    "contact Kaushal Balte",
    "mutual fund distributor contact",
    "SIP planning consultation",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Kaushal Balte | Scale Alpha",
    description:
      "Connect with Scale Alpha for mutual fund distribution, SIP, insurance and financial planning discussions.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach Scale Alpha through the channel that feels most natural."
        description="WhatsApp and email details are structured here for frictionless contact and fast follow-up."
        primaryCta={{ label: "Open WhatsApp", href: "/#contact" }}
        secondaryCta={{ label: "Go to Home", href: "/" }}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Connect"
            title="A modern contact experience built around financial planning conversations."
            description="This section is ready to support CRM mapping, calendar integrations, and future backend submission handling."
          />
          <div className="mt-12">
            <ContactGrid />
          </div>
        </div>
      </section>
    </>
  );
}

