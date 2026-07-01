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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/12 bg-slate-950/70 px-4 py-3 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/55">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Scale Alpha Investments and Insurance"
              width={35}
              height={52}
              priority
              sizes="35px"
              className="h-[52px] w-auto rounded-lg object-contain shadow-[0_12px_30px_rgba(36,111,255,0.24)]"
            />
            <div>
              <p className="font-display text-lg text-white">Scale Alpha</p>
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Wealth advisory
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/#portfolio-review" variant="primary">
              Book Free Consultation
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
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
          <div className="mt-4 space-y-2 border-t border-white/10 pt-4 lg:hidden">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/#portfolio-review"
              className="w-full"
              variant="primary"
            >
              Book Free Consultation
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </header>
  );
}

