import Link from "next/link";

import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 pb-10 pt-16 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(45,169,255,0.6),transparent)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1f5eff_0%,#35c4ff_48%,#4dd4a3_100%)] text-lg font-bold text-white">
              SA
            </span>
            <div>
              <p className="font-display text-xl text-white">Scale Alpha</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Premium wealth advisory
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Financial planning built for trust, clarity, and long-term wealth
            creation. This frontend is structured for easy backend, CRM, and
            compliance integrations.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Quick links
          </p>
          <div className="mt-4 space-y-3 text-sm">
            {siteConfig.navItems.map((item) => (
              <Link key={item.label} href={item.href} className="block hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Services
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <Link href="/services#mutual-fund-advisory" className="block hover:text-white">
              Mutual Fund Advisory
            </Link>
            <Link href="/services#retirement-planning" className="block hover:text-white">
              Retirement Planning
            </Link>
            <Link href="/services#tax-saving-investments" className="block hover:text-white">
              Tax Saving Investments
            </Link>
            <Link href="/services#wealth-management" className="block hover:text-white">
              Wealth Management
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Compliance note
          </p>
          <p className="text-sm leading-7 text-slate-400">
            SEBI compliance note: advisory communication, disclosures, and client
            suitability should be reviewed against live registration details before
            production launch.
          </p>
          <p className="text-sm leading-7 text-slate-400">
            Registration detail placeholder: {siteConfig.sebiRegistration}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/8 px-6 pt-6 text-sm text-slate-500">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Scale Alpha. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {siteConfig.socialLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

