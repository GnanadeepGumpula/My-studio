export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  link: string
  github: string
  category: string
  featured?: boolean
  technologies: string[]
  status: "completed" | "in-progress" | "planned"
  year: string
}

export const projects: Project[] = [
  {
  id: 1,
  title: "Personal Portfolio",
  description: "A comprehensive showcase of my skills, experience, and projects built with modern web technologies.",
  longDescription:"This portfolio website serves as a comprehensive showcase of my skills, experience, and projects. Built with Next.js 14, it features a modern design system, responsive layout, and interactive elements. The site includes project galleries, detailed case studies, and a contact system. It demonstrates my proficiency in React, TypeScript, and modern web development practices.",
  image: "/project image/p.png",
  link: "https://gnanadeepgumpula.vercel.app",
  github: "https://github.com/GnanadeepGumpula/portfolio",
  category: "HTML/CSS",
  featured: true,
  technologies: ["HTML", "CSS", "JavaScript", "Next.js", "TypeScript", "Tailwind CSS"],
  status: "completed",
  year: "2023",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    longDescription:
      "A complete e-commerce platform built from scratch with modern technologies. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard. The application uses React for the frontend, Node.js with Express for the backend, and MongoDB for data storage.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/gnanadeep/ecommerce",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
    status: "completed",
    year: "2023",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription:
      "A comprehensive task management application designed for team collaboration. Features include real-time updates using Socket.io, drag-and-drop task organization, team member management, project timelines, and progress tracking. Built with React and Firebase for real-time data synchronization.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://taskmanager-app.vercel.app",
    github: "https://github.com/gnanadeep/task-manager",
    category: "React",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io", "Redux"],
    status: "completed",
    year: "2023",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts and historical data visualization.",
    longDescription:
      "An interactive weather dashboard that provides comprehensive weather information including current conditions, 7-day forecasts, and historical data visualization. Features location-based weather detection, interactive charts, and responsive design. Built with vanilla JavaScript and modern CSS techniques.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://weather-dashboard-demo.vercel.app",
    github: "https://github.com/gnanadeep/weather-dashboard",
    category: "HTML/CSS",
    technologies: ["HTML", "CSS", "JavaScript", "Chart.js", "Weather API"],
    status: "completed",
    year: "2023",
  },
  {
    id: 5,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and fitness goals.",
    longDescription:
      "A comprehensive fitness tracking mobile application built with React Native. Features include workout logging, nutrition tracking, progress analytics, social features for sharing achievements, and integration with health APIs. The app provides personalized workout recommendations and detailed progress reports.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://play.google.com/store/apps/fitness-tracker",
    github: "https://github.com/gnanadeep/fitness-tracker",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Health API"],
    status: "in-progress",
    year: "2024",
  },
  {
    id: 6,
    title: "2D Puzzle Game",
    description: "Engaging 2D puzzle game with multiple levels and smooth animations.",
    longDescription:
      "An engaging 2D puzzle game featuring multiple challenging levels, smooth animations, and a local leaderboard system. Built using HTML5 Canvas and modern JavaScript, the game includes physics-based interactions, particle effects, and responsive controls that work across different devices.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://puzzle-game-demo.vercel.app",
    github: "https://github.com/gnanadeep/puzzle-game",
    category: "Game",
    technologies: ["JavaScript", "Canvas API", "HTML5", "CSS3", "Web Audio API"],
    status: "completed",
    year: "2023",
  },
  {
    id: 7,
    title: "Data Analysis Tool",
    description: "Python-based data analysis and visualization tool with machine learning capabilities.",
    longDescription:
      "A comprehensive data analysis and visualization tool built with Python. Features include data import from various sources, statistical analysis, machine learning model training, and interactive visualizations. The tool supports predictive analytics and generates detailed insights reports for business intelligence.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://github.com/gnanadeep/data-analysis-tool",
    github: "https://github.com/gnanadeep/data-analysis-tool",
    category: "Python",
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter"],
    status: "completed",
    year: "2023",
  },
  {
    id: 8,
    title: "REST API Server",
    description: "Scalable REST API server with authentication, rate limiting, and comprehensive documentation.",
    longDescription:
      "A robust and scalable REST API server built with Node.js and Express. Features include JWT authentication, rate limiting, comprehensive API documentation with Swagger, automated testing, and deployment pipelines. The API supports CRUD operations, file uploads, and real-time notifications.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://api-server-demo.herokuapp.com",
    github: "https://github.com/gnanadeep/rest-api-server",
    category: "Node.js",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
    status: "completed",
    year: "2023",
  },
]

export const categories = ["All", "React", "Full Stack", "HTML/CSS", "Mobile App", "Game", "Python", "Node.js"]

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects
  return projects.filter((project) => project.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
