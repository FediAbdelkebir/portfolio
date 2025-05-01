import { motion } from "framer-motion";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
}

export default function SocialLinks({ 
  className = "", 
  iconClassName = "text-xl", 
  showLabels = false 
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/FediAbdelkebir",
      icon: "fab fa-github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fedi-abdelkebir-497965160/",
      icon: "fab fa-linkedin"
    },
    {
      name: "Email",
      url: "mailto:fedi.abdelkebir@yahoo.com",
      icon: "fas fa-envelope"
    }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <i className={`${link.icon} ${iconClassName}`}></i>
          {showLabels && <span>{link.name}</span>}
        </motion.a>
      ))}
    </div>
  );
}
