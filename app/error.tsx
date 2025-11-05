"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

/**
 * Error Boundary Component
 * Catches and displays runtime errors in the application
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-2xl">
        <Card variant="glow-brand" className="text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-500/20 border-4 border-red-500 mb-6 animate-pulse">
              <AlertTriangle size={48} className="text-red-500" />
            </div>
            <h1 className="text-4xl font-black text-white mb-2">
              Something Went Wrong
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
              <span className="text-sm">Error</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500" />
            </div>
          </div>

          {/* Error Message */}
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            An unexpected error occurred while processing your request. Don't
            worry, our team has been notified.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mb-8 p-4 glass-strong rounded-lg border border-red-500/30 text-left max-w-lg mx-auto">
              <p className="text-xs text-gray-500 mb-2">Development Error Details:</p>
              <p className="text-sm text-red-400 font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              icon={RefreshCw}
              onClick={reset}
              glow
              className="w-full sm:w-auto"
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              icon={Home}
              href="/"
              className="w-full sm:w-auto"
            >
              Back to Home
            </Button>
          </div>

          {/* Help Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-4">
              If the problem persists, please contact support:
            </p>
            <a
              href="https://github.com/browse4extract/b4e-website/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-violet hover:text-brand-green transition-colors text-sm"
            >
              <AlertTriangle size={16} />
              Report this issue on GitHub
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
