import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply theme change whenever it changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle scroll after navigation with increasing retries
  const scrollToSection = (id: string, attempt = 1) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      } else if (attempt < 5) {
        // If element not found yet and we haven't tried too many times
        // try again with exponential backoff
        scrollToSection(id, attempt + 1);
      }
    }, attempt * 100); // Increasing delay on each attempt
  };

  // Handle navigation between sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // Get base path for GitHub Pages
    const base = import.meta.env.MODE === 'production' ? '/portfolio' : '';
    // Check if we're on the home page
    const isHomePage = window.location.pathname === base + '/' || window.location.pathname === base || window.location.pathname.endsWith('/portfolio/');
    
    if (!isHomePage) {
      // Use router to navigate to home, then scroll
      setLocation(`${base}/`);
      scrollToSection(id);
    } else {
      // Already on home page, just scroll
      scrollToSection(id);
    }
    
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/70 dark:bg-dark-900/70 backdrop-blur-md shadow-sm" 
      : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={import.meta.env.MODE === 'production' ? '/portfolio/' : '/'} className="text-2xl font-bold font-heading text-primary flex items-center gap-2">
          <span className="text-sm font-normal hidden md:inline-block text-dark-600 dark:text-dark-300">&lt;</span>
          <span>Fedi Abdelkebir</span>
          <span className="text-sm font-normal hidden md:inline-block text-dark-600 dark:text-dark-300">/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">About</a></li>
              <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Experience</a></li>
              <li><Link href={import.meta.env.MODE === 'production' ? '/portfolio/projects' : '/projects'} className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</Link></li>
              <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Education</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-800 dark:text-dark-100 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              {theme === 'dark' ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" className="text-yellow-400" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" className="text-gray-600" />
              )}
            </svg>
          </button>
        </div>

        <button 
          id="mobile-menu-button" 
          className="md:hidden p-2 rounded-lg text-dark-800 dark:text-dark-100"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white dark:bg-dark-900 px-4 py-4 shadow-lg ${
          isMobileMenuOpen ? "animate-slide-down" : "hidden"
        }`}
      >
        <nav>
          <ul className="space-y-4">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">About</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Experience</a></li>
            <li><Link href={import.meta.env.MODE === 'production' ? '/portfolio/projects' : '/projects'} className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</Link></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')} className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Education</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a></li>
            <li className="pt-2 border-t border-dark-200 dark:border-dark-700">
              <button 
                onClick={toggleTheme}
                className="w-full py-2 flex items-center justify-between text-dark-600 dark:text-dark-300"
              >
                <span>Toggle Theme</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  {theme === 'dark' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" className="text-yellow-400" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" className="text-gray-600" />
                  )}
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
