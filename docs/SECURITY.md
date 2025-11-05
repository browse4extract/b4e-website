# Security Policy

## Security Measures Implemented

This project implements multiple layers of security to protect users and maintain the integrity of the website.

### 1. XSS (Cross-Site Scripting) Protection

#### Removed Vulnerabilities
- **Eliminated `dangerouslySetInnerHTML`**: Replaced all instances of `dangerouslySetInnerHTML` with safe React component rendering
- **Safe Text Highlighting**: Domain names and GitHub links are highlighted using React components instead of HTML injection
- **Input Sanitization**: All user-facing content is rendered through React's automatic escaping mechanism

#### Implementation (Toast.tsx)
```typescript
// SECURE: Using React components instead of dangerouslySetInnerHTML
{toast.message.split('\n').map((line, lineIndex) => (
  <React.Fragment key={lineIndex}>
    {/* Content is safely escaped by React */}
  </React.Fragment>
))}
```

### 2. Security Headers

Comprehensive security headers are configured in `next.config.js`:

| Header | Value | Purpose |
|--------|-------|---------|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Forces HTTPS connections |
| `X-Frame-Options` | `SAMEORIGIN` | Prevents clickjacking attacks |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME type sniffing |
| `X-XSS-Protection` | `1; mode=block` | Enables browser XSS filter |
| `Referrer-Policy` | `origin-when-cross-origin` | Controls referrer information |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restricts browser features |

### 3. Content Security

- **No External Scripts**: All JavaScript is bundled and served from the same origin
- **Static Export**: Site is statically generated, reducing attack surface
- **No Server-Side Code**: Eliminates server-side injection vulnerabilities
- **No User Input Storage**: No databases or user data collection

### 4. Dependency Security

- **React 19+**: Latest stable version with security patches
- **Next.js 16+**: Modern framework with built-in security features
- **No Dangerous Dependencies**: All dependencies are from trusted sources

### 5. Data Handling

- **No Cookies**: No cookie-based tracking or storage
- **No Local Storage of Sensitive Data**: Only uses sessionStorage for non-sensitive UI state
- **No Analytics Tracking**: Respects user privacy

### 6. Build Process Security

#### GitHub Actions Workflow
- Environment variables for configuration (not hardcoded secrets)
- Automated dependency updates via Dependabot (recommended)
- Static file generation only

```yaml
# .github/workflows/deploy.yml
- name: Create .env file with site URL
  run: |
    # Uses repository variables, not secrets in code
    SITE_URL="${{ vars.SITE_URL }}"
```

## Reporting Security Issues

If you discover a security vulnerability, please report it via:

1. **GitHub Security Advisories**: [Report a vulnerability](https://github.com/browse4extract/b4e-website/security/advisories/new)
2. **Email**: security@browse4extract.org (if available)

**Please do not** report security vulnerabilities through public GitHub issues.

## Security Best Practices for Contributors

### Code Review Checklist

- [ ] No use of `dangerouslySetInnerHTML`
- [ ] No `eval()` or `Function()` constructors
- [ ] No inline event handlers (`onclick`, `onload`, etc.)
- [ ] All external links use `rel="noopener noreferrer"`
- [ ] No hardcoded secrets or API keys
- [ ] Input validation for all user-provided data
- [ ] Proper error handling (no information leakage)

### Dependencies

- Always use `npm ci` for reproducible builds
- Review dependency updates before merging
- Use `npm audit` to check for known vulnerabilities
- Keep dependencies up to date

### Testing

```bash
# Check for security issues
npm audit

# Run linting
npm run lint

# Build to verify
npm run build
```

## Security Updates

This document is maintained to reflect the current security posture of the project. Last updated: 2025-01-04

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < 1.0   | :x:                |

We only support the latest version. Please always use the most recent release.
