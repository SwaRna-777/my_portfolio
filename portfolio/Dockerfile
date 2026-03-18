# ─────────────────────────────────────────────
# Stage 1 — Build (Node 20 + pnpm)
# ─────────────────────────────────────────────
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy workspace config files first (better layer caching)
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml tsconfig.base.json tsconfig.json ./

# Copy only the packages we need to build the portfolio
COPY lib/api-spec/      lib/api-spec/
COPY lib/api-zod/       lib/api-zod/
COPY lib/api-client-react/ lib/api-client-react/
COPY artifacts/portfolio/  artifacts/portfolio/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Build the portfolio (outputs to artifacts/portfolio/dist/)
RUN BASE_PATH=/ pnpm --filter @workspace/portfolio run build

# ─────────────────────────────────────────────
# Stage 2 — Serve (nginx:alpine — ~10 MB image)
# ─────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom nginx config
COPY artifacts/portfolio/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from Stage 1
COPY --from=builder /app/artifacts/portfolio/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
