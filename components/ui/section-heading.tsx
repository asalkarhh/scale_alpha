import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-3xl flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em]",
            invert
              ? "border-white/15 bg-white/6 text-sky-100"
              : "border-slate-200 bg-white text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.05)]",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          invert ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-sm leading-7 sm:text-base",
            invert ? "text-slate-300" : "text-slate-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

