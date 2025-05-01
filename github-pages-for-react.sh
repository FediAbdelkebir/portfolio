#!/bin/bash

# This script prepares a React app for GitHub Pages hosting

# Set variables
REPO_NAME="portfolio"
USERNAME="fediabdelkebir" # Replace with your GitHub username

# Create CNAME file if needed (for custom domain)
# echo "yourdomain.com" > client/public/CNAME

# Create a 404.html file for SPA routing on GitHub Pages
cat > client/public/404.html << 'EOL'
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
EOL

# Add GitHub Pages script to index.html
sed -i "</head>/i\  <script>\n    (function() {\n      // Redirect handling for GitHub Pages SPA\n      var redirect = sessionStorage.redirect;\n      delete sessionStorage.redirect;\n      if (redirect && redirect !== location.href) {\n        history.replaceState(null, null, redirect.replace('/portfolio/', '/'));\n      }\n    })();\n  </script>" client/public/index.html

# Create GitHub workflow file for deployment
mkdir -p .github/workflows
cat > .github/workflows/deploy-gh-pages.yml << EOL
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          PUBLIC_URL: /${REPO_NAME}/

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/public # Build output path
          branch: gh-pages
EOL

# Create or update package.json for GitHub Pages
sed -i 's/"name": "rest-express"/"name": "portfolio"/g' package.json
sed -i '/"private": true/a\  "homepage": "https://'${USERNAME}'.github.io/'${REPO_NAME}'",\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/'${USERNAME}'/'${REPO_NAME}'.git"\n  },\n  "bugs": {\n    "url": "https://github.com/'${USERNAME}'/'${REPO_NAME}'/issues"\n  },' package.json

echo ""
echo "===================================================="
echo "     GitHub Pages Setup for React Complete!       "
echo "===================================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Create a repository on GitHub named: ${REPO_NAME}"
echo "2. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m 'Setup for GitHub Pages'"
echo "   git remote add origin https://github.com/${USERNAME}/${REPO_NAME}.git"
echo "   git push -u origin main"
echo ""
echo "3. GitHub Actions will automatically build and deploy your site"
echo "   to: https://${USERNAME}.github.io/${REPO_NAME}/"
echo ""
echo "4. If you want to use a custom domain, uncomment the CNAME line"
echo "   in this script and run it again with your domain name"
echo "===================================================="
