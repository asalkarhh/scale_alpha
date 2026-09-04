"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck, LogIn } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button-link";
import { BrandLogo } from "@/components/brand-logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Default state: subpages start with dark hero at top (scrollY = 0), home starts light
  const isSubpageWithDarkHero = pathname !== "/";
  const [isOverDarkBg, setIsOverDarkBg] = useState(isSubpageWithDarkHero);

  const checkDarkBackground = useCallback(() => {
    if (animationFrameRef.current !== null) return;

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      const darkSections = document.querySelectorAll('[data-header-theme="dark"]');
      if (darkSections.length === 0) {
        setIsOverDarkBg(false);
        return;
      }

      const headerTop = 0;
      const headerBottom = 80;
      let isMatched = false;

      for (const section of Array.from(darkSections)) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= headerBottom && rect.bottom >= headerTop + 10) {
          isMatched = true;
          break;
        }
      }

      setIsOverDarkBg(isMatched);
    });
  }, []);

  useEffect(() => {
    // Run initial detection when pathname changes
    checkDarkBackground();

    // Re-check after minor delay to ensure DOM and layout is settled
    const timer = setTimeout(checkDarkBackground, 50);

    window.addEventListener("scroll", checkDarkBackground, { passive: true });
    window.addEventListener("resize", checkDarkBackground, { passive: true });

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      window.removeEventListener("scroll", checkDarkBackground);
      window.removeEventListener("resize", checkDarkBackground);
    };
  }, [pathname, checkDarkBackground]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="header-premium-enter sticky top-0 z-50 px-3 py-2 sm:px-6 sm:pt-3.5 sm:pb-2">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 md:justify-center md:gap-8 lg:gap-10">

        {/* ========================================================================= */}
        {/* LEFT SECTION: Prominent Brand Logo with Adaptive Background Color */}
        {/* ========================================================================= */}
        <div className="flex shrink-0 items-center min-w-0">
          <BrandLogo isDark={isOverDarkBg} />
        </div>

        {/* ========================================================================= */}
        {/* RIGHT SECTION: Content Navbar with Sleek Glassmorphic Pill */}
        {/* ========================================================================= */}
        <div className="flex items-center shrink-0">
          <div className="hidden items-center justify-between gap-1.5 rounded-full border border-emerald-200/90 bg-white/95 px-4 py-2.5 shadow-[0_12px_40px_rgba(6,78,59,0.10)] backdrop-blur-2xl lg:flex">

            {/* Desktop Minimal Nav Links */}
            <nav className="flex items-center gap-1">
              {siteConfig.navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isHome = item.href === "/";
                const active = isHome ? pathname === "/" : pathname.startsWith(item.href);
                const isOpen = activeDropdown === item.label;

                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        className={cn(
                          "flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                          active || isOpen
                            ? "bg-emerald-50 text-emerald-950 shadow-xs"
                            : "text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950",
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 text-slate-400 transition-transform duration-200 shrink-0",
                            isOpen && "rotate-180 text-emerald-700",
                          )}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div className="absolute left-0 top-full mt-2 w-72 origin-top-left rounded-2xl border border-emerald-100 bg-white/98 p-2 shadow-[0_20px_50px_rgba(6,78,59,0.15)] backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
                          <div className="space-y-1">
                            {item.children?.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex flex-col rounded-xl p-2.5 transition-colors duration-150 hover:bg-emerald-50"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-semibold text-emerald-950 group-hover:text-emerald-900">
                                    {sub.label}
                                  </span>
                                  <ArrowUpRight className="h-3 w-3 text-slate-300 opacity-0 transition-opacity duration-150 group-hover:opacity-100 shrink-0" />
                                </div>
                                {sub.description && (
                                  <p className="mt-0.5 text-[11px] leading-snug text-slate-500">
                                    {sub.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      active
                        ? "bg-emerald-50 text-emerald-950 shadow-xs"
                        : "text-slate-700 hover:bg-emerald-50/80 hover:text-emerald-950",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="ml-2 flex shrink-0 items-center gap-2">
              <Link
                href="/portal"
                className="hidden shrink-0 whitespace-nowrap items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 xl:flex px-3 py-2 rounded-full hover:bg-emerald-50/60 transition-colors"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Client Portal</span>
              </Link>
              <Link
                href="/login"
                className="hidden shrink-0 whitespace-nowrap items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-900 hover:bg-emerald-100 hover:border-emerald-300 transition-all sm:inline-flex shadow-xs"
              >
                <LogIn className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
                <span>Login</span>
              </Link>
              <ButtonLink
                href="/contact"
                variant="primary"
                className="header-static-button premium-cta-glow shrink-0 whitespace-nowrap text-xs px-5 py-2.5 shadow-sm font-bold"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-emerald-100 bg-white/95 text-emerald-950 shadow-md backdrop-blur-xl lg:hidden"
            onClick={() => setMobileOpen((curr) => !curr)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Mobile Menu Drawer */}
      {/* ========================================================================= */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl max-h-[82vh] overflow-y-auto rounded-3xl border border-emerald-100 bg-white/98 p-4 shadow-[0_20px_50px_rgba(6,78,59,0.15)] backdrop-blur-2xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5">
            {siteConfig.navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = !!mobileExpanded[item.label];

              if (hasChildren) {
                return (
                  <div key={item.label} className="rounded-2xl border border-emerald-50 bg-emerald-50/40 p-2">
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="flex w-full items-center justify-between px-2 py-2 text-sm font-semibold text-emerald-950"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-emerald-700 transition-transform duration-200",
                          isExpanded && "rotate-180",
                        )}
                      />
                    </button>
                    {isExpanded && (
                      <div className="mt-1 space-y-1 pl-2 border-l-2 border-emerald-200 ml-2">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-xl px-3 py-2 text-xs font-medium text-slate-700 hover:bg-emerald-100/60"
                          >
                            <span className="font-semibold text-emerald-950">{sub.label}</span>
                            {sub.description && (
                              <span className="block text-[10px] text-slate-500">{sub.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-50"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-100 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/portal"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-2xl border border-emerald-100 bg-white py-2.5 text-xs font-bold text-emerald-900 shadow-xs"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                <span>Client Portal</span>
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-2xl border border-emerald-200 bg-emerald-50 py-2.5 text-xs font-bold text-emerald-900 shadow-xs"
              >
                <LogIn className="h-3.5 w-3.5 text-emerald-700" />
                <span>Login</span>
              </Link>
            </div>
            <ButtonLink
              href="/contact"
              variant="primary"
              className="w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us &amp; Book Consultation
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
