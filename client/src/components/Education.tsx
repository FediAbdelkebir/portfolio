import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

export default function Education() {
  const educationItems = [
    {
      title: "Software Architect Engineering",
      organization: "ESPRIT: Private School of Engineering and Technology",
      period: "2020 - Today",
      description: "Currently pursuing engineering studies with a focus on Software Architecture.",
    },
    {
      title: "Applied License in Development of Information Systems",
      organization: "Higher Institute of Technological Studies of Beja",
      period: "SEPTEMBER 2017 - JUNE 2020",
      description: "Completed a degree focused on information systems development and software engineering principles.",
    },
    {
      title: "Bachelor's Degree in Computer Science",
      organization: "Mohamed Larbi Chammari High School",
      period: "SEPTEMBER 2013 - JUNE 2017",
      description: "Completed a bachelor's degree with a focus on computer science fundamentals.",
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            My academic background and educational journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative timeline">
          {educationItems.map((edu, index) => (
            <TimelineItem 
              key={index}
              title={edu.title}
              organization={edu.organization}
              period={edu.period}
              description={edu.description}
              delayMultiplier={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
