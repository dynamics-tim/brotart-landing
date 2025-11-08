# BrotArt Landing Page - AI Coding Instructions

## Architecture & Tech Stack
- **Static Next.js 16** with `output: "export"` for simple hosting (United Domains webspace)
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
- **Minimal components**: Only `SiteHeader` extracted, rest inline in `page.tsx`
- **Client components**: Only when needed (header uses intersection observer)
- **Header pattern**: Sticky navigation with scroll-based brand bar toggle and smooth scroll

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
3. **Auto-deploy**: GitHub Actions builds and FTPs to hosting on main branch push

## German Language Specifics
- **Content language**: All text in German with proper umlauts and formatting
- **Date formatting**: `Intl.DateTimeFormat("de-DE")` for localized dates
- **Typography**: Semantic HTML with German-specific heading hierarchy

## Key Files to Understand
- `src/app/page.tsx` - Single-page application with all sections
- `src/content/site.ts` - All content constants and type definitions
- `src/components/site-header.tsx` - Navigation with intersection observer
- `next.config.ts` - Static export configuration
- `.github/workflows/deploy.yml` - CI/CD to United Domains hosting

## Future-Proofing Notes
- Content structure ready for i18n (separate language files)
- CMS-ready JSON structure for external content management
- Separate Impressum/Datenschutz pages for legal compliance
- Component patterns support easy extraction if scaling up