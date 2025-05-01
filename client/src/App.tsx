import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";

function Router() {
  // Add base path for GitHub Pages
  const base = import.meta.env.MODE === 'production' ? '/portfolio' : '';
  
  return (
    <Layout>
      <Switch>
        <Route path={`${base}/`} component={Home} />
        <Route path={`${base}/projects`} component={Projects} />
        <Route path={`${base}/projects/:id`} component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
