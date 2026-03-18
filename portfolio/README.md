# Swarna Sagar Katuri — Portfolio Website

A fast, lightweight personal portfolio for a **Cloud & Infrastructure Engineer**.  
Built with React + Vite + Tailwind CSS. **Zero runtime dependencies** — ships as pure static files.

---

## Tech Stack

| Layer     | Technology            | Version |
|-----------|----------------------|---------|
| Framework | React                | 19      |
| Bundler   | Vite                 | 7       |
| Styling   | Tailwind CSS         | 4       |
| Language  | TypeScript           | 5.9     |
| Router    | Wouter               | 3       |
| Icons     | Lucide React         | latest  |
| Server    | Nginx (production)   | 1.27    |
| Container | Docker               | any     |

**Production bundle:** ~100 KB gzipped · No backend · No database · No API keys needed.

---

## Prerequisites

| Tool     | Min Version | Install                        |
|----------|-------------|-------------------------------|
| Node.js  | 20 LTS      | https://nodejs.org             |
| pnpm     | 9+          | `npm install -g pnpm`          |
| Docker   | 24+         | https://docs.docker.com/get-docker/ |
| Git      | any         | https://git-scm.com            |

---

## Project Structure

```
artifacts/portfolio/
├── src/
│   ├── components/
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Education.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   ├── hooks/
│   │   ├── use-in-view.ts     ← scroll animations (no framer-motion)
│   │   └── use-toast.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   └── index.css
├── public/
│   └── images/
│       ├── hero-bg.png
│       └── avatar.png
├── dist/                       ← generated after build (deploy this)
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .env.example
├── build.sh
├── package.json
└── vite.config.ts
```

---

## Environment Variables

Copy `.env.example` to `.env` before running locally:

```bash
cp artifacts/portfolio/.env.example artifacts/portfolio/.env
```

| Variable    | Default | Description                        |
|-------------|---------|-----------------------------------|
| `PORT`      | `3000`  | Dev server port                   |
| `BASE_PATH` | `/`     | URL base path (change if subfolder)|
| `NODE_ENV`  | `development` | `production` for builds      |

> **Note:** This is a pure static site — no secrets, no API keys, no database.

---

## Option 1 — Run Locally (Development)

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd <repo-folder>

# 2. Install pnpm (if not installed)
npm install -g pnpm

# 3. Install all workspace dependencies
pnpm install

# 4. Start the dev server (hot reload enabled)
pnpm --filter @workspace/portfolio run dev

# 5. Open in browser
open http://localhost:3000
```

**Expected output:**
```
VITE v7.x.x  ready in 300ms
➜  Local:   http://localhost:3000/
```

---

## Option 2 — Build & Serve Locally (Production Preview)

```bash
# 1. Build (from workspace root)
bash artifacts/portfolio/build.sh

# 2a. Serve with npx (no install needed)
npx serve artifacts/portfolio/dist -l 3000

# 2b. OR serve with Python (if Python is installed)
cd artifacts/portfolio/dist
python3 -m http.server 3000

# 3. Open browser
open http://localhost:3000
```

---

## Option 3 — Docker (Recommended for Any Machine)

> Requires: Docker installed. No Node.js needed on the host.

```bash
# From workspace root — build and start
docker compose -f artifacts/portfolio/docker-compose.yml up --build

# Access the site
open http://localhost

# Run in background (detached)
docker compose -f artifacts/portfolio/docker-compose.yml up --build -d

# Stop
docker compose -f artifacts/portfolio/docker-compose.yml down
```

**What Docker does:**
1. Stage 1: Installs Node 20 + pnpm, builds the site → `dist/`
2. Stage 2: Copies `dist/` into `nginx:alpine` (~10 MB final image)
3. Nginx serves the files with gzip, caching, and SPA routing

**Expected output:**
```
[+] Building ... Successfully built
[+] Running portfolio (container) — http://localhost
```

### Docker without docker-compose

```bash
# Build the image (run from workspace root)
docker build -f artifacts/portfolio/Dockerfile -t portfolio:latest .

# Run the container
docker run -d -p 80:80 --name portfolio portfolio:latest

# Check it's healthy
docker ps
curl http://localhost/health

# View logs
docker logs portfolio

# Stop & remove
docker stop portfolio && docker rm portfolio
```

---

## Option 4 — GitHub Codespaces

```bash
# 1. Open the repo in GitHub Codespaces
# 2. Terminal opens automatically in the workspace root

# 3. Install dependencies
pnpm install

# 4. Start dev server
pnpm --filter @workspace/portfolio run dev

# 5. Codespaces forwards port 3000 automatically
#    Click "Open in Browser" in the Ports tab
```

---

## Option 5 — AWS S3 Static Website (Free Tier)

> Cost: ~$0.50/month for a low-traffic site.

```bash
# Prerequisites: AWS CLI installed + configured
# Install: https://aws.amazon.com/cli/

# 1. Build the site
bash artifacts/portfolio/build.sh

# 2. Create an S3 bucket (replace YOUR-NAME with something unique)
aws s3 mb s3://swarnasagar-portfolio --region eu-central-1

