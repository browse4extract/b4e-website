import React from 'react';
import type { Metadata } from 'next';
import { MousePointer2, Zap, Shield, FileJson, Gamepad2, FolderOpen, Moon, Eye, Link2, Image, FileCode, Cookie, ScrollText, AlertCircle, Layers, Settings, RefreshCw, Download } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore all Browse4Extract features: visual element picker, powerful extraction engine, anti-detection stealth mode, multiple export formats (JSON, CSV, Excel), profile management, batch processing, and lazy loading support.',
  keywords: [
    'web scraping features',
    'visual element picker',
    'data extraction tools',
    'stealth mode scraper',
    'batch processing',
    'lazy loading support',
    'export to json',
    'export to csv',
    'export to excel',
    'puppeteer stealth',
    'ad blocker',
    'cookie consent handling',
    'discord rich presence'
  ],
  openGraph: {
    title: 'Browse4Extract Features - Complete Web Scraping Toolkit',
    description: 'Visual element picker, stealth mode, batch processing, and multiple export formats. Everything you need for professional web data extraction.',
    images: ['/images/settings.png'],
  },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20 px-4 pt-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 glass-strong border border-gray-800 rounded-full text-sm text-gray-300">
              Complete Feature Overview
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need for professional web data extraction,
            <span className="block mt-2 text-gray-400">packed into an intuitive desktop application</span>
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          <FeatureCard
            icon={MousePointer2}
            title="Visual Element Picker"
            description="Point and click to select any element on a webpage. Smart CSS selector generation with automatic fallbacks (ID → Class → XPath). Real-time highlighting shows exactly what will be extracted."
            gradient="green"
          />
          <FeatureCard
            icon={Zap}
            title="Powerful Extraction Engine"
            description="Extract text, attributes, links, images, and child elements. Batch process multiple items with automatic scroll handling for lazy-loaded content. Process hundreds of elements in seconds."
            gradient="brand"
          />
          <FeatureCard
            icon={Shield}
            title="Anti-Detection & Stealth"
            description="Bypass bot detection with Puppeteer Stealth mode. Built-in ad blocker and automatic cookie consent handling. Realistic browser fingerprint prevents blocks."
            gradient="violet"
          />
          <FeatureCard
            icon={FileJson}
            title="Multiple Export Formats"
            description="Export to JSON for APIs, CSV for spreadsheets, or XLSX for professional reports. All formats include proper encoding and structure for immediate use."
            gradient="green"
          />
          <FeatureCard
            icon={FolderOpen}
            title="Profile Management"
            description="Save extraction configurations as reusable profiles. Instantly load saved setups. Export/import .b4e files to share with teams or backup your work."
            gradient="brand"
          />
          <FeatureCard
            icon={Moon}
            title="Dark Mode Interface"
            description="Beautiful dark theme throughout the application and embedded browser. Custom gradient accents. Designed for comfortable long scraping sessions."
            gradient="violet"
          />
        </div>

        {/* Extraction Types Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">What Can You Extract?</span>
            </h2>
            <p className="text-gray-400 text-lg">Six extraction types to handle any data</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileCode, title: 'Text Content', description: 'Extract visible text from any element', gradient: 'green' },
              { icon: Link2, title: 'Links & URLs', description: 'Grab href attributes from links', gradient: 'violet' },
              { icon: Image, title: 'Images', description: 'Extract image URLs and alt text', gradient: 'green' },
              { icon: Eye, title: 'HTML Attributes', description: 'Get any attribute (class, id, data-*, etc.)', gradient: 'violet' },
              { icon: Layers, title: 'Child Elements', description: 'Extract nested content recursively', gradient: 'green' },
              { icon: Settings, title: 'Custom Selectors', description: 'Write your own CSS/XPath selectors', gradient: 'violet' },
            ].map((type, index) => {
              const Icon = type.icon;
              return (
                <FeatureCard
                  key={index}
                  icon={Icon}
                  title={type.title}
                  description={type.description}
                  gradient={type.gradient as 'green' | 'violet'}
                  compact
                />
              );
            })}
          </div>
        </div>

        {/* Configuration Preview */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Intuitive Configuration</span>
            </h2>
            <p className="text-gray-400 text-lg">Powerful settings in a clean, user-friendly interface</p>
          </div>

          <Card variant="glow-brand" shine className="p-4">
            <div className="relative rounded-xl overflow-hidden border border-gray-800/50">
              <img
                src="/images/settings.png"
                alt="Browse4Extract Settings Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-pure/30 to-transparent pointer-events-none" />
            </div>
          </Card>
        </div>

        {/* Advanced Capabilities */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Advanced Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg">Professional features for complex scraping tasks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover variant="glow-green" shine>
              <div className="mb-4">
                <div className="inline-block p-4 bg-gradient-green rounded-xl mb-4">
                  <RefreshCw size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Lazy Loading Support</h3>
                <p className="text-gray-400 leading-relaxed">
                  Automatic scroll handling detects and loads lazy-loaded content. Perfect for infinite scroll pages and dynamic content that loads on demand.
                </p>
              </div>
            </Card>

            <Card hover variant="glow-violet" shine>
              <div className="mb-4">
                <div className="inline-block p-4 bg-gradient-violet rounded-xl mb-4">
                  <Layers size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">Batch Processing</h3>
                <p className="text-gray-400 leading-relaxed">
                  Extract from hundreds of elements simultaneously. Process entire product catalogs, article lists, or search results in one go.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Stealth & Security */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Stealth & Privacy</span>
            </h2>
            <p className="text-gray-400 text-lg">Bypass detection systems that block traditional scrapers</p>
          </div>

          <Card variant="glow-brand" className="mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-block p-4 bg-gradient-brand rounded-xl mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Stealth Mode</h3>
                <p className="text-gray-400 text-sm">
                  Puppeteer Stealth plugin masks automation signals and mimics real user behavior
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-gradient-brand rounded-xl mb-4">
                  <AlertCircle size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Ad Blocker</h3>
                <p className="text-gray-400 text-sm">
                  Remove popups and banners for faster loads and cleaner extraction
                </p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-gradient-brand rounded-xl mb-4">
                  <Cookie size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Auto Consent</h3>
                <p className="text-gray-400 text-sm">
                  Automatic cookie consent handling eliminates manual clicking
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bonus Feature */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card variant="glow-brand" hover>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-5 bg-gradient-brand rounded-2xl glow-brand">
                  <Gamepad2 size={48} className="text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-brand-violet/20 text-brand-violet rounded-full text-xs font-medium">Optional Feature</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Discord Rich Presence</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Show your scraping activity on Discord with real-time status updates. Display what you're extracting, track progress, and share your workflow. Fully customizable and can be disabled in settings.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 glass-subtle rounded-lg text-sm text-gray-300">Real-time updates</span>
                  <span className="px-4 py-2 glass-subtle rounded-lg text-sm text-gray-300">Customizable display</span>
                  <span className="px-4 py-2 glass-subtle rounded-lg text-sm text-gray-300">Privacy-friendly</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Try <span className="gradient-text">These Features?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Download Browse4Extract and start extracting web data with all these powerful features
          </p>
          <Button icon={Download} href="/download" glow className="text-lg px-8 py-4">
            Download for Free
          </Button>
        </div>
      </div>
    </div>
  );
}
