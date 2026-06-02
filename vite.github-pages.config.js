// Import the base Vite config
import baseConfig from './vite.config';

// GitHub Pages configuration for custom domain
const githubPagesConfig = {
  ...baseConfig,
  base: '/', // Custom domain uses root path
};

export default githubPagesConfig;
