import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Professional features of Browse4Extract: visual element picker, anti-detection stealth mode, batch processing, lazy loading support, multiple export formats (JSON, CSV, XLSX), profile management, and Discord integration. Open-source web scraping made simple.',
  openGraph: {
    title: 'Features / Browse4Extract',
    description: 'Comprehensive feature set for professional web scraping: visual selection, stealth mode, batch processing, and multiple export formats. Open-source and MIT licensed.',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
