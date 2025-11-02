'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Heart, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-800/50 mt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-almost/50 pointer-events-none" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Browse4Extract Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold gradient-text">Browse4Extract</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Visual web data extraction made simple. No coding required.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart size={14} className="text-brand-violet fill-current" />
              <span className="text-gray-500">Made by</span>
              <span className="text-brand-green font-medium">B4E Team</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-green transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-brand-green transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-brand-green transition-colors text-sm">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <div className="space-y-3">
              <a
                href="https://github.com/browse4extract/Browse4Extract"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors text-sm group"
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </a>
              <a
                href="https://github.com/browse4extract/Browse4Extract"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-brand-violet transition-colors text-sm group"
              >
                <Star size={18} />
                <span>Star the Project</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>
              © {currentYear} Browse4Extract. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>MIT License</span>
              <span className="text-gray-700">•</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
