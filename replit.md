# Fedi Abdelkebir Portfolio

## Overview

A modern, animated portfolio website showcasing Fedi Abdelkebir's professional journey as a Software Architect Engineer and Full Stack Developer. The application features smooth animations, dark/light mode support, responsive design, project showcases with detailed pages, skills visualization, experience timeline, and a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router) with support for GitHub Pages base path
- **Styling**: Tailwind CSS with custom theme configuration and CSS variables for theming
- **UI Components**: Radix UI primitives wrapped with shadcn/ui component library
- **Animations**: Framer Motion for smooth, declarative animations
- **State Management**: React Query (TanStack Query) for server state, React hooks for local state
- **Theme System**: CSS variables with dark/light mode toggle, persisted to localStorage

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Neon serverless PostgreSQL (configured but minimal usage - portfolio is primarily static content)
- **Schema Location**: `shared/schema.ts` for shared type definitions

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/  # React components (UI, layout, sections)
│   │   ├── pages/       # Page-level components (Home, Projects, ProjectDetail)
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/           # Express backend
├── shared/           # Shared types and schemas
└── db/               # Database configuration and seeds
```

### Build Configuration
- Development uses Vite's dev server with HMR
- Production builds output to `dist/public` for static assets
- Server builds to `dist/index.js` using esbuild
- GitHub Pages deployment supported via `vite.github-pages.config.js`

### Design Patterns
- Component-based architecture with separation of concerns
- Alias paths (`@/`, `@db/`, `@shared/`) for clean imports
- CSS-in-JS via Tailwind with utility-first approach
- Mobile-first responsive design

## External Dependencies

### UI Framework
- **Radix UI**: Headless accessible UI primitives (dialog, dropdown, accordion, etc.)
- **shadcn/ui**: Pre-styled component library built on Radix
- **Lucide React**: Icon library

### Database & Backend
- **Neon Serverless**: PostgreSQL database provider with WebSocket support
- **Drizzle ORM**: TypeScript-first SQL ORM
- **SendGrid**: Email service integration for contact form (`@sendgrid/mail`)

### Animation & Interaction
- **Framer Motion**: Animation library for React
- **Embla Carousel**: Carousel/slider component

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS/Autoprefixer**: CSS processing

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation (via `@hookform/resolvers`)

### Deployment
- Configured for GitHub Pages with SPA redirect handling
- 404.html redirect script for client-side routing support
- Base path configuration for subdirectory hosting