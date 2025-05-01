#!/bin/bash

# GitHub Pages Configuration Script

# Set your GitHub username and repository name
GITHUB_USERNAME="fediabdelkebir"
REPO_NAME="portfolio"

# Create GitHub Actions directory
mkdir -p .github/workflows

# Create GitHub Actions workflow file
cat > .github/workflows/github-pages.yml << 'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Update Vite config for GitHub Pages
        run: |
          cat > vite.config.ts << 'VITE'
          import { defineConfig } from "vite";
          import react from "@vitejs/plugin-react";
          import path from "path";
          import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

          // Add base path for GitHub Pages
          export default defineConfig({
            plugins: [
              react(),
              runtimeErrorOverlay(),
            ],
            resolve: {
              alias: {
                "@db": path.resolve(import.meta.dirname, "db"),
                "@": path.resolve(import.meta.dirname, "client", "src"),
                "@shared": path.resolve(import.meta.dirname, "shared"),
                "@assets": path.resolve(import.meta.dirname, "attached_assets"),
              },
            },
            root: path.resolve(import.meta.dirname, "client"),
            build: {
              outDir: path.resolve(import.meta.dirname, "dist/public"),
              emptyOutDir: true,
            },
            base: "/portfolio/", // Replace with your repo name
          });
          VITE
      
      - name: Setup SPA routing for GitHub Pages
        run: |
          # Create 404.html for SPA fallback
          mkdir -p client/public
          cat > client/public/404.html << 'EOF404'
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Redirecting...</title>
            <script>
              sessionStorage.redirect = location.href;
            </script>
            <meta http-equiv="refresh" content="0;URL='/portfolio/'">
          </head>
          <body>
            <h1>Redirecting...</h1>
            <p>If you are not redirected automatically, click <a href="/portfolio/">here</a>.</p>
          </body>
          </html>
          EOF404
          
          # Add redirect script to index.html
          cat > redirect_script.txt << 'REDIRECT'
          <script>
          (function() {
            var redirect = sessionStorage.redirect;
            delete sessionStorage.redirect;
            if (redirect && redirect !== location.href) {
              history.replaceState(null, null, redirect.replace("/portfolio/", "/"));
            }
          })();
          </script>
          REDIRECT
          
          sed -i "s|</head>|$(cat redirect_script.txt)\n</head>|" client/index.html
          rm redirect_script.txt
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist/public'
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
EOF

# Display instructions
echo ""
echo "====================================================="
echo "   GitHub Pages Setup Complete - Follow These Steps  "
echo "====================================================="
echo ""
echo "1. Create a repository on GitHub named: $REPO_NAME"
echo ""
echo "2. Push your code with these commands:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "3. On GitHub, go to your repository settings:"
echo "   - Click 'Settings' > 'Pages'"
echo "   - Under 'Build and deployment' select 'GitHub Actions'"
echo ""
echo "4. Wait for deployment to complete"
echo "   Your site will be available at: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "====================================================="
