import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";

// This type represents a detailed project
interface ProjectDetails {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  screenshots: {
    url: string;
    caption: string;
  }[];
  outcome: string;
}

// Map of project IDs to their detailed information
const projectsData: Record<string, ProjectDetails> = {
  "ebuild": {
    id: "ebuild",
    title: "Multi Management Web Application",
    company: "eBuild",
    period: "JULY 2022 - SEPTEMBER 2022",
    type: "Frontend Internship",
    description: [
      "During my engineering internship at eBuild, I worked on a comprehensive management web application designed for construction project management and client relationship management.",
      "I was responsible for developing the frontend interfaces using Angular 12 and integrating with a Laravel backend API."
    ],
    challenge: "The main challenge was developing a comprehensive client and project management system with features for task management, client profiles, quotation generation, and invoicing, all while maintaining a clean, modern UI that aligned with eBuild's brand identity.",
    solution: "I implemented responsive UI components using Angular 12 with a focus on creating intuitive user flows. The application featured dashboard views, data tables with filtering capabilities, form validation, and dynamic content generation for documents like quotations and invoices.",
    features: [
      "Client management system with CRUD operations",
      "Project tracking with deadline monitoring",
      "Task management with subtask capabilities",
      "Interactive task comments system",
      "Quotation and invoice generation",
      "Multi-language support (English and French)",
      "User authentication and password recovery"
    ],
    technologies: [
      "Angular 12",
      "TypeScript",
      "RxJS",
      "Angular Material",
      "Laravel (Backend)",
      "MySQL",
      "Bootstrap",
      "HTML5/CSS3"
    ],
    screenshots: [
      { url: "/projects/ebuild/login.jpg", caption: "User login interface with illustration and social authentication options" },
      { url: "/projects/ebuild/clients.jpg", caption: "Client management dashboard with filters and status indicators" },
      { url: "/projects/ebuild/add-client.jpg", caption: "Client registration form with contact details and validation" },
      { url: "/projects/ebuild/projects.jpg", caption: "Project listing with detailed descriptions and status tracking" },
      { url: "/projects/ebuild/add-project.jpg", caption: "Project creation wizard with step-by-step process" },
      { url: "/projects/ebuild/tasks.jpg", caption: "Task management interface with priority indicators" },
      { url: "/projects/ebuild/quotation.jpg", caption: "Quotation generation system with tax calculation" },
    ],
    outcome: "The application significantly improved eBuild's project workflow, reducing administrative time by approximately 40% and improving client communication through the organized tracking system. I gained extensive experience with Angular development, frontend-backend integration, and business process implementation."
  },
  "interactive-virtuelle": {
    id: "interactive-virtuelle",
    title: "Management Web Application",
    company: "Interactive Virtuelle",
    period: "JULY 2021 - SEPTEMBER 2021",
    type: "Full Stack MERN Intern",
    description: [
      "During my internship at Interactive Virtuelle, I worked as a full stack developer on a management web application using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      "The project focused on creating an efficient management system for internal company resources and client interactions."
    ],
    challenge: "The primary challenge was building a full-stack application that could handle various data types and relationships while maintaining performance and providing a responsive user interface.",
    solution: "I implemented a MERN stack architecture with RESTful API endpoints, MongoDB for flexible document storage, and React for building a dynamic and responsive frontend interface.",
    features: [
      "User authentication and role-based access control",
      "Dashboard with performance metrics and activity tracking",
      "Resource management system",
      "Client information portal",
      "Real-time notifications",
      "Data visualization with charts and graphs"
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript/ES6",
      "REST API",
      "HTML5/CSS3",
      "Bootstrap"
    ],
    screenshots: [
      { url: "/projects/iv/dashboard.jpg", caption: "Main dashboard interface" },
      { url: "/projects/iv/resource-management.jpg", caption: "Resource management view" }
    ],
    outcome: "The completed application streamlined internal management processes at Interactive Virtuelle, reducing manual data entry and improving visibility across departments. Through this project, I gained valuable experience with the full MERN stack, particularly in designing and implementing MongoDB schemas and creating responsive React components."
  },
  "sports-league": {
    id: "sports-league",
    title: "Sports League Platform",
    company: "Ebuild",
    period: "OCTOBER 2022 - DECEMBER 2022",
    type: "Full Stack Web Development",
    description: [
      "I developed the Sports League platform, a modern digital solution for connecting athletes and sports enthusiasts to organize and participate in various sporting events and tournaments across Tunisia.",
      "The platform includes user management, team formation, tournament organization, stadium reservations, and real-time chat functionalities to create a complete sports community ecosystem."
    ],
    challenge: "The primary challenge was to create a unified platform that could accommodate multiple sports types while managing complex relationships between users, teams, tournaments, and venues. The system needed to handle real-time interactions, scheduling, and user-generated content with a visually engaging interface.",
    solution: "I implemented a responsive single-page application with a sleek, modern UI featuring purple and neon color schemes. The platform utilizes a robust backend to manage user relationships, team formations, tournament brackets, and venue bookings with integrated real-time messaging functionality.",
    features: [
      "User profiles with achievements and statistics",
      "Team creation and management system",
      "Tournament organization with brackets and scoring",
      "Stadium/venue reservation system",
      "Real-time chat and messaging",
      "Event discovery and filtering",
      "Admin dashboard for platform management",
      "Social sharing and engagement features"
    ],
    technologies: [
      "HTML5/CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Vue.js",
      "Laravel",
      "WebSockets",
      "RESTful APIs"
    ],
    screenshots: [
      { url: "/projects/sports-league/homepage.jpg", caption: "Homepage featuring dynamic hero section with athlete imagery" },
      { url: "/projects/sports-league/registration.jpg", caption: "User registration form with profile image and team selection" },
      { url: "/projects/sports-league/login.jpg", caption: "Login page with social authentication options" },
      { url: "/projects/sports-league/profile.jpg", caption: "User profile with activity feed and achievements" },
      { url: "/projects/sports-league/teams.jpg", caption: "Team management interface with player listings" },
      { url: "/projects/sports-league/games.jpg", caption: "Available games and stadium booking interface" },
      { url: "/projects/sports-league/tournaments.jpg", caption: "Tournament listings with prize information and status" },
      { url: "/projects/sports-league/chat.jpg", caption: "Real-time messaging interface for team communication" },
      { url: "/projects/sports-league/admin-dashboard.jpg", caption: "Administrative dashboard with platform analytics" },
      { url: "/projects/sports-league/admin-terrain.jpg", caption: "Stadium management form for administrators" },
      { url: "/projects/sports-league/admin-users.jpg", caption: "User management interface for administrators" }
    ],
    outcome: "The Sports League platform successfully launched and became a central hub for sports enthusiasts in Tunisia, facilitating thousands of matches and tournaments. The platform's intuitive interface and comprehensive feature set drastically reduced the organizational overhead of sporting events while building a vibrant community of athletes. This project strengthened my skills in full-stack development, particularly in handling complex data relationships and creating engaging user interfaces."
  },
  "el-khima": {
    id: "el-khima",
    title: "Camping & Outdoor Events Platform",
    company: "El Khima",
    period: "JANUARY 2023 - APRIL 2023",
    type: "Full Stack Web Development",
    description: [
      "I developed El Khima, a comprehensive platform focused on camping and outdoor events in Tunisia, designed to connect nature enthusiasts and promote eco-friendly tourism.",
      "The platform features an event management system, e-commerce capabilities for outdoor equipment, and educational content through workshops and training sessions."
    ],
    challenge: "The main challenge was creating a cohesive platform that combines event management, e-commerce, and educational content while ensuring a seamless user experience across different devices and maintaining performance with media-rich content.",
    solution: "I implemented a responsive web application using modern frontend technologies and integrated various services including payment processing, content management, and user authentication to create a comprehensive outdoor activities platform.",
    features: [
      "Event management system with filtering and registration",
      "E-commerce store for camping and outdoor equipment",
      "Workshop and training session registration",
      "Responsive email templates and notifications",
      "Interactive image galleries",
      "User profiles and booking history",
      "Integrated payment processing"
    ],
    technologies: [
      "HTML5/CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "AJAX",
      "RESTful APIs"
    ],
    screenshots: [
      { url: "/projects/el-khima/home.jpg", caption: "Homepage featuring hero section with camping imagery" },
      { url: "/projects/el-khima/events.jpg", caption: "Events listing with filtering options and featured event cards" },
      { url: "/projects/el-khima/shop.jpg", caption: "E-commerce section with camping equipment and supplies" },
      { url: "/projects/el-khima/workshop.jpg", caption: "Workshop page with different training categories" },
      { url: "/projects/el-khima/email.jpg", caption: "Email template design for notifications and marketing" },
      { url: "/projects/el-khima/sport.jpg", caption: "Outdoor activities and sports section with gallery" }
    ],
    outcome: "El Khima successfully launched as Tunisia's premier camping and outdoor activities platform, attracting nature enthusiasts and promoting sustainable tourism. The platform streamlined event registration and equipment purchasing, increasing participation in outdoor activities and workshops. I gained valuable experience in creating a multi-faceted platform that combines various functionalities while maintaining a cohesive user experience."
  },
  "national-computer-center": {
    id: "national-computer-center",
    title: "Stock Management Web Application",
    company: "National Computer Center",
    period: "JANUARY 2020 - JUNE 2020",
    type: "End-of-study Project Internship",
    description: [
      "For my end-of-study project at the National Computer Center, I developed a comprehensive stock management web application using Angular 8 for the frontend and Spring Boot for the backend.",
      "The system was designed to track inventory, manage stock levels, and generate reports for decision-making."
    ],
    challenge: "The challenge was to create a robust inventory management system that could handle large amounts of data, perform complex queries, and provide real-time stock information while maintaining data accuracy and system performance.",
    solution: "I implemented a solution using Angular 8 for building a responsive frontend and Spring Boot with PostgreSQL for creating a scalable and secure backend. The application featured role-based access control, data validation, and a RESTful API architecture.",
    features: [
      "Real-time inventory tracking",
      "Product categorization and search",
      "Low stock alerts and notifications",
      "Supplier management",
      "Purchase order generation",
      "Historical data analysis",
      "Report generation and export"
    ],
    technologies: [
      "Angular 8",
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "RESTful API",
      "JPA/Hibernate",
      "Maven"
    ],
    screenshots: [
      { url: "/projects/ncc/dashboard.jpg", caption: "Inventory dashboard" },
      { url: "/projects/ncc/stock-listing.jpg", caption: "Stock listing interface" }
    ],
    outcome: "The stock management application was successfully implemented at the National Computer Center, resulting in improved inventory accuracy, reduced stockouts, and enhanced decision-making through data-driven insights. This project strengthened my skills in building enterprise-level applications with Angular and Spring Boot, as well as database design and optimization."
  },
  // Add more projects as needed
};

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const projectId = params?.id;
  const project = projectId ? projectsData[projectId] : null;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link to="/projects" className="inline-flex items-center mb-8 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Projects
        </Link>

        {/* Project header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark-800 dark:text-white">{project.title}</h1>
              <div className="text-primary font-medium mb-2">{project.company} | {project.period}</div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">{project.type}</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-dark-600 dark:text-dark-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Description and details */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Project Overview</h2>
              {project.description.map((paragraph, i) => (
                <p key={i} className="text-dark-600 dark:text-dark-300 mb-4">{paragraph}</p>
              ))}
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">The Challenge</h2>
              <p className="text-dark-600 dark:text-dark-300">{project.challenge}</p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Solution & Approach</h2>
              <p className="text-dark-600 dark:text-dark-300">{project.solution}</p>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                    <span className="text-dark-600 dark:text-dark-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Outcome & Learnings</h2>
              <p className="text-dark-600 dark:text-dark-300">{project.outcome}</p>
            </div>
          </motion.div>

          {/* Right column - Technologies */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Technologies Used</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-primary mr-2"><i className="fas fa-code"></i></span>
                    <span className="text-dark-600 dark:text-dark-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Screenshots Section - Full Width */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">Project Screenshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.length > 0 ? (
              project.screenshots.map((screenshot, i) => (
                <div 
                  key={i} 
                  className="rounded-xl overflow-hidden bg-dark-100 dark:bg-dark-800 shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => window.open(screenshot.url, '_blank')}
                >
                  <div className="h-56 overflow-hidden relative group">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.caption}
                      className="w-full h-full object-cover object-top transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white font-medium flex items-center gap-2">
                        <i className="fas fa-search"></i> Click to Enlarge
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-dark-600 dark:text-dark-300 text-sm">{screenshot.caption}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-dark-500 dark:text-dark-400 italic col-span-full text-center">
                Screenshots not available
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
