/**
 * Base path for the application (used for GitHub Pages)
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Utility function to prepend the basePath to asset URLs
 * This ensures assets work correctly when deployed to GitHub Pages
 *
 * @param path - The asset path (e.g., "/images/logo.png" or "images/logo.png")
 * @returns The full asset path with BASE_PATH prepended
 *
 * @example
 * ```ts
 * // In development (no BASE_PATH): "/images/logo.png"
 * assetPath("/images/logo.png")
 *
 * // In production with BASE_PATH="/b4e-website": "/b4e-website/images/logo.png"
 * assetPath("/images/logo.png")
 * ```
 */
export function assetPath(path: string): string {
  // Handle empty or invalid paths
  if (!path || typeof path !== "string") {
    console.warn("[assetPath] Invalid path provided:", path);
    return BASE_PATH || "/";
  }

  // Don't modify absolute URLs (http://, https://, //, data:, blob:)
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // If BASE_PATH is empty, just return path with leading slash
  if (!BASE_PATH) {
    return `/${cleanPath}`;
  }

  // Return with BASE_PATH
  return `${BASE_PATH}/${cleanPath}`;
}

/**
 * Utility function to check if an asset path is external
 * @param path - The asset path to check
 * @returns true if the path is external (http://, https://, //)
 */
export function isExternalPath(path: string): boolean {
  return (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//")
  );
}
