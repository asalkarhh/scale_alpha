import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/lib/site-data";

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
      title: "Article",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
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
        primaryCta={{ label: "Back to Blogs", href: "/blogs" }}
        secondaryCta={{ label: "Book Consultation", href: "/#portfolio-review" }}
      />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 xl:grid-cols-[0.72fr_0.28fr]">
          <article className="rounded-[32px] border border-slate-200/70 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:p-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-8 rounded-[28px] border border-slate-200/70 bg-[linear-gradient(135deg,rgba(31,94,255,0.06)_0%,rgba(77,212,163,0.12)_100%)] p-6 text-lg leading-8 text-slate-700">
              {post.highlight}
            </div>
            <div className="prose prose-slate mt-8 max-w-none">
              {post.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-[32px] border border-slate-200/70 bg-slate-50/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                Related reading
              </p>
              <div className="mt-5 space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blogs/${relatedPost.slug}`}
                    className="block rounded-[24px] border border-slate-200/70 bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      {relatedPost.category}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">
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

