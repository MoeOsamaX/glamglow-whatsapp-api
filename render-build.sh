#!/usr/bin/env bash
# Render Build Script for Glam&Glow WhatsApp API

# Exit on error
set -e

echo "⚙️ Updating system and installing Chromium..."
apt-get update
apt-get install -y chromium chromium-common chromium-driver fonts-liberation libappindicator3-1 xdg-utils

echo "✅ Chromium installed."

# Install Node dependencies
npm install

echo "🧩 Installing Puppeteer Chrome..."
npx puppeteer browsers install chrome

echo "🚀 Build complete!"
