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
          "bg-[linear-gradient(135deg,#047857_0%,#059669_55%,#34d399_100%)] text-white shadow-[0_18px_45px_rgba(5,150,105,0.22)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(5,150,105,0.3)]",
        variant === "secondary" &&
          "border border-emerald-200 bg-white text-emerald-900 shadow-[0_12px_30px_rgba(6,78,59,0.08)] hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50",
        variant === "ghost" &&
          "border border-slate-200 bg-white text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

