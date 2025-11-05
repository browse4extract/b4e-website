<div align="center">
  <img src="../public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # SafeImage Component

  **Robust image component with automatic fallback and asset path handling**
</div>

---

A robust image component for Next.js that ensures reliable asset loading with automatic error handling.

## Features

✅ **Automatic basePath handling** - Uses `assetPath()` automatically for all paths
✅ **Built-in placeholder** - Displays elegant fallback image on error
✅ **No visible 404 errors** - Graceful handling of missing images
✅ **Lazy loading by default** - Performance optimization
✅ **Custom fallback support** - Ability to define your own fallback image
✅ **Development logs** - Console warnings for debugging

## Basic Usage

```tsx
import { SafeImage } from "@/components/SafeImage";

// Simple usage
<SafeImage
  src="/images/logo.png"
  alt="Logo"
  className="w-full h-full"
/>
```

## Props

```tsx
interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;              // Image path (will be processed by assetPath)
  alt: string;              // Alternative text (REQUIRED for accessibility)
  fallbackSrc?: string;     // Custom fallback image (optional)
  useAssetPath?: boolean;   // Use assetPath (default: true)
}
```

## Examples

### Standard Image

```tsx
<SafeImage
  src="/images/hero-screenshot.png"
  alt="Application Interface"
  className="w-full h-auto object-cover"
/>
```

### With Custom Fallback

```tsx
<SafeImage
  src="/images/user-avatar.png"
  alt="User Avatar"
  fallbackSrc="/images/default-avatar.png"
  className="w-16 h-16 rounded-full"
/>
```

### External URL (without assetPath)

```tsx
<SafeImage
  src="https://example.com/external-image.jpg"
  alt="External Image"
  useAssetPath={false}
  className="w-full"
/>
```

## How It Works

1. **Initial loading**: Component automatically applies `assetPath()` to provided `src`
2. **On error**: If image fails to load, an SVG placeholder is generated automatically
3. **Custom fallback**: If you specify `fallbackSrc`, it will be used instead of the placeholder
4. **Debug logs**: In development, errors are logged to the console

## Default Placeholder

The automatically generated placeholder is an SVG with:
- Dark background (`#1a1a2e`)
- Stylized image icon in green (`#16a34a`)
- Text "Image not available"
- Design consistent with the application theme

## Advantages Over `<img>`

| Feature | Native `<img>` | `<SafeImage>` |
|---------|----------------|---------------|
| Automatic basePath handling | ❌ | ✅ |
| Fallback on error | ❌ | ✅ |
| Elegant placeholder | ❌ | ✅ |
| Development logs | ❌ | ✅ |
| Lazy loading by default | ⚠️ Manual | ✅ Automatic |

## Migration from `<img>`

Before:
```tsx
<img
  src={assetPath("/images/logo.png")}
  alt="Logo"
  className="w-10 h-10"
/>
```

After:
```tsx
<SafeImage
  src="/images/logo.png"
  alt="Logo"
  className="w-10 h-10"
/>
```

## When to Use SafeImage

✅ **Use SafeImage for:**
- All images on your site (logos, screenshots, assets)
- Images that may sometimes be missing
- Deployments with variable basePath (GitHub Pages, etc.)

❌ **DO NOT use SafeImage for:**
- CSS background images (use `assetPath()` directly)
- Inline SVG in JSX
- Icon library icons like lucide-react

## Technical Notes

- Component uses `useState` and `useEffect` to manage image state
- The `loading="lazy"` attribute is applied by default (can be overridden)
- The placeholder SVG is encoded as a data URL to avoid HTTP requests
- Absolute paths (http://, https://, data:, blob:) are never modified

## Troubleshooting

**Image doesn't display:**
1. Check that the file exists in `public/images/`
2. Check the console for development warnings
3. Ensure `NEXT_PUBLIC_BASE_PATH` is correctly configured

**Placeholder displays instead:**
- The image could not be loaded
- Check the path in the console (development mode)
- Verify that the image exists in the `public/` folder

---

© 2025 B4E Team & Contributors | MIT Licensed
