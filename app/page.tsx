import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, Github, Zap, MousePointer2, Shield, ArrowRight, Sparkles, Code2 } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { FeatureCard } from '@/components/FeatureCard';
import { assetPath } from '@/lib/assetPath';

export const metadata: Metadata = {
  title: 'Browse4Extract - Visual Web Data Extraction Tool',
  openGraph: {
    title: 'Browse4Extract - Visual Web Data Extraction Tool',
    description: 'Extract web data without writing code. Open source Electron app with visual element selection, stealth mode, and multiple export formats.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden pt-24 pb-16">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-violet/10 pointer-events-none" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-16">
              {/* Version Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong border border-gray-800/50 rounded-full text-sm mb-8">
                <Sparkles size={16} className="text-brand-green" />
                <span className="text-gray-300">v1.0.0 • Open Source • Cross-Platform</span>
              </div>

              {/* Title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-white mb-2">Extract Web Data</span>
                <span className="gradient-text">Without Writing Code</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Visual web scraping made simple. Click elements, extract data, export instantly.
                <span className="block mt-2 text-gray-400">No programming required.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button icon={Download} href="/download" glow>
                  Download for Free
                </Button>
                <Button variant="outline" icon={Github} href="https://github.com/browse4extract/Browse4Extract">
                  View on GitHub
                </Button>
              </div>

              {/* Platform Support */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  <span>Windows 10+</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-violet rounded-full" />
                  <span>macOS 10.15+</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  <span>Linux</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <Card variant="glow-brand" shine className="p-3">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800/50">
                <img
                  src={assetPath('/images/hero-screenshot.png')}
                  alt="Browse4Extract Application Interface"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-pure/20 to-transparent pointer-events-none" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features - Only 3 key features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Three Simple Steps</span>
            </h2>
            <p className="text-gray-300 text-xl">Everything you need, nothing you don't</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={MousePointer2}
              title="Click to Select"
              description="Simply click on any element you want to extract. Our smart selector engine handles the complexity."
              gradient="green"
            />
            <FeatureCard
              icon={Zap}
              title="Extract Data"
              description="Automatically collect text, links, images, or any attribute. Batch process hundreds of items instantly."
              gradient="brand"
            />
            <FeatureCard
              icon={Code2}
              title="Export & Use"
              description="Download as JSON, CSV, or Excel. Ready for databases, spreadsheets, or analysis tools."
              gradient="violet"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 glass-strong border border-gray-800 hover:border-brand-green rounded-xl transition-all group"
            >
              <span className="font-medium text-gray-300 group-hover:gradient-text">Explore All Features</span>
              <ArrowRight size={20} className="text-brand-green group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-violet/5 to-transparent" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why <span className="gradient-text">Browse4Extract?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover variant="glow-green">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-green rounded-xl">
                  <Shield size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Bypass Bot Detection</h3>
                  <p className="text-gray-400">Stealth mode with ad blocking and cookie handling. Works on sites that block traditional scrapers.</p>
                </div>
              </div>
            </Card>

            <Card hover variant="glow-violet">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-violet rounded-xl">
                  <Sparkles size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">No Coding Required</h3>
                  <p className="text-gray-400">Visual interface makes web scraping accessible to everyone. Point, click, extract.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/5 to-transparent" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="glass border border-gray-800/50 rounded-2xl p-12">
            <h2 className="text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Join users who have simplified their web data extraction workflow with Browse4Extract
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button icon={Download} href="/download" glow className="text-lg px-8 py-4">
                Download for Free
              </Button>
              <Button variant="outline" icon={Github} href="https://github.com/browse4extract/Browse4Extract" className="text-lg px-8 py-4">
                View on GitHub
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-violet rounded-full" />
                <span>MIT License</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-green rounded-full" />
                <span>Cross-Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
