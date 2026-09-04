"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  /** Explicit dark mode override. When true (on green/dark bg), name is white. When false, name is dark emerald. */
  isDark?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg" | "responsive";
  /** Whether to show the subtitle "MUTUAL FUND DISTRIBUTION" */
  showSubtext?: boolean;
  /** Optional link destination. Defaults to "/" */
  href?: string;
  /** Additional container classes */
  className?: string;
  /** Additional logo image classes */
  logoClassName?: string;
  /** Additional title classes */
  titleClassName?: string;
  /** Additional subtext classes */
  subtextClassName?: string;
}

export function BrandLogo({
  isDark = false,
  size = "responsive",
  showSubtext = true,
  href = "/",
  className,
  logoClassName,
  titleClassName,
  subtextClassName,
}: BrandLogoProps) {
  const content = (
    <div
      className={cn(
        "group flex items-center transition-all duration-300 min-w-0 select-none",
        size === "sm" && "gap-2",
        size === "md" && "gap-3",
        size === "lg" && "gap-4",
        size === "responsive" && "gap-2.5 sm:gap-4",
        className,
      )}
    >
      <div className="relative shrink-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Scale Alpha Mutual Fund Distribution"
          width={96}
          height={132}
          priority
          sizes={
            size === "sm"
              ? "48px"
              : size === "md"
                ? "64px"
                : size === "lg"
                  ? "96px"
                  : "(max-width: 640px) 60px, (max-width: 1024px) 84px, 104px"
          }
          className={cn(
            "w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0",
            size === "sm" && "h-10",
            size === "md" && "h-14",
            size === "lg" && "h-20",
            size === "responsive" && "h-[54px] xs:h-[64px] sm:h-[84px] md:h-[96px] lg:h-[104px]",
            logoClassName,
          )}
        />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span
            className={cn(
              "font-display font-extrabold tracking-tight leading-tight truncate transition-colors duration-300",
              size === "sm" && "text-base",
              size === "md" && "text-xl",
              size === "lg" && "text-3xl",
              size === "responsive" && "text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px]",
              /* Conditional Color Logic:
               * - On Green/Dark Background: text-white with subtle depth
               * - On White/Light Background: original text-emerald-950
               */
              isDark
                ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                : "text-emerald-950",
              titleClassName,
            )}
          >
            Scale Alpha
          </span>
        </div>

        {showSubtext && (
          <p
            className={cn(
              "font-bold uppercase tracking-[0.15em] sm:tracking-[0.22em] truncate transition-colors duration-300",
              size === "sm" && "text-[8px] mt-0.5",
              size === "md" && "text-[10px] mt-0.5",
              size === "lg" && "text-sm mt-1",
              size === "responsive" && "mt-0.5 text-[9px] xs:text-[10px] sm:text-xs md:text-sm",
              /* Conditional Color Logic:
               * - On Green/Dark Background: text-emerald-300 / associated light mint
               * - On White/Light Background: original text-emerald-700
               */
              isDark
                ? "text-emerald-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
                : "text-emerald-700",
              subtextClassName,
            )}
          >
            Mutual Fund Distribution
          </p>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex shrink-0 items-center min-w-0 hover:opacity-95">
        {content}
      </Link>
    );
  }

  return content;
}
