#!/usr/bin/env bash
set -e

echo "⚙️ Installing system dependencies..."
apt-get update
apt-get install -y wget gnupg ca-certificates fonts-liberation libappindicator3-1 xdg-utils unzip

echo "⬇️ Installing Chromium manually..."
mkdir -p /usr/src/chromium
cd /usr/src/chromium
wget https://storage.googleapis.com/chromium-browser-snapshots/Linux_x64/1219126/chrome-linux.zip
unzip chrome-linux.zip
mv chrome-linux /usr/bin/chromium
ln -s /usr/bin/chromium/chrome /usr/bin/chromium-browser

echo "✅ Chromium installed at /usr/bin/chromium-browser"

cd /opt/render/project/src

echo "📦 Installing Node dependencies..."
npm install
npx puppeteer browsers install chrome

echo "🚀 Build complete"
