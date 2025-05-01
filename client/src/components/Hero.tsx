import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { jobTitles } from "@/lib/utils";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed = 50;
    } else {
      typingSpeed = 100;
    }

    // When completed typing the current title
    if (!isDeleting && currentCharIndex === currentTitle.length) {
      setIsDeleting(true);
      typingSpeed = 1500;
    }
    // When completed deleting the current title
    else if (isDeleting && currentCharIndex === 0) {
      setIsDeleting(false);
      setCurrentTitleIndex((currentTitleIndex + 1) % jobTitles.length);
      typingSpeed = 500;
    }

    const timeout = setTimeout(() => {
      const currentTitle = jobTitles[currentTitleIndex];
      
      if (isDeleting) {
        setTypedText(currentTitle.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      } else {
        setTypedText(currentTitle.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentTitleIndex, currentCharIndex, isDeleting]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExperienceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-primary font-medium">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-dark-800 dark:text-white">
              Fedi Abdelkebir
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-dark-600 dark:text-dark-300 mb-6">
              <span>{typedText}</span><span className="typed-cursor">|</span>
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mb-8">
              Fullstack developer with expertise in Angular, Spring Boot, and microservices architecture. 
              Passionate about building scalable and robust applications to solve complex problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#experience" 
                onClick={handleExperienceClick}
                className="px-6 py-3 border border-dark-300 dark:border-dark-700 text-dark-600 dark:text-dark-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                View Experience
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div 
                className="absolute inset-0 bg-primary rounded-full opacity-20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="absolute inset-4 bg-primary/30 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-lg">
                  <img 
                    src={import.meta.env.MODE === 'production' ? '/portfolio/profile.png' : '/profile.png'} 
                    alt="Fedi Abdelkebir" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 lg:mt-32 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-dark-600 dark:text-dark-300 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-dark-400 dark:border-dark-600 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-dark-400 dark:bg-dark-600 rounded-full"
                animate={{ y: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
