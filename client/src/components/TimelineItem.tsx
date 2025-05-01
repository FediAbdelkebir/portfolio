import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
  bulletPoints?: string[];
  delayMultiplier?: number;
}

export default function TimelineItem({ 
  title, 
  organization, 
  period, 
  description, 
  skills, 
  bulletPoints, 
  delayMultiplier = 0 
}: TimelineItemProps) {
  return (
    <motion.div 
      className="ml-8 md:ml-12 mb-12 relative timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * delayMultiplier }}
    >
      <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 transform hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white">{title}</h3>
            <div className="text-primary font-medium">{organization}</div>
          </div>
          <div className="text-dark-500 dark:text-dark-400 mt-2 md:mt-0">
            {period}
          </div>
        </div>
        <p className="text-dark-600 dark:text-dark-300 mb-4">
          {description}
        </p>
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-2 text-dark-600 dark:text-dark-300">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <i className="fas fa-check-circle text-primary mt-1"></i>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
        {skills && skills.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-primary rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
