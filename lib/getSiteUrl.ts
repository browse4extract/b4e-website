import { headers } from 'next/headers';

/**
 * Get the site URL from request headers or environment variable
 * This allows automatic domain detection for browse4extract.js.org or any other domain
 */
export async function getSiteUrl(): Promise<string> {
  // Try to get from environment variable first (useful for build time)
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) {
    return envUrl;
  }

  // Try to get from request headers (useful for runtime detection)
  try {
    const headersList = await headers();
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'https';

    if (host) {
      return `${protocol}://${host}`;
    }
  } catch (error) {
    // Headers might not be available in static generation
    console.warn('Could not get headers for site URL detection');
  }

  // Fallback to default domain
  return 'https://browse4extract.github.io';
}
