# 🚀 Dev Portfolio — React + Vite

A sleek, production-grade personal portfolio built with React, Vite, and CSS Modules.
Features a **live GitHub integration** that fetches real repos via the GitHub REST API.

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Root component
│   ├── index.css             # Global styles & design tokens
│   ├── data/
│   │   └── config.js         # ← EDIT THIS to personalize
│   ├── hooks/
│   │   └── useGitHub.js      # GitHub API hook
│   └── components/
│       ├── Navbar.jsx / .module.css
│       ├── Hero.jsx   / .module.css
│       ├── About.jsx  / .module.css
│       ├── Skills.jsx / .module.css
│       ├── Projects.jsx / .module.css
│       ├── RepoCard.jsx / .module.css
│       ├── Contact.jsx  / .module.css
│       └── Footer.jsx   / .module.css
```

---

## ✏️ Personalization

Open **`src/data/config.js`** and update:

| Field              | Description                              |
|--------------------|------------------------------------------|
| `PERSONAL.name`    | Your full name                           |
| `PERSONAL.email`   | Contact email                            |
| `PERSONAL.github`  | Your GitHub profile URL                  |
| `PERSONAL.linkedin`| Your LinkedIn URL                        |
| `PERSONAL.twitter` | Your Twitter/X URL                       |
| `PERSONAL.githubUsername` | GitHub username for the repos section |
| `PERSONAL.bio`     | Array of biography paragraphs            |
| `STATS`            | Hero section numbers (years, projects…)  |
| `SKILLS`           | Skill cards with icon, name, desc, level |
| `STACK_PILLS`      | Tech pills in About section              |
| `TIMELINE`         | Career / education timeline              |

---

## 🛠 Setup & Development

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install dependencies
```bash
npm install
```

### Start dev server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```

Output goes to `dist/` — deploy to Vercel, Netlify, GitHub Pages, etc.

### Preview production build
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel (recommended)

1. Push your project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — click **Deploy**
4. Done! Your portfolio is live 🎉

---

## 🎨 Theming

All design tokens live in `src/index.css` under `:root`. Change the accent colors, backgrounds, or fonts there.

```css
:root {
  --accent:  #7C6FF0;   /* primary purple */
  --accent2: #C084FC;   /* gradient end   */
  --green:   #34D399;   /* availability dot */
  /* ... */
}
```

---

## 📡 GitHub API

The Projects section uses the **unauthenticated** GitHub REST API, which has a rate limit of 60 requests/hour per IP. For higher limits, add a `VITE_GITHUB_TOKEN` env variable and update `useGitHub.js` to include an `Authorization` header:

```js
headers: {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
}
```

---

## 📜 License

MIT — use freely, attribution appreciated.
