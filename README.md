# BrotArt Landingpage

Next.js 16 plus Tailwind CSS 4 liefern eine statische One-Page-Landing, die sich auf einfachem Storage (z. B. United Domains Webspace) hosten laesst. Impressum und Datenschutz liegen als eigene Routen.

## Architektur und Inhalte
- `src/app/page.tsx` enthaelt alle Abschnitte: Header/Navi, Hero mit Tagesangebot, Spezialitaeten, Ueber-uns, Oeffnungszeiten & Standort (inkl. Google-Maps-Embed), Kontaktbereich mit Formular-Dummy sowie Footer mit Social- und Rechtsverweisen.
- Statische Texte und Metadaten liegen zentral in `src/content/site.ts`, wodurch spaetere Sprachversionen oder externe Datenquellen leichter eingebunden werden koennen.
- Das Tagesangebot sitzt separat in `src/content/daily-offer.json`. Die UI liest die Angaben inklusive `lastUpdated` und zeigt automatisch ein lokalisiertes Datum an.
- SEO-Elemente: `src/app/layout.tsx` definiert Title, Description und Open Graph, `src/app/sitemap.ts` und `src/app/robots.ts` liefern die Crawler-Dateien, `page.tsx` injiziert ein LocalBusiness JSON-LD Snippet.
- `src/app/impressum/page.tsx` und `src/app/datenschutz/page.tsx` decken die Pflichtseiten ab.

## Daily-Offer-Workflow
1. Quelle ist `src/content/daily-offer.json`.
2. Fuer manuelle Updates einfach Datei bearbeiten (z. B. via GitHub Web UI) und `lastUpdated` anpassen.
3. Ein Git-basiertes CMS wie Netlify CMS oder Tina kann direkt auf die JSON-Datei committen; damit bleibt der geplanter Workflow (CMS schreibt Datei, GitHub Actions baut neu) erhalten.
4. Jeder Commit triggert die Pipeline, baut statisch und deployed atomar.

## Mehrsprachigkeit vorbereiten
- Alle Texte kommen bereits aus `src/content`. Fuer eine zweite Sprache kann ein weiteres File wie `src/content/site.en.ts` angelegt und per Feature Flag oder spaeteres Next.js i18n Routing geladen werden.
- JSX sollte keine harten Strings enthalten, damit ein spaeteres Uebersetzen nur Content-Dateien betrifft.

## Entwicklung
| Zweck | Kommando |
| --- | --- |
| Lokaler Dev-Server | `npm run dev` |
| Linting | `npm run lint` |
| TypeScript-Check | `npm run typecheck` |
| Produktionsbuild + statischer Export (`out/`) | `npm run build` |
| Statisches Preview aus `out/` | `npm run preview` |

## CI/CD zu United Domains
Workflow: `.github/workflows/deploy.yml`

1. Build-Job bei jedem Push auf `main` oder via `workflow_dispatch`:
   - Checkout, Node 20 Setup
   - `npm ci`
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build` erzeugt `out/`
   - `out/` wird als Artifact hinterlegt
2. Deploy-Job laedt das Artifact und uebertraegt es via `SamKirkland/FTP-Deploy-Action@v4` per FTPS ins United-Domains-Hosting.

Noetige GitHub-Secrets:
- `UD_FTP_SERVER` (z. B. `ftp.udag.de`)
- `UD_FTP_USERNAME`
- `UD_FTP_PASSWORD`
- `UD_FTP_TARGET_DIR` (z. B. `/htdocs`)

Die Action arbeitet differenziell; fuer einen Full-Reset kann optional `dangerous-clean-slate: true` gesetzt werden.

## Testing und QA
- `npm run lint` und `npm run typecheck` muessen gruene Ergebnisse liefern.
- `npm run build` stellt sicher, dass der statische Export inklusive JSON-Parsing funktioniert.
- Manuelle Sichtpruefung in Desktop- und mobilen Breakpoints (Navigation, Section-Scroll, Karten-Embed).
- Accessibility-Check: Skip-Link, Fokus-Styling, Heading-Hierarchie.
- Funktionslinks pruefen: `tel:`, `mailto:`, WhatsApp, Google-Maps-Link.
- Nach Export Sicherstellen, dass `out/sitemap.xml` und `out/robots.txt` vorhanden sind.

## Naechste Schritte (optional)
1. Git-basiertes CMS im Ordner `public/admin` konfigurieren und auf `src/content/daily-offer.json` verweisen.
2. Zweite Sprache vorbereiten und Next.js i18n aktivieren.
3. Datenschutzkonformes Analytics (Plausible/Matomo) mit Consent-Banner nachruesten.
