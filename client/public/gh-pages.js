/* GitHub Pages SPA Redirect Script */
// This script handles routing for single page applications on GitHub Pages
// It takes the current url and redirects to the index.html with proper routing

(function() {
  // Detect if this is a redirect from a 404 page
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  
  // If we have a redirect value, use it
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();
