import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-100 bg-emerald-950 pb-10 pt-16 text-emerald-50">
      <div className="footer-shimmer absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(52,211,153,0.7),transparent)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Scale Alpha Investments and Insurance"
              width={64}
              height={96}
              sizes="64px"
              className="h-24 w-auto rounded-xl object-contain shadow-[0_16px_40px_rgba(2,6,23,0.4)]"
            />
            <div>
              <p className="font-display text-xl text-white">Scale Alpha</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Mutual fund distribution
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Mutual fund distribution and goal-based financial planning built for
            clarity, disciplined investing, and long-term wealth creation.
          </p>
          <div className="max-w-sm text-sm leading-7 text-slate-400">
            <p className="font-semibold text-slate-300">Office Address</p>
            <address className="not-italic">{siteConfig.officeAddress}</address>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Quick links
          </p>
          <div className="mt-4 space-y-3 text-sm">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Services
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <Link href="/services#retirement-planning" className="group flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1 hover:text-white">
              <span>Retirement Planning</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
            <Link href="/services#tax-saving-investments" className="group flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1 hover:text-white">
              <span>Tax Saving Investments</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
            <Link href="/services#wealth-management" className="group flex items-center gap-1.5 transition-all duration-300 hover:translate-x-1 hover:text-white">
              <span>Wealth Management</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Compliance note
          </p>
          <p className="text-sm leading-7 text-slate-400">
            AMFI ARN: {siteConfig.amfiArn}
          </p>
          <p className="text-sm leading-7 text-slate-400">
            Scale Alpha operates as a Mutual Fund Distributor.
            Mutual fund investments are subject to market risks. Read all
            scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
      <div
        id="footer-bottom-bar"
        className="mx-auto mt-12 max-w-7xl border-t border-white/8 px-6 pt-6 text-sm text-slate-500"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Scale Alpha. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {siteConfig.socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1 transition-colors duration-300 hover:text-white"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

