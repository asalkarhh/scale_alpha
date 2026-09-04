import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Financial Knowledge & Articles | Scale Alpha",
  description:
    "Actionable financial articles on mutual fund SIPs, tax planning, and risk management from Scale Alpha.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Financial Insights &amp; Articles"
        description="Educational guides on mutual funds, SIP strategies, tax saving, and insurance planning."
        primaryCta={{ label: "Start SIP", href: "/calculators" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Articles"
            title="Latest Insights"
            description="Clear, actionable guides to help you make smarter investment decisions."
            align="center"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.04}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs transition-all hover:border-emerald-300 hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-slate-400">{post.readTime}</span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">{post.date}</span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:text-emerald-950"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
