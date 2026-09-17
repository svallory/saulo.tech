# saulo.tech

Hub site for Saulo Vallory's projects: a curated list of open-source work with an image, a short description, and links to the repo, docs, and package for each.

Built with [Marko 6](https://markojs.com) and [@marko/run](https://github.com/marko-js/run) (static adapter), styled with Tailwind v4, using [marko-ui](https://marko-ui.saulo.tech) components. Will live at <https://saulo.tech>; deployment is not wired up yet.

## Development

Bun only, never npm.

```bash
bun install
bun run dev       # local dev server
bun run build     # static export to dist/public/
bun run check     # typecheck
bun run validate  # validate the built HTML
```

To preview a build, serve the export: `bunx serve dist/public`.

## Adding a project

Every project on the site is one object in [`src/data/projects.ts`](src/data/projects.ts).
Add an entry, drop a 480×270 image in `public/img/`, and the card, the hero
index, and the npm version badge all follow.

## License

MIT
