import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/getSiteUrl";
import { assetPath } from "@/lib/assetPath";

// Required configuration for static export
export const dynamic = "force-static";

/**
 * Dynamic Web App Manifest
 * Automatically adapts to domain and basePath configuration
 */
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const siteUrl = await getSiteUrl();

  return {
    name: "Browse4Extract - Visual Web Data Extraction",
    short_name: "Browse4Extract",
    description:
      "Professional open-source web scraping tool. Extract data visually without coding. MIT licensed, cross-platform Electron app with stealth mode and anti-detection.",
    start_url: assetPath("/"),
    display: "standalone",
    background_color: "#000000",
    theme_color: "#16a34a",
    icons: [
      {
        src: assetPath("/images/logo.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: [
      "developer tools",
      "productivity",
      "utilities",
      "web scraping",
      "data extraction",
    ],
    orientation: "any",
    scope: assetPath("/"),
    lang: "en-US",
    dir: "ltr",
  };
}
