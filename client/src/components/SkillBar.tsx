import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { isInViewport } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkVisibility = () => {
      if (skillRef.current && isInViewport(skillRef.current)) {
        setIsVisible(true);
        window.removeEventListener("scroll", checkVisibility);
      }
    };
    
    // Initial check
    checkVisibility();
    
    // Add scroll event listener
    window.addEventListener("scroll", checkVisibility);
    
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div ref={skillRef}>
      <div className="flex justify-between mb-1">
        <span className="text-dark-600 dark:text-dark-300">{name}</span>
        <span className="text-dark-500 dark:text-dark-400">{percentage}%</span>
      </div>
      <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
        <motion.div 
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
}
