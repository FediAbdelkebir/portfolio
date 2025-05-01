#!/bin/bash

# Add color to output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=================================${NC}"
echo -e "${YELLOW}GitHub Pages Deployment Fix Script${NC}"
echo -e "${YELLOW}=================================${NC}\n"

echo -e "${GREEN}>> Fixing image paths in Hero.tsx...${NC}"
sed -i "s|src=\"\(/.*\.png\)\"|src={import.meta.env.MODE === 'production' ? '/portfolio\1' : '\1'}|g" client/src/components/Hero.tsx

echo -e "${GREEN}>> Fixing router in App.tsx...${NC}"
ADD_BASE="  // Add base path for GitHub Pages\n  const base = import.meta.env.MODE === 'production' ? '/portfolio' : '';\n"
SWITCH_ROUTER="<Switch>\n        <Route path={\`\${base}/\`} component={Home} />\n        <Route path={\`\${base}/projects\`} component={Projects} />\n        <Route path={\`\${base}/projects/:id\`} component={ProjectDetail} />"

# Fix the router in App.tsx
sed -i "s|<Switch>\s*<Route path=\"/\" component={Home} />\s*<Route path=\"/projects\" component={Projects} />\s*<Route path=\"/projects/:id\" component={ProjectDetail} />|${ADD_BASE}  ${SWITCH_ROUTER}|" client/src/App.tsx

echo -e "${GREEN}>> Updating Header.tsx navigation links...${NC}"
sed -i 's|<Link href=\"/\"|<Link href={import.meta.env.MODE === \'production\' ? \'/portfolio/\' : \'/\'}|g' client/src/components/Header.tsx
sed -i 's|<Link href=\"/projects\"|<Link href={import.meta.env.MODE === \'production\' ? \'/portfolio/projects\' : \'/projects\'}|g' client/src/components/Header.tsx

echo -e "${GREEN}>> Adding image path helper function to ProjectDetail.tsx...${NC}"
PROJECT_FUNCTION="  // Function to get correct image path with base URL for GitHub Pages\n  const getImagePath = (path: string): string => {\n    return import.meta.env.MODE === 'production' \n      ? \`/portfolio\${path}\` \n      : path;\n  };"

# Add the function to ProjectDetail.tsx after project declaration
sed -i "/const project = projectId ? projectsData\[projectId\] : null;/a \\n  ${PROJECT_FUNCTION}" client/src/pages/ProjectDetail.tsx

# Fix image src in ProjectDetail.tsx
sed -i 's|src={screenshot\.url}|src={getImagePath(screenshot.url)}|g' client/src/pages/ProjectDetail.tsx
sed -i 's|onClick={() => window.open(screenshot\.url|onClick={() => window.open(getImagePath(screenshot.url)|g' client/src/pages/ProjectDetail.tsx

echo -e "${GREEN}>> Adding base path to vite.config.ts...${NC}"
if grep -q "base: \"/portfolio/\"" vite.config.ts; then
  echo -e "${YELLOW}Base path already configured in vite.config.ts${NC}"
else
  sed -i 's/export default defineConfig({/export default defineConfig({\n  base: "\/portfolio\/",/' vite.config.ts
  echo -e "${GREEN}Base path added to vite.config.ts${NC}"
fi

echo -e "\n${GREEN}==============================================${NC}"
echo -e "${GREEN}Deployment fixes completed! Next steps:${NC}"
echo -e "${GREEN}==============================================${NC}"
echo -e "1. Run ${YELLOW}npm run build${NC} to build your React app"
echo -e "2. Run ${YELLOW}npx gh-pages -d dist/public${NC} to deploy to GitHub Pages"
echo -e "3. Wait a few minutes for GitHub Pages to update"
echo -e "4. Visit ${YELLOW}https://fediabdelkebir.github.io/portfolio/${NC}"
