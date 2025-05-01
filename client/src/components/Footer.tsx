import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 dark:bg-dark-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          className="text-2xl font-bold font-heading text-white flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-normal text-dark-400">&lt;</span>
          <span className="text-primary">Fedi Abdelkebir</span>
          <span className="text-sm font-normal text-dark-400">/&gt;</span>
        </motion.div>
        
        <motion.p 
          className="text-dark-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Software Architect Engineer & Fullstack Developer
        </motion.p>
        
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SocialLinks className="justify-center" />
        </motion.div>
        
        <motion.div 
          className="text-dark-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          &copy; {currentYear} Fedi Abdelkebir. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
