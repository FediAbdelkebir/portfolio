// This script handles redirects for GitHub Pages SPA routing
// It should be included in your index.html

(function() {
  // Only run this script on production (GitHub Pages)
  if (window.location.hostname.includes('github.io')) {
    // Check if we have a redirect in the query string
    var redirect = window.location.search.match(/redirect=([^&]*)/);
    
    if (redirect && redirect[1]) {
      // Get the path to redirect to
      var path = decodeURIComponent(redirect[1]);
      
      // Remove the redirect parameter from the URL
      // This is a client-side redirect, so we use history API
      window.history.replaceState(null, null, path);
    }
  }
})();
