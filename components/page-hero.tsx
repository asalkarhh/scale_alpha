import { ButtonLink } from "@/components/ui/button-link";
import { ScrollReveal } from "@/components/scroll-reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 sm:pt-20">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(53,196,255,0.18),transparent_38%),radial-gradient(circle_at_80%_20%,rgba(77,212,163,0.14),transparent_26%),linear-gradient(180deg,#06101e_0%,#081323_62%,#0c1626_100%)]" />
      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal className="rounded-[36px] border border-white/10 bg-white/6 p-8 shadow-[0_25px_100px_rgba(2,6,23,0.35)] backdrop-blur-2xl sm:p-12">
          <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-100">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            {description}
          </p>
          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {primaryCta ? (
                <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              ) : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </ScrollReveal>
      </div>
    </section>
  );
}
