<div align="center">
  <img src="../public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # Browse4Extract Website Documentation

  **Comprehensive guides for contributors and developers**

</div>

---

Welcome to the Browse4Extract website documentation! This folder contains comprehensive guides for contributors and developers.

## 📚 Documentation Index

### Getting Started
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contribution guidelines and pull request process
- **[README.md](../README.md)** - Project overview and quick start

### Architecture & Systems
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Complete system architecture explanation
  - Project structure
  - Key systems (Asset Management, SEO, Navigation, Error Handling)
  - Design system
  - Security considerations
  - Deployment process

### Feature Guides
- **[ADDING_PAGES.md](ADDING_PAGES.md)** - How to add new pages to the site
  - Step-by-step instructions
  - Configuration examples
  - Best practices
  - Testing checklist

- **[ERROR_PAGES_README.md](ERROR_PAGES_README.md)** - Error handling system
  - Error page types (404, error boundary, global error)
  - Customization guide
  - Testing instructions

- **[SEO_METADATA_README.md](SEO_METADATA_README.md)** - SEO and metadata configuration
  - Dynamic manifest, robots.txt, sitemap generation
  - Environment configuration
  - Testing and validation

- **[SAFEIMAGE_README.md](SAFEIMAGE_README.md)** - SafeImage component documentation
  - Usage guide
  - Props and configuration
  - Fallback behavior

## 🎯 Quick Links by Task

### I want to...

**Add a new page**
→ Read [ADDING_PAGES.md](ADDING_PAGES.md)

**Understand the codebase**
→ Read [ARCHITECTURE.md](ARCHITECTURE.md)

**Contribute code**
→ Read [CONTRIBUTING.md](../CONTRIBUTING.md)

**Fix an error page**
→ Read [ERROR_PAGES_README.md](ERROR_PAGES_README.md)

**Update SEO metadata**
→ Read [SEO_METADATA_README.md](SEO_METADATA_README.md)

**Use images properly**
→ Read [SAFEIMAGE_README.md](SAFEIMAGE_README.md)

## 🏗️ Project Overview

The Browse4Extract website is built with:
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Static Export** (no server required)

### Key Features

1. **Dynamic Asset Management** - Handles GitHub Pages basePath automatically
2. **Centralized Navigation** - Single source of truth for all routes
3. **Dynamic SEO** - Auto-generated manifest, robots.txt, sitemap
4. **Error Boundaries** - Custom error pages for better UX
5. **Safe Image Loading** - Automatic fallbacks for missing images
6. **Domain Verification** - Anti-phishing protection

## 🔧 Development Workflow

```bash
# 1. Setup
npm install
cp .env.example .env.local

# 2. Develop
npm run dev

# 3. Test
npm run build
npm run check:seo

# 4. Commit
git add .
git commit -m "feat: add new feature"
git push
```

## 📝 Documentation Standards

When adding documentation:

1. **Use Markdown** with proper formatting
2. **Include examples** for complex topics
3. **Add to this index** for discoverability
4. **Keep it updated** when code changes
5. **Write in English** for broader accessibility

### Documentation Template

```markdown
# Title

Brief description of what this document covers.

## Overview
General introduction

## Usage
How to use this feature

## Examples
Code examples

## Configuration
Configuration options

## Troubleshooting
Common issues and solutions

## References
Related documentation
```

## 🤝 Contributing to Documentation

Documentation improvements are always welcome!

**How to contribute:**
1. Fork the repository
2. Edit/add documentation in `/docs`
3. Submit a pull request
4. Maintainers will review

**Good documentation:**
- Clear and concise
- Includes examples
- Covers edge cases
- Up-to-date with code

## 📮 Support

- 💬 **Discord**: [discord.gg/4aGq6UZk3P](https://discord.gg/4aGq6UZk3P) - Message **@sieapps**
- 💡 **Questions**: [GitHub Discussions](https://github.com/browse4extract/b4e-website/discussions)
- 🐛 **Bugs**: [GitHub Issues](https://github.com/browse4extract/b4e-website/issues)
- 🔒 **Security**: DM **@sieapps** on Discord

## 📄 License

This documentation and project code are licensed under the MIT License.

---

<div align="center">
  <strong>Happy Contributing! 🚀</strong>
  <br><br>
  <sub>© 2025 B4E Team & Contributors</sub>
  <br>
  <sub>Open Source • MIT Licensed • Community Driven</sub>
</div>
