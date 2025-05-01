# Fedi Abdelkebir Portfolio

A modern, animated portfolio website showcasing Fedi Abdelkebir's professional journey as a Full Stack Developer, designed to highlight technical skills and project expertise through an engaging, interactive interface.

## Key Technologies
- React.js for dynamic frontend
- GitHub Pages for hosting
- Responsive design
- Animated UI components

## Features
- Animated UI with transitions and effects
- Project showcase with detailed project pages
- Filterable projects by technology
- Dark/light mode theme switch
- Responsive design for all devices

## Deploying to GitHub Pages

This project is set up for easy deployment to GitHub Pages. Follow these steps to deploy your portfolio:

### 1. Create a GitHub Repository

- Create a new repository on GitHub named `username.github.io` (replace `username` with your GitHub username).
- If you want to use a different repository name, you'll need to update the `base` property in `vite.config.ts` to match your repository name.

### 2. Push Your Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

- Go to your repository settings on GitHub
- Navigate to the "Pages" section
- In the "Build and deployment" section, select "GitHub Actions" as the source
- The deployment will automatically start when you push to the main branch

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. Update the `CNAME` file in the `client/public` directory with your domain
2. Configure your domain's DNS settings to point to GitHub Pages
3. In your repository's GitHub Pages settings, add your custom domain

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Folder Structure

- `client/`: Frontend code
  - `src/`: React components and logic
  - `public/`: Static files
- `.github/workflows/`: GitHub Actions workflow for deployment
