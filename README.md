<div align="center">
  <img src="public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # Browse4Extract Official Website

  **Professional Open-Source Web Scraping Tool**

  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![Discord](https://img.shields.io/discord/YOUR_DISCORD_ID?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/4aGq6UZk3P)

</div>

---

This is the official promotional website for **Browse4Extract**, a powerful Electron desktop application for extracting web data with visual element selection.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Project Structure

```
browse4extract-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with hero and features
│   ├── features/          # Features page
│   ├── download/          # Download page
│   ├── layout.tsx         # Root layout with header/footer
│   └── globals.css        # Global styles and Tailwind
├── components/            # Reusable React components
│   ├── Button.tsx         # Primary/secondary button component
│   ├── Card.tsx           # Card container component
│   ├── FeatureCard.tsx    # Feature display card
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/
│   └── images/            # Static images (add your screenshots here)
└── tailwind.config.ts     # Tailwind configuration with brand colors
```

## 🎨 Design System

### Colors

- **Brand Green**: `#6fbb69` (light: `#8acc85`, dark: `#5aa455`)
- **Brand Violet**: `#bf8fd7` (light: `#d6c1e1`, dark: `#a876c2`)
- **Dark Backgrounds**: `#000000`, `#0a0a0a`, `#1a1a1a`

### Gradients

- Primary: `linear-gradient(to right, #6fbb69, #bf8fd7)`
- Title bar: `linear-gradient(to right, purple-900, indigo-900)`

## 📸 Adding Assets

Place your visual assets in `public/images/`:

- `logo.png` - Application logo
- `hero-screenshot.png` - Main interface screenshot
- `element-picker.png` - Visual Element Picker in action
- `settings.png` - Settings modal
- `results.png` - Extraction results
- `export-formats.png` - Export examples
- `profiles.png` - Profile management

Images will be accessible via `/images/filename.png` in the app.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static host

## 📝 Pages

1. **Home** (`/`) - Hero section, features highlight, how it works, use cases
2. **Features** (`/features`) - Detailed feature descriptions and capabilities
3. **Download** (`/download`) - Platform-specific download buttons and installation instructions

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Static Export

For GitHub Pages or other static hosts:

1. Update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

2. Build and deploy the `out` folder:
```bash
npm run build
```

## 💬 Support

Need help or have questions?

- 💬 **Discord**: Join our community at [discord.gg/4aGq6UZk3P](https://discord.gg/4aGq6UZk3P) and message **@sieapps**
- 🐛 **Issues**: [GitHub Issues](https://github.com/browse4extract/b4e-website/issues)
- 📖 **Documentation**: Check the [`/docs`](docs/) folder

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 👥 Credits

**© 2025 B4E Team & Contributors**

- GitHub Organization: [browse4extract](https://github.com/browse4extract)
- Main Project: [Browse4Extract](https://github.com/browse4extract/Browse4Extract)
- Website Repo: [b4e-website](https://github.com/browse4extract/b4e-website)

---

<div align="center">
  <strong>Built with ❤️ by the Browse4Extract community</strong>
  <br>
  <sub>Open Source • MIT Licensed • Community Driven</sub>
</div>
