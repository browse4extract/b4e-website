<div align="center">
  <img src="../public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # Error Pages Documentation

  **Custom 404 and error boundary pages**
</div>

---

This project includes custom error pages for a better user experience when errors occur.

## 📄 Error Pages

### 1. `app/not-found.tsx` - 404 Not Found Page

**When it appears:**
- User navigates to a non-existent route
- A page is deleted or moved
- Typo in the URL

**Features:**
- ✅ Custom 404 design matching site theme
- ✅ Large "404" number with gradient text
- ✅ Clear error message
- ✅ "Back to Home" button
- ✅ Quick links to popular pages (Home, Features, Download)
- ✅ Branded card design with glow effect

**Usage:**
Next.js automatically shows this page for 404 errors. No configuration needed.

**Test it:**
```bash
# Navigate to any non-existent page
http://localhost:3000/this-page-does-not-exist
```

### 2. `app/error.tsx` - Error Boundary

**When it appears:**
- Runtime JavaScript errors
- Component rendering errors
- Data fetching failures
- Unexpected exceptions during page load

**Features:**
- ✅ Error icon with animation
- ✅ User-friendly error message
- ✅ "Try Again" button (resets error boundary)
- ✅ "Back to Home" button
- ✅ Link to GitHub issues for reporting
- ✅ Development mode: Shows error details
- ✅ Production mode: Hides technical details

**Usage:**
This error boundary automatically catches errors in nested routes and components.

**Test it:**
Create a component that throws an error:
```tsx
export default function TestError() {
  throw new Error("Test error!");
  return <div>This won't render</div>;
}
```

### 3. `app/global-error.tsx` - Global Error Boundary

**When it appears:**
- Errors in the root layout
- Critical application errors
- Errors that occur before the main app loads

**Features:**
- ✅ Minimal design (doesn't depend on other components)
- ✅ Inline CSS (no external dependencies)
- ✅ Replaces entire app when triggered
- ✅ "Try Again" button
- ✅ Development mode: Shows error details
- ✅ Self-contained HTML/CSS

**Usage:**
This is the last resort error boundary. It catches errors that `error.tsx` cannot handle.

**Note:** This file must include its own `<html>` and `<body>` tags.

## 🎨 Design Features

All error pages follow the site's design system:

- **Dark theme** with gradient backgrounds
- **Brand colors** (green #6fbb69 and violet #9333ea)
- **Glass morphism** effects
- **Responsive design** for all screen sizes
- **Consistent typography** and spacing

## 🔧 Customization

### Change Error Messages

Edit the respective error page file:

```tsx
// In app/not-found.tsx
<h2 className="text-3xl font-bold text-white mb-4">
  Your Custom Title
</h2>
<p className="text-gray-300 text-lg mb-8">
  Your custom message here...
</p>
```

### Add More Quick Links

In `app/not-found.tsx`:

```tsx
<Link
  href="/your-page"
  className="px-4 py-2 glass-subtle rounded-lg text-sm text-gray-300 hover:text-brand-green hover:bg-white/5 transition-all"
>
  Your Page
</Link>
```

### Customize Error Logging

In `app/error.tsx`:

```tsx
useEffect(() => {
  // Send to your error tracking service
  logErrorToService(error);

  // Or send to an API
  fetch('/api/log-error', {
    method: 'POST',
    body: JSON.stringify({ error: error.message })
  });
}, [error]);
```

## 🧪 Testing Error Pages

### Test 404 Page
```bash
# Navigate to non-existent route
http://localhost:3000/non-existent-page

# Or use curl
curl http://localhost:3000/non-existent-page
```

### Test Error Boundary
Create a test page that throws an error:

```tsx
// app/test-error/page.tsx
"use client";

export default function TestErrorPage() {
  // This will trigger the error boundary
  throw new Error("Test error for error boundary");

  return <div>This won't render</div>;
}
```

Navigate to: `http://localhost:3000/test-error`

### Test Global Error
This is harder to test as it requires a critical error. Typically only happens with:
- Layout errors
- Root component errors
- Severe runtime issues

## 📊 Error Hierarchy

```
1. Component Error
   ↓
2. app/error.tsx (Route Error Boundary)
   ↓ (if error occurs in layout)
3. app/global-error.tsx (Global Error Boundary)
```

## 🚀 Production Considerations

### Error Logging

In production, you should log errors to a service:

```tsx
// app/error.tsx
useEffect(() => {
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service (Sentry, LogRocket, etc.)
    logErrorToService({
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  }
}, [error]);
```

### Hide Error Details

Error details are automatically hidden in production. The code checks:

```tsx
{process.env.NODE_ENV === "development" && (
  <div className="error-details">
    {/* Error details only shown in development */}
  </div>
)}
```

### Monitor 404s

Track 404 errors to identify:
- Broken links
- Deleted pages that need redirects
- Common typos in URLs

## 🔗 Integration with Analytics

Add analytics tracking to error pages:

```tsx
// app/not-found.tsx
useEffect(() => {
  // Track 404 in analytics
  gtag('event', 'page_not_found', {
    page_path: window.location.pathname,
  });
}, []);
```

## 💡 Best Practices

1. **Keep error pages simple** - Don't rely on complex components that might fail
2. **Provide clear actions** - Always offer a way to recover (home button, try again)
3. **Log errors** - Track errors in production for debugging
4. **Test regularly** - Ensure error pages work correctly
5. **Maintain design consistency** - Match your site's theme
6. **Be user-friendly** - Avoid technical jargon in production

## 🐛 Troubleshooting

**Error page not showing:**
- Check that the file is in the correct location (`app/`)
- Ensure it's a default export
- Verify the filename matches exactly (`not-found.tsx`, `error.tsx`)
- Clear `.next` cache and rebuild

**Infinite error loop:**
- Check that error pages don't throw errors themselves
- Simplify error page dependencies
- Use `global-error.tsx` as fallback with inline styles

**Styling issues:**
- Ensure error pages import necessary components
- Use inline styles in `global-error.tsx`
- Check that global CSS is loaded

## 📚 Resources

- [Next.js Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
---

© 2025 B4E Team & Contributors | MIT Licensed
