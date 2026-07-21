import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Scale Alpha | AMFI-Registered Mutual Fund Distributor",
    template: "%s | Scale Alpha",
  },
  description: siteConfig.description,
  keywords: [
    "Scale Alpha",
    "Kaushal Balte",
    "AMFI-registered mutual fund distributor",
    "mutual fund distributor India",
    "mutual fund distribution",
    "goal-based financial planning",
    "SIP planning",
    "SIP calculator",
    "mutual fund investment planning",
    "insurance planning",
    "retirement planning",
    "tax-saving investments",
    "child education planning",
    "term insurance planning",
    "health insurance planning",
  ],
  openGraph: {
    title: "Scale Alpha | AMFI-Registered Mutual Fund Distributor",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: "Scale Alpha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Alpha | AMFI-Registered Mutual Fund Distributor",
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  authors: [{ name: "Kaushal Balte" }],
  creator: "Kaushal Balte",
  publisher: "Scale Alpha",
  category: "Financial Services",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    alternateName: "Scale Alpha Investments and Insurance",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    telephone: "+91 94033 95768",
    sameAs: siteConfig.socialLinks.map((item) => item.href),
    identifier: {
      "@type": "PropertyValue",
      name: "AMFI ARN",
      value: siteConfig.amfiArn,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-26/1, Tiger Gate, Kendriya Vihar",
      addressLocality: "Kharghar",
      addressRegion: "Maharashtra",
      postalCode: "410210",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      name: siteConfig.contactName,
      telephone: "+91 94033 95768",
      email: siteConfig.contactEmail,
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    knowsAbout: [
      "Mutual fund distribution",
      "Systematic Investment Plans",
      "Goal-based financial planning",
      "Retirement planning",
      "Insurance planning",
      "Tax-saving investments",
    ],
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
