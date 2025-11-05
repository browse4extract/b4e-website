import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/getSiteUrl";
import { assetPath } from "@/lib/assetPath";
import { getSitemapRoutes } from "@/lib/navigation";

// Required configuration for static export
export const dynamic = "force-static";

/**
 * Dynamic sitemap.xml
 * Automatically includes all pages from centralized navigation config
 * with proper domain and basePath
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = await getSiteUrl();
  const routes = getSitemapRoutes();

  // Generate sitemap entries with full URLs
  return routes.map((route) => ({
    url: `${siteUrl}${assetPath(route.href)}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency || "weekly",
    priority: route.priority || 0.5,
  }));
}
