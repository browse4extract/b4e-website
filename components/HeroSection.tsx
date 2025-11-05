'use client';

import React from 'react';
import { Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/Button';
import { DownloadButton } from '@/components/DownloadButton';
import { Card } from '@/components/Card';
import { SafeImage } from '@/components/SafeImage';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden pt-24 pb-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-violet/10 pointer-events-none" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Version Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong border border-gray-800/50 rounded-full text-sm mb-8">
              <Sparkles size={16} className="text-brand-green" />
              <span className="text-gray-300">
                v1.0.0 • Open Source • Cross-Platform
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Extract Web Data</span>
              <span className="gradient-text">Without Writing Code</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Visual web scraping made simple. Click elements, extract data,
              export instantly.
              <span className="block mt-2 text-gray-400">
                No programming required.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <DownloadButton glow>Download for Free</DownloadButton>
              <Button
                variant="outline"
                icon={Github}
                href="https://github.com/browse4extract/Browse4Extract"
              >
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
              <SafeImage
                src="/images/hero-screenshot.png"
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
  );
}
