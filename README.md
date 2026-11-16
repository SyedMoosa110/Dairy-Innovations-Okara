# Dairy Innovations Okara — Pro

React 18 + Vite + TypeScript + Tailwind 3 + Framer Motion + Lucide. Photography only: no illustrated machines anywhere.

```bash
npm install
npm run dev     # http://localhost:5173
npm run build
```

## Photos (read this first)
Each image slot in `src/data/site.ts` (`IMG`) loads, in order: the client file in `public/images/dairy-innovations/`
→ Unsplash candidates → a dark architectural placeholder. See `public/images/dairy-innovations/README.md` for filenames.
The Unsplash IDs could not be verified at build time: check the page once and replace anything off-topic with client photos.

## Edit points
- Contact details, products, news, videos, stats: `src/data/site.ts`
- Real videos: set `src` on an item in `VIDEOS` (mp4 in `public/videos/`)
- Resource downloads currently generate text spec sheets from product data; replace with real PDFs in `public/downloads/`
- News dates and the case-study quote/figures are sample content: replace with verified client data
- Quote portal sends the pre-filled spec to WhatsApp +92 333 5524580 (`src/lib/quote.ts`)

## Design system
Obsidian #090C10 · Slate #12171F · Alabaster #F5F7FA · Gold #C8963E · Forest #1E3A2F/#14241E.
Barlow Condensed (headlines), Plus Jakarta Sans (body), Cormorant Garamond (editorial quote).
Desktop nav appears from 1280px; below that a full-screen drawer is used, so logo, links and button can never overlap.
React Bits patterns (SplitText, BlurText, SpotlightCard, CountUp) are implemented locally in `src/components/react-bits/`.
