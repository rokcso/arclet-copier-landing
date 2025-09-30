# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Production build (includes sitemap generation)
npm run build

# Build Astro only (without custom sitemap)
npm run build:astro

# Preview production build
npm run preview
```

## Architecture Overview

This is a multilingual landing page for the Arclet Copier Chrome extension built with Astro. The site supports 10 languages with a custom internationalization system.

### Key Architectural Components

**Internationalization System:**

- Custom i18n implementation in `src/i18n/utils.ts` with translation functions
- Language files stored as JSON in `src/i18n/` directory
- Astro's built-in i18n config handles routing (English as default without prefix)
- Supported languages: en (default), zh, zh-tw, de, fr, pt, ru, ko, ja, es

**Routing Structure:**

- English pages: `/` (root)
- Other languages: `/{lang}/` (e.g., `/zh/`, `/de/`)
- Each language has: homepage, privacy policy, and terms of service
- All pages exist as `.astro` files under `src/pages/`

**Component Architecture:**

- Layout system: Single `Layout.astro` with comprehensive SEO meta tags
- Reusable components in `src/components/`: Header, Hero, Features, Screenshots, Download, Footer, FAQ, BackToTop, etc.
- Each component accepts a `lang` prop for internationalization

**Styling:**

- Tailwind CSS with custom configuration in `tailwind.config.cjs`
- Custom color scheme: Primary green (#22c55e) matching the extension
- Typography: Inter (sans-serif) and Playfair Display (serif)
- No gradients policy - clean, minimal design

**SEO & Metadata:**

- Comprehensive meta tags including Open Graph and Twitter Cards
- Language-specific keywords for each supported locale
- Custom sitemap generation with hreflang support via `scripts/generate-sitemap.js`
- Structured data and canonical URLs

### Build Process

The build command runs two steps:

1. `astro build` - Standard Astro build process
2. `node scripts/generate-sitemap.js` - Generates custom sitemap.xml with hreflang tags

The custom sitemap script:

- Replaces Astro's default sitemap with a cleaner version
- Adds proper hreflang attributes for all language versions
- Includes x-default pointing to English version
- Supports homepage, privacy, and terms pages

### Language Translation System

Use the translation utilities:

```typescript
import { t, type Language } from '../i18n/utils';
const translate = t(lang);
const text = translate('key.nested.path');
```

Translation files follow nested JSON structure with dot notation access.

### Image Assets

- Extension screenshots organized by language in `public/img/preview/{lang}/`
- Extension icons in multiple sizes in `public/img/`
- Browser logos (Chrome, Edge) as SVG files
- All preview images are WebP format for optimization

### Development Notes

- TypeScript configured with Astro's strict preset
- No linting or formatting tools configured - manual code style consistency
- Static site generation with no runtime JavaScript frameworks
- Responsive design with mobile-first approach
