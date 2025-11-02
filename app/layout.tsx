import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://browse4extract.github.io'),
  title: {
    default: 'Browse4Extract - Visual Web Data Extraction Tool',
    template: '%s | Browse4Extract'
  },
  description: 'A powerful Electron desktop application for extracting web data with visual element selection. No coding required. Open source web scraper with stealth mode, batch processing, and multiple export formats.',
  keywords: [
    'web scraping',
    'data extraction',
    'electron app',
    'puppeteer',
    'visual scraper',
    'no-code scraper',
    'web data extraction',
    'json export',
    'csv export',
    'excel export',
    'stealth mode',
    'anti-detection',
    'batch processing',
    'open source scraper',
    'browse4extract'
  ],
  authors: [{ name: 'B4E Team', url: 'https://github.com/browse4extract' }],
  creator: 'B4E Team',
  publisher: 'B4E Team',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://browse4extract.github.io',
    title: 'Browse4Extract - Visual Web Data Extraction Tool',
    description: 'Open source Electron app for extracting web data with visual element selection. No coding required.',
    siteName: 'Browse4Extract',
    images: [
      {
        url: '/images/hero-screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Browse4Extract Application Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse4Extract - Visual Web Data Extraction Tool',
    description: 'Open source Electron app for extracting web data with visual element selection. No coding required.',
    images: ['/images/hero-screenshot.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/logo.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Browse4Extract",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A powerful Electron desktop application for extracting web data with visual element selection. No coding required.",
    "softwareVersion": "1.0.0",
    "author": {
      "@type": "Organization",
      "name": "B4E Team"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
