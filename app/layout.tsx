import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";
import { DomainVerification } from "@/components/DomainVerification";
import { getSiteUrl } from "@/lib/getSiteUrl";
import { assetPath } from "@/lib/assetPath";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = await getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Browse4Extract / Open Source Visual Web Data Extraction",
      template: "%s / Browse4Extract",
    },
    description:
      "Professional open-source web scraping tool built with Electron. Extract data visually without coding. Features stealth mode, batch processing, and multiple export formats (JSON, CSV, XLSX).",
    keywords: [
      "web scraping",
      "data extraction",
      "electron app",
      "puppeteer",
      "visual scraper",
      "no-code scraper",
      "web data extraction",
      "json export",
      "csv export",
      "excel export",
      "stealth mode",
      "anti-detection",
      "batch processing",
      "open source scraper",
      "browse4extract",
      "MIT license",
      "free web scraper",
    ],
    authors: [
      {
        name: "Browse4Extract Contributors",
        url: "https://github.com/browse4extract/b4e-website",
      },
    ],
    creator: "Browse4Extract Team",
    publisher: "Browse4Extract",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      title: "Browse4Extract / Open Source Visual Web Data Extraction",
      description:
        "Professional open-source web scraping tool. Extract data visually without coding. MIT licensed, cross-platform Electron app with stealth mode and anti-detection.",
      siteName: "Browse4Extract",
      images: [
        {
          url: assetPath("/images/hero-screenshot.png"),
          width: 1200,
          height: 630,
          alt: "Browse4Extract - Hero Screenshot",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Browse4Extract / Open Source Visual Web Data Extraction",
      description:
        "Professional open-source web scraping tool. Extract data visually without coding. MIT licensed, cross-platform Electron app.",
      images: [assetPath("/images/hero-screenshot.png")],
    },
    icons: {
      icon: assetPath("/favicon.ico"),
      apple: assetPath("/images/logo.png"),
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Browse4Extract",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description:
      "Professional open-source web scraping tool built with Electron. Extract data visually without coding. Features stealth mode, batch processing, and multiple export formats.",
    softwareVersion: "1.0.0",
    author: {
      "@type": "Organization",
      name: "Browse4Extract Contributors",
      url: "https://github.com/browse4extract/b4e-website",
    },
    license: "https://opensource.org/licenses/MIT",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <DomainVerification>
          <ToastProvider>
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </ToastProvider>
        </DomainVerification>
      </body>
    </html>
  );
}
