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
    default: "Scale Alpha | Premium Financial Advisory",
    template: "%s | Scale Alpha",
  },
  description: siteConfig.description,
  keywords: [
    "Scale Alpha",
    "SEBI registered financial advisor",
    "mutual fund advisory",
    "financial planning",
    "wealth management",
    "SIP planning",
    "insurance planning",
  ],
  openGraph: {
    title: "Scale Alpha | Premium Financial Advisory",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: "Scale Alpha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Alpha | Premium Financial Advisory",
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
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
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.officeAddress,
      addressCountry: "IN",
    },
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
