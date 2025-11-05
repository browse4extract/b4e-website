"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

/**
 * Global Error Boundary
 * Catches errors at the root level, including layout errors
 * This is a minimal version since it replaces the entire app
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Error - Browse4Extract</title>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
            color: #e5e7eb;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
          }
          .container {
            max-width: 600px;
            background: rgba(26, 26, 46, 0.8);
            border: 2px solid rgba(111, 187, 105, 0.3);
            border-radius: 1rem;
            padding: 3rem;
            text-align: center;
            backdrop-filter: blur(10px);
          }
          .icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 2rem;
            background: rgba(239, 68, 68, 0.2);
            border: 4px solid #ef4444;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          h1 {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #6fbb69 0%, #9333ea 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          p {
            color: #9ca3af;
            margin-bottom: 2rem;
            line-height: 1.6;
          }
          button {
            background: linear-gradient(135deg, #6fbb69 0%, #9333ea 100%);
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: opacity 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }
          button:hover {
            opacity: 0.9;
          }
          .error-details {
            margin-top: 2rem;
            padding: 1rem;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 0.5rem;
            text-align: left;
          }
          .error-code {
            font-family: monospace;
            font-size: 0.875rem;
            color: #ef4444;
            word-break: break-all;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>

          <h1>Critical Error</h1>
          <p>
            A critical error occurred in the application. Please try refreshing
            the page or return home.
          </p>

          <button onClick={reset}>
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
              <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
            </svg>
            Try Again
          </button>

          {process.env.NODE_ENV === "development" && (
            <div className="error-details">
              <p style={{ fontSize: "0.75rem", color: "#6b7280", marginBottom: "0.5rem" }}>
                Development Error Details:
              </p>
              <p className="error-code">{error.message}</p>
              {error.digest && (
                <p style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "0.5rem" }}>
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
