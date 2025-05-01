import { motion } from "framer-motion";
import SkillBar from "./SkillBar";

export default function Skills() {
  const frontendSkills = [
    { name: "Angular", percentage: 95 },
    { name: "React", percentage: 85 },
    { name: "TypeScript", percentage: 90 },
    { name: "JavaScript", percentage: 90 },
    { name: "HTML5/CSS3", percentage: 95 }
  ];

  const backendSkills = [
    { name: "Spring Boot", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Java", percentage: 90 },
    { name: "C/C++", percentage: 80 },
    { name: "Symfony", percentage: 75 }
  ];

  const otherTechnologies = [
    "Git", "Docker", "Kubernetes", "RabbitMQ", "Kafka", "MongoDB", 
    "MySQL", "PostgreSQL", "Elasticsearch", "CI/CD", "REST API", 
    "Microservices", "Keycloak", "Auth2", "HazelCast", "Minio"
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-dark-100/50 dark:bg-dark-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            My expertise in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Frontend Development</h3>
            
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Backend Development</h3>
            
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* More Skills */}
        <motion.div 
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Other Technologies & Tools</h3>
            
            <div className="flex flex-wrap gap-3">
              {otherTechnologies.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="px-4 py-2 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
