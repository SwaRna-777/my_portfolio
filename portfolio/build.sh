#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# build.sh — Build the portfolio for deployment
# Run from the WORKSPACE ROOT: bash artifacts/portfolio/build.sh
# ─────────────────────────────────────────────────────────────────────────────
set -e

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
PORTFOLIO="$ROOT/artifacts/portfolio"

echo ""
echo "========================================"
echo "  Swarna Sagar Katuri — Portfolio Build"
echo "========================================"
echo ""

# ── Check Node.js ─────────────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
  echo "ERROR: Node.js is not installed."
  echo "Install from: https://nodejs.org (LTS version 20+)"
  exit 1
fi

NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "ERROR: Node.js 18+ is required. Found: $(node --version)"
  exit 1
fi
echo "✓ Node.js $(node --version)"

# ── Check pnpm ────────────────────────────────────────────────────────────────
if ! command -v pnpm &>/dev/null; then
  echo "Installing pnpm..."
  npm install -g pnpm
fi
echo "✓ pnpm $(pnpm --version)"

# ── Install dependencies ──────────────────────────────────────────────────────
echo ""
echo "Installing dependencies..."
cd "$ROOT"
pnpm install --frozen-lockfile
echo "✓ Dependencies installed"

# ── Build ─────────────────────────────────────────────────────────────────────
echo ""
echo "Building portfolio..."
BASE_PATH=/ pnpm --filter @workspace/portfolio run build
echo "✓ Build complete"

# ── Done ──────────────────────────────────────────────────────────────────────
DIST_SIZE=$(du -sh "$PORTFOLIO/dist" | cut -f1)
echo ""
echo "========================================"
echo "  Build successful!"
echo "  Output: artifacts/portfolio/dist/"
echo "  Size:   $DIST_SIZE"
echo "========================================"
echo ""
echo "Next steps:"
echo "  Local:   npx serve artifacts/portfolio/dist"
echo "  Docker:  docker compose -f artifacts/portfolio/docker-compose.yml up --build"
echo ""
