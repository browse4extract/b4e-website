<div align="center">
  <img src="../public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # Guide: Adding a New Page

  **Step-by-step guide to adding pages with automatic sitemap integration**
</div>

---

This guide explains how to add a new page to the site and ensure it's automatically included in navigation and sitemap.

## 📋 Steps

### 1. Create the page in `app/`

```bash
# Example: create an "About" page
mkdir app/about
```

Create `app/about/page.tsx`:

```tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 pt-32">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mb-6">
          <span className="gradient-text">About Us</span>
        </h1>
        <p className="text-gray-300 text-xl">
          Content goes here...
        </p>
      </div>
    </div>
  );
}
```

### 2. Create a layout (optional)

If you want specific metadata, create `app/about/layout.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Browse4Extract and our mission",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

### 3. Add the route in `lib/navigation.ts`

**This is the most important step!**

Edit `lib/navigation.ts` and add your route:

```typescript
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
  // ... other routes ...

  // ⬇️ Add your new route here
  {
    href: "/about",
    label: "About",
    description: "Learn more about Browse4Extract and our mission",
    priority: 0.7,              // 0.0 - 1.0 (SEO importance)
    changeFrequency: "monthly",  // Update frequency
    includeInNav: true,         // Show in navigation
    includeInSitemap: true,     // Include in sitemap.xml
  },
];
```

### 4. (Optional) Add an icon in the Header

If you want to add an icon in Header navigation, you'll need to modify `components/Header.tsx`.

Currently, icons are hardcoded. To use the centralized navigation system, you could:

```tsx
// In components/Header.tsx
import { getNavigationRoutes } from "@/lib/navigation";
import { Home, Sparkles, Download, Info } from "lucide-react";

// Map routes to icons
const iconMap = {
  "/": Home,
  "/features": Sparkles,
  "/download": Download,
  "/about": Info,
};

export const Header: React.FC = () => {
  const pathname = usePathname();
  const navItems = getNavigationRoutes().map(route => ({
    ...route,
    icon: iconMap[route.href as keyof typeof iconMap] || Home,
  }));

  // ... rest of code
};
```

## ✅ Automatic Verification

Once your route is added in `lib/navigation.ts`, it will be **automatically**:

- ✅ Included in `/sitemap.xml` (if `includeInSitemap: true`)
- ✅ Indexed by Google/Bing via sitemap
- ✅ Accessible from navigation (if `includeInNav: true`)

## 🧪 Testing

### Test the page

```bash
npm run dev
# Open http://localhost:3000/about
```

### Check the sitemap

```bash
curl http://localhost:3000/sitemap.xml
```

You should see your new page:

```xml
<url>
  <loc>http://localhost:3000/about</loc>
  <lastmod>2025-11-05</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

## 📊 Priority Configuration

| Priority | Recommended Usage |
|----------|------------------|
| 1.0 | Homepage only |
| 0.9 | Main pages (Download, etc.) |
| 0.8 | Important content pages (Features, etc.) |
| 0.7 | Secondary pages (About, Blog, etc.) |
| 0.5 | Tertiary pages (Legal, Terms, etc.) |

## 🔄 Update Frequency

| Value | Recommended Usage |
|--------|------------------|
| `always` | Real-time feeds, constantly changing data |
| `hourly` | News, RSS feeds |
| `daily` | Blogs, frequently updated content |
| `weekly` | Product pages, features |
| `monthly` | Static pages, documentation |
| `yearly` | Legal pages, terms of service |
| `never` | Archived pages |

## 💡 Best Practices

### 1. Pages to include in navigation

```typescript
includeInNav: true  // ✅ Main pages
includeInNav: false // ❌ Hidden pages, admin, errors
```

### 2. Pages to include in sitemap

```typescript
includeInSitemap: true  // ✅ Public indexable pages
includeInSitemap: false // ❌ Private pages, login, API
```

### 3. Configuration Examples

**Main page (Download):**
```typescript
{
  href: "/download",
  label: "Download",
  priority: 0.9,
  changeFrequency: "weekly",
  includeInNav: true,
  includeInSitemap: true,
}
```

**Legal page (Privacy Policy):**
```typescript
{
  href: "/privacy",
  label: "Privacy Policy",
  priority: 0.3,
  changeFrequency: "yearly",
  includeInNav: false,    // Not in main menu
  includeInSitemap: true, // But indexable by Google
}
```

**Administrative page:**
```typescript
{
  href: "/admin",
  label: "Admin",
  priority: 0.0,
  changeFrequency: "never",
  includeInNav: false,
  includeInSitemap: false, // DO NOT index
}
```

## 🚀 Deployment

After adding your page:

1. Commit and push:
```bash
git add .
git commit -m "Add About page"
git push
```

2. GitHub Actions will automatically:
   - Build the site
   - Generate new sitemap.xml with your page
   - Deploy to GitHub Pages

3. Submit the new sitemap to Google:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Sitemaps → "Add sitemap"
   - URL: `https://your-domain.com/sitemap.xml`

## ❓ FAQ

**Q: I added a page but it doesn't appear in the sitemap?**

A: Check that:
- `includeInSitemap: true` in `lib/navigation.ts`
- You rebuilt the project: `npm run build`
- Next.js cache has been cleared

**Q: My page appears in sitemap but not in navigation?**

A: This is normal if `includeInNav: false`. You can have pages in the sitemap but hidden from navigation (e.g., legal pages).

**Q: How to hide a page from Google but keep it accessible?**

A: In `lib/navigation.ts`, set `includeInSitemap: false`, and add a `noindex` tag in the page's layout.

**Q: Can I have different navigations (Header vs Footer)?**

A: Yes! You can create different functions in `lib/navigation.ts`:

```typescript
export function getHeaderRoutes() {
  return routes.filter(r => r.includeInNav && r.priority >= 0.8);
}

export function getFooterRoutes() {
  return routes.filter(r => r.includeInNav);
}
```

## 📚 Resources

- [Next.js App Router](https://nextjs.org/docs/app)
- [Next.js Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)
- [Google Search Central](https://developers.google.com/search/docs)
---

© 2025 B4E Team & Contributors | MIT Licensed
