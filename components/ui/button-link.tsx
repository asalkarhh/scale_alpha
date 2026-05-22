import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,#1f5eff_0%,#2ea8ff_45%,#4dd4a3_100%)] text-white shadow-[0_18px_45px_rgba(36,111,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(36,111,255,0.38)]",
        variant === "secondary" &&
          "border border-white/16 bg-white/8 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/24 hover:bg-white/12",
        variant === "ghost" &&
          "border border-slate-200 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

