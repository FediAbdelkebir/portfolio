#!/bin/bash

# Simple script to deploy a React app to GitHub Pages
echo "Preparing React app for GitHub Pages deployment..."

# Step 1: Install gh-pages package
npm install --save-dev gh-pages

# Step 2: Update package.json
echo "Updating package.json..."

# Temporary file to hold the new package.json
cat > temp_package.json << 'EOF'
{
  "name": "portfolio",
  "version": "1.0.0",
  "homepage": "https://fediabdelkebir.github.io/portfolio",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@tailwindcss/typography": "^0.5.10",
    "@tanstack/react-query": "^5.24.1",
    "@types/react": "^18.2.57",
    "@types/react-dom": "^18.2.19",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cmdk": "^0.2.1",
    "date-fns": "^3.3.1",
    "embla-carousel-react": "^8.0.0",
    "framer-motion": "^11.0.8",
    "input-otp": "^1.0.1",
    "lucide-react": "^0.338.0",
    "postcss": "^8.4.35",
    "react": "^18.2.0",
    "react-day-picker": "^8.10.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.50.1",
    "react-icons": "^5.0.1",
    "react-resizable-panels": "^2.0.9",
    "recharts": "^2.12.1",
    "tailwind-merge": "^2.2.1",
    "tailwindcss": "^3.4.1",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5.3.3",
    "vaul": "^0.9.0",
    "vite": "^5.1.4",
    "wouter": "^3.0.0",
    "zod": "^3.22.4",
    "zod-validation-error": "^2.1.0"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
EOF

mv temp_package.json package.json

# Step 3: Update vite.config.ts
echo "Updating vite.config.ts..."

cat > vite.config.ts << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  base: "/portfolio/", // Critical for GitHub Pages
});
EOF

# Step 4: Create 404.html for SPA routing
echo "Creating 404.html for SPA routing..."
mkdir -p client/public

cat > client/public/404.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Single Page Apps for GitHub Pages</title>
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 1;

    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
</body>
</html>
EOF

# Step 5: Add route handling script to index.html
echo "Adding route handling to index.html..."

# Check if the script is already there
if grep -q "Single Page Apps for GitHub Pages" client/index.html; then
  echo "GitHub Pages script already in index.html"
else
  # Create a script to inject into the head
  cat > gh_pages_script.html << 'EOF'
  <!-- Start Single Page Apps for GitHub Pages -->
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
  <!-- End Single Page Apps for GitHub Pages -->
EOF

  # Insert the script before the closing head tag
  sed -i "s|</head>|$(cat gh_pages_script.html)\n</head>|" client/index.html
  rm gh_pages_script.html
fi

# Step 6: Clean up unnecessary files
echo "Cleaning up unnecessary files..."
rm -rf server db shared drizzle.config.ts .github
rm -f github-pages-setup.sh prepare-for-download.sh vite.github-pages.config.js

echo ""
echo "===================================================="
echo "   React App Ready for GitHub Pages Deployment!    "
echo "===================================================="
echo ""
echo "To deploy your website (not the README):"
echo ""
echo "1. Create a GitHub repository named 'portfolio'"
echo "2. Push your code to GitHub:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/fediabdelkebir/portfolio.git"
echo "   git push -u origin main"
echo ""
echo "3. Run the deploy command:"
echo "   npm run deploy"
echo ""
echo "4. Your website will be live at:"
echo "   https://fediabdelkebir.github.io/portfolio/"
echo ""
echo "===================================================="
