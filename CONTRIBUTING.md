<div align="center">
  <img src="public/images/logo.png" alt="Browse4Extract Logo" width="80" height="80">

  # Contributing to Browse4Extract Website

  **Help us build the best web scraping tool website!**

  [![Discord](https://img.shields.io/discord/YOUR_DISCORD_ID?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/4aGq6UZk3P)

</div>

---

Thank you for your interest in contributing to the Browse4Extract website! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

### Our Standards

- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other contributors

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **yarn**
- **Git**
- Code editor (VS Code recommended)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/b4e-website.git
   cd b4e-website
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/browse4extract/b4e-website.git
   ```

## 💻 Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Available Commands

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run linter
npm run check:seo   # Verify SEO configuration
```

## 📁 Project Structure

```
browse4extract-website/
├── app/                    # Next.js App Router pages
├── components/             # React components
├── lib/                    # Utility functions
├── public/                 # Static assets
├── docs/                   # Documentation (this folder!)
└── scripts/                # Build scripts
```

### Key Files

- **`lib/navigation.ts`** - Centralized navigation configuration
- **`lib/assetPath.ts`** - Asset path management
- **`lib/getSiteUrl.ts`** - Site URL configuration
- **`app/layout.tsx`** - Root layout with metadata
- **`components/SafeImage.tsx`** - Image component with fallback

**📖 Read [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for detailed architecture explanation.**

## 🔧 Making Changes

### Before You Start

1. **Check existing issues** - See if someone is already working on it
2. **Create an issue** - Discuss major changes before implementing
3. **Update your fork:**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

### Branch Naming

Use descriptive branch names:
- `feature/add-blog-page` - New features
- `fix/navigation-bug` - Bug fixes
- `docs/update-readme` - Documentation
- `refactor/optimize-images` - Code improvements

### Making Commits

Write clear, concise commit messages:

```bash
# Good ✅
git commit -m "Add dark mode toggle to header"
git commit -m "Fix responsive layout on mobile devices"
git commit -m "Update SEO metadata for features page"

# Bad ❌
git commit -m "fix stuff"
git commit -m "wip"
git commit -m "asdfasdf"
```

**Commit message format:**
```
<type>: <description>

[optional body]
[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🔄 Pull Request Process

### 1. Prepare Your PR

1. **Test your changes:**
   ```bash
   npm run dev        # Visual testing
   npm run build      # Ensure it builds
   npm run check:seo  # Verify SEO
   ```

2. **Update documentation** if needed (add to `/docs` folder)

3. **Check code style:**
   ```bash
   npm run lint
   ```

### 2. Create Pull Request

1. **Push your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open PR on GitHub** with:
   - **Clear title** describing the change
   - **Description** explaining what and why
   - **Screenshots** for UI changes
   - **Related issues** (#123)

### 3. PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## How to Test
1. Step 1
2. Step 2
3. Expected result

## Screenshots (if applicable)
[Add screenshots here]

## Checklist
- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Build succeeds
- [ ] SEO check passes
```

### 4. Review Process

- Maintainers will review your PR
- Address any requested changes
- Once approved, it will be merged

## 📐 Coding Standards

### TypeScript

- Use TypeScript for all new files
- Define prop types with interfaces
- Avoid `any` type
- Use type inference where appropriate

**Example:**
```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  onClick,
}) => {
  // Implementation
};
```

### React Components

- Use functional components
- Use hooks appropriately
- Keep components focused (single responsibility)
- Extract reusable logic to hooks
- Use `"use client"` directive when needed

**Component structure:**
```tsx
"use client"; // Only if using client features

import { useState } from "react";
import { ComponentName } from "@/components/ComponentName";

interface MyComponentProps {
  // Props
}

/**
 * Component description
 */
export const MyComponent: React.FC<MyComponentProps> = ({ props }) => {
  // Hooks
  // Event handlers
  // Return JSX
};
```

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow existing class naming patterns
- Use custom classes in `globals.css` for reusable styles
- Prefer Tailwind utilities over custom CSS

**Good:**
```tsx
<div className="flex items-center gap-4 rounded-xl bg-gradient-brand p-6">
```

**Avoid:**
```tsx
<div style={{ display: "flex", alignItems: "center" }}>
```

### File Organization

- One component per file
- Co-locate related files
- Use barrel exports (`index.ts`) sparingly
- Name files with PascalCase for components, camelCase for utilities

### Import Order

```tsx
// 1. External libraries
import React from "react";
import Link from "next/link";

// 2. Internal components
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

// 3. Utilities
import { assetPath } from "@/lib/assetPath";

// 4. Types
import type { MyType } from "@/types";

// 5. Styles (if any)
import "./styles.css";
```

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, verify:

- [ ] Page loads without errors
- [ ] All links work
- [ ] Images load correctly
- [ ] Responsive on mobile (use DevTools)
- [ ] No console errors or warnings
- [ ] SEO check passes (`npm run check:seo`)
- [ ] Build succeeds (`npm run build`)

### Visual Testing

Test on:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

### Browser Testing

Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (if possible)

## 📚 Documentation

### When to Document

Document when you:
- Add a new feature
- Create a new component or system
- Change architecture
- Modify configuration

### Where to Document

- **Code comments** - Complex logic
- **Component docs** - JSDoc comments above components
- **`/docs` folder** - Architecture and guides
- **README** - Installation and quick start

### Documentation Style

```tsx
/**
 * Brief description of the component
 *
 * @param props - Component props
 * @param props.children - Child elements
 * @param props.variant - Button style variant
 *
 * @example
 * ```tsx
 * <Button variant="default">Click me</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  // Implementation
};
```

## 🎯 Specific Contribution Areas

### Adding a New Page

See [`docs/ADDING_PAGES.md`](docs/ADDING_PAGES.md) for detailed instructions.

**Quick steps:**
1. Create `app/page-name/page.tsx`
2. Add route to `lib/navigation.ts`
3. Sitemap updates automatically

### Updating Styles

1. Use existing Tailwind utilities first
2. Add custom utilities to `globals.css` if needed
3. Maintain design consistency

### Fixing Bugs

1. Create issue describing the bug
2. Reference issue in PR title
3. Add test case if possible
4. Explain fix in PR description

### Improving Performance

1. Profile before optimizing
2. Document performance gains
3. Ensure no visual regressions
4. Test on slow networks/devices

## ❓ Questions?

- 💬 **Discord**: Join [discord.gg/4aGq6UZk3P](https://discord.gg/4aGq6UZk3P) and message **@sieapps**
- 💡 **General questions**: Open a [Discussion](https://github.com/browse4extract/b4e-website/discussions)
- 🐛 **Bug reports**: Open an [Issue](https://github.com/browse4extract/b4e-website/issues)
- 🔒 **Security issues**: DM **@sieapps** on [Discord](https://discord.gg/4aGq6UZk3P)

## 🎉 Recognition

Contributors will be:
- Listed in project credits
- Mentioned in release notes
- Added to contributors page (coming soon)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">
  <strong>Thank you for contributing to Browse4Extract! 🚀</strong>
  <br><br>
  <sub>© 2025 B4E Team & Contributors</sub>
  <br>
  <sub>Open Source • MIT Licensed • Community Driven</sub>
</div>
