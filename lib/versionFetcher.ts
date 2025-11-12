// Type definitions for version.json structure
export interface ArchitectureDownloads {
  dmg: string;
  zip: string;
}

export interface MacOSDownloads {
  intel: ArchitectureDownloads;
  arm64: ArchitectureDownloads;
}

export interface VersionData {
  version: string;
  buildDate: string;
  commitHash: string;
  releaseUrl: string;
  downloadLinks: {
    windows: {
      installer: string;
      portable: string;
    };
    macos: MacOSDownloads;
    linux: {
      appimage: string;
      tarball: string;
    };
  };
}

// Cache for version data
let cachedVersionData: VersionData | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetches version data from the official GitHub Pages endpoint
 * Includes caching to reduce API calls
 * This function runs ONLY in the browser (client-side), not during build
 */
export async function fetchVersionData(): Promise<VersionData> {
  const now = Date.now();

  // Return cached data if still valid
  if (cachedVersionData && (now - cacheTimestamp) < CACHE_DURATION) {
    return cachedVersionData;
  }

  try {
    const response = await fetch(
      'https://browse4extract.github.io/browse4extract/version.json',
      {
        cache: 'no-store', // Always get fresh data from server
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch version data: ${response.status}`);
    }

    const data: VersionData = await response.json();

    // Validate the structure
    if (!data.version || !data.buildDate || !data.commitHash || !data.releaseUrl || !data.downloadLinks) {
      throw new Error('Invalid version data structure');
    }

    // Validate macOS structure
    if (!data.downloadLinks.macos?.intel || !data.downloadLinks.macos?.arm64) {
      throw new Error('Invalid macOS download links structure');
    }

    // Update cache
    cachedVersionData = data;
    cacheTimestamp = now;

    return data;
  } catch (error) {
    console.error('Error fetching version data:', error);

    // Return fallback data if fetch fails
    return getFallbackVersionData();
  }
}

/**
 * Returns fallback version data when the API is unavailable
 */
export function getFallbackVersionData(): VersionData {
  const version = '1.1.2';
  const releaseUrl = `https://github.com/browse4extract/browse4extract/releases/tag/v${version}`;

  return {
    version,
    buildDate: new Date().toISOString(),
    commitHash: '38985af',
    releaseUrl,
    downloadLinks: {
      windows: {
        installer: `${releaseUrl}/Browse4Extract.Setup.${version}.exe`,
        portable: `${releaseUrl}/Browse4Extract-${version}-win.zip`,
      },
      macos: {
        intel: {
          dmg: `${releaseUrl}/Browse4Extract-${version}.dmg`,
          zip: `${releaseUrl}/Browse4Extract-${version}-mac.zip`,
        },
        arm64: {
          dmg: `${releaseUrl}/Browse4Extract-${version}-arm64.dmg`,
          zip: `${releaseUrl}/Browse4Extract-${version}-arm64-mac.zip`,
        },
      },
      linux: {
        appimage: `${releaseUrl}/Browse4Extract-${version}.AppImage`,
        tarball: `${releaseUrl}/browse4extract-${version}.tar.gz`,
      },
    },
  };
}

/**
 * Formats a build date for display
 */
export function formatBuildDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return isoDate;
  }
}

/**
 * Gets the GitHub commit URL for a given commit hash
 */
export function getCommitUrl(commitHash: string): string {
  return `https://github.com/browse4extract/browse4extract/commit/${commitHash}`;
}

/**
 * Client-side hook for fetching version data (React Server Components compatible)
 */
export async function getVersionData(): Promise<VersionData> {
  return fetchVersionData();
}
