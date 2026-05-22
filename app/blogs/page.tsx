import type { Metadata } from "next";

import { BlogFilter } from "@/components/blog-filter";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore articles on SIPs, tax planning, insurance, retirement, and mutual fund basics from Scale Alpha.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Center"
        title="Financial insights that feel sharp, modern, and actually useful."
        description="The editorial layer is designed to support SEO, nurture leads, and deepen trust by demonstrating clarity across investing, tax, and protection topics."
        primaryCta={{ label: "Talk to an Advisor", href: "/#portfolio-review" }}
        secondaryCta={{ label: "Open Home", href: "/" }}
      />
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <BlogFilter />
        </div>
      </section>
    </>
  );
}

