"use client";

import React, { useState, useEffect } from "react";
import { assetPath } from "@/lib/assetPath";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  useAssetPath?: boolean;
}

/**
 * SafeImage Component
 *
 * A robust image component that:
 * - Automatically applies assetPath for proper asset loading in all environments
 * - Provides fallback image on load error
 * - Handles loading states gracefully
 * - Ensures minimum errors in production
 *
 * @param src - Image source path (will be processed through assetPath unless useAssetPath=false)
 * @param alt - Alt text for accessibility (required)
 * @param fallbackSrc - Custom fallback image path (optional, defaults to built-in placeholder)
 * @param useAssetPath - Whether to use assetPath (default: true)
 * @param ...props - All other standard img attributes
 */
export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  useAssetPath = true,
  onError,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [hasError, setHasError] = useState(false);

  // Process the source with assetPath
  useEffect(() => {
    const processedSrc = useAssetPath ? assetPath(src) : src;
    setImgSrc(processedSrc);
    setHasError(false);
  }, [src, useAssetPath]);

  // Handle image load error
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);

      // Use custom fallback or default placeholder
      if (fallbackSrc) {
        setImgSrc(useAssetPath ? assetPath(fallbackSrc) : fallbackSrc);
      } else {
        // Create a simple SVG placeholder as data URL
        const placeholderSvg = `data:image/svg+xml,${encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
            <rect width="800" height="600" fill="#1a1a2e"/>
            <g transform="translate(400, 300)">
              <circle cx="0" cy="-30" r="40" fill="#16a34a" opacity="0.2"/>
              <rect x="-60" y="0" width="120" height="80" rx="8" fill="#16a34a" opacity="0.2"/>
              <circle cx="-30" cy="30" r="8" fill="#16a34a" opacity="0.4"/>
              <path d="M -30 40 L 0 10 L 30 40 L 60 20" stroke="#16a34a" stroke-width="3" fill="none" opacity="0.4"/>
            </g>
            <text x="400" y="400" font-family="system-ui, sans-serif" font-size="18" fill="#6b7280" text-anchor="middle">
              Image not available
            </text>
          </svg>
        `)}`;
        setImgSrc(placeholderSvg);
      }

      // Call the original onError handler if provided
      if (onError) {
        onError(e);
      }

      // Log error in development
      if (process.env.NODE_ENV === "development") {
        console.warn(`[SafeImage] Failed to load image: ${src}`);
      }
    }
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
      loading={props.loading || "lazy"}
    />
  );
};
