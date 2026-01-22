import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { isInViewport } from "@/lib/utils";

interface SkillBarProps {
  name: string;
}

export default function SkillBar({ name }: SkillBarProps) {
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
      </div>
    </div>
  );
}
