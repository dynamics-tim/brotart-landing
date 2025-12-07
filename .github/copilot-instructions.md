# BrotArt Landing Page - AI Coding Instructions

## Architecture Overview
This is a **static-first Next.js 16** landing page for a Balkan bakery-pizza-grill in Riedlingen, Germany. Built for zero-config deployment to GitHub Pages with automatic CI/CD.

**Tech Stack:**
- Next.js 16 with `output: "export"` for pure static HTML/CSS/JS
- Tailwind CSS 4 with custom inline `@theme` tokens
- TypeScript (strict mode) with path alias `@/*` → `src/*`
- No backend, no API routes, no dynamic rendering

**Page Structure:**
Single-page scroll experience with anchor-based navigation (`#start`, `#angebot`, etc.). Legal pages (`/impressum`, `/datenschutz`) exist as separate routes.

## Critical Patterns

### Content Management Philosophy
**All text lives in `src/content/site.ts`** as typed constants. Zero hardcoded strings in components.

```typescript
// Components receive props, never contain text
export default function HeroSection({ hero, badges, contactInfo }: Props) {
  return <h1>{hero.title.leading} <span>{hero.title.highlight}</span></h1>;
}

// src/app/page.tsx orchestrates everything
import { HERO_CONTENT, SPECIALTIES, OPENING_HOURS } from "@/content/site";
<HeroSection hero={HERO_CONTENT} badges={HERO_BADGES} />
```

**Why:** Future i18n requires only duplicating content files, not touching components. CMS integration can target content files directly.

### Static Assets Pattern
Hero gallery images are **statically imported** for Next.js optimization:

```typescript
// src/content/hero-gallery.ts
import image0 from "../../public/hero-gallery/optimized/image0.webp";
export const HERO_GALLERY_IMAGES = [
  { src: image0, alt: "Ofenfrisches Borek..." }
];
```

Use this pattern for all images requiring optimization. Remote images need `unoptimized: true` (already configured).

### Client vs Server Components
- **Server Components (default):** All sections under `src/components/sections/*`
- **Client Components (`"use client"`):**
  - `SiteHeader` - Tracks scroll position for active nav link highlighting
  - `ScrollBackground` - Animates gradient transitions between sections
  - `HeroSection` - Manages image gallery rotation with auto-play/manual controls

**Rule:** Add `"use client"` only when using hooks (`useState`, `useEffect`) or browser APIs. Keep sections as server components.

### Styling System
**Custom theme in `src/app/globals.css`:**
```css
@theme inline {
  --color-brotart-50: #fffaf5;
  /* ... 50-900 scale for brand colors */
  --font-display: var(--font-playfair);
}
```

**Consistent component styling:**
- Rounded corners: `rounded-2xl` (cards), `rounded-3xl` (hero), `rounded-full` (buttons)
- Shadows: `shadow-lg shadow-brotart-100` (warm glow effect)
- Background: `bg-white/90` (translucent cards over gradient backgrounds)
- Focus states: Global `:focus-visible` in CSS (3px accent outline)

**Accessibility primitives:**
- `.skip-link` in CSS for keyboard nav
- `.section-anchor` with `scroll-margin-top: 6rem` for sticky header offset
- Semantic HTML hierarchy (`<section>`, `<article>`, proper heading levels)

## Development Workflow

### Essential Commands
```bash
npm run dev        # http://localhost:3000 with hot reload
npm run build      # Static export to out/ (required before preview)
npm run typecheck  # TSC validation (no emitted files)
npm run preview    # Serve out/ with npx serve (must build first)
npm run lint       # ESLint via eslint-config-next
```

**Critical:** `npm run preview` REQUIRES a successful `npm run build` first. Terminal exit code 1 means the `out/` directory doesn't exist yet.

### Environment Variables
`NEXT_PUBLIC_BASE_PATH` - Optional base path for subdirectory deployments
```typescript
// next.config.ts handles this automatically
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default { basePath, assetPrefix: basePath ? `${basePath}/` : undefined };
```

GitHub Pages with custom domain uses root path (no base path needed). See `public/CNAME`.

### CI/CD Pipeline (`.github/workflows/deploy.yml`)
**Trigger:** Every push to `main` or manual `workflow_dispatch`

**Build job:**
1. `npm ci` - Clean install
2. `npm audit --omit=dev` - Security check (fails on high/critical)
3. `npm run lint` + `npm run typecheck` - Quality gates
4. `npm run build` - Static export to `out/`
5. Upload `out/` as Pages artifact

**Deploy job:**
Uses `actions/deploy-pages@v4` - Zero configuration needed beyond repo settings (Pages source = "GitHub Actions").

**Permissions required:**
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

## Common Modifications

### Adding a New Section
1. Create `src/components/sections/new-section.tsx` (server component)
2. Add content constants to `src/content/site.ts` with typed export
3. Import and render in `src/app/page.tsx` between existing sections
4. Add nav link to `NAV_LINKS` array in `site.ts` with `#new-section` href
5. Update `SECTION_BACKDROPS` array in `page.tsx` for scroll gradient

### Updating Content
**Text/data:** Edit typed constants in `src/content/site.ts`
**Images:** Replace files in `public/hero-gallery/optimized/` and update imports in `src/content/hero-gallery.ts`
**Legal pages:** Edit `src/app/impressum/page.tsx` or `src/app/datenschutz/page.tsx` directly

**German language note:** All content is German by default. Use proper umlauts (ä, ö, ü, ß) and formal address ("Sie" not "Du").

### SEO Updates
- **Meta tags:** `src/app/layout.tsx` (title, description, Open Graph)
- **Structured data:** `src/app/page.tsx` (JSON-LD LocalBusiness schema)
- **Sitemap:** `src/app/sitemap.ts` generates `sitemap.xml` at build time
- **Robots:** `src/app/robots.ts` allows all crawlers

## TypeScript Conventions
- **Strict mode enabled** - No implicit `any`, all return types inferred or explicit
- **Type exports:** Export types alongside constants in content files
  ```typescript
  export type ContactInfo = { company: string; phone: string; /* ... */ };
  export const CONTACT_INFO: ContactInfo = { /* ... */ };
  ```
- **Component props:** Define inline or extract to `type Props = { ... }`
- **No type assertions** - Prefer type guards or proper narrowing

## Known Gotchas
1. **Image optimization disabled** (`unoptimized: true`) - Static export limitation
2. **No dynamic routes** - All pages must be defined in `src/app/`
3. **Scroll tracking logic** - `SiteHeader` and `ScrollBackground` both track scroll independently (intentional for different UX purposes)
4. **Font loading** - Inter/Playfair loaded via `next/font/google` with CSS variable fallbacks
5. **Preview command** - Requires built `out/` directory, not live reload

## Key Files Reference
- `src/app/page.tsx` - Main page orchestration + JSON-LD schema
- `src/app/layout.tsx` - Root layout, fonts, metadata
- `src/content/site.ts` - ALL content constants (single source of truth)
- `src/content/hero-gallery.ts` - Static image imports
- `src/app/globals.css` - Custom theme tokens + utility classes
- `next.config.ts` - Static export config + optional base path
- `tsconfig.json` - Path alias `@/*` + strict mode
- `.github/workflows/deploy.yml` - CI/CD to GitHub Pages
