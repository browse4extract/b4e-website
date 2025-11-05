import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/getSiteUrl";
import { assetPath } from "@/lib/assetPath";

// Required configuration for static export
export const dynamic = "force-static";

/**
 * Dynamic robots.txt
 * Automatically adapts to domain configuration
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteUrl = await getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}${assetPath("/sitemap.xml")}`,
    host: siteUrl,
  };
}
