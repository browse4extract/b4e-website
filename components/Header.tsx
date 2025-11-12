"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Home, Sparkles, Github } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";
import { useWizardContext } from "@/components/DownloadWizard/WizardContext";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { openWizard } = useWizardContext();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/features", label: "Features", icon: Sparkles },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden hover-glow-green transition-all">
              <SafeImage
                src="/images/logo.png"
                alt="Browse4Extract Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white group-hover:gradient-text transition-all hidden sm:block">
              Browse4Extract
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all relative ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                  {/* Active indicator - subtle green underline */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-brand-green rounded-full shadow-glow-green"></div>
                  )}
                </Link>
              );
            })}

            {/* Download Button - Distinctive design */}
            <button
              onClick={openWizard}
              className="relative px-5 py-2.5 rounded-xl flex items-center gap-2 bg-gradient-to-r from-brand-green to-brand-violet text-white font-semibold hover:opacity-90 transition-all overflow-hidden group ml-2"
              style={{
                boxShadow: '0 0 20px rgba(111, 187, 105, 0.4), 0 0 30px rgba(191, 143, 215, 0.3)'
              }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <Download size={18} className="animate-pulse" />
              <span className="hidden md:inline relative z-10">Download</span>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-xl border border-white/30 group-hover:border-white/50 transition-all"></div>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
