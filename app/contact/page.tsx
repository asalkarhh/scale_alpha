import type { Metadata } from "next";

import { ContactGrid } from "@/components/contact-grid";
import { PageHero } from "@/components/page-hero";
import { PortfolioReviewForm } from "@/components/portfolio-review-form";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Scale Alpha for WhatsApp consultation, email support, portfolio review, and financial planning discussions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach Scale Alpha through the channel that feels most natural."
        description="WhatsApp, email, portfolio review intake, and location details are structured here for frictionless lead capture and fast follow-up."
        primaryCta={{ label: "Open WhatsApp", href: "/#contact" }}
        secondaryCta={{ label: "Go to Home", href: "/" }}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Connect"
            title="A modern contact experience built around real advisory conversion."
            description="This section is ready to support CRM mapping, calendar integrations, and future backend submission handling."
          />
          <div className="mt-12">
            <ContactGrid />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio review"
            title="Use the structured form when you want a deeper, more specific response."
            description="The form currently opens WhatsApp and email handoff flows, while leaving room for server-side document processing later."
          />
          <div className="mt-12">
            <PortfolioReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}

