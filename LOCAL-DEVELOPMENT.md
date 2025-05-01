# Local Development Instructions

This guide helps you run and deploy this portfolio project on your local machine.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

## Development

Run the development server:

```bash
npm run dev
```

Visit http://localhost:5173/portfolio/ in your browser.

## Building for Production

Build the project:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to GitHub Pages

1. Create a GitHub repository named `portfolio`
2. Push your code to GitHub
3. Run:

   ```bash
   npm run deploy
   ```

4. Your site will be live at `https://yourusername.github.io/portfolio/`

## Troubleshooting

If you encounter any build errors:

1. Make sure Node.js version 16+ is installed
2. Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
3. Check that all paths in the code are properly prefixed with `/portfolio/` in production mode
