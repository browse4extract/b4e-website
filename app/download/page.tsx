import React from 'react';
import type { Metadata } from 'next';
import { Download, Github, Terminal, CheckCircle2, ExternalLink, Sparkles, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { BASE_PATH } from '@/lib/assetPath';

export const metadata: Metadata = {
  title: 'Download',
  description: 'Download Browse4Extract for Windows, macOS, or Linux. Free and open source web scraping tool. Get the latest v1.0.0 release or build from source. System requirements and installation guides included.',
  keywords: [
    'download browse4extract',
    'windows scraper download',
    'macos scraper download',
    'linux scraper download',
    'electron app download',
    'free web scraper',
    'open source scraper download',
    'browse4extract installer',
    'browse4extract setup',
    'web scraping tool download'
  ],
  openGraph: {
    title: 'Download Browse4Extract - Free Web Scraping Tool',
    description: 'Download for Windows, macOS, or Linux. Free, open source, and cross-platform web data extraction tool.',
    images: [`${BASE_PATH}/images/hero-screenshot.png`],
  },
};

export default function DownloadPage() {
  const platforms = [
    {
      name: 'Windows',
      icon: '🪟',
      file: 'Browse4Extract-Setup.exe',
      description: 'NSIS Installer',
      requirements: 'Windows 10+',
      color: 'green',
    },
    {
      name: 'macOS',
      icon: '🍎',
      file: 'Browse4Extract.dmg',
      description: 'Universal Binary',
      requirements: 'macOS 10.15+',
      color: 'violet',
    },
    {
      name: 'Linux',
      icon: '🐧',
      file: 'Browse4Extract.AppImage',
      description: 'Portable AppImage',
      requirements: 'Ubuntu 18.04+',
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 pt-32">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong border border-gray-800 rounded-full text-sm mb-8">
            <Sparkles size={16} className="text-brand-green" />
            <span className="text-gray-300">Latest: v1.0.0</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span className="text-gray-400">Free & Open Source</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Download <span className="gradient-text">Browse4Extract</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Choose your platform and start extracting web data in minutes
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {platforms.map((platform, index) => (
            <Card
              key={platform.name}
              hover
              variant={platform.color === 'green' ? 'glow-green' : 'glow-violet'}
              shine
              className="text-center"
            >
              <div className="text-7xl mb-6 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
                {platform.icon}
              </div>
              <h3 className="text-3xl font-bold mb-3 text-white">{platform.name}</h3>
              <p className="text-gray-400 mb-2">{platform.description}</p>
              <p className="text-sm text-gray-500 mb-6">{platform.requirements}</p>
              <Button
                icon={Download}
                href={`https://github.com/browse4extract/Browse4Extract/releases/latest/download/${platform.file}`}
                glow
                className="w-full justify-center"
              >
                Download
              </Button>
            </Card>
          ))}
        </div>

        {/* Quick Start Guide */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Quick Start</span>
            </h2>
            <p className="text-gray-400 text-lg">Installation steps for each platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover variant="glow-green">
              <div className="text-5xl mb-4">🪟</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Windows</h3>
              <ol className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Download the .exe installer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Run installer, follow prompts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Launch from Start Menu</span>
                </li>
              </ol>
            </Card>

            <Card hover variant="glow-violet">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-xl font-semibold mb-4 text-white">macOS</h3>
              <ol className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-violet mt-0.5 flex-shrink-0" />
                  <span>Download the .dmg file</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-violet mt-0.5 flex-shrink-0" />
                  <span>Drag to Applications folder</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-violet mt-0.5 flex-shrink-0" />
                  <span>Right-click → Open (first launch)</span>
                </li>
              </ol>
            </Card>

            <Card hover variant="glow-green">
              <div className="text-5xl mb-4">🐧</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Linux</h3>
              <ol className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Download the .AppImage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Make executable (chmod +x)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <span>Run the AppImage file</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>

        {/* Build from Source */}
        <Card variant="glow-brand" className="mb-20">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="p-5 bg-gradient-brand rounded-2xl glow-brand">
                <Terminal size={48} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-4 text-white">Build from Source</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Want to build it yourself? Clone the repository and compile with Node.js 18+
              </p>
              <div className="bg-dark-pure/80 rounded-xl p-5 font-mono text-sm mb-6 overflow-x-auto border border-gray-800">
                <div className="text-gray-500 mb-1"># Clone repository</div>
                <div className="text-brand-green mb-4">git clone https://github.com/browse4extract/Browse4Extract.git</div>
                <div className="text-gray-500 mb-1"># Install dependencies</div>
                <div className="text-brand-green mb-4">npm install</div>
                <div className="text-gray-500 mb-1"># Run or build</div>
                <div className="text-brand-violet">npm run dev <span className="text-gray-600"># or</span> npm run build</div>
              </div>
              <Button
                variant="outline"
                icon={Github}
                href="https://github.com/browse4extract/Browse4Extract"
              >
                View on GitHub
              </Button>
            </div>
          </div>
        </Card>

        {/* Requirements & Support */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <h3 className="text-2xl font-bold mb-6 gradient-text">System Requirements</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-green rounded-full" />
                  Minimum
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm ml-4">
                  <li>• 4 GB RAM</li>
                  <li>• 500 MB disk space</li>
                  <li>• Internet connection</li>
                  <li>• Modern CPU (2015+)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-violet rounded-full" />
                  Recommended
                </h4>
                <ul className="space-y-2 text-gray-400 text-sm ml-4">
                  <li>• 8 GB RAM or more</li>
                  <li>• 1 GB disk space</li>
                  <li>• Fast internet connection</li>
                  <li>• Multi-core processor</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Need Help?</h3>
            <p className="text-gray-400 mb-6">Get support, report issues, or contribute to the project</p>
            <div className="space-y-3">
              <a
                href="https://github.com/browse4extract/Browse4Extract/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 glass-subtle border border-gray-800 rounded-xl hover:border-brand-green transition-all group"
              >
                <ExternalLink size={20} className="text-brand-green" />
                <div className="flex-1">
                  <div className="font-medium text-white group-hover:gradient-text">Report an Issue</div>
                  <div className="text-xs text-gray-500">Bug reports and feature requests</div>
                </div>
              </a>
              <a
                href="https://github.com/browse4extract/Browse4Extract"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 glass-subtle border border-gray-800 rounded-xl hover:border-brand-violet transition-all group"
              >
                <BookOpen size={20} className="text-brand-violet" />
                <div className="flex-1">
                  <div className="font-medium text-white group-hover:gradient-text">Documentation</div>
                  <div className="text-xs text-gray-500">Setup guides and API docs</div>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
