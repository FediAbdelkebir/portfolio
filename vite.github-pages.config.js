// Import the base Vite config
import baseConfig from './vite.config';

// GitHub Pages configuration
const githubPagesConfig = {
  ...baseConfig,
  base: '/portfolio/', // Replace 'portfolio' with your repository name
};

export default githubPagesConfig;
