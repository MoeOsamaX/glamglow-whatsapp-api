# Use official Node image
FROM node:18-slim

# Install Chromium
RUN apt-get update && \
    apt-get install -y chromium && \
    rm -rf /var/lib/apt/lists/*

# Set Puppeteer path
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Set work directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all app files
COPY . .

# Expose Render port
ENV PORT=10000
EXPOSE 10000

# Start the app
CMD ["npm", "start"]
