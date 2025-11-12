/**
 * Centralized Navigation Configuration
 *
 * This file defines all navigation routes for the application.
 * Used by:
 * - Header navigation
 * - Footer links
 * - Sitemap generation
 * - Breadcrumbs (if implemented)
 *
 * This ensures consistency across the entire application.
 */

export interface NavigationItem {
  href: string;
  label: string;
  description?: string;
  icon?: any;
  priority?: number;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  includeInNav?: boolean;
  includeInSitemap?: boolean;
}

/**
 * All routes in the application
 */
export const routes: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
    description: "Browse4Extract - Open Source Visual Web Data Extraction",
    priority: 1.0,
    changeFrequency: "weekly",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/features",
    label: "Features",
    description: "Powerful features for professional web data extraction",
    priority: 0.8,
    changeFrequency: "weekly",
    includeInNav: true,
    includeInSitemap: true,
  },
];

/**
 * Get all routes for navigation (Header, Footer)
 */
export function getNavigationRoutes(): NavigationItem[] {
  return routes.filter((route) => route.includeInNav);
}

/**
 * Get all routes for sitemap generation
 */
export function getSitemapRoutes(): NavigationItem[] {
  return routes.filter((route) => route.includeInSitemap);
}

/**
 * Get route by href
 */
export function getRoute(href: string): NavigationItem | undefined {
  return routes.find((route) => route.href === href);
}

/**
 * External links (GitHub, social, etc.)
 */
export const externalLinks = {
  github: {
    organization: "https://github.com/orgs/browse4extract/repositories",
    repository: "https://github.com/browse4extract/Browse4Extract",
    website: "https://github.com/browse4extract/b4e-website",
  },
  social: {
    // Add social media links here if needed
  },
};
