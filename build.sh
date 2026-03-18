#!/bin/bash
set -e
echo "==> Installing dependencies..."
pnpm install

echo "==> Building for production..."
pnpm build

echo ""
echo "Done! Output is in ./dist"
echo "To preview: pnpm preview"
