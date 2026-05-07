# Warriors Lens — Portfolio Site

A cinematic portfolio for SSG Julio C. Hernandez (U.S. Army Combat Photographer & Public Affairs Specialist).

Built with React 19 + Tailwind CSS + shadcn/ui. The contact form uses a `mailto:` link, so **no backend or database is required** to run this site.

---

## Quick Start (Local)

Requires Node 18+ and Yarn.

```bash
yarn install
yarn start    # runs at http://localhost:3000
```

Build for production:

```bash
yarn build    # outputs static files to /build
```

The `build/` folder is what you upload to any static host.

---

## Deploy to Free Hosts

### Option A — Vercel (recommended, zero config)
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → "New Project" → import the repo.
3. Framework preset: **Create React App**. Build command: `yarn build`. Output: `build`. Click Deploy.
4. Free custom domain support (one-click in Vercel dashboard).

### Option B — Netlify
1. Push to GitHub.
2. https://app.netlify.com → "Add new site" → "Import from Git".
3. Build command: `yarn build`. Publish directory: `build`. Deploy.

### Option C — Cloudflare Pages
1. Push to GitHub.
2. https://pages.cloudflare.com → "Create project" → connect repo.
3. Framework preset: **Create React App**. Build output: `build`.

### Option D — GitHub Pages (free, simplest)
```bash
yarn add -D gh-pages
```
Add to `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/warriorslens",
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"
}
```
Then `yarn deploy`.

### Option E — Drag-and-drop static hosts
Run `yarn build` and drag the `build/` folder onto:
- https://app.netlify.com/drop
- https://surge.sh
- https://www.tiiny.host

---

## What's in the Site

- **Hero** — full-bleed combat-camera background, large display type, stats bar
- **About** — your bio with portrait
- **Selected Work** — 20-image filterable gallery (Combat Camera / Joint Ops / Maritime / Training / Portrait), with click-to-zoom lightbox. Pulls from your DVIDS portfolio + Wix portfolio
- **Capabilities** — Combat Camera, Public Affairs, Multimedia & IMC, Portraiture
- **Volunteer / Featured Project** — "Creating Smiles: A Project for Pursuing Hill Elementary" with 17 real photographs and an editorial mosaic + lightbox
- **Service History** — full timeline from MP at Fort Polk (2013) → Korea → Fort Bliss → 2018 border mobilization → DINFOS → 55th Combat Camera → CJTF–OIR → NAVCENT
- **Contact** — `mailto:` form that opens user's email app pre-addressed to `juliochernandez18@gmail.com`. No backend required.

---

## Where to Edit Common Things

| What | File |
|---|---|
| Site name, role, emails, social links | `src/data/mock.js` → `SITE` |
| Bio / About copy | `src/data/mock.js` → `ABOUT` |
| Project gallery items | `src/data/mock.js` → `PROJECTS` |
| Capabilities cards | `src/data/mock.js` → `CAPABILITIES` |
| Service history timeline | `src/data/mock.js` → `EXPERIENCE` |
| Volunteer project content & images | `src/data/mock.js` → `VOLUNTEER` |
| Hero background image | `src/data/mock.js` → `HERO_IMAGE` |
| About-section portrait | `src/data/mock.js` → `PORTRAIT_IMAGE` |
| Color palette (gold accent, etc.) | search `#c9a961` across `src/components/` |
| Fonts | `src/index.css` (top of file, Google Fonts import) |

---

## Tech Stack

- **React 19** (Create React App with Craco)
- **Tailwind CSS** + custom design tokens
- **shadcn/ui** components (`src/components/ui/`)
- **lucide-react** for icons
- **react-router-dom** for routing
- **No backend / no database** — fully static site

---

## License & Image Rights

- DVIDS imagery is U.S. Government public-domain and free to use.
- Wix-hosted photographs are SSG Julio C. Hernandez's own work.
- Children in the Pursuing Hill Elementary project were photographed with explicit parental consent.
- Stock images (if any remain) are from Pexels, free for commercial use.

---

Built originally on Emergent — portable to any host. No vendor lock-in.
