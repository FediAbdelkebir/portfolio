#!/bin/bash

# This script prepares your project for downloading and deployment

# Remove server and database files (not needed for GitHub Pages)
echo "Removing server and database files..."
rm -rf server db shared

# Remove Drizzle configuration
rm -f drizzle.config.ts

# Remove unnecessary scripts
rm -f vite.github-pages.config.js

# Update package.json to remove server dependencies
echo "Updating package.json..."
cat > package.json << 'EOF'
{
  "name": "portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview"
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
    "@replit/vite-plugin-runtime-error-modal": "^1.0.4",
    "@replit/vite-plugin-shadcn-theme-json": "^1.0.4"
  }
}
EOF

# Create a simpler vite.config.ts for client-only
echo "Creating simplified vite.config.ts..."
cat > vite.config.ts << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
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
});
EOF

# Run the GitHub Pages setup script
./github-pages-setup.sh

echo ""
echo "====================================================="
echo "     Project Prepared for Download & Deployment     "
echo "====================================================="
echo ""
echo "Your project is now ready to be downloaded and deployed to GitHub Pages."
echo ""
echo "DOWNLOAD YOUR PROJECT NOW from Replit before proceeding."
echo ""
echo "After downloading, follow the instructions provided by the github-pages-setup.sh script."
echo "====================================================="
