#!/bin/bash

# Create a directory for GitHub Pages
GH_PAGES="./github-pages"
mkdir -p "$GH_PAGES"

# Copy the client source files directly (for a GitHub Pages raw source approach)
echo "Copying client source files..."
cp -r ./client/* "$GH_PAGES"/

# Copy necessary files from the root directory
echo "Copying necessary configuration files..."
cp package.json "$GH_PAGES"/
cp .gitignore "$GH_PAGES"/
cp README.md "$GH_PAGES"/
cp components.json "$GH_PAGES"/
cp tailwind.config.ts "$GH_PAGES"/
cp postcss.config.js "$GH_PAGES"/
cp tsconfig.json "$GH_PAGES"/

# Create a simple index.html file for GitHub Pages
cat > "$GH_PAGES/index.html" << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fedi Abdelkebir | Full Stack Developer</title>
  <link rel="stylesheet" href="/src/index.css">
  <script>
    // Handle SPA routing for GitHub Pages
    (function() {
      // Detect if this is a redirect from a 404 page
      var redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect);
      }
    })();
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
EOL

# Create a 404.html file
cat > "$GH_PAGES/404.html" << 'EOL'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Page Not Found</title>
  <script>
    sessionStorage.redirect = location.href;
    window.location.href = "/";
  </script>
</head>
<body>
  <h1>Page Not Found</h1>
  <p>Redirecting to home page...</p>
</body>
</html>
EOL

# Create a git repository
echo "Setting up git repository..."
cd "$GH_PAGES"
git init
git add .
git commit -m "Export for GitHub Pages"

echo ""
echo "===================================================="
echo "Files exported for GitHub Pages!"
echo "===================================================="
echo "Files are ready in: $GH_PAGES"
echo ""
echo "To deploy to GitHub Pages:"
echo "1. Create a repository on GitHub"
echo "2. Run these commands:"
echo "   cd $GH_PAGES"
echo "   git remote add origin https://github.com/yourusername/yourrepo.git"
echo "   git branch -M main"
echo "   git push -f origin main"
echo ""
echo "3. Go to your repository settings on GitHub"
echo "4. Navigate to Pages and select the 'main' branch for deployment"
echo "===================================================="
