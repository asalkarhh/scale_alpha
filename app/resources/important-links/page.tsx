import type { Metadata } from "next";
import {
  Building,
  ExternalLink,
  FileCheck,
  Landmark,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Important Regulatory & Investor Links | Scale Alpha",
  description:
    "Official directory of regulatory, stock exchange, registrar, and investor service portals in India.",
  alternates: { canonical: "/resources/important-links" },
};

const linkCategories = [
  {
    category: "Regulatory Bodies & Authorities",
    icon: Landmark,
    links: [
      {
        title: "AMFI (Association of Mutual Funds in India)",
        description: "Official portal for mutual fund NAVs, industry data, and ARN distributor registry.",
        url: "https://www.amfiindia.com",
      },
      {
        title: "SEBI (Securities & Exchange Board of India)",
        description: "Market regulator ensuring investor protection and fair financial markets.",
        url: "https://www.sebi.gov.in",
      },
      {
        title: "IRDAI (Insurance Regulatory Authority)",
        description: "Regulator of life, health, and general insurance in India.",
        url: "https://irdai.gov.in",
      },
      {
        title: "PFRDA (Pension Regulatory Authority)",
        description: "Statutory authority administering the National Pension System (NPS).",
        url: "https://www.pfrda.org.in",
      },
      {
        title: "RBI (Reserve Bank of India)",
        description: "Central bank and regulator of the Indian banking system.",
        url: "https://www.rbi.org.in",
      },
    ],
  },
  {
    category: "Registrars & Investor Portals (RTAs)",
    icon: FileCheck,
    links: [
      {
        title: "MF Central",
        description: "Unified investor portal by CAMS and KFintech for CAS statements and service requests.",
        url: "https://www.mfcentral.com",
      },
      {
        title: "CAMS (Computer Age Management Services)",
        description: "India's largest mutual fund registrar and transfer agency.",
        url: "https://mycams.camsonline.com",
      },
      {
        title: "KFintech (KFin Technologies)",
        description: "Major registrar providing investor services across top fund houses.",
        url: "https://mfs.kfintech.com/investor",
      },
      {
        title: "CVL KRA (KYC Registration Agency)",
        description: "Verify your PAN KYC status and update contact information.",
        url: "https://www.cvlkra.com",
      },
    ],
  },
  {
    category: "Stock Exchanges & Depositories",
    icon: Building,
    links: [
      {
        title: "NSE India (National Stock Exchange)",
        description: "India's leading stock exchange featuring live indices and market quotes.",
        url: "https://www.nseindia.com",
      },
      {
        title: "BSE India (Bombay Stock Exchange)",
        description: "Asia's oldest exchange providing market data and SENSEX metrics.",
        url: "https://www.bseindia.com",
      },
      {
        title: "NSDL (National Securities Depository)",
        description: "Premier depository holding electronic equities, bonds, and mutual funds.",
        url: "https://nsdl.co.in",
      },
      {
        title: "CDSL (Central Depository Services)",
        description: "Leading depository providing secure demat holding operations.",
        url: "https://www.cdslindia.com",
      },
    ],
  },
];

export default function ImportantLinksPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Official Regulatory Links"
        description="A curated directory of regulatory bodies, registrar portals (CAMS/KFintech), and stock exchanges in India."
        primaryCta={{ label: "Go to Home", href: "/" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="bg-white px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Directory"
            title="Trusted Financial Portals"
            description="Direct links to verified regulatory authorities and depositories."
            align="center"
          />

          <div className="mt-8 space-y-8 max-w-5xl mx-auto">
            {linkCategories.map((group, groupIdx) => {
              const GroupIcon = group.icon;

              return (
                <ScrollReveal key={group.category} delay={groupIdx * 0.05}>
                  <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-xs">
                    <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                      <div className="rounded-lg bg-emerald-50 p-2 text-emerald-800 border border-emerald-100">
                        <GroupIcon className="h-4 w-4" />
                      </div>
                      <h3 className="text-base font-bold text-emerald-950">
                        {group.category}
                      </h3>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {group.links.map((link) => (
                        <a
                          key={link.title}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 transition-all hover:border-emerald-200 hover:bg-emerald-50/30"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                                {link.title}
                              </h4>
                              <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                            </div>
                            <p className="mt-1 text-[11px] text-slate-600 leading-relaxed">
                              {link.description}
                            </p>
                          </div>
                          <span className="mt-2 text-[10px] font-semibold text-emerald-700">
                            Visit Official Site →
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
