import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect } from "react";

const featuredProjects = [
  {
    id: "smart-control-config",
    title: "Smart Control Configurateur",
    description: "No-code configuration builder for complex KYC validation flows.",
    label: "Tessi"
  },
  {
    id: "smart-control-demo",
    title: "Smart Control Demonstrateur",
    description: "Business-facing KYC demo application for document validation and result visualization.",
    label: "Tessi"
  },
  {
    id: "neocortex",
    title: "Enterprise Social Network",
    description: "Corporate platform with social collaboration, workflows, and gamified engagement features.",
    label: "Neocortex"
  }
];

export default function Home() {
  // Initialize skill bars animation and other effects on load
  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll<HTMLElement>('.skill-progress');
      if (skillElements.length) {
        skillElements.forEach((element) => {
          const target = element.dataset.width;
          if (target && !element.dataset.animated) {
            element.style.width = target;
            element.dataset.animated = 'true';
          }
        });
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">Selected Work</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-dark-600 dark:text-dark-300">
              A few examples of the product and platform work I’ve delivered across fullstack engineering projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border border-dark-200 dark:border-dark-700"
              >
                <div className="text-sm font-medium text-primary mb-3">{project.label}</div>
                <h3 className="text-xl font-bold mb-3 text-dark-800 dark:text-white">{project.title}</h3>
                <p className="text-dark-600 dark:text-dark-300 mb-6">{project.description}</p>
                <Link href={`/projects/${project.id}`} className="inline-flex items-center text-primary hover:text-primary/90 font-medium">
                  View project <span className="ml-2">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
