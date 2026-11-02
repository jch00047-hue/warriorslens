# Warrior’s Lens — SSG Julio C. Hernandez

Portfolio site for SSG Julio C. Hernandez (U.S. Army Combat Photographer & Public Affairs Specialist, currently serving with the **5th Armored Brigade at Fort Bliss, Texas**).

React (Create React App) front end — no server, no database. Deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`.

- **Live site:** https://jch00047-hue.github.io/warriorslens/
- **Editor:** https://jch00047-hue.github.io/warriorslens/admin/

## Editing the site (no code required)

1. Open **/admin/** on the live site.
2. Click **Sign In with Token** and paste a GitHub personal access token (classic token with `repo` scope, or a fine-grained token with **Contents: Read and write** on this repository). The token is stored in your browser only.
3. Pick a collection in the left rail — Identity & contact, Hero, About, Selected work, Capabilities, Service history, Volunteer project, Chargers 2021, **Field notes (blog)**, Press, IMC campaigns, Coursework, Scrolling credits.
4. Edit, upload images, and press **Save**. The CMS commits to `main`; GitHub Actions rebuilds and republishes in about a minute.

### Adding photos

- **Gallery frames:** *Selected work* → Frames → add a frame, pick its image, filter, location, year, and tile size (normal / wide / tall / wide + tall).
- **Blog covers / project galleries:** any image field accepts an upload. Uploads are stored in `public/uploads/`.
- Site copy, timeline, and contact details are all plain text fields — nothing is hardcoded in components anymore.

### Adding a blog post

*Field notes (blog)* → Posts → add an entry:

| Field | Notes |
| --- | --- |
| Slug | URL-safe, unique (used by `/posts/<slug>.html` links) |
| Headline, Date, Category, Dek | Date is `YYYY-MM-DD` |
| Cover image, caption | Optional |
| Body | One big text box — leave a **blank line** between paragraphs |
| References | Optional list of links shown at the end of the essay |

Posts appear in the Field Notes section between Service history and Contact.

## How content works

```
public/content/*.json   ← single source of truth (what the editor writes)
src/data/content.js     ← loads those files, normalizes image paths
src/data/ContentProvider.jsx ← React context, fetched at runtime
src/data/mock.js        ← bundled fallback copy, used if a file is missing
```

The site renders instantly from the bundled fallback, then swaps in `public/content/*.json` when it loads. If a content file is missing or a field is blank, the fallback fills it in, so the layout never breaks.

Image paths are normalized by `media()`, so all of these work: `pershing/F64A1072.jpg`, `/warriorslens/uploads/new.jpg`, and absolute `https://` URLs (Wix / DVIDS).

## Local preview

```bash
npm ci
npm start          # http://localhost:3000
```

Production build:

```bash
npm run build      # outputs ./build
```

## Repo layout

- `src/` — React app. Sections: Hero, About, Selected work, Capabilities, Volunteer, Chargers, Service history, Press, Coursework, IMC campaigns, **Field Notes**, Contact, Footer.
- `public/content/` — editable content (JSON).
- `public/admin/` — the CMS (Sveltia). `config.yml` defines every collection.
- `public/uploads/`, `public/pershing/`, `public/chargers-2021/` — imagery.
- `admin/` — mirror of `public/admin/` so `/admin/` also resolves when Pages serves the branch root.
- `warriorslens-export/`, `posts/` — legacy Wix/export artifacts, not used by the build.

## Notes

- GitHub Pages must serve the **GitHub Actions** artifact for CMS edits to appear automatically. If Pages is set to *Deploy from a branch*, switch it to **GitHub Actions**, or the build in `./build` has to be committed by hand.
- Token auth needs no OAuth app or server. To add the full sign-in-with-GitHub flow later, deploy `sveltia-cms-auth` on Cloudflare Workers and add `base_url:` under `backend:`.

---

DVIDS imagery is U.S. Government public-domain. Site copyright © Julio C. Hernandez.
