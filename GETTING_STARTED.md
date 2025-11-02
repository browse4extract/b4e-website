# Getting Started with Browse4Extract Website

## 🎉 Your website is ready!

The Browse4Extract promotional website has been successfully created with:

- ✅ Next.js 16 with TypeScript
- ✅ **Tailwind CSS v4** with custom Browse4Extract design system
- ✅ Three main pages (Home, Features, Download)
- ✅ Reusable UI components (Button, Card, FeatureCard)
- ✅ Responsive layout with Header and Footer
- ✅ Dark mode theme matching the app

> **Note**: This project uses Tailwind CSS v4 (beta). See `TAILWIND_V4_NOTES.md` for details on the v4 configuration.

## 📋 Next Steps

### 1. Add Your Visual Assets

Place your screenshots and images in `public/images/`:

```
public/images/
├── logo.png              # Application logo
├── hero-screenshot.png   # Main interface (dual-panel view)
├── element-picker.png    # Element picker in action
├── settings.png          # Settings modal
├── results.png           # Extraction results
├── export-formats.png    # JSON/CSV/Excel exports
└── profiles.png          # Profile management
```

**Update image references:**

In `app/page.tsx`, replace the placeholder div (around line 63) with:

```tsx
<div className="relative aspect-video rounded-lg overflow-hidden">
  <Image
    src="/images/hero-screenshot.png"
    alt="Browse4Extract Interface"
    width={1200}
    height={675}
    className="w-full h-full object-cover"
  />
</div>
```

Don't forget to import Image:
```tsx
import Image from 'next/image';
```

### 2. Update Download Links

The download page currently links to GitHub releases. Make sure your GitHub releases have the correct file names:

- `Browse4Extract-Setup.exe` (Windows)
- `Browse4Extract.dmg` (macOS)
- `Browse4Extract.AppImage` (Linux)

Or update the filenames in `app/download/page.tsx` (line 40) to match your actual release files.

### 3. Run the Development Server

```bash
cd browse4extract-website
npm run dev
```

Visit **http://localhost:3000** to see your site!

### 4. Customize Content (Optional)

- **Meta tags**: Update SEO info in `app/layout.tsx`
- **GitHub URL**: Update if your repo URL is different
- **Version number**: Update "v1.0.0" badges throughout the site
- **Features**: Add/modify features in `app/features/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy!

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Netlify will handle the rest

### Static Export (GitHub Pages)

If you want a fully static site:

1. Update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // ... rest of config
};
```

2. Build:
```bash
npm run build
```

3. Deploy the `out` folder to GitHub Pages or any static host

## 🎨 Customizing the Design

### Colors

All brand colors are defined in `tailwind.config.ts`:

```ts
colors: {
  brand: {
    green: { DEFAULT: '#6fbb69', light: '#8acc85', dark: '#5aa455' },
    violet: { DEFAULT: '#bf8fd7', light: '#d6c1e1', dark: '#a876c2' },
  },
  // ...
}
```

### Gradients

Pre-defined gradients are available as utilities:

- `bg-gradient-brand` - Green to violet
- `bg-gradient-title` - Purple to indigo
- `gradient-text` - Text with gradient (in `globals.css`)

## 📱 Responsive Design

The site is fully responsive and works on:

- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🆘 Troubleshooting

### Port already in use?

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Build errors?

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Images not loading?

Make sure:
1. Images are in `public/images/`
2. You're using `/images/filename.png` (with leading slash)
3. Image paths are correct

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

## 🎊 You're All Set!

Your Browse4Extract website is ready to promote your application. Just add your screenshots and deploy!

If you have questions or need help, check the main README.md file.

---

Built with ❤️ by Claude Code
