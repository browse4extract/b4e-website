import Link from "next/link";
import { Card } from "@/components/Card";

/**
 * Custom 404 Not Found Page
 * Displayed when a user navigates to a non-existent route
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-2xl">
        <Card variant="glow-brand" className="text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-black gradient-text mb-4">404</h1>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-violet" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-brand-violet"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-violet" />
            </div>
          </div>

          {/* Message */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white rounded-xl font-semibold transition-all glow-brand hover:opacity-90"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-4">You might be looking for:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="px-4 py-2 glass-subtle rounded-lg text-sm text-gray-300 hover:text-brand-green hover:bg-white/5 transition-all"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="px-4 py-2 glass-subtle rounded-lg text-sm text-gray-300 hover:text-brand-green hover:bg-white/5 transition-all"
              >
                Features
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
