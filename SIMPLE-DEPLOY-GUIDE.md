# Simple GitHub Pages Deployment Guide

This guide will help you deploy your React portfolio to GitHub Pages, ensuring you see the actual website and not just the README.

## Step 1: Download Your Project

First, download your project from Replit.

## Step 2: Make Local Changes

Once downloaded, open the project folder on your computer and make these changes manually:

### 2.1. Update package.json

Open `package.json` and add these lines:

```json
{
  "homepage": "https://fediabdelkebir.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    // keep other existing scripts
  }
}
```

### 2.2. Install gh-pages

Open a terminal/command prompt in your project folder and run:

```bash
npm install --save-dev gh-pages
```

### 2.3. Update vite.config.ts

Open `vite.config.ts` and add a base path:

```js
export default defineConfig({
  // other config
  base: "/portfolio/", // Add this line
  // rest of config
});
```

### 2.4. Remove Server Files (Optional)

If you want a cleaner project, you can remove server-side files that aren't needed for GitHub Pages:

```bash
rm -rf server db shared drizzle.config.ts
```

## Step 3: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `portfolio`
2. Do not initialize it with a README, .gitignore, or license

## Step 4: Push Your Code

In your terminal/command prompt, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/fediabdelkebir/portfolio.git
git push -u origin main
```

## Step 5: Deploy Your Site

Run the deployment command:

```bash
npm run deploy
```

This should create a gh-pages branch with your built React app.

## Step 6: Check GitHub Pages Settings

1. Go to your repository on GitHub
2. Click "Settings"
3. Navigate to "Pages" in the left sidebar
4. Under "Build and deployment", check that:
   - Source is set to "Deploy from a branch"
   - Branch is set to "gh-pages" and folder is "/ (root)"

## Step 7: Wait for Deployment

GitHub Pages can take a few minutes to deploy. Your site will be available at:

```
https://fediabdelkebir.github.io/portfolio/
```

## Troubleshooting

If you still see only the README:

1. Make sure the gh-pages branch was created (check on GitHub)
2. Verify the GitHub Pages settings are pointing to the gh-pages branch
3. Try clearing your browser cache or opening in incognito mode
4. Wait a few more minutes as GitHub Pages can take time to update
