import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-dark-100/50 dark:bg-dark-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            I'm a passionate Software Architect Engineer with expertise in designing and implementing scalable applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 */}
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 transform hover:-translate-y-1 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="text-3xl text-primary mb-4">
              <i className="fas fa-code"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">Fullstack Development</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Experienced in building end-to-end applications using modern frameworks like Angular and Spring Boot. Proficient in both frontend and backend technologies.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 transform hover:-translate-y-1 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="text-3xl text-primary mb-4">
              <i className="fas fa-sitemap"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">Software Architecture</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Skilled in designing robust microservice architectures and implementing scalable solutions using technologies like RabbitMQ, Kafka, and Docker.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 transform hover:-translate-y-1 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="text-3xl text-primary mb-4">
              <i className="fas fa-server"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">DevOps Practices</h3>
            <p className="text-dark-600 dark:text-dark-300">
              Experience with CI/CD pipelines, container orchestration, and cloud deployment using tools like Docker, Kubernetes, and various DevOps technologies.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Languages</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-dark-600 dark:text-dark-300">Arabic</span>
                <span className="text-dark-600 dark:text-dark-300 text-sm">Mother tongue</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-dark-600 dark:text-dark-300">English</span>
                <span className="text-dark-600 dark:text-dark-300 text-sm">Read, write, speak</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-dark-600 dark:text-dark-300">French</span>
                <span className="text-dark-600 dark:text-dark-300 text-sm">Read, write, speak</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Location</h3>
            <div className="flex items-start gap-4">
              <div className="text-xl text-primary">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-dark-600 dark:text-dark-300">Tunisia, Tunis</p>
                <div className="mt-4">
                  <a href="https://maps.google.com/?q=Tunisia,Tunis" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/90 transition-colors flex items-center gap-2">
                    <span>View on map</span>
                    <i className="fas fa-external-link-alt text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
