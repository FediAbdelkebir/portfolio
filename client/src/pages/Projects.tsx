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

// Project data
const projectsData: Project[] = [
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
    title: "Enterprise Social Network SAAS Platform",
    company: "Neocortex Technologies",
    period: "FEBRUARY 2023 - AUGUST 2023",
    type: "End of Studies Internship",
    shortDescription: "A comprehensive social networking platform tailored for corporate environments with customizable branding and gamification features.",
    technologies: ["Angular 15", "Microservices", "Quarkus", "Keycloak", "Kafka"],
    thumbnail: "/projects/neocortex/timeline.jpg"
  },
  {
    id: "tessi",
    title: "Smart-Control Application",
    company: "Tessi",
    period: "FEBRUARY 2023 - Present",
    type: "Fullstack Software Engineer",
    shortDescription: "An advanced application to combat identity fraud using document control and verification.",
    technologies: ["Angular", "TypeScript", "Spring Boot", "RabbitMQ", "Elasticsearch"],
    thumbnail: "/images/projects/tessi/thumbnail-tessi.jpg"
  },
  {
    id: "smart-control-demo",
    title: "Smart Control Demonstrateur",
    company: "Tessi",
    period: "AUGUST 2024 - OCTOBER 2024",
    type: "Fullstack Web Development",
    shortDescription: "A KYC controls engine demonstration app for document upload, management, and automated analysis results visualization.",
    technologies: ["Angular 18", "TypeScript", "REST APIs", "Reactive Programming"],
    thumbnail: "/images/projects/tessi/thumbnail-tessi.jpg"
  },
  {
    id: "smart-control-config",
    title: "Smart Control Configurateur",
    company: "Tessi",
    period: "OCTOBER 2024 - JANUARY 2025",
    type: "Fullstack Web Development",
    shortDescription: "A no-code platform for creating, modifying, and managing KYC control configurations with a visual interface.",
    technologies: ["Angular 18", "TypeScript", "Spring Boot", "JSON Path", "Reactive Forms"],
    thumbnail: "/images/projects/tessi/thumbnail-tessi.jpg"
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [technologyFilter, setTechnologyFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  
  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projectsData.forEach(project => {
      project.technologies.forEach(tech => {
        techSet.add(tech);
      });
    });
    return ['all', ...Array.from(techSet).sort()];
  }, []);
  
  // Sort and filter projects
  const filteredProjects = useMemo(() => {
    return projectsData
      .filter((project: Project) => {
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
      .sort((a: Project, b: Project) => {
        // Map month names to numbers for reliable parsing
        const months: { [key: string]: number } = {
          'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
          'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11
        };

        const parseDate = (period: string) => {
          if (period.toLowerCase().includes('present')) return new Date();
          const parts = period.split(' - ');
          const datePart = parts.length > 1 ? parts[1] : parts[0];
          const [monthStr, yearStr] = datePart.split(' ');
          const month = months[monthStr.toLowerCase()] || 0;
          const year = parseInt(yearStr);
          return new Date(year, month);
        };
        
        const dateA = parseDate(a.period);
        const dateB = parseDate(b.period);
        
        // If newest first, we want larger dates first (B - A)
        return sortOrder === 'newest' ? 
          dateB.getTime() - dateA.getTime() : 
          dateA.getTime() - dateB.getTime();
      });
  }, [searchQuery, technologyFilter, sortOrder]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8"
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

        {/* Filter controls */}
        <motion.div
          className="mb-10 p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search input */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-dark-800 dark:text-dark-100 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>

            {/* Filter by technology */}
            <div className="w-full md:w-1/3">
              <select
                value={technologyFilter}
                onChange={(e) => setTechnologyFilter(e.target.value)}
                className="w-full py-2 px-4 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-dark-800 dark:text-dark-100 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
              >
                {allTechnologies.map((tech: string) => (
                  <option key={tech} value={tech}>
                    {tech === 'all' ? 'All Technologies' : tech}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort by date */}
            <div className="w-full md:w-1/3">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full py-2 px-4 bg-gray-50 dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg text-dark-800 dark:text-dark-100 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
          
          {/* Project count */}
          <div className="mt-4 text-sm text-dark-500 dark:text-dark-400">
            Showing {filteredProjects.length} of {projectsData.length} projects
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project, index: number) => (
            <Link 
              key={project.id}
              to={import.meta.env.MODE === 'production' ? `/portfolio/projects/${project.id}` : `/projects/${project.id}`}
              className="block"
            >
              <motion.div
                className="h-full bg-white dark:bg-dark-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 bg-dark-200 dark:bg-dark-700 relative overflow-hidden">
                  {project.id === 'workmood' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/projects/workmood/events-list.jpg` : "/projects/workmood/events-list.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'ebuild' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/projects/ebuild/clients.jpg` : "/projects/ebuild/clients.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'el-khima' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/projects/el-khima/home.jpg` : "/projects/el-khima/home.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'sports-league' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/projects/sports-league/homepage.jpg` : "/projects/sports-league/homepage.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'interactive-virtuelle' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/projects/siv/dashboard.jpg` : "/projects/siv/dashboard.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'national-computer-center' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/projects/ncc/user-management.jpg` : "/projects/ncc/user-management.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'neocortex' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/projects/neocortex/timeline.jpg` : "/projects/neocortex/timeline.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'smart-control-demo' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/images/projects/smart-control-demo/main.png` : "/images/projects/smart-control-demo/main.png"}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : project.id === 'smart-control-config' ? (
                    <img 
                      src={import.meta.env.MODE === 'production' ? `/portfolio/images/projects/smart-control-config/about.png` : "/images/projects/smart-control-config/about.png"}
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
                    {project.technologies.map((tech: string, i: number) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-primary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="inline-block">
                    <span className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                      View Project Details
                      <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
