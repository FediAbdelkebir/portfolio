import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function throttle(func: Function, delay: number): (...args: any[]) => void {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
}

// Helper function to get correct path for GitHub Pages
export function getGitHubPagesPath(path: string): string {
  return import.meta.env.MODE === 'production' 
    ? `/portfolio${path}` 
    : path;
}

export const jobTitles = [
  'Software Architect Engineer',
  'Fullstack Developer',
  'Angular Specialist',
  'Spring Boot Expert'
];
