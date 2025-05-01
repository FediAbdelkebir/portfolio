#!/bin/bash

# This script helps set up your repository for GitHub Pages deployment

# Variables - Edit these to match your GitHub username and repository name
USERNAME="fediabdelkebir" # Replace with your GitHub username
REPO_NAME="PortfolioProdigy"  # Repository name

# Create GitHub directory structure if it doesn't exist
mkdir -p .github/workflows

# Create 404.html for SPA routing on GitHub Pages
mkdir -p client/public
cat > client/public/404.html << EOL
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/${REPO_NAME}/'">
</head>
<body>
  <h1>Redirecting...</h1>
  <p>If you are not redirected automatically, click <a href="/${REPO_NAME}/">here</a>.</p>
</body>
</html>
EOL

# Add GitHub Pages redirect script to index.html
if grep -q "sessionStorage.redirect" client/index.html; then
  echo "SPA redirect script already exists in index.html"
else
  cat >> temp_redirect_script.js << EOL
<script>
(function() {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect.replace("/${REPO_NAME}/", "/"));
  }
})();
</script>
EOL
  
  # Add script before closing head tag
  sed -i "s|</head>|$(cat temp_redirect_script.js)\n</head>|" client/index.html
  rm temp_redirect_script.js
fi

# Print instructions for GitHub
echo ""
echo "=================================================="
echo "     GitHub Pages Setup for React Complete!     "
echo "=================================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Create a repository on GitHub named: ${REPO_NAME}"
echo ""
echo "2. Push your code to GitHub with these commands:"
echo "   git init"
echo "   git add ."
echo "   git commit -m 'Initial commit for GitHub Pages'"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/${USERNAME}/${REPO_NAME}.git"
echo "   git push -u origin main"
echo ""
echo "3. On GitHub, go to your repository settings:"
echo "   - Click 'Settings' > 'Pages'"
echo "   - Under 'Build and deployment' select:"
echo "     - Source: 'GitHub Actions'"
echo ""
echo "4. Your site will be available at:"
echo "   https://${USERNAME}.github.io/${REPO_NAME}/"
echo ""
echo "=================================================="
