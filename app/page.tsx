import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  MousePointer2,
  Shield,
  ArrowRight,
  Code2,
} from "lucide-react";
import { Card } from "@/components/Card";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Browse4Extract - Open Source Visual Web Data Extraction",
  description:
    "Professional open-source web scraping tool built with Electron. Extract data visually without coding. Features stealth mode, batch processing, and multiple export formats (JSON, CSV, XLSX). MIT licensed and cross-platform.",
  openGraph: {
    title: "Browse4Extract - Open Source Visual Web Data Extraction",
    description:
      "Professional open-source web scraping tool. Extract data visually without coding. MIT licensed, cross-platform Electron app with stealth mode and anti-detection.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Core Features - Only 3 key features */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Three Simple Steps</span>
            </h2>
            <p className="text-gray-300 text-xl">
              Everything you need, nothing you don't
            </p>
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
              <span className="font-medium text-gray-300 group-hover:gradient-text">
                Explore All Features
              </span>
              <ArrowRight
                size={20}
                className="text-brand-green group-hover:translate-x-1 transition-transform"
              />
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
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Bypass Bot Detection
                  </h3>
                  <p className="text-gray-400">
                    Stealth mode with ad blocking and cookie handling. Works on
                    sites that block traditional scrapers.
                  </p>
                </div>
              </div>
            </Card>

            <Card hover variant="glow-violet">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-violet rounded-xl">
                  <Code2 size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    No Coding Required
                  </h3>
                  <p className="text-gray-400">
                    Visual interface makes web scraping accessible to everyone.
                    Point, click, extract.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
