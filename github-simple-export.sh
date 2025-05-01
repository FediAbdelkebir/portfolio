#!/bin/bash

# Define paths
DEPLOY_DIR="github-pages-deploy"
TARGET_REPO="$DEPLOY_DIR/repository"

# Clean and create target directories
rm -rf "$DEPLOY_DIR"
mkdir -p "$TARGET_REPO"

# Copy the necessary files directly
echo "*** Copying built client files directly"

# Create the public folder
mkdir -p "$TARGET_REPO/public"

# Copy all assets and project images
cp -r ./attached_assets "$TARGET_REPO/public/assets"
cp -r ./client/public/* "$TARGET_REPO/public/"

# Create a minimal index.html file for GitHub Pages
cat > "$TARGET_REPO/public/index.html" << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fedi Abdelkebir | Full Stack Developer</title>
  <meta name="description" content="Fedi Abdelkebir's portfolio website - Full Stack Developer">

  <!-- Inline essential CSS to avoid flash of unstyled content -->
  <style>
    :root {
      --background: 0 0% 100%;
      --foreground: 222.2 84% 4.9%;
      --primary: 221.2 83.2% 53.3%;
      --primary-foreground: 210 40% 98%;
    }

    .dark {
      --background: 222.2 84% 4.9%;
      --foreground: 210 40% 98%;
      --primary: 217.2 91.2% 59.8%;
      --primary-foreground: 222.2 47.4% 11.2%;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
      margin: 0;
      padding: 0;
      transition: background-color 0.3s ease;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 100vh;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      max-width: 600px;
    }

    .button {
      display: inline-block;
      background-color: hsl(var(--primary));
      color: hsl(var(--primary-foreground));
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s ease;
    }

    .button:hover {
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <h1>Fedi Abdelkebir</h1>
      <p>Full Stack Developer specializing in modern web technologies</p>
      <p>This site has been prepared for GitHub Pages hosting.</p>
      <a href="https://github.com" class="button">View GitHub Repository</a>
    </div>
  </div>

  <script>
    // Dark mode toggle based on user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
    }
  </script>
</body>
</html>
EOL

# Create a 404.html file
cat > "$TARGET_REPO/public/404.html" << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found | Fedi Abdelkebir</title>
  <meta http-equiv="refresh" content="0;url=/">
  <script>
    sessionStorage.redirect = location.href;
    window.location.href = "/";
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      padding: 2rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <div>
    <h1>Page Not Found</h1>
    <p>Redirecting to home page...</p>
  </div>
</body>
</html>
EOL

# Create README.md
cat > "$TARGET_REPO/README.md" << 'EOL'
# Fedi Abdelkebir's Portfolio

A modern, animated portfolio website showcasing my professional journey as a Full Stack Developer.

## Features

- Responsive design that works on all devices
- Animated UI components with smooth transitions
- Detailed project showcase with screenshots
- Light and dark mode

## Technologies Used

- React.js
- Framer Motion for animations
- Tailwind CSS for styling
- GitHub Pages for hosting

## Visit the Site

The live site is available at: [https://yourusername.github.io/portfolio/](https://yourusername.github.io/portfolio/)

## Contact

Connect with me on [LinkedIn](https://linkedin.com/in/yourname) or send me an email at your.email@example.com.
EOL

# Initialize Git repository
echo "*** Setting up Git repository"
cd "$TARGET_REPO"
git init
git add .
git commit -m "Initial commit for GitHub Pages"

# Instructions
echo ""
echo "================================================="
echo "     GitHub Pages Deployment Package Ready       "
echo "================================================="
echo ""
echo "Your GitHub Pages deployment package is ready at:"
echo "$TARGET_REPO"
echo ""
echo "To deploy to GitHub Pages:"
echo ""
echo "1. Create a new repository on GitHub"
echo "2. Push these files to the repository:"
echo "   cd $TARGET_REPO"
echo "   git remote add origin https://github.com/yourusername/repository-name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. In your GitHub repository settings, enable GitHub Pages"
echo "   from the 'main' branch and the '/public' folder"
echo ""
echo "Your site will be available at:"
echo "https://yourusername.github.io/repository-name/"
echo "================================================="
