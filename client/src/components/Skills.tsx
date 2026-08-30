import { motion } from "framer-motion";

export default function Skills() {
  const frontendSkills = [
    "Angular",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5/CSS3"
  ];

  const backendSkills = [
    "Java",
    "Spring Boot",
    "Node.js",
    "REST APIs",
    "Microservices"
  ];

  const otherTechnologies = [
    "Git",
    "Docker",
    "Kubernetes",
    "RabbitMQ",
    "Kafka",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Elasticsearch",
    "CI/CD",
    "Keycloak",
    "Redis",
    "OAuth2"
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
            Fullstack engineering capabilities across frontend, backend, integrations, and delivery workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-3 py-2 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-lg text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-3 py-2 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-lg text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {tech}
                </motion.span>
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
            <h3 className="text-xl font-bold mb-6 text-dark-800 dark:text-white">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {otherTechnologies.map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-3 py-2 bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 rounded-lg text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
