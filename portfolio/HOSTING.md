# Portfolio Hosting Guide

This is a **static website** — after building, it produces plain HTML/CSS/JS files in the `dist/` folder that can be served by *any* web server. No Node.js or database needed in production.

---

## Build the site

```bash
# From the workspace root:
pnpm --filter @workspace/portfolio run build

# Output is in: artifacts/portfolio/dist/
```

---

## Option 1 — Host Locally

### Using Node.js `serve` (easiest)
```bash
npx serve artifacts/portfolio/dist
# Visit: http://localhost:3000
```

### Using Python (if Node isn't available)
```bash
cd artifacts/portfolio/dist
python3 -m http.server 8080
# Visit: http://localhost:8080
```

### Using Nginx (Linux / macOS)
```nginx
server {
    listen 80;
    server_name localhost;
    root /path/to/artifacts/portfolio/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Option 2 — Host on AWS (Free / Cheap)

### A) AWS S3 Static Website (recommended — cheapest)

1. Build the site locally first (see above).
2. Create an S3 bucket:
   ```
   aws s3 mb s3://your-portfolio-bucket
   ```
3. Enable static website hosting:
   ```
   aws s3 website s3://your-portfolio-bucket \
     --index-document index.html \
     --error-document index.html
   ```
4. Upload the `dist/` folder:
   ```
   aws s3 sync artifacts/portfolio/dist/ s3://your-portfolio-bucket --acl public-read
   ```
5. Your site is live at:
   ```
   http://your-portfolio-bucket.s3-website-<region>.amazonaws.com
   ```

**Optional**: Add CloudFront CDN in front of S3 for HTTPS and a custom domain.

---

### B) AWS EC2 with Nginx (full control)

1. Launch a free-tier EC2 instance (t2.micro, Ubuntu 22.04).
2. Install Nginx:
   ```bash
   sudo apt update && sudo apt install nginx -y
   ```
3. Copy the `dist/` folder to the server (via scp or git):
   ```bash
   scp -r artifacts/portfolio/dist/* ubuntu@<ec2-ip>:/var/www/html/
   ```
4. Nginx serves `/var/www/html` by default — your site is live at `http://<ec2-ip>`.

---

## Production build size

After building, the entire `dist/` folder is approximately **300–500 KB** (gzipped: ~150 KB).  
No server-side runtime required — host it anywhere static files are supported.
