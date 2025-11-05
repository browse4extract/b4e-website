'use client';

import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/Button';
import { DownloadButton } from '@/components/DownloadButton';

export function CTASection() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-green/5 to-transparent" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="glass border border-gray-800/50 rounded-2xl p-12">
          <h2 className="text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Get Started?</span>
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
            Join users who have simplified their web data extraction workflow
            with Browse4Extract
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <DownloadButton
              glow
              className="text-lg px-8 py-4"
            >
              Download for Free
            </DownloadButton>
            <Button
              variant="outline"
              icon={Github}
              href="https://github.com/browse4extract/Browse4Extract"
              className="text-lg px-8 py-4"
            >
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
  );
}
