#!/bin/bash

# Define paths
EXPORT_DIR="portfolio-export"
REPO_DIR="$EXPORT_DIR/repository"
PUBLIC_DIR="$REPO_DIR"

# Clean and create directories
rm -rf "$EXPORT_DIR"
mkdir -p "$PUBLIC_DIR"

# Create assets directory structure
mkdir -p "$PUBLIC_DIR/assets"
mkdir -p "$PUBLIC_DIR/projects"
mkdir -p "$PUBLIC_DIR/projects/ebuild"
mkdir -p "$PUBLIC_DIR/projects/el-khima"
mkdir -p "$PUBLIC_DIR/projects/ncc"
mkdir -p "$PUBLIC_DIR/projects/neocortex"
mkdir -p "$PUBLIC_DIR/projects/siv"
mkdir -p "$PUBLIC_DIR/projects/sports-league"
mkdir -p "$PUBLIC_DIR/projects/workmood"

# Copy assets and images
echo "*** Copying assets and images"
cp -r ./attached_assets/cv_photo-removebg.png "$PUBLIC_DIR/assets/profile.png"

# Copy project images
echo "*** Copying project images"

# eBuild project
cp -r ./attached_assets/AjouterClient.png "$PUBLIC_DIR/projects/ebuild/add-client.jpg"
cp -r ./attached_assets/AjouterProject.png "$PUBLIC_DIR/projects/ebuild/add-project.jpg"
cp -r ./attached_assets/Clients.PNG "$PUBLIC_DIR/projects/ebuild/clients.jpg"
cp -r ./attached_assets/LoginSIV.png "$PUBLIC_DIR/projects/ebuild/login.jpg"
cp -r ./attached_assets/Projects.png "$PUBLIC_DIR/projects/ebuild/projects.jpg"
cp -r ./attached_assets/devis.png "$PUBLIC_DIR/projects/ebuild/quotation.jpg"
cp -r ./attached_assets/Taches.png "$PUBLIC_DIR/projects/ebuild/tasks.jpg"

# El Khima project
cp -r ./attached_assets/Email.png "$PUBLIC_DIR/projects/el-khima/email.jpg"
cp -r ./attached_assets/Events.png "$PUBLIC_DIR/projects/el-khima/events.jpg"
cp -r ./attached_assets/Home.png "$PUBLIC_DIR/projects/el-khima/home.jpg"
cp -r ./attached_assets/Shop.png "$PUBLIC_DIR/projects/el-khima/shop.jpg"
cp -r ./attached_assets/Sport.png "$PUBLIC_DIR/projects/el-khima/sport.jpg"
cp -r ./attached_assets/Workshop.png "$PUBLIC_DIR/projects/el-khima/workshop.jpg"

# NCC project
cp -r ./attached_assets/AjouterStructure.jpg "$PUBLIC_DIR/projects/ncc/add-structure.jpg"
cp -r ./attached_assets/"Gestion Article.png" "$PUBLIC_DIR/projects/ncc/article-management.jpg"
cp -r ./attached_assets/BCE.png "$PUBLIC_DIR/projects/ncc/external-orders.jpg"
cp -r ./attached_assets/BCI.png "$PUBLIC_DIR/projects/ncc/internal-orders.jpg"
cp -r ./attached_assets/PDF.png "$PUBLIC_DIR/projects/ncc/invoice-pdf.jpg"
cp -r ./attached_assets/Login.png "$PUBLIC_DIR/projects/ncc/login.jpg"
cp -r ./attached_assets/logo.png "$PUBLIC_DIR/projects/ncc/logo.jpg"
cp -r ./attached_assets/"Gestion User.png" "$PUBLIC_DIR/projects/ncc/user-management.jpg"

