/**
 * Every project shown on the home page. Adding a project is adding one object
 * to this array — nothing else in the site needs to change.
 *
 * `npm` is the published package name; it drives the shields.io version badge.
 * Leave it out (or set `wip`) and no badge is rendered.
 */
export interface Project {
  /** Short name, used as the card heading and the hero index entry. */
  name: string;
  /** One line, sentence case, no trailing period. Kept under ~90 chars. */
  pitch: string;
  /** Path under `public/`. */
  image: string;
  /** Describes the image for someone who cannot see it. */
  alt: string;
  repo: string;
  docs?: string;
  /** npm package name, e.g. `@marko-ui/shadcn`. Omitted when unpublished. */
  npm?: string;
  /** Not released yet: shows a "work in progress" mark and suppresses the version badge. */
  wip?: boolean;
  /** Language/runtime the project targets, shown as a plain badge. */
  tech: string;
}

export const projects: Project[] = [
  {
    name: "marko-ui",
    pitch: "86 accessible, themeable Marko components in eight built-in styles",
    image: "/img/marko-ui.svg",
    alt: "Overlapping component panels in violet and paper tones, the marko-ui mark",
    repo: "https://github.com/svallory/marko-ui",
    docs: "https://marko-ui.saulo.tech",
    npm: "@marko-ui/shadcn",
    tech: "Marko 6",
  },
  {
    name: "marko-zag",
    pitch: "Zag.js state machines bound to Marko 6, safe through server rendering",
    image: "/img/marko-zag.svg",
    alt: "A state-machine diagram of three connected nodes",
    repo: "https://github.com/svallory/marko-zag",
    docs: "https://marko-zag.saulo.tech",
    npm: "marko-zag",
    tech: "Marko 6",
  },
  {
    name: "go-marko",
    pitch: "Compile Marko templates to type-safe Go, with no Node at runtime",
    image: "/img/go-marko.svg",
    alt: "Angle brackets resolving into a Go function signature",
    repo: "https://github.com/svallory/go-marko",
    docs: "https://go-marko.saulo.tech",
    npm: "marko-go",
    tech: "Go",
  },
  {
    name: "hyper-coding",
    pitch: "Recipe-driven code generation with quality checkpoints built into the loop",
    image: "/img/hyper-coding.svg",
    alt: "Nested generation frames stepping toward a checked output",
    repo: "https://github.com/svallory/hyper-coding",
    docs: "https://hyperdev.saulo.engineer",
    npm: "@hypercli/cli",
    tech: "TypeScript",
  },
  {
    name: "tempad",
    pitch: "Rebuild your day hour by hour from git, Monday, and Claude Code sessions",
    image: "/img/tempad.svg",
    alt: "A row of time blocks assembling into a filled timesheet bar",
    repo: "https://github.com/svallory/tempad",
    tech: "TypeScript",
  },
  {
    name: "claude-plugins",
    pitch: "Plugins for Claude Code: ghostwriter, demo-video, team-lead, and hyper",
    image: "/img/claude-plugins.svg",
    alt: "Four plug shapes seated in a single socket rail",
    repo: "https://github.com/svallory/claude-plugins",
    tech: "Claude Code",
  },
  {
    name: "mxlang",
    pitch: "One template language that compiles to Solid, React, Preact, Hono, and Astro",
    image: "/img/mxlang.svg",
    alt: "A single source glyph fanning out into five target marks",
    repo: "https://github.com/svallory/mxlang",
    wip: true,
    tech: "Compiler",
  },
];
