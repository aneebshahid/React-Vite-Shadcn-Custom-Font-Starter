# Vite React + WordPress REST Portfolio Starter — Geist Sans + Geist Mono (Radix-free)

**What you get**
- React (Vite) + React Router
- Tailwind CSS + shadcn-style UI primitives (Button, Card, Input, Separator)
- Light/Dark theme (class-based)
- Framer Motion page transitions
- SEO with react-helmet-async
- WordPress REST API helpers
- **Geist Sans (headings) + Geist Mono (body & accents)** wired for best performance
- esbuild override (patched)

## Fonts (performance)
- This project prefers **self-hosted** variable fonts. Put these files in `/public/fonts/`:
  - `GeistVF.woff2`
  - `GeistMonoVF.woff2`
- `index.html` preloads both for optimal LCP.
- A commented **remote fallback** via jsDelivr is in `src/styles/globals.css`. Remove it once you self-host.

## Quick start
1. `npm i`
2. Copy `.env.example` → `.env` and set `VITE_WP_BASE_URL=https://your-wp-site.com`
3. `npm run dev`
4. Build & deploy: `npm run build` → upload `dist/` to Hostinger.

## Notes
- Radix UI is **not** included. The included UI primitives are Tailwind-only.
- If you later add advanced shadcn components (Dialog/Popover/Dropdown), those usually require Radix; add them only if you choose to.
# React-Vite-Shadcn-Custom-Font-Starter
