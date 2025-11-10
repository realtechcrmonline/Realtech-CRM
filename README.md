# Realtech CRM

A Next.js 15 app for a real-estate focused CRM with AI-assisted workflows (Google Genkit), built with React, TypeScript, Tailwind CSS, and Radix UI components. Deployed via Firebase App Hosting.


## Repository structure

```
.
├─ apphosting.yaml                # Firebase App Hosting config
├─ components.json                # shadcn/ui registry (component generator metadata)
├─ docs/
│  └─ blueprint.md               # Product/features/style blueprint
├─ next.config.ts                 # Next.js config
├─ package.json                   # Scripts and dependencies
├─ postcss.config.mjs             # PostCSS config
├─ tailwind.config.ts             # Tailwind config
├─ tsconfig.json                  # TypeScript config
├─ src/
│  ├─ ai/
│  │  ├─ dev.ts                  # Genkit dev entry (flows registration)
│  │  ├─ genkit.ts               # Genkit init (Google GenAI plugin + model)
│  │  └─ flows/                  # AI flows (server-side)
│  │     ├─ automate-lead-communication.ts
│  │     ├─ automate-repetitive-tasks.ts
│  │     ├─ generate-sales-script.ts
│  │     └─ suggest-client-nurturing-actions.ts
│  ├─ app/                        # Next.js App Router
│  │  ├─ (app)/                   # Authenticated app shell + feature pages
│  │  │  ├─ appointments/page.tsx
│  │  │  ├─ contacts/page.tsx
│  │  │  ├─ crm/page.tsx
│  │  │  ├─ dashboard/page.tsx
│  │  │  ├─ get-started/page.tsx
│  │  │  ├─ leads/page.tsx
│  │  │  ├─ recordings/page.tsx
│  │  │  ├─ settings/page.tsx
│  │  │  ├─ tasks/page.tsx
│  │  │  ├─ templates/page.tsx
│  │  │  └─ transcriptions/page.tsx
│  │  ├─ layout.tsx               # Root layout
│  │  ├─ page.tsx                 # Marketing/landing home
│  │  ├─ privacy/page.tsx
│  │  └─ terms/page.tsx
│  ├─ components/                 # UI components (shadcn-style + app widgets)
│  │  ├─ ui/                      # Reusable primitives (Radix-based)
│  │  ├─ landing-header.tsx
│  │  ├─ landing-footer.tsx
│  │  └─ lead-actions.tsx
│  ├─ data/
│  │  └─ mock-data.ts             # Sample/mock data
│  ├─ hooks/
│  │  ├─ use-mobile.tsx
│  │  └─ use-toast.ts
│  └─ lib/
│     ├─ placeholder-images.(json|ts)
│     └─ utils.ts
└─ README.md
```


## Frameworks and libraries

- **Frontend**
  - **Next.js 15** (App Router) + **React 18**
  - **TypeScript**
  - **Tailwind CSS** + **PostCSS**
  - **Radix UI** (via shadcn-style components in `src/components/ui`)
  - **Recharts** (charts in dashboard/analytics)
  - **Lucide React** (icons)

- **AI**
  - **Google Genkit** (`genkit`) with **@genkit-ai/google-genai** plugin
  - Default model configured: `googleai/gemini-2.5-flash`

- **Platform/hosting**
  - **Firebase App Hosting** (`apphosting.yaml`)
  - **Firebase Web SDK** is present for client-side usage; no Admin SDK detected


## Web pages / use-cases

Public/marketing:
- `/` Home/landing
- `/privacy` Privacy
- `/terms` Terms

App (in `src/app/(app)`):
- **Dashboard**: `/dashboard` — KPIs, charts, recent activity
- **CRM**: `/crm` — high-level CRM overview
- **Leads**: `/leads` — manage leads
- **Contacts**: `/contacts` — contact directory
- **Appointments**: `/appointments` — schedule and review meetings
- **Tasks**: `/tasks` — task list and assignments
- **Templates**: `/templates` — content/message templates
- **Recordings**: `/recordings` — call/meeting recordings
- **Transcriptions**: `/transcriptions` — generated transcripts
- **Settings**: `/settings` — app/user preferences
- **Get Started**: `/get-started` — onboarding/help

AI-assisted flows (server-side in `src/ai/flows`):
- **Automate lead communication**: response/follow-up plans
- **Automate repetitive tasks**: task automation suggestions
- **Suggest client nurturing actions**: next-best-actions
- **Generate sales script**: tailored sales talking points


## Getting started (local development)

Prerequisites:
- Node.js 18+ (recommended LTS), npm 9+

Install and run:

```bash
npm install
npm run dev     # Next.js dev server (Turbopack) on http://localhost:9002
```

Type-check, lint, build:

```bash
npm run typecheck
npm run lint
npm run build
npm start       # production server
```

Genkit (AI flows) local dev:

```bash
# Load env from .env then start Genkit with registered flows
npm run genkit:dev

# or watch mode
npm run genkit:watch
```


## Configuration and environment

Create a `.env` in the project root for local development. Depending on your integrations, you may need:

- Genkit / Google AI:
  - `GOOGLE_GENAI_API_KEY` (or credentials required by `@genkit-ai/google-genai`)

- Firebase (if you wire up client-side features):
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - `NEXT_PUBLIC_FIREBASE_APP_ID`

Note: The current codebase imports `firebase` (web SDK), but does not yet initialize it in `src/lib` or similar. Add your initialization module and import it where needed if you enable Firebase features.


## Missing or to-clarify before starting work

- **Auth & data model**: No auth provider or backend data model is defined. Confirm whether to use Firebase Auth/Firestore, or another backend.
- **API routes / server actions**: App pages are present, but no API routes or server actions are wired to persistence. Define data contracts and endpoints (Next.js Route Handlers, server actions, or external APIs).
- **State management**: No global state solution is configured. Confirm whether to use React Query, Zustand, Redux, or server components + URL state.
- **Design system**: Tailwind + shadcn-style components exist. Confirm theming, tokens, and component usage patterns.
- **Analytics & logging**: No analytics/logging providers are configured. Decide on tools (e.g., Vercel Analytics, GA4, Sentry, LogRocket).
- **Deployment**: `apphosting.yaml` suggests Firebase App Hosting. Confirm environment separation (dev/stage/prod) and CI/CD workflow.
- **AI model & quotas**: Model set to `googleai/gemini-2.5-flash`. Confirm allowed models, billing project, quotas, and safety settings.
- **Content/Copy**: Pages are present as shells. Provide product copy and real data to replace placeholders.


## References

- Product blueprint: `docs/blueprint.md`
- Next.js App Router docs: `https://nextjs.org/docs/app`
- Genkit docs: `https://firebase.google.com/docs/genkit`
- Radix UI: `https://www.radix-ui.com/`
- Tailwind CSS: `https://tailwindcss.com/`
