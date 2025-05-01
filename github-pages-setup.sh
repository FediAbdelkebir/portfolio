#!/bin/bash

# This script prepares your project for GitHub Pages deployment

# Step 1: Add the necessary base path to vite.config.ts
echo "Updating Vite configuration..."
sed -i 's/export default defineConfig({/export default defineConfig({\
  base: "\/portfolio\/",/' vite.config.ts

# Step 2: Create a 404.html file that redirects to index.html
echo "Creating 404.html redirect..."
mkdir -p client/public
cat > client/public/404.html << 'EOL'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    
    // This script checks if a redirect is needed and sends the user to the home page
    // with the correct base path
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
    
    // Redirect to the root of the site
    var segmentCount = 1; // Change this depending on your repo name: 1 for username.github.io, 2 for username.github.io/repo-name
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
EOL

# Step 3: Create a custom script in package.json to deploy to GitHub Pages
echo "Adding GitHub Pages deployment scripts to package.json..."

# Check if homepage is already set
if ! grep -q '"homepage":' package.json; then
  # Insert homepage after the first line (assumes first line is opening brace)
  sed -i '1a\  "homepage": "https://fediabdelkebir.github.io/portfolio",' package.json
fi

# Check if gh-pages scripts are already set
if ! grep -q '"deploy":' package.json; then
  # Find the "scripts": { line and add the new scripts after it
  sed -i '/"scripts": {/a\    "predeploy": "npm run build",\n    "deploy": "gh-pages -d dist/public",' package.json
fi

# Step 4: Install gh-pages dependency if not already installed
if ! grep -q '"gh-pages":' package.json; then
  echo "Installing gh-pages package..."
  npm install --save-dev gh-pages
fi

echo "Setup complete! Now you can run 'npm run deploy' to deploy to GitHub Pages."
echo "⚠️ Important: Make sure to create a GitHub repository named 'portfolio' first!"
echo "⚠️ Important: Make sure to commit and push your changes before deploying."
