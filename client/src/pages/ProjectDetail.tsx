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
  "workmood": {
    id: "workmood",
    title: "WorkMood - Employee Well-being Platform",
    company: "WorkMood",
    period: "OCTOBER 2021 - MARCH 2022",
    type: "Full Stack Development",
    description: [
      "WorkMood is an innovative platform designed to enhance workplace relationships and foster a positive company culture. The application provides employees with tools to express feedback about their colleagues and workplace environment, with options for anonymous communication.",
      "The platform integrates social features with gamification elements, allowing users to create, join, and like events, share posts, and earn points by completing challenges. These points can later be used to purchase access badges, adding a rewarding element to workplace engagement.",
      "As the lead full-stack developer, I was responsible for implementing both the customer-facing features and the comprehensive administrative dashboard, which provides detailed analytics and management tools for all platform activities."
    ],
    challenge: "The primary challenge was creating a system that could facilitate honest communication while maintaining user privacy and preventing misuse. We needed to build a platform that encouraged authentic engagement while implementing measures to prevent negative workplace dynamics. Additionally, we had to design an intuitive rewards system that would motivate participation without creating unhealthy competition.",
    solution: "We implemented a sophisticated anonymous feedback system with content moderation to ensure constructive communication. The event management system was built with a focus on inclusivity, allowing easy creation and discovery of workplace activities. For the gamification aspect, we created a balanced points system tied to positive contributions, with challenges designed to promote team building and professional growth. The administrative dashboard provides comprehensive analytics while respecting user privacy, offering management insights without compromising individual data protection.",
    features: [
      "Anonymous feedback system with optional identity disclosure",
      "Event creation, joining, and social interactions (likes, comments)",
      "Points-based reward system with challenges and badges",
      "Social newsfeed with post sharing capabilities",
      "Comprehensive administrative dashboard with detailed analytics",
      "User management system with role-based access control",
      "Reclamation and offers management",
      "Interactive statistical visualizations for employee engagement metrics"
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Chart.js",
      "Bootstrap",
      "RESTful APIs",
      "JWT Authentication"
    ],
    screenshots: [
      { url: "/projects/workmood/logo.jpg", caption: "WorkMood logo with emoticons representing workplace moods" },
      { url: "/projects/workmood/home.jpg", caption: "Homepage showcasing platform services and engagement metrics" },
      { url: "/projects/workmood/events-list.jpg", caption: "Events listing page with join/like functionality" },
      { url: "/projects/workmood/newsfeed.jpg", caption: "Social newsfeed with article sharing and categorization" },
      { url: "/projects/workmood/admin-dashboard.jpg", caption: "Administrative dashboard with management modules" },
      { url: "/projects/workmood/add-event.jpg", caption: "Event creation interface with points and type settings" },
      { url: "/projects/workmood/admin-badges.jpg", caption: "Badge management system for administrators" },
      { url: "/projects/workmood/admin-complaints.jpg", caption: "Complaint management interface with filtering options" },
      { url: "/projects/workmood/statistics.jpg", caption: "Statistical visualization of platform engagement metrics" }
    ],
    outcome: "The WorkMood platform significantly improved workplace communication and employee engagement metrics for our client company. Anonymous feedback features enabled honest communication that addressed previously unspoken concerns, while the event system increased participation in team-building activities by 48%. The gamification elements proved particularly successful, with 73% of employees actively participating in challenges and redeeming rewards. The administrative insights provided by the dashboard allowed management to identify and address engagement issues proactively, leading to measured improvements in employee satisfaction scores."
  },
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
    title: "SIV - Farm Management System",
    company: "Interactive Virtuelle",
    period: "JULY 2021 - SEPTEMBER 2021",
    type: "Full Stack MERN Internship",
    description: [
      "During my internship at Interactive Virtuelle, I designed and developed a specialized farm management system called SIV (Solutions Interactives Virtuelles) using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "The application provides comprehensive functionality for managing farms, including animal tracking, task management, farmer administration, and product inventory management."
    ],
    challenge: "The main challenge was developing a complex system with multiple interconnected modules that needed to track various types of farm entities (animals, farmers, tasks, products) while maintaining data integrity across the platform. The system needed to accommodate different user roles with specific access permissions while providing a user-friendly interface for farm administrators.",
    solution: "I implemented a modular solution using React.js for a responsive frontend with intuitive dashboards and forms, Node.js with Express for a robust API backend, and MongoDB for flexible document storage. The application featured detailed animal records with lineage tracking, task management with point systems, and comprehensive reporting through visual analytics.",
    features: [
      "Cattle and calf management with detailed record keeping",
      "Farmer registration and profile management",
      "Task tracking system with point allocation",
      "Dashboard with visual statistics and farm analytics",
      "Product inventory and stock management",
      "User management with role-based access control",
      "Responsive design for both desktop and mobile use"
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "Bootstrap",
      "Chart.js",
      "RESTful API"
    ],
    screenshots: [
      { url: "/projects/siv/dashboard.jpg", caption: "Dashboard with farm statistics and analytics" },
      { url: "/projects/siv/task-list.jpg", caption: "Task management interface with status tracking" },
      { url: "/projects/siv/add-task.jpg", caption: "Task creation form with point allocation" },
      { url: "/projects/siv/add-animal.jpg", caption: "Detailed animal registration form" },
      { url: "/projects/siv/add-calf.jpg", caption: "Calf registration with lineage tracking" },
      { url: "/projects/siv/user-management.jpg", caption: "User management system" },
      { url: "/projects/siv/farmer-list.jpg", caption: "Farmer listing with search functionality" },
      { url: "/projects/siv/login.jpg", caption: "Login screen with logo" },
      { url: "/projects/siv/login-farm.jpg", caption: "Themed login screen with farm illustration" },
      { url: "/projects/siv/product-list.jpg", caption: "Product inventory management" },
      { url: "/projects/siv/product-form.jpg", caption: "Product creation and editing form" },
      { url: "/projects/siv/logo.jpg", caption: "SIV logo and branding" }
    ],
    outcome: "The SIV farm management system successfully streamlined operations for agricultural businesses, providing them with a centralized platform for tracking animals, managing tasks, and monitoring farm productivity. The application's intuitive interface and comprehensive feature set significantly reduced manual record-keeping and improved data visibility across all aspects of farm management. Through this project, I gained valuable experience with the full MERN stack, particularly in designing complex data models and building interconnected system modules."
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
      { url: "/projects/ncc/logo.jpg", caption: "CNI - National Computer Center Logo" },
      { url: "/projects/ncc/login.jpg", caption: "User authentication screen with modern design" },
      { url: "/projects/ncc/user-management.jpg", caption: "User management interface with role-based access" },
      { url: "/projects/ncc/article-management.jpg", caption: "Article management with search and filtering" },
      { url: "/projects/ncc/add-structure.jpg", caption: "Structure management interface" },
      { url: "/projects/ncc/internal-orders.jpg", caption: "Internal order management with approval flow" },
      { url: "/projects/ncc/external-orders.jpg", caption: "External order tracking system" },
      { url: "/projects/ncc/invoice-pdf.jpg", caption: "PDF invoice generation with digital signature" }
    ],
    outcome: "The stock management application was successfully implemented at the National Computer Center, resulting in improved inventory accuracy, reduced stockouts, and enhanced decision-making through data-driven insights. This project strengthened my skills in building enterprise-level applications with Angular and Spring Boot, as well as database design and optimization."
  },
  "neocortex": {
    id: "neocortex",
    title: "Enterprise Social Network SAAS Platform",
    company: "Neocortex Technologies",
    period: "FEBRUARY 2023 - AUGUST 2023",
    type: "End of Studies Internship",
    description: [
      "Developed a comprehensive Enterprise Social Network (ESN) SAAS platform during my end-of-studies internship at Neocortex Technologies, inspired by modern social media but tailored for corporate use.",
      "The platform combines social networking features with productivity tools, enabling employees to connect, share information, recognize achievements through badges, and customize their workspace environment.",
      "As the lead developer, I was involved in all aspects of the application development lifecycle, from initial design to deployment, working with a microservices architecture for optimal scalability and maintenance."
    ],
    challenge: "The main challenge was creating a secure, scalable enterprise social platform that balanced social interaction with professional productivity. We needed to implement strict data isolation between tenants while allowing for deep customization of each instance. Another significant challenge was building a platform that supported both content personalization and enterprise-wide communication tools.",
    solution: "Implemented a robust solution using Angular 15 for the frontend, with Quarkus-based microservices for the backend and Keycloak for identity management. We used a modular architecture that allowed for tenant-specific customizations without compromising the core platform functionality. The timeline feature was built with real-time updates using Kafka, while the achievement system (badges) was designed with gamification principles to encourage positive workplace behaviors.",
    features: [
      "Customizable platform branding and appearance",
      "Social timeline with multi-media post creation",
      "Achievement system with assignable badges",
      "Detailed user profiles with professional information",
      "Organization data import tools",
      "Product and service marketplace",
      "Real-time notifications and updates",
      "Comprehensive admin dashboard with analytics",
      "Mobile-responsive design for cross-device usage"
    ],
    technologies: [
      "Angular 15",
      "TypeScript",
      "Microservices Architecture",
      "Quarkus",
      "Java",
      "Keycloak",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Kubernetes"
    ],
    screenshots: [
      { url: "/projects/neocortex/login.jpg", caption: "Branded login screen with customizable messaging" },
      { url: "/projects/neocortex/timeline.jpg", caption: "Social timeline with personal weather widget and post creation" },
      { url: "/projects/neocortex/create-post.jpg", caption: "Multi-image post creation with people tagging" },
      { url: "/projects/neocortex/user-profile.jpg", caption: "Detailed user profile with professional information and activity feed" },
      { url: "/projects/neocortex/badges.jpg", caption: "Achievement badge system with success confirmation" },
      { url: "/projects/neocortex/assign-badges.jpg", caption: "Interface for assigning badges to employees" },
      { url: "/projects/neocortex/product.jpg", caption: "Product creation form for internal marketplace" },
      { url: "/projects/neocortex/customize-platform.jpg", caption: "Platform customization tools for branding and logos" },
      { url: "/projects/neocortex/inject-data.jpg", caption: "Data import tool for organizational information" }
    ],
    outcome: "The Enterprise Social Network platform was successfully deployed to multiple corporate clients, significantly improving internal communication and employee engagement. The achievement system became particularly popular, with companies reporting increased participation in corporate initiatives tied to badge rewards. The platform's customization capabilities allowed each client to create a unique digital workspace that reflected their brand and culture, while the underlying architecture ensured consistent performance and security across all deployments."
  },
  "smart-control-demo": {
    id: "smart-control-demo",
    title: "Smart Control Demonstrateur",
    company: "Tessi",
    period: "AUGUST 2024 - OCTOBER 2024",
    type: "Fullstack Web Development",
    description: [
      "The KYC Controls Engine Demo App is an Angular 18 application designed to demonstrate a powerful KYC (Know Your Customer) controls engine.",
      "It provides a complete interface for user authentication, document management, and the execution of complex validation rules on uploaded documents.",
      "The application serves as showcase for the engine's capabilities, allowing users to visualize the automated analysis results and the multi-language support (French/English) integrated into the system."
    ],
    challenge: "The main challenge was to create a user-friendly demonstration of a complex backend engine, ensuring that technical validation results were presented in an understandable way for business users while maintaining a high standard of code quality and performance.",
    solution: "I implemented a reactive frontend using Angular 18 that handles asynchronous document processing and real-time result visualization. I focused on memory leak prevention, type-safe API calls, and a centralized error handling system to ensure a robust demonstration environment.",
    features: [
      "User authentication and token management",
      "Document upload and management system",
      "Folder management for organizing controls",
      "Control execution and results visualization",
      "Multi-language support (French/English)",
      "Structured logging and toast notifications",
      "Mock run mode for local testing without external services"
    ],
    technologies: [
      "Angular 18",
      "TypeScript",
      "RxJS",
      "RESTful APIs",
      "Docker",
      "ESLint",
      "Prettier"
    ],
    screenshots: [
      { url: "/images/projects/smart-control-demo/login.png", caption: "Secure login interface for the KYC Controls Demo" },
      { url: "/images/projects/smart-control-demo/main.png", caption: "Main dashboard showing document analysis and validation results" }
    ],
    outcome: "The demonstrator allowed stakeholders to quickly grasp the value of the KYC controls engine, leading to increased adoption and clearer communication between technical teams and business departments. The use of modern Angular 18 patterns ensured the application was easy to maintain and extend."
  },
  "smart-control-config": {
    id: "smart-control-config",
    title: "Smart Control Configurateur",
    company: "Tessi",
    period: "OCTOBER 2024 - JANUARY 2025",
    type: "Fullstack Web Development",
    description: [
      "The Smart Control Configurateur is a specialized no-code platform designed to assist in the creation and management of complex JSON-based configuration scripts.",
      "These scripts define the sequence of actions to be executed by a KYC validation engine, including document analysis, field validation, and inter-document consistency checks.",
      "The application provides tools for managing the action documentation, formalizing grammar rules, and building configurations through an intuitive visual interface."
    ],
    challenge: "Building a configuration tool that can handle the complexity of nested document structures and interdependent validation actions required a deep understanding of the configuration grammar and a way to make it accessible to non-technical users.",
    solution: "I developed a comprehensive configuration builder that uses a grammar model to validate rules in real-time. The interface allows users to browse documented actions, add fields to documents, and configure complex 'controls_inter' for multi-document validation without writing raw JSON.",
    features: [
      "Visual no-code configuration builder",
      "Action documentation library and search",
      "Grammar-based validation for configuration rules",
      "Support for intra-document and inter-document controls",
      "Import/Export of configuration scripts in JSON format",
      "Live JSON preview of the generated configuration",
      "Multi-document configuration support (e.g., JDOM, CNI matching)"
    ],
    technologies: [
      "Angular 18",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "JSON Path",
      "Reactive Forms",
      "Bootstrap"
    ],
    screenshots: [
      { url: "/images/projects/smart-control-config/about.png", caption: "Application introduction showing key features and technical info" },
      { url: "/images/projects/smart-control-config/list.png", caption: "List of existing KYC configurations with status tracking" },
      { url: "/images/projects/smart-control-config/create.png", caption: "Wizard for creating a new configuration" },
      { url: "/images/projects/smart-control-config/editor.png", caption: "Visual editor for document fields and validation actions" },
      { url: "/images/projects/smart-control-config/form.png", caption: "Action configuration form with parameter validation" },
      { url: "/images/projects/smart-control-config/import.png", caption: "Configuration import interface from JSON files" },
      { url: "/images/projects/smart-control-config/json.png", caption: "Live JSON preview of the configuration script" },
      { url: "/images/projects/smart-control-config/json-file.png", caption: "Detailed view of the exported documentation JSON" },
      { url: "/images/projects/smart-control-config/view.png", caption: "Documentation viewer for specific validation actions" },
      { url: "/images/projects/smart-control-config/modify.png", caption: "Interface for modifying existing action documentations" }
    ],
    outcome: "The configurator drastically reduced the time required to onboard new KYC document types, moving from days of manual JSON writing to hours of visual configuration. It also eliminated common syntax errors and improved the reliability of the validation scripts deployed in production."
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute(import.meta.env.MODE === 'production' ? "/portfolio/projects/:id" : "/projects/:id");
  const projectId = params?.id;
  const project = projectId ? projectsData[projectId] : null;
  
  // Function to get correct image path with base URL for GitHub Pages
  const getImagePath = (path: string): string => {
    // Make sure the path starts with a slash
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return import.meta.env.MODE === 'production' 
      ? `/portfolio${normalizedPath}` 
      : normalizedPath;
  };
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to={import.meta.env.MODE === 'production' ? '/portfolio/projects' : '/projects'} className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link to={import.meta.env.MODE === 'production' ? '/portfolio/projects' : '/projects'} className="inline-flex items-center mb-8 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary transition-colors">
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
            {/* Project overview with icon and gradient border */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8 border-l-4 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0"></div>
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary z-10">
                <i className="fas fa-project-diagram text-lg"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white flex items-center gap-2">
                  Project Overview
                </h2>
                {project.description.map((paragraph, i) => (
                  <p key={i} className="text-dark-600 dark:text-dark-300 mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* The challenge with icon and gradient border */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8 border-l-4 border-amber-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full z-0"></div>
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-amber-500/20 text-amber-500 z-10">
                <i className="fas fa-mountain text-lg"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white flex items-center gap-2">
                  The Challenge
                </h2>
                <p className="text-dark-600 dark:text-dark-300">{project.challenge}</p>
              </div>
            </div>

            {/* Solution with icon and gradient border */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8 border-l-4 border-green-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full z-0"></div>
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-green-500/20 text-green-500 z-10">
                <i className="fas fa-lightbulb text-lg"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white flex items-center gap-2">
                  Solution & Approach
                </h2>
                <p className="text-dark-600 dark:text-dark-300">{project.solution}</p>
              </div>
            </div>

            {/* Features with icon and gradient border */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8 border-l-4 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full z-0"></div>
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-500 z-10">
                <i className="fas fa-list-check text-lg"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white flex items-center gap-2">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2"><i className="fas fa-check-circle mt-1"></i></span>
                      <span className="text-dark-600 dark:text-dark-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome with icon and gradient border */}
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 border-l-4 border-purple-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full z-0"></div>
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-500 z-10">
                <i className="fas fa-chart-line text-lg"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white flex items-center gap-2">
                  Outcome & Learnings
                </h2>
                <p className="text-dark-600 dark:text-dark-300">{project.outcome}</p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Technologies */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-6 mb-8 border-l-4 border-indigo-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-bl-full z-0"></div>
              <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-500 z-10">
                <i className="fas fa-laptop-code text-lg"></i>
              </div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-4 text-dark-800 dark:text-white">Technologies Used</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-dark-700 transition-colors">
                      <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-3">
                        <i className="fas fa-code"></i>
                      </span>
                      <span className="text-dark-600 dark:text-dark-300">{tech}</span>
                    </div>
                  ))}
                </div>
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
                  onClick={() => window.open(getImagePath(screenshot.url), '_blank')}
                >
                  <div className="h-56 overflow-hidden relative group">
                    <img 
                      src={getImagePath(screenshot.url)} 
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
