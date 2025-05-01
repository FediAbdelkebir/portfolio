#!/bin/bash

# Create a temporary directory for GitHub Pages
GITHUB_DIR="./gh-pages-build"
rm -rf "$GITHUB_DIR"
mkdir -p "$GITHUB_DIR"

# Set environment variable for GitHub Pages build
export GITHUB_PAGES=true

# Build the client-side only
echo "Building for GitHub Pages..."
npx vite build

# Copy build outputs
if [ -d "./dist/public" ]; then
  echo "Copying build files from dist/public..."
  cp -r ./dist/public/* "$GITHUB_DIR"/
elif [ -d "./dist" ]; then
  echo "Copying build files from dist..."
  cp -r ./dist/* "$GITHUB_DIR"/
else
  echo "Error: Build directory not found!"
  exit 1
fi

# Copy necessary public files for GitHub Pages
echo "Copying public files..."
cp -r ./client/public/* "$GITHUB_DIR"/

# Ensure we have a proper 404.html for SPA routing
if [ ! -f "$GITHUB_DIR/404.html" ]; then
  echo "Creating 404.html..."
  cat > "$GITHUB_DIR/404.html" << 'EOL'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
<body>
  <h1>Redirecting...</h1>
  <p>If you are not redirected automatically, click <a href="/">here</a>.</p>
</body>
</html>
EOL
fi

# Ensure we have proper SPA routing for GitHub Pages
if [ ! -f "$GITHUB_DIR/index.html" ]; then
  echo "Error: index.html not found in build!"
  exit 1
fi

# Create a git repository in the GitHub Pages directory
echo "Setting up git repository..."
cd "$GITHUB_DIR"
git init
git add .
git commit -m "Deploy to GitHub Pages"

echo ""
echo "===================================================="
echo "GitHub Pages build completed!"
echo "===================================================="
echo "Files are ready in: $GITHUB_DIR"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Create a repository on GitHub"
echo "2. Run these commands:"
echo "   cd $GITHUB_DIR"
echo "   git remote add origin https://github.com/yourusername/yourrepo.git"
echo "   git branch -M main"
echo "   git push -f origin main"
echo ""
echo "3. Go to your repository settings on GitHub"
echo "4. Navigate to Pages and select 'main' branch for deployment"
echo "===================================================="
