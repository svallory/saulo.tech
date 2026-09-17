# saulo.tech — agent instructions

## What this is

The hub site at https://saulo.tech: a small static site listing Saulo Vallory's projects. Marko 6 + `@marko/run` with the static adapter, Tailwind v4, marko-ui components. Content lives in a single data file under `src/data/`; adding a project is a one-object change.

## Commands

Bun only. Never use npm.

```bash
bun install
bun run dev       # dev server
bun run build     # static export to dist/
bun run check     # typecheck
```

## Conventions

- Conventional commits: `type(scope): summary`. Never put agent session ids in commit messages; they belong in the PR description's AI-assisted note.
- Base branch for PRs: `main`.
- Secrets never enter the repo. Local `.env` lives at the hyper space root, not in a worktree.
- This repo is usually checked out inside a hyper space (`~/work/saulo.tech`); read the space's `HYPER.md` when working there.
