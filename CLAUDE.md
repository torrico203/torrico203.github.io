# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static GitHub Pages portfolio site for 임재균 (JaeGyun Lim), served from the `main` branch of `torrico203/torrico203.github.io` at https://torrico203.github.io. Primary audience and content language is Korean; English is provided via runtime locale switch.

## Build / deploy / preview

There is **no build step**. No `package.json`, no bundler, no CI. The main page is a single `index.html` plus three sibling files in `assets/`. Third-party assets (Google Fonts, etc.) are loaded at runtime from public CDNs.

- **Deploy**: `git push origin main` — GitHub Pages serves the repo root directly.
- **Local preview**: opening `index.html` directly with `file://` works (data is loaded as a JS module, not via `fetch`). For sub-page links (`game/`, `h5/`, `tech/`) to behave correctly, run `python -m http.server 8000` from the repo root.
- **Commit messages are Korean** (see `git log`) — match the existing style when committing.

## Architecture

The portfolio is a single-page app (no router, no framework, no build) wired together by four files:

```
index.html        Section markup + data-* hooks
assets/data.js    All content (profile, experience, projects, awards, ...) — bilingual
assets/i18n.js    UI labels (nav, buttons, table headers) — bilingual
assets/style.css  Slate + indigo design system, single stylesheet
assets/app.js     Locale resolver, renderers, tab + language toggle wiring
```

How content lands on the page:

- **`data-i18n="key"`** — element gets `textContent` from `__I18N__[lang][key]`. Used for static UI strings.
- **`data-content="dot.path"`** — element gets `textContent` from a path in `__DATA__` (objects shaped `{ ko, en }` are auto-localized).
- **`data-attr-src="dot.path"`** — same lookup, but assigned to `src` (image hero photo).
- **`data-render="name"`** — `app.js`'s `renderers[name](lang)` returns an HTML string; the element's `innerHTML` is replaced. One renderer per dynamic block (projects, experience, govProjects, etc.).

Locale resolution (in `app.js`'s `detectLang`): `?lang=` query param → `localStorage.lang` → `navigator.language` → `"ko"`. The chosen lang is written back to both query and localStorage on every change so links you copy carry it.

When adding content, edit `data.js`. Most fields use the `{ ko, en }` shape — the renderer falls back to `ko` if a language is missing, so partial English is OK.

**Adding a new project to `projects[]`**: required fields are `id`, `year`, `period`, `kind`, `name`, `tagline`, `bullets`. All optional: `stack`, `platforms`, `liveUrl` (renders a "Visit project" CTA), `caseStudyUrl` (renders a secondary "Tech notes" CTA — typically points at `projects/<id>.html`), `videoEmbed` (iframe — must be a `*/embed/*` or `.../preview` URL, not the watch URL), `videoLink` (raw URL shown in print). Web/game projects without a video can omit `videoEmbed`/`videoLink` entirely; the card just skips the media block.

**Deep-dive case-study pages** live under `projects/<id>.html` and are standalone static pages (no SPA wiring, no i18n toggle — most are Korean-only with a small notice). They reuse `../assets/style.css` and the `.prose` typography class for long-form content. See `projects/armi.html` as the reference template — section structure (`<h2>` per major area), `<code>` for file/function references, `.callout` block for caveats/honesty notes, `<blockquote>` for the summary block.

## File-organization conventions

- **Subdirectory pages are independent landing pages**, not shared partials, and were intentionally left out of the SPA consolidation:
  - `game/` — board-game prototypes (`Board_DB.html` is the only page with a backend; it talks to Supabase via the CDN client and embeds `SUPABASE_URL` + anon key in the page).
  - `h5/` — HTML5 game-business pitch deck (`h5.html` uses Chart.js for embedded charts; `gamelist.html` and `phase1_details.html` are supporting pages).
  - `tech/` — interactive tech-demo write-ups (`bubblepop.html`, `platform.html`).
  - `my-protected-game-list/gamelist.html` is a near-duplicate of `h5/gamelist.html`. If you change one, check whether the other should change too.
- All `gamelist.html` pages link out to external games hosted at `cdn.zip-lab.co.kr/data/<game>/game/` — these URLs are not under this repo's control.
- The pre-consolidation pages have been moved to `old/` (`index_en.html`, `resume.html`, `resume_en.html`, `portfolio_projects.html`, `portfolio_projects_en.html`, `about.html`). They are no longer linked from the main site but kept in case external URLs ever land on them.
- `bell.html` (a 돌잔치 초대장 / personal invitation page) and `tech-docs.html` (the hub that `tech/bubblepop.html` and `tech/platform.html` link back to) are kept at the repo root — both have likely-shared URLs or inbound links from sibling pages.

## Editing notes specific to this codebase

- **Print/PDF is a first-class output for the resume.** The `@media print` rules in `style.css` strip the topbar, hero buttons, and video iframes; expand all About tabs; and substitute text URLs for embedded videos. The "Print Resume / PDF" button in the hero is just `window.print()`. If you add a new section, give it sensible print styles in the same block.
- **Korean-first font stack**: `"Noto Sans KR"` from Google Fonts, with `"Malgun Gothic"` as the system fallback. Don't replace it with a Latin-only font.
- **No bundler, no Tailwind, no framework** — the SPA is intentionally vanilla. Don't reach for npm; if something feels like it needs a build step, push back on the requirement first.
