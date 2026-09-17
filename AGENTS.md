# saulo.tech — agent instructions

## What this is

The hub site that will live at https://saulo.tech (deployment is not wired up
yet): a small static site listing Saulo Vallory's projects. Marko 6 + `@marko/run` with the static adapter, Tailwind v4, marko-ui components. Content lives in a single data file under `src/data/`; adding a project is a one-object change.

## Commands

Bun only. Never use npm.

```bash
bun install
bun run dev       # dev server
bun run build     # static export to dist/public/
bun run check     # typecheck (marko-type-check; plain tsc does not read .marko)
bun run validate  # html-validate over the built pages (build first)
```

The static adapter writes pages to `dist/public/`, not `dist/`. Serve that
directory when previewing a build: `bunx serve dist/public -l 4321`.

## Layout and styling

- One page per route under `src/routes/`; shared pieces live in `src/components/`.
- `src/data/projects.ts` is the only content file. Adding a project is adding one
  object to the exported array.
- `src/app.css` holds the whole theme. Dark mode is driven by
  `prefers-color-scheme`, not a `.dark` class, so nothing toggles a theme at
  runtime. `dark:` utilities still work via a `@custom-variant` declared there.
- marko-ui is installed in **copy** distribution: components are real files under
  `src/components/ui/` and are ours to edit. Add more with
  `bunx marko-ui add <component>` (registry defaults to
  https://marko-ui.saulo.tech/r).
- Registry components import with explicit `.ts` extensions, so `tsconfig.json`
  needs `allowImportingTsExtensions: true`. `create-marko`'s scaffold does not
  set it and `marko-ui init` does not add it; without it `bun run check` fails on
  every component with TS5097.
- `mu-font-heading` is a hook class the *import* distribution defines. In copy
  mode it arrives on the card title with no rule behind it, so `src/app.css`
  defines it.

## Quality gates

Verified for `/`: Lighthouse 100 across performance, accessibility,
best-practices and SEO; axe 0 violations in both colour schemes; html-validate
clean. `.htmlvalidate.json` turns off `attr-quotes` and `doctype-style` — both
are source-style preferences that fire on minified build output and say nothing
about validity.

## Deployment

Coolify instance: https://cool.saulo.tech. App name `saulo-tech`, project uuid
`f313me142hwa32qmhl52cu85`, server uuid `tzjmuwhdqk7p880lpjvmsubz`,
environment `production` (uuid `s3a95pp3ilycx8pw8svgtcco`). Build pack
`dockerfile`, repo `https://github.com/svallory/saulo.tech`, branch `main`,
port `80`, domain `https://saulo.tech`. Push to `main` auto-deploys via
webhook once the app is created and the branch's webhook is configured in
Coolify.

The root `Dockerfile` is a two-stage build: `oven/bun:1` builds the static
export (`bun run build` → `dist/public/`), `nginx:alpine` serves it with
`nginx.conf` (long-cache on `/assets/`, no-cache on HTML, gzip, real 404s —
no SPA fallback to `index.html`).

Inspect a running deployment:

```bash
coolify app logs <app-uuid> --follow -n 100
coolify app deployments list <app-uuid>
coolify app get <app-uuid> --format json
```

Never print, log, or commit a Coolify token.

## Conventions

- Conventional commits: `type(scope): summary`. Never put agent session ids in commit messages; they belong in the PR description's AI-assisted note.
- Base branch for PRs: `main`.
- Secrets never enter the repo. Local `.env` lives at the hyper space root, not in a worktree.
- This repo is usually checked out inside a hyper space (`~/work/saulo.tech`); read the space's `HYPER.md` when working there.
