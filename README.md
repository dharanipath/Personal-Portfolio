# Dev Portfolio

Personal portfolio built with **React + Vite**, featuring live GitHub repo integration via the GitHub REST API and component-scoped styling with CSS Modules.

**Live:** [dharanipathi.dev](https://personal-portfolio-nu-vert-58.vercel.app) &nbsp;·&nbsp; **GitHub:** [dharanipath](https://github.com/dharanipath)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Styling | CSS Modules |
| Data | GitHub REST API (unauthenticated) |
| Deployment | Vercel |

---

## Project structure

```
src/
├── data/config.js          # Single source of truth for all personal content
├── hooks/useGitHub.js      # GitHub API integration
└── components/
    ├── Navbar, Hero, About
    ├── Skills, Projects
    ├── RepoCard, Contact, Footer
```

---

## Getting started

**Prerequisites:** Node.js ≥ 18, npm ≥ 9

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## Personalisation

All content is managed from a single file: **`src/data/config.js`**

| Key | Purpose |
|---|---|
| `PERSONAL.name` | Full name |
| `PERSONAL.email` | Contact email |
| `PERSONAL.github` | GitHub profile URL |
| `PERSONAL.linkedin` | LinkedIn URL |
| `PERSONAL.githubUsername` | Username that drives the repos section |
| `PERSONAL.bio` | Biography paragraphs (array) |
| `STATS` | Hero section numbers — years, projects, etc. |
| `SKILLS` | Skill cards with icon, name, description, level |
| `STACK_PILLS` | Tech pills in the About section |
| `TIMELINE` | Career and education entries |

---

## Theming

Design tokens are defined in `src/index.css` under `:root`. Override accent colours, backgrounds, or fonts there — no component changes needed.

```css
:root {
  --accent:  #7C6FF0;   /* primary accent */
  --accent2: #C084FC;   /* gradient endpoint */
  --green:   #34D399;   /* availability indicator */
}
```

---

## GitHub API

The Projects section calls the unauthenticated GitHub REST API (rate limit: 60 req/hr per IP). To raise the limit, add a personal access token:

```bash
# .env
VITE_GITHUB_TOKEN=your_token_here
```

Then pass it as an `Authorization` header in `useGitHub.js`:

```js
headers: {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
}
```

---

## Deploy to Vercel

1. Push to a GitHub repository
2. Import the repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — click **Deploy**

---

## License

MIT — free to use, attribution appreciated.
