import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { blogPosts, siteConfig } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Scale Alpha",
    };
  }

  return {
    title: `${post.title} | Scale Alpha`,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        primaryCta={{ label: "Back to Articles", href: "/blogs" }}
        secondaryCta={{ label: "WhatsApp Advisory", href: `https://wa.me/${siteConfig.whatsappNumber}` }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-1 text-emerald-800 font-semibold">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Key takeaway highlight box */}
            <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed">
              💡 <strong>Key Takeaway:</strong> {post.highlight}
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700">
              {post.body.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-4 flex items-center justify-between">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to All Articles</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-800"
              >
                <span>Consult Kaushal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 shadow-xs">
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Related Articles
              </p>
              <div className="mt-3 space-y-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blogs/${relatedPost.slug}`}
                    className="block rounded-xl border border-emerald-100/80 bg-white p-3.5 shadow-xs transition-all hover:border-emerald-300"
                  >
                    <span className="text-[10px] font-bold text-emerald-700">
                      {relatedPost.category}
                    </span>
                    <p className="mt-1 text-xs font-bold text-emerald-950 leading-snug">
                      {relatedPost.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
