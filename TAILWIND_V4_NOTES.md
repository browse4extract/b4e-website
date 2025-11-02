# Tailwind CSS v4 Configuration Notes

This project uses **Tailwind CSS v4**, which has a different configuration approach than v3.

## Key Changes from Tailwind v3 to v4

### 1. PostCSS Plugin
- **Old (v3)**: `tailwindcss` package directly as PostCSS plugin
- **New (v4)**: `@tailwindcss/postcss` separate package

### 2. Configuration File
- **Old (v3)**: `tailwind.config.js` or `tailwind.config.ts`
- **New (v4)**: Configuration via CSS using `@theme` in your main CSS file

### 3. Import Syntax
- **Old (v3)**: `@tailwind base; @tailwind components; @tailwind utilities;`
- **New (v4)**: `@import "tailwindcss";`

## Current Configuration

### postcss.config.js
```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ← New v4 plugin
    autoprefixer: {},
  },
}
```

### app/globals.css
Colors and theme are defined using `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-brand-green: #6fbb69;
  --color-brand-violet: #bf8fd7;
  // ... more colors
}
```

### Custom Utilities
Gradients and other custom utilities are defined in `@layer utilities`:

```css
@layer utilities {
  .bg-gradient-brand {
    background-image: linear-gradient(to right, var(--color-brand-green), var(--color-brand-violet));
  }
}
```

## Available Custom Classes

### Gradients
- `.bg-gradient-brand` - Green to violet horizontal gradient
- `.bg-gradient-title` - Purple to indigo (title bar)
- `.bg-gradient-green` - Green vertical gradient
- `.bg-gradient-violet` - Violet vertical gradient
- `.gradient-text` - Gradient text effect

### Effects
- `.glass` - Glassmorphism effect with backdrop blur
- `.scrollbar-thin` - Custom thin scrollbar

### Colors
Use with Tailwind utilities:
- `bg-brand-green`, `text-brand-green`
- `bg-brand-violet`, `text-brand-violet`
- `bg-dark-pure`, `bg-dark-almost`, `bg-dark-gray`

## Troubleshooting

### "Cannot apply unknown utility class" error
This means you're trying to use a class that isn't defined. Check:
1. Is it in `@theme`? (for colors)
2. Is it in `@layer utilities`? (for custom classes)
3. Is it a valid Tailwind v4 class?

### Build errors after upgrading
```bash
# Clean Next.js cache
rm -rf .next

# Reinstall dependencies
npm install
```

## Resources
- [Tailwind CSS v4 Beta Docs](https://tailwindcss.com/docs/v4-beta)
- [Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
