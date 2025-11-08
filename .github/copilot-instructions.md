# BrotArt Landing Page - AI Coding Instructions

## Architecture & Tech Stack
- **Static Next.js 16** with `output: "export"` fuer GitHub Pages oder einfaches Static Hosting
- **Tailwind CSS 4** with custom theme tokens (see `globals.css`)
- **TypeScript** with strict configuration
- **One-page design** with smooth scroll navigation to sections via anchor links

## Content Management Pattern
All content is centralized for easy maintenance and future i18n:

- **Static content**: `src/content/site.ts` contains all text, nav links, contact info, and typed data structures
- **Dynamic content**: `src/content/daily-offer.json` for frequently updated daily specials
- **Import pattern**: JSON imported into TypeScript for type safety while allowing easy CMS integration

```typescript
// Pattern: Import JSON into typed constants
import dailyOffer from "./daily-offer.json";
export const DAILY_OFFER: DailyOffer = dailyOffer;
```

## Styling Conventions
- **Custom theme**: Brotart brand colors defined in CSS custom properties (`--color-brotart-50` to `--color-brotart-900`)
- **Font stack**: Inter + Playfair Display via `next/font/google` with CSS variables
- **Component styling**: Inline Tailwind classes with consistent patterns:
  - Rounded corners: `rounded-2xl` or `rounded-3xl`
  - Shadows: `shadow-lg shadow-brotart-50/100`
  - Gradients: Brand-specific color stops
- **Accessibility**: Skip links, focus-visible styling, semantic HTML

## Component Architecture
- **Sections**: Hero, Angebot, Story, Oeffnungszeiten und Kontakt leben als einzelne Server Components unter `src/components/sections/*`
- **Shared chrome**: `SiteHeader` (Client Component wegen Scroll-Tracking) + `SiteFooter`
- **Page orchestration**: `src/app/page.tsx` importiert Content-Objekte und reicht sie als Props weiter

## SEO & Schema
- **Metadata**: Comprehensive Open Graph, canonical URLs in `layout.tsx`
- **JSON-LD**: LocalBusiness schema injected directly in page component
- **Static files**: `robots.ts` and `sitemap.ts` generate crawler files

## Development Workflow
Essential commands (see `package.json`):
- `npm run dev` - Local development server
- `npm run build` - Static export to `out/` directory  
- `npm run typecheck` - TypeScript validation
- `npm run preview` - Preview static build locally

## Content Update Workflow
1. **Daily offers**: Edit `src/content/daily-offer.json` with `lastUpdated` field
2. **Static content**: Edit typed constants in `src/content/site.ts`
3. **Auto-deploy**: GitHub Actions baut & deployed automatisch auf GitHub Pages bei jedem Push auf `main`

## German Language Specifics
- **Content language**: All text in German with proper umlauts and formatting
- **Date formatting**: `Intl.DateTimeFormat("de-DE")` for localized dates
- **Typography**: Semantic HTML with German-specific heading hierarchy

## Key Files to Understand
- `src/app/page.tsx` - Orchestrates all sections + schema injection
- `src/components/sections/*` - Section-level building blocks
- `src/components/site-header.tsx` / `site-footer.tsx` - Shared layout elements
- `src/content/site.ts` - All content constants and type definitions
- `next.config.ts` - Static export configuration
- `.github/workflows/deploy.yml` - Build & deploy to GitHub Pages

## Future-Proofing Notes
- Content structure ready for i18n (separate language files)
- CMS-ready JSON structure for external content management
- Separate Impressum/Datenschutz pages for legal compliance
- Component patterns support easy extraction if scaling up
