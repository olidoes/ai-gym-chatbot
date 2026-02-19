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
| Primary  | `var(--color-primary)`  | `#080705` |
| Secondary| `var(--color-secondary)`| `#9ca3af` |
| Tertiary | `var(--color-tertiary)` | `#ffffff`  |

In Tailwind, use `bg-primary`, `text-secondary`, `bg-tertiary`, etc. The variables are defined in `src/app/globals.css`.

### Chat UI Tokens

Additional semantic tokens used by the chat UI, also defined in `src/app/globals.css`:

| Token                  | Tailwind Class           | Value     | Usage                          |
|------------------------|--------------------------|-----------|--------------------------------|
| `--color-card`         | `bg-card`                | `#ffffff` | Chat card background           |
| `--color-card-border`  | `border-card-border`     | `#e5e7eb` | Card and section borders       |
| `--color-card-foreground` | `text-card-foreground` | `#080705` | Primary text inside the card   |
| `--color-muted`        | `bg-muted`               | `#f3f4f6` | Page background, input bg, AI bubble bg |
| `--color-muted-foreground` | `text-muted-foreground` | `#6b7280` | Placeholder and secondary text |
| `--color-bubble-ai`    | `bg-bubble-ai`           | `#f3f4f6` | AI message bubble background   |
| `--color-bubble-user`  | `bg-bubble-user`         | `#080705` | User message bubble background |
| `--color-input-bg`     | `bg-input-bg`            | `#f3f4f6` | Textarea container background  |

The theme is **light**. AI bubbles use `text-card-foreground` (dark text). User bubbles use `text-tertiary` (white text) since their background is dark.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

## Libraries

- **`lucide-react`** — Icon library. Currently used for the `ArrowUp` send icon in the chat input. Import icons directly: `import { ArrowUp } from "lucide-react"`.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind import + all CSS custom properties (color tokens)
│   ├── layout.tsx        # Root layout, sets metadata ("AI Gym Chatbot")
│   └── page.tsx          # Entry page — renders <ChatCard /> centered on a muted background
├── components/
│   └── chat-card.tsx     # The main chat UI component (header, message list, input bar)
└── lib/
    ├── gym_data.json      # Source of truth for gym class data — AI must only reference this
    └── system_prompt.xml  # System prompt for the AI persona and response rules
```

## AI / Chatbot Context

- The chatbot acts as a gym receptionist for a configurable `{gym_name}`.
- It only answers questions about gym classes. All other topics should be ignored.
- Class data lives exclusively in `src/lib/gym_data.json`. The AI must not look up or invent information outside this file.
- If a user asks about classes vaguely, the AI should ask at most 2 short clarifying questions (goal, schedule, or experience level) before making recommendations.
- Responses should be plain English, concise, and kind — no em dashes, no unnecessary filler.
- The system prompt is defined in `src/lib/system_prompt.xml`.

## Docs

- Next.js: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- lucide-react: https://lucide.dev/guide/packages/lucide-react
