# Fix GitHub Pages Navigation and Image Issues

There are three issues to fix in your deployed site:

## 1. Fix Navigation Links

Open `client/src/components/Header.tsx` and update the navigation links to include the base path `/portfolio`:

```tsx
// Change links like this:
<Link href="/">Home</Link>

// To this:
<Link href="/portfolio/">Home</Link>

// Do this for ALL navigation links in the header
```

## 2. Fix Router in App.tsx

Open `client/src/App.tsx` and update the Router configuration:

```tsx
function Router() {
  // Add this at the top of the Router function
  const base = "/portfolio";
  
  return (
    <Switch>
      {/* Update all routes to use the base path */}
      <Route path={`${base}/`} exact>
        <Home />
      </Route>
      <Route path={`${base}/projects`} exact>
        <Projects />
      </Route>
      <Route path={`${base}/projects/:id`}>
        <ProjectDetail />
      </Route>
      {/* etc. for all your routes */}
      
      {/* Fallback route */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
```

## 3. Fix Image Paths

For all image imports in your project, make sure they use relative paths or import statements:

```tsx
// Instead of:
<img src="/attached_assets/some-image.jpg" />

// Use imports:
import someImage from "@assets/some-image.jpg";
// Then:
<img src={someImage} />

// OR use relative paths with the base:
<img src={`/portfolio/attached_assets/some-image.jpg`} />
```

## 4. Rebuild and Redeploy

After making these changes:

```bash
# Run your build again
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Additional Option: Use HashRouter

If you continue to have navigation issues, consider switching to HashRouter, which works better with GitHub Pages:

```tsx
// In client/src/App.tsx:
import { HashRouter, Route, Switch } from 'wouter/hash';

// Then use HashRouter instead of normal Router
function App() {
  return (
    <HashRouter>
      <Layout>
        <Router />
      </Layout>
    </HashRouter>
  );
}
```

This will change your URLs to use hashes like `/#/projects` which work reliably on GitHub Pages.