# Neocortex project
cp -r ./attached_assets/"Affect Badges.jpg" "$PUBLIC_DIR/projects/neocortex/assign-badges.jpg"
cp -r ./attached_assets/Badges.jpg "$PUBLIC_DIR/projects/neocortex/badges.jpg"
cp -r ./attached_assets/Timeline-createPost.jpg "$PUBLIC_DIR/projects/neocortex/create-post.jpg"
cp -r ./attached_assets/"customize platform.jpg" "$PUBLIC_DIR/projects/neocortex/customize-platform.jpg"
cp -r ./attached_assets/"Inject data.jpg" "$PUBLIC_DIR/projects/neocortex/inject-data.jpg"
cp -r ./attached_assets/Login.jpg "$PUBLIC_DIR/projects/neocortex/login.jpg"
cp -r ./attached_assets/Product.jpg "$PUBLIC_DIR/projects/neocortex/product.jpg"
cp -r ./attached_assets/Timeline.jpg "$PUBLIC_DIR/projects/neocortex/timeline.jpg"
cp -r ./attached_assets/User-profile.jpg "$PUBLIC_DIR/projects/neocortex/user-profile.jpg"

# SIV project
cp -r ./attached_assets/"Add Vache.png" "$PUBLIC_DIR/projects/siv/add-animal.jpg"
cp -r ./attached_assets/AjouterVeaux.png "$PUBLIC_DIR/projects/siv/add-calf.jpg"
cp -r ./attached_assets/"Add Task.png" "$PUBLIC_DIR/projects/siv/add-task.jpg"
cp -r ./attached_assets/stats.png "$PUBLIC_DIR/projects/siv/dashboard.jpg"
cp -r ./attached_assets/ListFermiers.png "$PUBLIC_DIR/projects/siv/farmer-list.jpg"
cp -r ./attached_assets/LoginSIV.png "$PUBLIC_DIR/projects/siv/login-farm.jpg"
cp -r ./attached_assets/Login.png "$PUBLIC_DIR/projects/siv/login.jpg"
cp -r ./attached_assets/siv-logo-2-png.png "$PUBLIC_DIR/projects/siv/logo.jpg"
cp -r ./attached_assets/"Product.png" "$PUBLIC_DIR/projects/siv/product-form.jpg"
cp -r ./attached_assets/"Product List.png" "$PUBLIC_DIR/projects/siv/product-list.jpg"
cp -r ./attached_assets/Taches_1746096305787.png "$PUBLIC_DIR/projects/siv/task-list.jpg"
cp -r ./attached_assets/"List Users.jpg" "$PUBLIC_DIR/projects/siv/user-management.jpg"

# Sports League project
cp -r ./attached_assets/Admin-Dashboard.png "$PUBLIC_DIR/projects/sports-league/admin-dashboard.jpg"
cp -r ./attached_assets/Admin-Form-Terrain.png "$PUBLIC_DIR/projects/sports-league/admin-terrain.jpg"
cp -r ./attached_assets/Admin-Users.png "$PUBLIC_DIR/projects/sports-league/admin-users.jpg"
cp -r ./attached_assets/Email_1746097109452.png "$PUBLIC_DIR/projects/sports-league/chat.jpg"
cp -r ./attached_assets/ListTaches.png "$PUBLIC_DIR/projects/sports-league/games.jpg"
cp -r ./attached_assets/Home.png "$PUBLIC_DIR/projects/sports-league/homepage.jpg"
cp -r ./attached_assets/Login.png "$PUBLIC_DIR/projects/sports-league/login.jpg"
cp -r ./attached_assets/User.png "$PUBLIC_DIR/projects/sports-league/profile.jpg"
cp -r ./attached_assets/Register-Simple.png "$PUBLIC_DIR/projects/sports-league/registration.jpg"
cp -r ./attached_assets/AjouterTacheSidebar.png "$PUBLIC_DIR/projects/sports-league/team-management.jpg"
cp -r ./attached_assets/Personnels.png "$PUBLIC_DIR/projects/sports-league/teams.jpg"
cp -r ./attached_assets/Tournaments-form.png "$PUBLIC_DIR/projects/sports-league/tournaments.jpg"

