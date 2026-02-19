# Claude Code Instructions

## Rules

- **Always refer to official documentation** before writing or suggesting code. Never rely on memory or assumptions about APIs, libraries, or framework behaviour. If in doubt, fetch the docs.
- **Never hallucinate APIs, props, or function signatures.** If you are not certain something exists, look it up first.
- **Only write or modify code when explicitly told to do so.** Do not proactively add, install, or scaffold anything that was not requested. This includes state management, event handlers, interactivity, or any other logic — if the user asks for a UI, deliver only the markup and styling, nothing more.
- **Do not add placeholder or example content unless explicitly asked.** If the user asks for a UI with no data, leave it empty — do not populate it with dummy data, sample text, or mock entries.

## Color Scheme

Always refer to colors by their semantic name rather than their hex value, so the palette stays easy to update.

| Name     | CSS Variable          | Hex       |
|----------|-----------------------|-----------|
| Primary  | `var(--color-primary)`  | TBD       |
| Secondary| `var(--color-secondary)`| TBD       |
| Tertiary | `var(--color-tertiary)` | TBD       |

In Tailwind, use `bg-primary`, `text-secondary`, `bg-tertiary`, etc. The variables are defined in `src/app/globals.css`.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

## Docs

- Next.js: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
