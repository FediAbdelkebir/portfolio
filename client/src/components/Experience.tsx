import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  const experiences = [
    {
      title: "Fullstack Software Engineer",
      organization: "Tessi",
      period: "FEBRUARY 2023 - Present",
      description: "As a FullStack Developer, I was responsible for the development of the Smart-Control application to combat identity fraud. Recently, I led the development of the Smart Control Demonstrateur and the Smart Control Configurateur projects.",
      bulletPoints: [
        "Developed using Angular, TypeScript, Spring Boot, and RabbitMQ",
        "Implemented Elasticsearch for robust document searching and retrieval",
        "Deployed with Rancher to control the provided documents",
        "Led the development of Smart Control Demonstrateur and Smart Control Configurateur"
      ],
      skills: ["Angular", "TypeScript", "Spring Boot", "RabbitMQ", "Elasticsearch", "Rancher"]
    },
    {
      title: "End of Studies Internship",
      organization: "Neocortex Technologies",
      period: "FEBRUARY 2023 - AUGUST 2023",
      description: "Worked as a FullStack Developer (Angular/Quarkus) on a SAAS Application development project.",
      bulletPoints: [
        "Built a SAAS Application with modern technologies",
        "Implemented with Angular15, Microservices, Keycloak, Auth2, Kafka, HazelCast, Minio",
        "Used DevOps practices for deployment and integration"
      ],
      skills: ["Angular15", "Quarkus", "Microservices", "Keycloak", "Kafka", "DevOps"]
    },
    {
      title: "Engineering Internship",
      organization: "eBuild",
      period: "JULY 2022 - SEPTEMBER 2022",
      description: "Worked as a Front-end Intern on a Multi Management Web Application.",
      bulletPoints: [
        "Built a Multi Management Web Application",
        "Utilized Laravel, Angular 12, and MySQL for development"
      ],
      skills: ["Laravel", "Angular 12", "MySQL"]
    },
    {
      title: "Engineering Internship",
      organization: "Interactive Virtuelle",
      period: "JULY 2021 - SEPTEMBER 2021",
      description: "Worked as a Full stack MERN Intern on a Management Web Application.",
      bulletPoints: [
        "Developed a Management Web Application",
        "Utilized MongoDB, ExpressJS, ReactJS, and NodeJS"
      ],
      skills: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]
    },
    {
      title: "End-of-study Project Internship",
      organization: "National Computer Center",
      period: "JANUARY 2020 - JUNE 2020",
      description: "Worked as a SpringBoot / Angular 8 Intern on a stock management web application.",
      bulletPoints: [
        "Developed a stock management web application",
        "Used Angular 8, SpringBoot, and PostgreSQL"
      ],
      skills: ["Angular 8", "SpringBoot", "PostgreSQL"]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            My professional journey as a fullstack developer and software architect.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index}
              title={exp.title}
              organization={exp.organization}
              period={exp.period}
              description={exp.description}
              bulletPoints={exp.bulletPoints}
              skills={exp.skills}
              delayMultiplier={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