# Workmood project
cp -r ./attached_assets/AddEvent.png "$PUBLIC_DIR/projects/workmood/add-event.jpg"
cp -r ./attached_assets/Admin-Form-Users.png "$PUBLIC_DIR/projects/workmood/admin-badges.jpg"
cp -r ./attached_assets/CommentaireTaches.PNG "$PUBLIC_DIR/projects/workmood/admin-complaints.jpg"
cp -r ./attached_assets/Admin-Gallery.png "$PUBLIC_DIR/projects/workmood/admin-dashboard.jpg"
cp -r ./attached_assets/Admin-Réservation.png "$PUBLIC_DIR/projects/workmood/events-list.jpg"
cp -r ./attached_assets/Home.png "$PUBLIC_DIR/projects/workmood/home.jpg"
cp -r ./attached_assets/logo.png "$PUBLIC_DIR/projects/workmood/logo.jpg"
cp -r ./attached_assets/ListSousTaches.PNG "$PUBLIC_DIR/projects/workmood/newsfeed.jpg"
cp -r ./attached_assets/Statsitiques.png "$PUBLIC_DIR/projects/workmood/statistics.jpg"

# Create index.html with all content
echo "*** Creating portfolio HTML files"
cat > "$PUBLIC_DIR/index.html" << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fedi Abdelkebir | Full Stack Developer</title>
  <meta name="description" content="Portfolio of Fedi Abdelkebir, Full Stack Developer specializing in React, Node.js, and modern web technologies">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary: #3b82f6;
      --primary-dark: #2563eb;
      --secondary: #64748b;
      --background: #ffffff;
      --foreground: #0f172a;
      --muted: #94a3b8;
      --muted-foreground: #64748b;
      --accent: #f1f5f9;
      --accent-foreground: #0f172a;
      --border: #e2e8f0;
      --input: #e2e8f0;
      --card: #ffffff;
      --card-foreground: #0f172a;
    }

    .dark {
      --primary: #60a5fa;
      --primary-dark: #3b82f6;
      --secondary: #94a3b8;
      --background: #0f172a;
      --foreground: #f8fafc;
      --muted: #64748b;
      --muted-foreground: #94a3b8;
      --accent: #1e293b;
      --accent-foreground: #f8fafc;
      --border: #1e293b;
      --input: #1e293b;
      --card: #1e293b;
      --card-foreground: #f8fafc;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--background);
      color: var(--foreground);
      line-height: 1.6;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    a {
      color: var(--primary);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--primary-dark);
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background-color: var(--background);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--foreground);
    }

    nav ul {
      display: flex;
      list-style: none;
    }

    nav li {
      margin-left: 2rem;
    }

    nav a {
      color: var(--foreground);
      font-weight: 500;
      transition: color 0.3s ease;
    }

    nav a:hover, nav a.active {
      color: var(--primary);
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--foreground);
      cursor: pointer;
    }

    .theme-toggle {
      background: none;
      border: none;
      color: var(--foreground);
      cursor: pointer;
      font-size: 1.2rem;
      margin-left: 1rem;
      transition: color 0.3s ease;
    }

    .theme-toggle:hover {
      color: var(--primary);
    }

    section {
      padding: 5rem 0;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 70px;
    }

    .hero-content {
      display: flex;
      align-items: center;
      gap: 3rem;
    }

    .hero-image {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid var(--primary);
    }

    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-text h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .hero-text h2 {
      color: var(--primary);
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .hero-text p {
      color: var(--muted-foreground);
      margin-bottom: 2rem;
      max-width: 600px;
      font-size: 1.1rem;
    }

    .section-title {
      text-align: center;
      margin-bottom: 3rem;
    }

    .section-title h2 {
      font-size: 2.5rem;
      color: var(--foreground);
      display: inline-block;
      padding-bottom: 0.5rem;
      position: relative;
    }

    .section-title h2::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: var(--primary);
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .about-text h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .about-text p {
      margin-bottom: 1.5rem;
      color: var(--muted-foreground);
    }

    .about-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
    }

    .info-item i {
      font-size: 1.2rem;
      color: var(--primary);
      margin-right: 0.5rem;
    }

    .btn {
      display: inline-block;
      background-color: var(--primary);
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 500;
      transition: background-color 0.3s ease;
      border: none;
      cursor: pointer;
    }

    .btn:hover {
      background-color: var(--primary-dark);
      color: white;
    }

    .btn-outline {
      background-color: transparent;
      border: 2px solid var(--primary);
      color: var(--primary);
    }

    .btn-outline:hover {
      background-color: var(--primary);
      color: white;
    }

    .skill-bars {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .skill-bar {
      margin-bottom: 1.5rem;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .skill-progress {
      width: 100%;
      height: 8px;
      background-color: var(--accent);
      border-radius: 10px;
      overflow: hidden;
    }

    .skill-progress-bar {
      height: 100%;
      background-color: var(--primary);
      border-radius: 10px;
      transition: width 1.5s ease-in-out;
    }

    .timeline {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
    }

    .timeline::after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: var(--border);
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -1px;
    }

    .timeline-item {
      padding: 10px 40px;
      position: relative;
      width: 50%;
      box-sizing: border-box;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .timeline-item.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .timeline-item:nth-child(odd) {
      left: 0;
    }

    .timeline-item:nth-child(even) {
      left: 50%;
    }

    .timeline-content {
      padding: 20px 30px;
      background-color: var(--card);
      position: relative;
      border-radius: 0.5rem;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    }

    .timeline-content::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      top: 20px;
      background-color: var(--card);
      transform: rotate(45deg);
    }

    .timeline-item:nth-child(even) .timeline-content::after {
      left: -10px;
      right: auto;
    }

    .timeline-item::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      right: -8px;
      top: 25px;
      background-color: var(--primary);
      border-radius: 50%;
      z-index: 1;
    }

    .timeline-item:nth-child(even)::after {
      left: -8px;
      right: auto;
    }

    .timeline-date {
      color: var(--muted-foreground);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .timeline-content h3 {
      margin-bottom: 0.5rem;
      color: var(--foreground);
    }

    .timeline-content h4 {
      color: var(--primary);
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .timeline-content p {
      color: var(--muted-foreground);
      margin-bottom: 1rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .skill-tag {
      padding: 0.3rem 0.7rem;
      background-color: var(--accent);
      color: var(--accent-foreground);
      border-radius: 0.25rem;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .project-card {
      background-color: var(--card);
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }

    .project-image {
      height: 200px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.05);
    }

    .project-details {
      padding: 1.5rem;
    }

    .project-category {
      color: var(--primary);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .project-details h3 {
      margin-bottom: 0.5rem;
      color: var(--foreground);
    }

    .project-meta {
      color: var(--muted-foreground);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .project-description {
      color: var(--muted-foreground);
      margin-bottom: 1.5rem;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .project-tag {
      padding: 0.3rem 0.7rem;
      background-color: var(--accent);
      color: var(--accent-foreground);
      border-radius: 0.25rem;
      font-size: 0.8rem;
      font-weight: 500;
    }

    .contact-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 4rem;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .contact-icon {
      width: 50px;
      height: 50px;
      background-color: var(--accent);
      color: var(--primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      font-size: 1.2rem;
    }

    .contact-details h4 {
      margin-bottom: 0.5rem;
      color: var(--foreground);
    }

    .contact-details p, .contact-details a {
      color: var(--muted-foreground);
    }

    .contact-form {
      background-color: var(--card);
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--foreground);
      font-weight: 500;
    }

    .form-control {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border);
      border-radius: 0.375rem;
      background-color: var(--background);
      color: var(--foreground);
      transition: border-color 0.3s ease;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
    }

    textarea.form-control {
      min-height: 150px;
      resize: vertical;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background-color: var(--accent);
      color: var(--foreground);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .social-link:hover {
      background-color: var(--primary);
      color: white;
    }

    footer {
      background-color: var(--card);
      padding: 2rem 0;
      text-align: center;
      margin-top: 5rem;
    }

    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer-logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--foreground);
      margin-bottom: 1rem;
    }

    .footer-text {
      color: var(--muted-foreground);
      margin-bottom: 1.5rem;
    }

    .footer-links {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-links a {
      color: var(--foreground);
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: var(--primary);
    }

    .footer-social {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .footer-social-link {
      width: 36px;
      height: 36px;
      background-color: var(--accent);
      color: var(--foreground);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .footer-social-link:hover {
      background-color: var(--primary);
      color: white;
    }

    .copyright {
      color: var(--muted-foreground);
      font-size: 0.9rem;
    }

    @media (max-width: 991px) {
      .hero-content {
        flex-direction: column;
        text-align: center;
      }

      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .timeline::after {
        left: 40px;
      }

      .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 0;
      }

      .timeline-item:nth-child(even) {
        left: 0;
      }

      .timeline-content::after {
        left: -10px;
        right: auto;
      }

      .timeline-item::after {
        left: 32px;
        right: auto;
      }

      .contact-content {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 767px) {
      .mobile-menu-btn {
        display: block;
      }

      nav ul {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background-color: var(--background);
        border-top: 1px solid var(--border);
        padding: 1rem 0;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
      }

      nav ul.show {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      nav li {
        margin: 1rem 2rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container header-container">
      <a href="#" class="logo">Fedi Abdelkebir</a>
      <nav>
        <button class="mobile-menu-btn" aria-label="Toggle mobile menu">
          <i class="fas fa-bars"></i>
        </button>
        <ul>
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button class="theme-toggle" aria-label="Toggle dark theme">
              <i class="fas fa-moon"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <div class="hero-image">
          <img src="assets/profile.png" alt="Fedi Abdelkebir">
        </div>
        <div class="hero-text">
          <h1>Fedi Abdelkebir</h1>
          <h2>Full Stack Developer</h2>
          <p>Experienced software engineer passionate about creating innovative solutions. Specialized in building responsive and performant web applications using modern technologies.</p>
          <a href="#contact" class="btn">Get In Touch</a>
          <a href="#projects" class="btn btn-outline" style="margin-left: 1rem;">View Projects</a>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div class="container">
      <div class="section-title">
        <h2>About Me</h2>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h3>I'm a passionate Full Stack Developer from Tunisia</h3>
          <p>I am a software engineer with over 5 years of experience in developing web applications. I specialize in full-stack development, creating both frontend and backend solutions that deliver exceptional user experiences.</p>
          <p>My expertise spans a wide range of technologies and frameworks, including React, Node.js, Express, and various database systems. I am passionate about writing clean, efficient code and constantly expanding my knowledge to stay at the forefront of technology trends.</p>
          <div class="about-info">
            <div class="info-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>Based in Tunis, Tunisia</span>
            </div>
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <span>fedi.abdelkebir@example.com</span>
            </div>
            <div class="info-item">
              <i class="fas fa-phone"></i>
              <span>+216 XX XXX XXX</span>
            </div>
            <div class="info-item">
              <i class="fas fa-calendar"></i>
              <span>Available for freelance</span>
            </div>
          </div>
        </div>
        <div class="about-stats">
          <div class="skill-bars">
            <div class="skill-bar">
              <div class="skill-info">
                <span>Frontend Development</span>
                <span>90%</span>
              </div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 90%;"></div>
              </div>
            </div>
            <div class="skill-bar">
              <div class="skill-info">
                <span>Backend Development</span>
                <span>85%</span>
              </div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 85%;"></div>
              </div>
            </div>
            <div class="skill-bar">
              <div class="skill-info">
                <span>UI/UX Design</span>
                <span>75%</span>
              </div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 75%;"></div>
              </div>
            </div>
            <div class="skill-bar">
              <div class="skill-info">
                <span>Database Design</span>
                <span>80%</span>
              </div>
              <div class="skill-progress">
                <div class="skill-progress-bar" style="width: 80%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="experience">
    <div class="container">
      <div class="section-title">
        <h2>Experience</h2>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-date">2020 - Present</div>
            <h3>Senior Full Stack Developer</h3>
            <h4>Neocortex.io</h4>
            <p>Leading development of enterprise SaaS applications. Architecting scalable solutions and mentoring junior developers.</p>
            <div class="skill-tags">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">AWS</span>
              <span class="skill-tag">Docker</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-date">2019 - 2020</div>
            <h3>Full Stack Developer</h3>
            <h4>National Computer Center</h4>
            <p>Developed and maintained inventory management systems and internal tools. Implemented secure authentication and authorization systems.</p>
            <div class="skill-tags">
              <span class="skill-tag">Angular</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">Redux</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-date">2018 - 2019</div>
            <h3>Frontend Developer</h3>
            <h4>El Khima</h4>
            <p>Built responsive web interfaces for event management platform. Integrated payment gateways and optimized application performance.</p>
            <div class="skill-tags">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Redux</span>
              <span class="skill-tag">SCSS</span>
              <span class="skill-tag">RESTful APIs</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <div class="timeline-date">2017 - 2018</div>
            <h3>Web Developer</h3>
            <h4>eBuild Construction</h4>
            <p>Created project management tools for construction company. Implemented real-time notifications and reporting features.</p>
            <div class="skill-tags">
              <span class="skill-tag">PHP</span>
              <span class="skill-tag">Laravel</span>
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">jQuery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="skills">
    <div class="container">
      <div class="section-title">
        <h2>Skills</h2>
      </div>
      <div class="skill-bars">
        <div class="skill-bar">
          <div class="skill-info">
            <span>JavaScript</span>
            <span>95%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 95%;"></div>
          </div>
        </div>
        <div class="skill-bar">
          <div class="skill-info">
            <span>React</span>
            <span>90%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 90%;"></div>
          </div>
        </div>
        <div class="skill-bar">
          <div class="skill-info">
            <span>Node.js</span>
            <span>85%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 85%;"></div>
          </div>
        </div>
        <div class="skill-bar">
          <div class="skill-info">
            <span>TypeScript</span>
            <span>80%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 80%;"></div>
          </div>
        </div>
        <div class="skill-bar">
          <div class="skill-info">
            <span>HTML/CSS</span>
            <span>90%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 90%;"></div>
          </div>
        </div>
        <div class="skill-bar">
          <div class="skill-info">
            <span>MongoDB</span>
            <span>85%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 85%;"></div>
          </div>
        </div>
        <div class="skill-bar">
          <div class="skill-info">
            <span>SQL</span>
            <span>80%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 80%;"></div>
          </div>
        </div>
        <div class="skill-bar">
          <div class="skill-info">
            <span>Git</span>
            <span>85%</span>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-bar" style="width: 85%;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="container">
      <div class="section-title">
        <h2>Projects</h2>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="projects/neocortex/timeline.jpg" alt="Neocortex SAAS Platform">
          </div>
          <div class="project-details">
            <div class="project-category">Enterprise SAAS</div>
            <h3>Neocortex SAAS Platform</h3>
            <div class="project-meta">Neocortex.io | 2020-Present</div>
            <p class="project-description">A comprehensive enterprise social network and collaboration platform with advanced analytics.</p>
            <div class="project-tags">
              <span class="project-tag">React</span>
              <span class="project-tag">Node.js</span>
              <span class="project-tag">GraphQL</span>
              <span class="project-tag">MongoDB</span>
            </div>
            <a href="projects/neocortex.html" class="btn">View Details</a>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="projects/ncc/user-management.jpg" alt="CNI Stock Management">
          </div>
          <div class="project-details">
            <div class="project-category">Inventory System</div>
            <h3>CNI Stock Management</h3>
            <div class="project-meta">National Computer Center | 2019-2020</div>
            <p class="project-description">An inventory management system with advanced reporting and analytics features.</p>
            <div class="project-tags">
              <span class="project-tag">Angular</span>
              <span class="project-tag">Express</span>
              <span class="project-tag">PostgreSQL</span>
              <span class="project-tag">Chart.js</span>
            </div>
            <a href="projects/ncc.html" class="btn">View Details</a>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="projects/siv/dashboard.jpg" alt="SIV Farm Management">
          </div>
          <div class="project-details">
            <div class="project-category">Agriculture Tech</div>
            <h3>SIV Farm Management</h3>
            <div class="project-meta">Interactive Virtuelle | 2019</div>
            <p class="project-description">A comprehensive farm management system for tracking livestock, crops, and equipment.</p>
            <div class="project-tags">
              <span class="project-tag">React</span>
              <span class="project-tag">Node.js</span>
              <span class="project-tag">MongoDB</span>
              <span class="project-tag">D3.js</span>
            </div>
            <a href="projects/siv.html" class="btn">View Details</a>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="projects/sports-league/homepage.jpg" alt="Sports League Platform">
          </div>
          <div class="project-details">
            <div class="project-category">Sports Management</div>
            <h3>Sports League Platform</h3>
            <div class="project-meta">Freelance | 2018-2019</div>
            <p class="project-description">A tournament management system with team registration, scheduling, and statistics tracking.</p>
            <div class="project-tags">
              <span class="project-tag">Vue.js</span>
              <span class="project-tag">Firebase</span>
              <span class="project-tag">Cloud Functions</span>
              <span class="project-tag">Tailwind CSS</span>
            </div>
            <a href="projects/sports-league.html" class="btn">View Details</a>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="projects/workmood/events-list.jpg" alt="Workmood HR Platform">
          </div>
          <div class="project-details">
            <div class="project-category">HR Management</div>
            <h3>Workmood HR Platform</h3>
            <div class="project-meta">El Khima | 2018</div>
            <p class="project-description">An employee engagement and HR management platform with event planning and feedback systems.</p>
            <div class="project-tags">
              <span class="project-tag">React</span>
              <span class="project-tag">Express</span>
              <span class="project-tag">MySQL</span>
              <span class="project-tag">Socket.io</span>
            </div>
            <a href="projects/workmood.html" class="btn">View Details</a>
          </div>
        </div>
        <div class="project-card">
          <div class="project-image">
            <img src="projects/ebuild/projects.jpg" alt="eBuild Construction Management">
          </div>
          <div class="project-details">
            <div class="project-category">Construction Management</div>
            <h3>eBuild Project Management</h3>
            <div class="project-meta">eBuild | 2017-2018</div>
            <p class="project-description">A project management tool for construction companies with task tracking and client management.</p>
            <div class="project-tags">
              <span class="project-tag">PHP</span>
              <span class="project-tag">Laravel</span>
              <span class="project-tag">MySQL</span>
              <span class="project-tag">jQuery</span>
            </div>
            <a href="projects/ebuild.html" class="btn">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="section-title">
        <h2>Contact Me</h2>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Get in touch</h3>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h4>Email</h4>
              <a href="mailto:fedi.abdelkebir@example.com">fedi.abdelkebir@example.com</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h4>Phone</h4>
              <p>+216 XX XXX XXX</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h4>Location</h4>
              <p>Tunis, Tunisia</p>
            </div>
          </div>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-link" aria-label="Dribbble">
              <i class="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
        <div class="contact-form">
          <form id="contactForm">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" class="form-control" required>
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" class="form-control" required></textarea>
            </div>
            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container footer-container">
      <div class="footer-logo">Fedi Abdelkebir</div>
      <p class="footer-text">Full Stack Developer specializing in modern web technologies</p>
      <div class="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="footer-social">
        <a href="#" class="footer-social-link" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="footer-social-link" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" class="footer-social-link" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="footer-social-link" aria-label="Dribbble">
          <i class="fab fa-dribbble"></i>
        </a>
      </div>
      <p class="copyright">&copy; 2025 Fedi Abdelkebir. All rights reserved.</p>
    </div>
  </footer>

  <script>
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.body.classList.add('dark');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      
      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
      } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
      }
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      
      // Toggle icon
      const menuIcon = mobileMenuBtn.querySelector('i');
      if (navMenu.classList.contains('show')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
      } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('nav') && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
      }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navMenu.classList.contains('show')) {
          navMenu.classList.remove('show');
          mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for header height
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function animateTimelineItems() {
      timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.8 && itemBottom > 0) {
          setTimeout(() => {
            item.classList.add('animate');
          }, index * 200); // Staggered animation
        }
      });
    }
    
    // Initial check
    animateTimelineItems();
    
    // Check on scroll
    window.addEventListener('scroll', animateTimelineItems);
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    function animateSkillBars() {
      skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight * 0.8) {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        }
      });
    }
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    function highlightNavigation() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current || (current === '' && link.getAttribute('href') === '#')) {
          link.classList.add('active');
        }
      });
    }
    
    // Initial check
    highlightNavigation();
    
    // Check on scroll
    window.addEventListener('scroll', highlightNavigation);
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Normally you would send the form data to a server here
      // For this static version, we'll just show a success message
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      console.log('Form submitted with data:', formData);
      
      // Clear form
      contactForm.reset();
      
      // Show success message (you would implement this in a real application)
      alert('Thanks for your message! In a real application, this would be sent to the server.');
    });
  </script>
