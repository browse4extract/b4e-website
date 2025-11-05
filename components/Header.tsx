"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Home, Sparkles, Github } from "lucide-react";
import { SafeImage } from "@/components/SafeImage";

export const Header: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/features", label: "Features", icon: Sparkles },
    { href: "/download", label: "Download", icon: Download },
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
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
                    isActive
                      ? "bg-gradient-brand text-white glow-brand"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}

            {/* GitHub Link */}
            <a
              href="https://github.com/orgs/browse4extract/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <Github size={18} />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
