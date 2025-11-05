<div align="center">
  <img src="../public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # Project Architecture

  **Complete system architecture and design guide**

</div>

---

This document explains the architecture and key systems of the Browse4Extract website.

## 📁 Project Structure

```
browse4extract-website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── manifest.ts          # Dynamic PWA manifest
│   ├── robots.ts            # Dynamic robots.txt
│   ├── sitemap.ts           # Dynamic sitemap.xml
│   ├── not-found.tsx        # 404 error page
│   ├── error.tsx            # Error boundary
│   ├── global-error.tsx     # Global error boundary
│   ├── features/            # Features page
│   └── download/            # Download page
├── components/              # React components
│   ├── SafeImage.tsx        # Safe image component with fallback
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   ├── Button.tsx           # Button component
│   ├── Card.tsx             # Card component
│   └── ...
├── lib/                     # Utility functions
│   ├── assetPath.ts         # Asset path helper (basePath support)
│   ├── getSiteUrl.ts        # Site URL configuration
│   └── navigation.ts        # Centralized navigation config
├── public/                  # Static assets
│   ├── images/             # Images
│   ├── favicon.ico         # Favicon
│   └── _headers            # Cloudflare Pages headers
├── docs/                    # Documentation (excluded from build)
└── scripts/                 # Build and utility scripts
    └── check-seo.js        # SEO verification script
```

## 🔑 Key Systems

### 1. Asset Management System

**Files:** `lib/assetPath.ts`, `components/SafeImage.tsx`

**Purpose:** Handle asset paths correctly across different deployment environments (local, GitHub Pages, custom domain).

**How it works:**
- `assetPath()` prepends `NEXT_PUBLIC_BASE_PATH` to all asset URLs
- `SafeImage` component automatically handles asset paths and provides fallbacks
- Supports both local development and production with different base paths

**Example:**
```tsx
// Development: /images/logo.png
// Production (GitHub Pages): /repo-name/images/logo.png
<SafeImage src="/images/logo.png" alt="Logo" />
```

### 2. Dynamic SEO Metadata

**Files:** `app/manifest.ts`, `app/robots.ts`, `app/sitemap.ts`, `lib/navigation.ts`

**Purpose:** Generate SEO metadata dynamically based on environment configuration.

**How it works:**
- Reads `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` from environment
- Generates manifest.json, robots.txt, and sitemap.xml at build time
- Automatically adapts URLs for different deployment targets
- Centralized navigation in `lib/navigation.ts` ensures consistency

**Benefits:**
- No manual URL updates when deploying
- Automatic sitemap generation
- Consistent across all environments

### 3. Centralized Navigation

**File:** `lib/navigation.ts`

**Purpose:** Single source of truth for all navigation routes.

**How it works:**
- All routes defined in one place
- Used by Header, Footer, and Sitemap
- Each route has metadata (priority, changeFrequency, visibility)

**Adding a new page:**
```typescript
{
  href: "/new-page",
  label: "New Page",
  description: "Description",
  priority: 0.7,
  changeFrequency: "weekly",
  includeInNav: true,      // Show in header/footer
  includeInSitemap: true,  // Include in sitemap.xml
}
```

### 4. Error Handling System

**Files:** `app/not-found.tsx`, `app/error.tsx`, `app/global-error.tsx`

**Purpose:** Provide user-friendly error pages for different error scenarios.

**Hierarchy:**
1. Component error → `error.tsx` (route error boundary)
2. Layout error → `global-error.tsx` (global error boundary)
3. 404 errors → `not-found.tsx` (custom 404 page)

**Features:**
- Branded design matching site theme
- Development mode shows error details
- Production mode hides technical details
- Recovery actions (try again, go home)

### 5. Domain Verification System

**File:** `components/DomainVerification.tsx`

**Purpose:** Prevent unauthorized copies of the website from being indexed by search engines.

**How it works:**
- Checks if current domain matches `NEXT_PUBLIC_SITE_URL`
- If mismatch detected:
  - Shows warning overlay
  - Adds `noindex` meta tags
  - Disables page scroll