</body>
</html>
EOL

# Create a README.md file
cat > "$REPO_DIR/README.md" << 'EOL'
# Fedi Abdelkebir's Portfolio

A modern, animated portfolio website showcasing my professional journey as a Full Stack Developer.

## Features

- Responsive design that works on all devices
- Animated UI components with smooth transitions
- Detailed project showcase with screenshots
- Light and dark mode support

## Technologies Used

- HTML5 and CSS3
- JavaScript (vanilla)
- Font Awesome for icons
- Responsive design without frameworks

## Live Demo

Visit the live site at: [https://yourusername.github.io/yourrepo/](https://yourusername.github.io/yourrepo/)

## License

This portfolio template is available for personal and commercial use with attribution.

## Contact

Connect with me on LinkedIn or send me an email at [your-email@example.com](mailto:your-email@example.com).
EOL

# Create a 404.html file
cat > "$REPO_DIR/404.html" << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Not Found | Fedi Abdelkebir</title>
  <meta http-equiv="refresh" content="5;url=/">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #0f172a;
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      padding: 2rem;
      text-align: center;
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.1rem;
      margin-bottom: 2rem;
      max-width: 600px;
    }
    
    a {
      display: inline-block;
      background-color: #3b82f6;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 500;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    
    a:hover {
      background-color: #2563eb;
    }
    
    .countdown {
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #94a3b8;
    }
  </style>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>Sorry, the page you are looking for does not exist or has been moved.</p>
  <a href="/">Return to Homepage</a>
  <div class="countdown">Redirecting to homepage in <span id="seconds">5</span> seconds...</div>
  
  <script>
    let seconds = 5;
    const countdown = document.getElementById('seconds');
    
    const timer = setInterval(() => {
      seconds -= 1;
      countdown.textContent = seconds;
      
      if (seconds <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  </script>
</body>
</html>
EOL

# Initialize Git repository
echo "*** Setting up Git repository"
cd "$REPO_DIR"
git init
git add .
git commit -m "Initial commit for GitHub Pages"

# Output completion message
echo ""
echo "===================================================="
echo "      Portfolio Website Export Completed!          "
echo "===================================================="
echo ""
echo "Your portfolio website has been exported to:"
echo "$REPO_DIR"
echo ""
echo "To deploy to GitHub Pages:"
echo ""
echo "1. Create a new repository on GitHub"
echo "2. Push these files to your repository:"
echo "   cd $REPO_DIR"
echo "   git remote add origin https://github.com/yourusername/yourrepo.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. In your GitHub repository settings, enable GitHub Pages"
echo "   from the 'main' branch"
echo ""
echo "Your site will be available at:"
echo "https://yourusername.github.io/yourrepo/"
echo "===================================================="
