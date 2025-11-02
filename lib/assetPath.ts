/**
 * Base path for the application (used for GitHub Pages)
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/b4e-website';

/**
 * Utility function to prepend the basePath to asset URLs
 * This ensures assets work correctly when deployed to GitHub Pages
 */
export function assetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${BASE_PATH}/${cleanPath}`;
}
