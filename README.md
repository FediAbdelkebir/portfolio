# Fedi Abdelkebir Portfolio

A modern, animated portfolio website showcasing Fedi Abdelkebir's professional journey as a Full Stack Developer, designed with a focus on smooth, seamless user experience and performance.

## Features

- Modern UI with animations
- Dark/Light mode toggle
- Responsive design for all devices
- Project showcase with detailed project pages
- Skills and experience timeline
- Contact form

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Query

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages. Follow these simple steps:

### Step 1: Prepare the Project

Run the preparation script that removes unnecessary files and configures the project for GitHub Pages:

```bash
./prepare-for-download.sh
```

### Step 2: Download the Project

Download the project from Replit after running the preparation script.

### Step 3: Create a GitHub Repository

Create a new repository on GitHub named `portfolio`.

### Step 4: Push Your Code

```bash
git init
git add .
git commit -m 'Initial commit'
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" > "Pages"
3. Under "Build and deployment" select "GitHub Actions"

### Step 6: View Your Deployed Site

Your site will be deployed to: `https://YOUR_USERNAME.github.io/portfolio/`

## Local Development

To run the project locally:

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## License

This project is licensed under the MIT License.
