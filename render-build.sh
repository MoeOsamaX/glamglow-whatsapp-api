#!/usr/bin/env bash
# Install Chromium manually for Puppeteer on Render
apt-get update
apt-get install -y chromium-browser

# Make sure puppeteer can find it
export PUPPETEER_EXECUTABLE_PATH=$(which chromium-browser)

# Install Node dependencies
npm install

# Install Chrome for Puppeteer (just in case)
npx puppeteer browsers install chrome
