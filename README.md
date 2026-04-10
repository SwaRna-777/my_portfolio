# Swarna Sagar Katuri — Portfolio

Cloud & Infrastructure Engineer | DevOps & Automation | AI & Data Systems  
Berlin, Germany

---

## Quick Start (any machine)

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation): `npm install -g pnpm`

### Run locally

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server (hot reload)
pnpm dev
# → open http://localhost:3000
```

### Build for production

```bash
pnpm build
# output in ./dist/

pnpm preview
# → preview at http://localhost:4173
```

---

## GitHub Codespaces

1. Open this repo in Codespaces
2. The dev container auto-installs everything
3. Run `pnpm dev` and open the forwarded port 3000

---

## Docker

```bash
# Build & run
docker compose up --build

# → open http://localhost:8080
```

---

## Deploy to AWS S3 (static hosting)

```bash
pnpm build
aws s3 sync dist/ s3://YOUR-BUCKET-NAME --delete
aws s3 website s3://YOUR-BUCKET-NAME --index-document index.html --error-document index.html
```

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Deploy to Netlify

```bash
npm install -g netlify-cli
pnpm build
netlify deploy --dir=dist --prod
```

---

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── sections/       ← Hero, About, Skills, Education, Projects, Contact
│   │   ├── layout/         ← NavBar, Footer
│   │   └── ui/             ← Button, Badge, Card (shadcn-style)
│   ├── hooks/              ← use-in-view.ts (IntersectionObserver animations)
│   ├── lib/                ← utils
│   └── pages/Home.tsx      ← Main page assembling all sections
├── public/
│   └── images/             ← hero-bg.png, profile.jpg
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Updating Content

All content is hardcoded in `src/components/sections/`:

| Section     | File                        |
|-------------|-----------------------------|
| Hero        | `sections/Hero.tsx`         |
| About       | `sections/About.tsx`        |
| Skills      | `sections/Skills.tsx`       |
| Education   | `sections/Education.tsx`    |
| Projects    | `sections/Projects.tsx`     |
| Contact     | `sections/Contact.tsx`      |

Edit the data arrays in each file and the site updates automatically on save.

---

## Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `No package.json found` | Make sure you're in the project root folder, not a subfolder |
| `pnpm: command not found` | Run `npm install -g pnpm` first |
| `Port already in use` | Change `PORT=3001 pnpm dev` |
| `vite: not found` | Run `pnpm install` first |
| Docker: `permission denied` | Run with `sudo docker compose up --build` |
| White screen in S3 | Enable "Static website hosting" and set error document to `index.html` |

---

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Vite 7** (build tool)
- **Tailwind CSS 4**
- **Radix UI** (accessible components)
- **Lucide React** (icons)
- **Nginx Alpine** (production server in Docker)

Bundle size: ~100 KB gzipped