- Allows development mode (no SITE_URL set)

**Security feature:** Protects against phishing attempts and unauthorized deployments.

## 🎨 Design System

### Colors
```css
--brand-green: #6fbb69
--brand-violet: #9333ea
--dark-pure: #0a0a0a
--dark-gray: #1a1a2e
--dark-almost: #16213e
```

### Components
- **Card**: Container with glass morphism effect
- **Button**: Styled buttons with variants (default, outline)
- **SafeImage**: Image with automatic fallback
- **Header**: Fixed navigation bar
- **Footer**: Site footer with links

### Utilities
- Glass effects (`glass-strong`, `glass-subtle`)
- Gradient text (`gradient-text`)
- Glow effects (`glow-brand`, `hover-glow-green`)

## 🔒 Security Considerations

### What's Safe

1. **dangerouslySetInnerHTML in layout.tsx**
   - ✅ Only used for JSON-LD structured data
   - ✅ Input is controlled (no user input)
   - ✅ Uses JSON.stringify for sanitization

2. **Environment Variables**
   - ✅ Only `NEXT_PUBLIC_*` variables exposed to client
   - ✅ No secrets in client-side code
   - ✅ Build-time configuration only

3. **External Links**
   - ✅ All external links use `rel="noopener noreferrer"`
   - ✅ Target="_blank" properly secured

### What to Watch

1. **User Input** (if added in future)
   - Always sanitize user input
   - Never use `eval()` or `innerHTML` with user data
   - Use proper form validation

2. **API Routes** (if added)
   - Implement rate limiting
   - Validate all inputs
   - Use CORS properly

3. **Third-party Scripts**
   - Always review before adding
   - Use CSP headers if possible
   - Load from trusted CDNs only

## 🚀 Deployment

### Environment Variables

**Development (`.env.local`):**
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_BASE_PATH=
```

**Production (GitHub Actions):**
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_BASE_PATH=/repo-name  # Only for GitHub Pages subdirectory
```

### Build Process

1. GitHub Actions detects push to main
2. Sets environment variables
3. Runs `npm ci` (install dependencies)
4. Runs `npm run build` (static export)
5. Deploys `/out` folder to GitHub Pages

### Static Export

The site uses Next.js static export (`output: 'export'`):
- All pages pre-rendered at build time
- No server-side runtime required
- Can be hosted on any static host (GitHub Pages, Netlify, Vercel, etc.)

## 📊 Performance

### Optimizations

- **Image Optimization**: SafeImage with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **Static Export**: Pre-rendered pages for fast loading
- **CSS**: Tailwind with JIT compilation
- **Fonts**: System fonts (no external font loading)

### Metrics to Monitor

- Lighthouse score (aim for 90+)
- Core Web Vitals (LCP, FID, CLS)
- Bundle size (keep under 200KB initial)
- Time to Interactive (TTI)

## 🧪 Testing

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works (all links)
- [ ] 404 page displays for non-existent routes
- [ ] Error page displays for runtime errors
- [ ] Images load with proper paths
- [ ] Manifest, robots.txt, sitemap.xml accessible
- [ ] Responsive design on mobile
- [ ] Domain verification works (if deployed)

### SEO Verification

```bash
npm run check:seo
```

This script verifies:
- All required files exist
- No conflicting static files
- Environment variables configured
- Assets present

## 🔄 Update Workflow

### Adding a New Page

1. Create page in `app/new-page/page.tsx`
2. Add route to `lib/navigation.ts`
3. Sitemap auto-updates on next build
4. Test locally
5. Commit and deploy

### Updating Assets

1. Add image to `public/images/`
2. Use `<SafeImage src="/images/name.png" />`
3. Automatic path handling for all environments

### Modifying SEO

1. Edit `app/layout.tsx` for global metadata
2. Edit route-specific `layout.tsx` for page metadata
3. Edit `lib/navigation.ts` for sitemap entries

## 📚 Additional Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React 19 Docs](https://react.dev/)
---

© 2025 B4E Team & Contributors | MIT Licensed
