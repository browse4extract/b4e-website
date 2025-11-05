"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, Shield, ExternalLink } from "lucide-react";
import { Card } from "./Card";

export const DomainVerification: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [currentDomain, setCurrentDomain] = useState<string>("");
  const [expectedDomain, setExpectedDomain] = useState<string>("");

  useEffect(() => {
    // Get expected domain from environment variable
    const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!envUrl) {
      // If no env variable, allow access (development mode)
      setIsVerified(true);
      return;
    }

    // Parse expected domain from env URL
    try {
      const envDomain = new URL(envUrl).hostname;
      setExpectedDomain(envDomain);

      // Get current domain from browser
      const browserDomain = window.location.hostname;
      setCurrentDomain(browserDomain);

      // Verify domains match
      const verified = browserDomain === envDomain;
      setIsVerified(verified);

      // Add noindex meta tag if domain is not verified
      if (!verified) {
        const metaRobots = document.createElement("meta");
        metaRobots.name = "robots";
        metaRobots.content = "noindex, nofollow";
        document.head.appendChild(metaRobots);

        // Also add googlebot specific tag
        const metaGooglebot = document.createElement("meta");
        metaGooglebot.name = "googlebot";
        metaGooglebot.content = "noindex, nofollow";
        document.head.appendChild(metaGooglebot);

        // Disable page scroll when fake domain detected
        document.body.style.overflow = "hidden";
      }

      // Log for debugging (only in development)
      if (process.env.NODE_ENV === "development") {
        console.log("[Domain Verification]", {
          expected: envDomain,
          current: browserDomain,
          verified,
        });
      }
    } catch (error) {
      console.error("[Domain Verification]", error);
      // On error, block access for security
      setIsVerified(false);

      // Add noindex meta tag on error
      const metaRobots = document.createElement("meta");
      metaRobots.name = "robots";
      metaRobots.content = "noindex, nofollow";
      document.head.appendChild(metaRobots);

      // Disable page scroll
      document.body.style.overflow = "hidden";
    }
  }, []);

  // Show loading state while checking
  if (isVerified === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-pure">
        <div className="animate-pulse text-gray-400">Verifying domain...</div>
      </div>
    );
  }

  // Render children with overlay warning if domain doesn't match
  return (
    <>
      {children}

      {/* Permanent overlay warning for unauthorized domains */}
      {!isVerified && isVerified !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none p-4">
          {/* Animated background */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto" />

          {/* Warning banner in the center */}
          <div className="relative z-10 max-w-3xl w-full pointer-events-auto animate-brand-glow">
            <Card className="border-4 border-brand-violet bg-gradient-to-br from-dark-pure via-dark-gray to-dark-almost shadow-2xl">
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-violet/30 border-4 border-brand-violet mb-6">
                  <AlertTriangle size={56} className="text-brand-violet" />
                </div>

                {/* Main warning */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 gradient-text drop-shadow-lg whitespace-nowrap">
                  PROBLEM DETECTED
                </h1>

                <p className="text-2xl font-bold text-white mb-6 drop-shadow-md">
                  You are NOT on the official Browse4Extract domain name!
                </p>

                {/* Domain comparison */}
                <div className="glass-strong border-2 border-brand-violet rounded-xl p-6 mb-6">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 bg-red-900/50 rounded-lg border-2 border-red-500">
                      <span className="text-gray-300 font-semibold">
                        ❌ Current (FAKE):
                      </span>
                      <strong className="text-red-400 font-mono text-lg">
                        {currentDomain}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-900/30 rounded-lg border-2 border-brand-green">
                      <span className="text-gray-300 font-semibold">
                        ✅ Official Domain:
                      </span>
                      <strong className="text-brand-green font-mono text-lg">
                        {expectedDomain}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Warning message */}
                <div className="glass-strong border-2 border-brand-green rounded-xl p-6 mb-6">
                  <p className="text-white font-semibold text-lg leading-relaxed">
                    🚨 This is likely a{" "}
                    <span className="text-brand-violet">PHISHING SITE</span> or{" "}
                    <span className="text-brand-violet">UNAUTHORIZED COPY</span>
                    <br />
                    <span className="text-brand-green font-bold">
                      DO NOT ENTER PERSONAL INFORMATION
                    </span>
                  </p>
                </div>

                {/* Action button */}
                <a
                  href={`https://${expectedDomain}`}
                  title="Go to official domain"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-brand-green to-brand-violet hover:opacity-90 text-white rounded-xl font-bold text-xl transition-all shadow-2xl border-2 border-white/20"
                >
                  <Shield size={28} />
                  Go to {expectedDomain}
                  <ExternalLink size={24} />
                </a>

                {/* GitHub link */}
                <div className="mt-6">
                  <a
                    href="https://github.com/browse4extract/b4e-website"
                    title="Verify on GitHub Repository"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-brand-violet transition-colors inline-flex items-center gap-2 underline"
                  >
                    <ExternalLink size={16} />
                    Verify on GitHub
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};