# 3. Enable static website hosting
aws s3 website s3://swarnasagar-portfolio \
  --index-document index.html \
  --error-document index.html

# 4. Set bucket policy for public read
aws s3api put-bucket-policy \
  --bucket swarnasagar-portfolio \
  --policy '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::swarnasagar-portfolio/*"
    }]
  }'

# 5. Upload the dist folder
aws s3 sync artifacts/portfolio/dist/ s3://swarnasagar-portfolio --delete

# 6. Your site is live at:
echo "http://swarnasagar-portfolio.s3-website.eu-central-1.amazonaws.com"
```

**Add HTTPS with CloudFront (optional):**
```bash
# 1. Create a CloudFront distribution pointing to the S3 bucket
# 2. Add a free ACM SSL certificate
# 3. Add a custom domain in Route 53
# → Full guide: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html
```

---

## Option 6 — AWS EC2 with Nginx

```bash
# On your EC2 instance (Ubuntu 22.04, t2.micro = free tier)

# 1. Connect to EC2
ssh -i your-key.pem ubuntu@<your-ec2-ip>

# 2. Install Nginx
sudo apt update && sudo apt install nginx -y

# 3. Copy the dist/ folder from your local machine to EC2
# (run this on your LOCAL machine)
scp -r -i your-key.pem \
  artifacts/portfolio/dist/* \
  ubuntu@<your-ec2-ip>:/var/www/html/

# 4. Configure Nginx for SPA routing
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<'EOF'
server {
    listen 80;
    server_name _;
    root /var/www/html;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
    location /health { return 200 "ok"; }
}
EOF

sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

# 5. Open port 80 in your EC2 Security Group (AWS Console → EC2 → Security Groups)
# 6. Visit http://<your-ec2-ip>
```

---

## Option 7 — Vercel (Easiest Free Hosting)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from workspace root
cd artifacts/portfolio
vercel --prod

# Follow prompts:
# - Link to Vercel account
# - Root directory: . (current)
# - Build command: pnpm --filter @workspace/portfolio run build
# - Output directory: dist
```

Or use the Vercel dashboard → Import Git repository → select the repo.

---

## Option 8 — Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy (run from workspace root first to build)
bash artifacts/portfolio/build.sh
netlify deploy --dir=artifacts/portfolio/dist --prod
```

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| `PORT variable is required` | Missing env | Run `cp .env.example .env` |
| `pnpm: command not found` | pnpm not installed | `npm install -g pnpm` |
| `Cannot find module 'vite'` | Deps not installed | `pnpm install` from workspace root |
| `EADDRINUSE: port 3000` | Port already in use | `PORT=3001 pnpm run dev` |
| `Cannot GET /` (nginx) | Missing SPA fallback | Use the provided `nginx.conf` |
| Docker `COPY failed` | Wrong build context | Run `docker compose` from workspace root |
| S3: `403 Forbidden` | Missing bucket policy | Re-run the `put-bucket-policy` command |
| EC2: `502 Bad Gateway` | Nginx misconfigured | Run `sudo nginx -t` to check config |

---

## Testing the Deployment

```bash
# Local / EC2 / Docker — health check
curl http://localhost/health
# Expected: "healthy" or "ok"

# Check the site loads
curl -I http://localhost
# Expected: HTTP/1.1 200 OK

# Check gzip is working
curl -H "Accept-Encoding: gzip" -I http://localhost
# Expected: Content-Encoding: gzip

# Docker container health
docker inspect --format='{{.State.Health.Status}}' portfolio
# Expected: healthy
```

---

## Updating the Portfolio

All content is in `src/components/sections/`. Edit the data arrays at the top of each file:

| File | What to edit |
|------|-------------|
| `Hero.tsx` | Name, title, terminal content |
| `About.tsx` | Bio text, summary cards |
| `Skills.tsx` | `SKILL_CATEGORIES` array |
| `Education.tsx` | `EDUCATION` array |
| `Projects.tsx` | `PROJECTS` array |
| `Contact.tsx` | Email, phone, LinkedIn, location |
| `NavBar.tsx` | Nav links |
| `Footer.tsx` | Footer links |

After editing, rebuild: `bash artifacts/portfolio/build.sh`

---

## Troubleshooting Guide

**If the site doesn't load locally:**
```bash
# Check dev server logs
pnpm --filter @workspace/portfolio run dev

# Check if port is in use
lsof -i :3000
kill -9 <PID>   # free the port
```

**If Docker build fails:**
```bash
# View build logs
docker compose -f artifacts/portfolio/docker-compose.yml up --build 2>&1

# Common fix: wrong build context
# Always run from workspace ROOT, not from artifacts/portfolio/
```

**If S3 site shows XML instead of HTML:**
```bash
# Re-enable static website hosting
aws s3 website s3://your-bucket \
  --index-document index.html \
  --error-document index.html
```

**If styles are missing on EC2:**
```bash
# Check nginx root path
sudo cat /etc/nginx/sites-available/portfolio
# Verify: root points to the correct /var/www/html directory
```
