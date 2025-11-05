import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download Browse4Extract - free open-source web scraping tool for Windows, macOS, and Linux. MIT licensed Electron application with visual element selection, stealth mode, and professional data extraction capabilities.',
  openGraph: {
    title: 'Download / Browse4Extract',
    description: 'Download the free open-source web scraping tool. Available for Windows, macOS, and Linux. MIT licensed with professional features and anti-detection.',
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
