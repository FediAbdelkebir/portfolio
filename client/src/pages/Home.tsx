import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Initialize skill bars animation and other effects on load
  useEffect(() => {
    const handleScroll = () => {
      // Get all skill progress elements
      const skillElements = document.querySelectorAll('.skill-progress');
      
      // Add any initialization logic here if needed
    };
    
    // Initial check on mount
    handleScroll();
    
    // Add scroll event listener for any scroll-based animations
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
