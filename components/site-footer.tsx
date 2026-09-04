import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer
      data-header-theme="dark"
      className="relative overflow-hidden border-t border-emerald-900 bg-emerald-950 pb-10 pt-16 text-emerald-50"
    >
      <div className="footer-shimmer absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(52,211,153,0.7),transparent)]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
          
          {/* Column 1: Brand Info & Office */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-1 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Scale Alpha Investments and Insurance"
                  width={48}
                  height={66}
                  sizes="48px"
                  className="h-14 w-auto rounded-lg object-contain"
                />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-white">Scale Alpha</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-300">
                  Mutual Fund Distribution
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
              Smart financial planning, goal-based wealth compounding, and transparent distribution led by <strong>Kaushal Balte</strong>.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <address className="not-italic text-slate-400">
                  {siteConfig.officeAddress}
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href={`tel:+${siteConfig.whatsappNumber}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  +{siteConfig.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Product Basket */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">
              Product Basket
            </p>
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Mutual Funds (SIP / Lumpsum)", href: "/services#sip-planning" },
                { label: "Equity & ETFs", href: "/services#wealth-management" },
                { label: "NPS (National Pension System)", href: "/services#tax-saving-investments" },
                { label: "PMS (Portfolio Management)", href: "/contact" },
                { label: "Loan Against Mutual Funds", href: "/contact" },
                { label: "Comprehensive Insurance", href: "/services#health-insurance" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Planning Tools & Calculators */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">
              Tools &amp; Calculators
            </p>
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "SIP Growth Calculator", href: "/calculators" },
                { label: "Step-Up SIP Planner", href: "/calculators" },
                { label: "Lumpsum Wealth Calculator", href: "/calculators" },
                { label: "SWP Retirement Cashflow", href: "/calculators" },
                { label: "Delay Cost of SIP Calculator", href: "/calculators" },
                { label: "Financial Health Diagnostic Score", href: "/#health-score" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Client Services & Compliance */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400">
              Client Services &amp; Links
            </p>
            <div className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "About Scale Alpha", href: "/about" },
                { label: "Client Portal", href: "/portal" },
                { label: "E-Wealth Account Service", href: "/contact" },
                { label: "Smart Rebalancing & Review", href: "/contact" },
                { label: "Financial Insights & Articles", href: "/blogs" },
                { label: "Live Market Dashboard", href: "/#market-live" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Regulatory & Compliance Banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <p className="text-sm font-semibold text-white">
                  AMFI Registered Mutual Fund Distributor ({siteConfig.amfiArn})
                </p>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not an indicator of future returns.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          id="footer-bottom-bar"
          className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500"
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
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
