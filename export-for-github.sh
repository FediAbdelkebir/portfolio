#!/bin/bash

# Create a temporary directory for the build
GITHUB_TMP="./github-pages-export"
mkdir -p "$GITHUB_TMP"

# Run the build command
echo "Building the React app..."
# Use npx to ensure we're using the local vite installation
npx vite build --mode production

# Copy the built files from dist to the temporary directory
echo "Copying files to $GITHUB_TMP..."
mkdir -p "$GITHUB_TMP"
# Check if dist/public exists
if [ -d "./dist/public" ]; then
  cp -r ./dist/public/* "$GITHUB_TMP"/
# If not, try dist
elif [ -d "./dist" ]; then
  cp -r ./dist/* "$GITHUB_TMP"/
else
  echo "Error: Build directory not found!"
  exit 1
fi

# Copy public directory files (they're needed for GitHub Pages)
echo "Copying public files..."
cp -r ./client/public/* "$GITHUB_TMP"/

# Create a git repository in the temporary directory
echo "Setting up git repository..."
cd "$GITHUB_TMP"
git init
git add .
git commit -m "Initial commit for GitHub Pages"

echo ""
echo "==================================================="
echo "Build for GitHub Pages completed!"
echo "==================================================="
echo "Files are ready in: $GITHUB_TMP"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Create a repository on GitHub named: username.github.io"
echo "2. Run these commands:"
echo "   cd $GITHUB_TMP"
echo "   git remote add origin https://github.com/username/username.github.io.git"
echo "   git push -u origin main"
echo ""
echo "3. Configure GitHub Pages in your repository settings"
echo "==================================================="
