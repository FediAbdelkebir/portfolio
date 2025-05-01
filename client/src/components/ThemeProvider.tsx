import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    const resolveTheme = (theme: Theme): "light" | "dark" => {
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches 
          ? "dark" 
          : "light";
      }
      return theme;
    };

    const resolvedTheme = resolveTheme(theme);
    
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = () => {
      if (theme === "system") {
        root.classList.remove("light", "dark");
        root.classList.add(
          mediaQuery.matches ? "dark" : "light"
        );
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(storageKey, newTheme);
    setThemeState(newTheme);
  };

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue} {...props}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
}

export { ThemeProvider, useTheme };
