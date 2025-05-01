import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState, useMemo } from "react";

interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  shortDescription: string;
  technologies: string[];
  thumbnail: string;
}

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [technologyFilter, setTechnologyFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  
  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => {
        techSet.add(tech);
      });
    });
    return ['all', ...Array.from(techSet).sort()];
  }, []);
  
  // Sort and filter projects
  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter(project => {
        // Filter by search query
        const matchesSearch = searchQuery === '' || 
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          project.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Filter by technology
        const matchesTech = technologyFilter === 'all' || 
          project.technologies.includes(technologyFilter);
        
        return matchesSearch && matchesTech;
      })
      .sort((a, b) => {
        // Convert period strings to dates (assuming format "MONTH YEAR - MONTH YEAR" or "MONTH YEAR - Present")
        const getEndDate = (period: string) => {
          if (period.includes('Present')) return new Date();
          const endPart = period.split(' - ')[1];
          return new Date(endPart);
        };
        
        const dateA = getEndDate(a.period);
        const dateB = getEndDate(b.period);
        
        return sortOrder === 'newest' ? 
          dateB.getTime() - dateA.getTime() : 
          dateA.getTime() - dateB.getTime();
      });
  }, [searchQuery, technologyFilter, sortOrder]);
  
  const projects: Project[] = [
    {
      id: "workmood",
      title: "WorkMood - Employee Well-being Platform",
      company: "WorkMood",
      period: "OCTOBER 2021 - MARCH 2022",
      type: "Full Stack Development",
      shortDescription: "An employee well-being platform that enhances workplace relationships, facilitates anonymous feedback, and gamifies engagement.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Chart.js", "Bootstrap"],
      thumbnail: "/projects/workmood/events-list.jpg"
    },
    {
      id: "ebuild",
      title: "Multi Management Web Application",
      company: "eBuild",
      period: "JULY 2022 - SEPTEMBER 2022",
      type: "Frontend Internship",
      shortDescription: "A modern project/client management system with task tracking, invoicing, and quotation capabilities.",
      technologies: ["Laravel", "Angular 12", "MySQL"],
      thumbnail: "/projects/ebuild/thumbnail.jpg"
    },
    {
      id: "sports-league",
      title: "Sports League Platform",
      company: "Ebuild",
      period: "OCTOBER 2022 - DECEMBER 2022",
      type: "Full Stack Web Development",
      shortDescription: "A modern digital platform for connecting athletes, organizing sports events, and managing tournaments.",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
      thumbnail: "/projects/sports-league/homepage.jpg"
    },
    {
      id: "el-khima",
      title: "Camping & Outdoor Events Platform",
      company: "El Khima",
      period: "JANUARY 2023 - APRIL 2023",
      type: "Full Stack Web Development",
      shortDescription: "A platform for camping and outdoor events with e-commerce, event management, and workshop features.",
      technologies: ["HTML5/CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      thumbnail: "/projects/el-khima/home.jpg"
    },
    {
      id: "interactive-virtuelle",
      title: "SIV - Farm Management System",
      company: "Interactive Virtuelle",
      period: "JULY 2021 - SEPTEMBER 2021",
      type: "Full Stack MERN Internship",
      shortDescription: "A specialized farm management system with animal tracking, task management, and analytical dashboards.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js"],
      thumbnail: "/projects/siv/dashboard.jpg"
    },
    {
      id: "national-computer-center",
      title: "Stock Management Web Application",
      company: "National Computer Center",
      period: "JANUARY 2020 - JUNE 2020",
      type: "End-of-study Project Internship",
      shortDescription: "An inventory management system for tracking stock levels and product information.",
      technologies: ["Angular 8", "SpringBoot", "PostgreSQL"],
      thumbnail: "/projects/ncc/thumbnail.jpg"
    },
    {
      id: "neocortex",
      title: "SAAS Application",
      company: "Neocortex Technologies",
      period: "FEBRUARY 2023 - AUGUST 2023",
      type: "End of Studies Internship",
      shortDescription: "A sophisticated SAAS application built with modern technologies and microservices architecture.",
      technologies: ["Angular 15", "Microservices", "Quarkus", "Keycloak", "Kafka"],
      thumbnail: "/projects/neocortex/thumbnail.jpg"
    },
    {
      id: "tessi",
      title: "Smart-Control Application",
      company: "Tessi",
      period: "FEBRUARY 2023 - Present",
      type: "Fullstack Software Engineer",
      shortDescription: "An advanced application to combat identity fraud using document control and verification.",
      technologies: ["Angular", "TypeScript", "Spring Boot", "RabbitMQ", "Elasticsearch"],
      thumbnail: "/projects/tessi/thumbnail.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">My Projects</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-600 dark:text-dark-300">
            Explore a selection of my professional projects and work experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="h-48 bg-dark-200 dark:bg-dark-700 relative overflow-hidden">
                {project.id === 'workmood' ? (
                  <img 
                    src="/projects/workmood/events-list.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.id === 'ebuild' ? (
                  <img 
                    src="/projects/ebuild/clients.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.id === 'el-khima' ? (
                  <img 
                    src="/projects/el-khima/home.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.id === 'sports-league' ? (
                  <img 
                    src="/projects/sports-league/homepage.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.id === 'interactive-virtuelle' ? (
                  <img 
                    src="/projects/siv/dashboard.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.id === 'national-computer-center' ? (
                  <img 
                    src="/projects/ncc/user-management.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.id === 'neocortex' ? (
                  <img 
                    src="/projects/neocortex/timeline.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-800/50 text-white">
                    <i className="fas fa-laptop-code text-4xl"></i>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-primary mb-1">{project.type}</div>
                <h3 className="text-xl font-bold mb-2 text-dark-800 dark:text-white">{project.title}</h3>
                <p className="text-dark-500 dark:text-dark-400 text-sm mb-1">{project.company} | {project.period}</p>
                <p className="text-dark-600 dark:text-dark-300 text-sm mb-4">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link to={`/projects/${project.id}`} className="inline-block">
                  <span className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                    View Project Details
                    <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
