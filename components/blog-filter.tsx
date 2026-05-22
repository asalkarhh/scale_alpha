"use client";

import { startTransition, useDeferredValue, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { blogPosts } from "@/lib/site-data";

const categories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export function BlogFilter() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const visiblePosts = blogPosts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const normalizedQuery = deferredQuery.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.excerpt.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                startTransition(() => {
                  setCategory(item);
                })
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                category === item
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:text-slate-950"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search insights"
            className="w-full min-w-[180px] bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
          />
        </label>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {visiblePosts.map((post, index) => (
          <article
            key={post.slug}
            className={`rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 ${
              index === 0
                ? "border-slate-950 bg-slate-950 text-white xl:col-span-2"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em]">
              <span
                className={`rounded-full px-3 py-1 ${
                  index === 0
                    ? "bg-white/10 text-sky-100"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {post.category}
              </span>
              <span className={index === 0 ? "text-slate-400" : "text-slate-400"}>
                {post.date}
              </span>
            </div>
            <h3
              className={`mt-5 text-2xl font-semibold ${
                index === 0 ? "text-white" : "text-slate-950"
              }`}
            >
              {post.title}
            </h3>
            <p
              className={`mt-4 text-sm leading-7 ${
                index === 0 ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {post.excerpt}
            </p>
            <div
              className={`mt-6 rounded-[24px] border p-4 text-sm leading-7 ${
                index === 0
                  ? "border-white/10 bg-white/6 text-slate-200"
                  : "border-slate-100 bg-slate-50/80 text-slate-600"
              }`}
            >
              {post.highlight}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span
                className={`text-sm ${
                  index === 0 ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {post.readTime}
              </span>
              <Link
                href={`/blogs/${post.slug}`}
                className={`text-sm font-semibold ${
                  index === 0 ? "text-sky-200" : "text-slate-950"
                }`}
              >
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

