<div align="center">
  <img src="../public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # SEO & Metadata Configuration

  **Dynamic manifest, robots.txt, and sitemap.xml generation**
</div>

---

This project uses dynamic metadata files that automatically adapt to the configured domain and basePath.

## 📋 Dynamic Files

### 1. `app/manifest.ts` - Web App Manifest

Automatically generates `/manifest.json` with:
- ✅ Automatic adaptation to `siteUrl` and `basePath`
- ✅ Complete PWA configuration
- ✅ Icons with correct paths per environment
- ✅ `start_url` and `scope` adapted to basePath

**Example output (dev):**
```json
{
  "start_url": "/",
  "icons": [{ "src": "/images/logo.png" }]
}
```

**Example output (prod with basePath):**
```json
{
  "start_url": "/b4e-website/",
  "icons": [{ "src": "/b4e-website/images/logo.png" }]
}
```

### 2. `app/robots.ts` - Robots.txt

Automatically generates `/robots.txt` with:
- ✅ Sitemap URL adapted to domain and basePath
- ✅ Host adapted to current domain
- ✅ Configurable indexing rules

**Example output (dev):**
```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: http://localhost:3000/sitemap.xml
Host: http://localhost:3000
```

**Example output (prod):**
```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://browse4extract.js.org/b4e-website/sitemap.xml
Host: https://browse4extract.js.org
```

### 3. `app/sitemap.ts` - Sitemap XML

Automatically generates `/sitemap.xml` with:
- ✅ All site pages with complete URLs
- ✅ Configured priorities and change frequencies
- ✅ URLs adapted to domain and basePath

**Included pages:**
- `/` (Homepage) - Priority: 1.0
- `/features` (Features) - Priority: 0.8
- `/download` (Download) - Priority: 0.9

**Example output (prod):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://browse4extract.js.org/b4e-website/</loc>
    <lastmod>2025-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... other pages -->
</urlset>
```

## 🔧 Configuration

### Environment Variables

```env
# Site domain
NEXT_PUBLIC_SITE_URL=https://browse4extract.js.org

# Base path (for GitHub Pages subdirectory)
NEXT_PUBLIC_BASE_PATH=/b4e-website
```

### Add a new page to sitemap

Edit `lib/navigation.ts`:

```typescript
export const routes: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
    priority: 1.0,
    changeFrequency: "weekly",
    includeInSitemap: true,
  },
  {
    href: "/new-page",  // ← Add your page here
    label: "New Page",
    priority: 0.7,
    changeFrequency: "monthly",
    includeInSitemap: true,
  },
];
```

### Modify robots.txt rules

Edit `app/robots.ts`:

```typescript
rules: [
  {
    userAgent: "*",
    allow: "/",
    disallow: [
      "/api/",
      "/_next/",
      "/admin/",  // ← Add your rules here
    ],
  },
];
```

## 🌍 Generated URLs

### Local Environment
- Manifest: `http://localhost:3000/manifest.webmanifest`
- Robots: `http://localhost:3000/robots.txt`
- Sitemap: `http://localhost:3000/sitemap.xml`

### Production (Custom Domain)
- Manifest: `https://browse4extract.js.org/manifest.webmanifest`
- Robots: `https://browse4extract.js.org/robots.txt`
- Sitemap: `https://browse4extract.js.org/sitemap.xml`

### Production (GitHub Pages Subdirectory)
- Manifest: `https://username.github.io/repo-name/manifest.webmanifest`
- Robots: `https://username.github.io/repo-name/robots.txt`
- Sitemap: `https://username.github.io/repo-name/sitemap.xml`

## ✅ Verification

### Test locally

```bash
# Start the server
npm run dev

# Check generated files
curl http://localhost:3000/manifest.webmanifest
curl http://localhost:3000/robots.txt
curl http://localhost:3000/sitemap.xml
```

### Test in production

After deployment, verify:
- ✅ `https://your-domain.com/manifest.webmanifest`
- ✅ `https://your-domain.com/robots.txt`
- ✅ `https://your-domain.com/sitemap.xml`

### Validate Sitemap

Use Google Search Console:
1. Add your site
2. Go to "Sitemaps"
3. Submit: `https://your-domain.com/sitemap.xml`

## 🔍 SEO Metadata in `app/layout.tsx`

The layout also uses `getSiteUrl()` and `assetPath()` for:
- Open Graph images
- Twitter Card images
- Favicon and Apple touch icon
- Canonical URLs

Everything is automatically consistent with the current configuration.

## 📝 Important Notes

### Why .ts files and not .json?

`.ts` files allow dynamic content generation based on environment. Next.js compiles them and serves them as static files at build time.

### Removed files

- ❌ `public/manifest.json` (replaced by `app/manifest.ts`)

### Files to NOT create

- ❌ DO NOT create `public/robots.txt` (conflicts with `app/robots.ts`)
- ❌ DO NOT create `public/sitemap.xml` (conflicts with `app/sitemap.ts`)

### Cache

Next.js caches these files at build time. If you modify a file:

```bash
# Rebuild the project
npm run build

# Or restart the dev server
npm run dev
```

## 🚀 Benefits

1. **Zero manual configuration** - Everything adapts automatically
2. **No broken URLs** - basePath is always correct
3. **Multi-environment** - Works in dev, staging, and prod
4. **Optimal SEO** - Google/Bing finds all your pages
5. **PWA ready** - Complete manifest for installation

## 🐛 Troubleshooting

**manifest.webmanifest returns 404 error:**
- Check that `app/manifest.ts` exists
- Rebuild the project: `npm run build`

**URLs in sitemap are incorrect:**
- Check `NEXT_PUBLIC_SITE_URL` in `.env.local`
- Check `NEXT_PUBLIC_BASE_PATH` if deployed on GitHub Pages

**Manifest icons don't load:**
- Check that `/images/logo.png` exists in `public/`
- The `SafeImage` component automatically handles fallback

## 📚 References

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Robots.txt Specification](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)
---

© 2025 B4E Team & Contributors | MIT Licensed
