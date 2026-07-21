"use client";

import { startTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="header-premium-enter sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-emerald-100 bg-white/95 px-4 py-3 shadow-[0_14px_45px_rgba(6,78,59,0.10)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <Link href="/#home" className="group flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Scale Alpha Investments and Insurance"
              width={35}
              height={52}
              priority
              sizes="35px"
              className="h-[52px] w-auto rounded-lg object-contain shadow-[0_12px_30px_rgba(36,111,255,0.24)] transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <p className="font-display text-lg text-emerald-950">Scale Alpha</p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-emerald-700">
                Mutual fund distribution
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.navItems.map((item) => {
              const active =
                item.href === "/#home"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    active
                      ? "bg-emerald-50 text-emerald-900"
                      : "text-slate-600 hover:text-emerald-800",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/contact" variant="primary" className="header-static-button premium-cta-glow">
              Contact Us
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-900 lg:hidden"
            onClick={() =>
              startTransition(() => {
                setOpen((current) => !current);
              })
            }
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="mt-4 space-y-2 border-t border-emerald-100 pt-4 lg:hidden">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-950"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/contact"
              className="w-full"
              variant="primary"
            >
              Contact Us
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </header>
  );
}

