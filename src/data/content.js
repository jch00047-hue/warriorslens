// src/data/content.js
//
// Content layer for Warrior's Lens.
//
// Every word and image on the site lives in `public/content/*.json`, which is
// what the editor in `/admin` writes to. `src/data/mock.js` stays as the
// bundled fallback so the site still renders its original copy and imagery if
// a content file is missing or the fetch fails.
//
// The public folder is served under a sub-path on GitHub Pages, so any image
// path is normalized through `media()` to keep working in dev and in the build.

import * as MOCK from "./mock";

export const PUBLIC_ROOT = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");

/**
 * Resolve a content image path. Accepts absolute URLs (Wix / DVIDS), paths
 * relative to the public folder (`pershing/F64A1072.jpg`), paths written by the
 * CMS (`/warriorslens/uploads/new.jpg`) and fully-prefixed public URLs.
 */
export const media = (src) => {
  if (!src) return "";
  const value = String(src).trim();
  if (/^(https?:|data:|blob:)/i.test(value)) return value;
  const withoutBase = value.replace(/^\/?warriorslens\/?/i, "");
  const relative = withoutBase.replace(/^\/+/, "");
  return `${PUBLIC_ROOT}/${relative}`;
};

/** Split a blog body into paragraphs on blank lines. */
export const paragraphsOf = (post) => {
  if (!post) return [];
  if (Array.isArray(post.paragraphs) && post.paragraphs.length) {
    return post.paragraphs.filter(Boolean);
  }
  return String(post.body || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
};

export const CONTENT_FILES = [
  "site",
  "hero",
  "about",
  "work",
  "capabilities",
  "experience",
  "volunteer",
  "chargers",
  "journal",
  "press",
  "insights",
  "coursework",
  "marquee"
];

/** The site as it shipped, used until (or unless) the JSON loads. */
export const DEFAULT_CONTENT = {
  site: MOCK.SITE,
  nav: MOCK.NAV,
  hero: { image: MOCK.HERO_IMAGE, stats: MOCK.HERO_STATS },
  about: { ...MOCK.ABOUT, portrait: MOCK.PORTRAIT_IMAGE },
  work: { categories: MOCK.CATEGORIES, projects: MOCK.PROJECTS },
  capabilities: { items: MOCK.CAPABILITIES },
  experience: { entries: MOCK.EXPERIENCE },
  volunteer: MOCK.VOLUNTEER,
  chargers: MOCK.CHARGERS,
  journal: { posts: MOCK.POSTS },
  press: MOCK.PRESS,
  insights: MOCK.IMC_SECTION,
  coursework: MOCK.COURSEWORK,
  marquee: { items: MOCK.CLIENT_LOGOS }
};
