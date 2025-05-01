#!/bin/bash

# Prepare the portfolio project for download and local deployment

# Create backup of original files
mkdir -p backup
cp -f vite.config.ts backup/vite.config.ts.bak
cp -f package.json backup/package.json.bak

# Create simpler vite.config.ts
cat > vite.config.ts << 'EOL'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
EOL

echo "Created simplified vite.config.ts"

# Update package.json
cat > package.json << 'EOL'
{
  "name": "portfolio",
  "version": "1.0.0",
  "description": "Fedi Abdelkebir's Portfolio",
  "homepage": "https://fediabdelkebir.github.io/portfolio",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
    "predeploy": "vite build",
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
    "@radix-ui/react-select": "^1.2.2",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@tanstack/react-query": "^4.32.6",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "cmdk": "^0.2.1",
    "date-fns": "^3.3.1",
    "embla-carousel-react": "^8.0.0",
    "framer-motion": "^10.18.0",
    "input-otp": "^1.0.1",
    "lucide-react": "^0.323.0",
    "react": "^18.2.0",
    "react-day-picker": "^8.10.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.50.1",
    "react-icons": "^5.0.1",
    "react-resizable-panels": "^2.0.6",
    "recharts": "^2.12.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.0",
    "wouter": "^3.0.0",
    "zod": "^3.22.4",
    "zod-validation-error": "^3.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.16",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.17",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3",
    "vite": "^5.1.0"
  }
}
EOL

echo "Created simplified package.json"

# Create instructions for local deployment
cat > LOCAL-DEVELOPMENT.md << 'EOL'
# Local Development Instructions

This guide helps you run and deploy this portfolio project on your local machine.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

Visit http://localhost:5173/portfolio/ in your browser.

## Building for Production

Build the project:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to GitHub Pages

1. Create a GitHub repository named `portfolio`
2. Push your code to GitHub
3. Run:

   ```bash
   npm run deploy
   ```

4. Your site will be live at `https://yourusername.github.io/portfolio/`

## Troubleshooting

If you encounter any build errors:

1. Make sure Node.js version 16+ is installed
2. Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
3. Check that all paths in the code are properly prefixed with `/portfolio/` in production mode
EOL

echo "Created LOCAL-DEVELOPMENT.md with instructions"

echo "\nPortfolio project is now ready for download! Follow these steps:\n"
echo "1. Download the entire project from Replit"
echo "2. On your local machine, run 'npm install'"
echo "3. Start local development with 'npm run dev'"
echo "4. Deploy to GitHub Pages with 'npm run deploy'"
echo "\nSee LOCAL-DEVELOPMENT.md for detailed instructions."
