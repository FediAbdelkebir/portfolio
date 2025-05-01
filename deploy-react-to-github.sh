#!/bin/bash

# Color codes for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

print_header() {
  echo -e "\n${YELLOW}=====================================${NC}"
  echo -e "${YELLOW}$1${NC}"
  echo -e "${YELLOW}=====================================${NC}\n"
}

print_step() {
  echo -e "${GREEN}>> $1${NC}"
}

print_error() {
  echo -e "${RED}ERROR: $1${NC}"
}

# Ensure we're in the project root
if [ ! -f "package.json" ]; then
  print_error "Cannot find package.json. Please run this script from the project root."
  exit 1
fi

print_header "GitHub Pages Deployment Script for React Portfolio"

# Step 1: Configure package.json for GitHub Pages
print_step "Configuring package.json for GitHub Pages..."

# Add homepage if it doesn't exist
if ! grep -q '"homepage":' package.json; then
  print_step "Adding homepage field to package.json..."
  sed -i '1a\  "homepage": "https://fediabdelkebir.github.io/portfolio",' package.json
else
  print_step "Homepage already configured."
fi

# Add deployment scripts if they don't exist
if ! grep -q '"deploy":' package.json; then
  print_step "Adding deployment scripts to package.json..."
  if grep -q '"scripts": {' package.json; then
    sed -i '/"scripts": {/a\    "predeploy": "npm run build",\n    "deploy": "gh-pages -d dist/public",' package.json
  else
    print_error "Could not find scripts section in package.json"
    exit 1
  fi
else
  print_step "Deployment scripts already configured."
fi

# Step 2: Install gh-pages if not already installed
if ! npm list gh-pages --depth=0 2>/dev/null | grep -q 'gh-pages'; then
  print_step "Installing gh-pages package..."
  npm install --save-dev gh-pages
else
  print_step "gh-pages package already installed."
fi

# Step 3: Update vite.config.ts for GitHub Pages
print_step "Updating Vite configuration..."
if grep -q "base: \"/portfolio/\"" vite.config.ts; then
  print_step "Base path already configured in vite.config.ts"
else
  print_step "Adding base path to vite.config.ts..."
  sed -i 's/export default defineConfig({/export default defineConfig({\
  base: "\/portfolio\/",/' vite.config.ts
fi

# Step 4: Create 404.html for client-side routing support
print_step "Creating 404.html for client-side routing support..."
mkdir -p client/public
cat > client/public/404.html << 'EOL'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Fedi Abdelkebir Portfolio</title>
  <script>
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 1; // Adjust for repo name (portfolio)

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
  <h2>Redirecting...</h2>
</body>
</html>
EOL

print_step "Updating index.html to handle GitHub Pages SPA redirects..."
CAT_INDEX_CONTENT=$(cat << 'EOL'
<!-- Start Single Page App redirect script -->
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
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
<!-- End Single Page App redirect script -->
EOL
)

# Check if the redirect script is already in index.html
if grep -q "Single Page Apps for GitHub Pages" client/index.html; then
  print_step "Redirect script already exists in index.html"
else
  # Add it before the closing head tag
  sed -i "s|</head>|$CAT_INDEX_CONTENT\n</head>|" client/index.html
fi

# Step 5: Run build and deploy
print_header "Ready to build and deploy!"
echo -e "${YELLOW}This will:${NC}"
echo -e "1. Build your React app with the correct base path"
echo -e "2. Deploy it to the gh-pages branch of your repository"
echo -e "\n${RED}Make sure you have:${NC}"
echo -e "- Created a GitHub repository named 'portfolio'"
echo -e "- Pushed your code to GitHub"
echo -e "- Set up your GitHub repository Settings → Pages to use gh-pages branch"

read -p "Continue with build and deploy? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  print_step "Building your React app..."
  npm run build
  
  if [ $? -eq 0 ]; then
    print_step "Deploying to GitHub Pages..."
    npx gh-pages -d dist/public
    
    if [ $? -eq 0 ]; then
      print_header "Deployment successful!"
      echo -e "Your portfolio should be available at: ${GREEN}https://fediabdelkebir.github.io/portfolio/${NC}"
      echo -e "(It might take a few minutes for GitHub to update the site)"
      echo -e "\n${YELLOW}Note:${NC} If you encounter any issues with navigation or missing resources,"
      echo -e "make sure all your links and assets use relative paths or the correct base URL."
    else
      print_error "Deployment failed. Check if you have push access to the repository."
    fi
  else
    print_error "Build failed. Please fix the errors and try again."
  fi
else
  print_step "Deployment cancelled."
fi
