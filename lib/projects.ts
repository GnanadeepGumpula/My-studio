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
  title: "Tap Battle",
  description: "Fast-paced two-player tap game using Google Sheets as a database.",
  longDescription:"A minimalist multiplayer tap game deployed via Vercel. Players tap as fast as possible in a head‑to‑head match to reach a score limit first. Built as a web‑based demo using modern JS frameworks, with responsive design and real‑time interaction.",
  image: "/project image/tapbattle-logo.jpg",
  link: "https://tapbattle.vercel.app/",
  github: "https://github.com/your‑username/tapbattle",
  category: "Game",
  technologies: ["JavaScript", "React", " Next.js", "WebSocket or real‑time sync", "Tailwind CSS","Google Sheets API","Google Apps Script"],
  status: "completed",
  year: "2024",
},
{
  id: 3,
  title: "FO‑Detector",
  description: "AI network threat detection and visualization tool.",
  longDescription:
    "A network threat detection dashboard deployed as a Next.js app on Vercel. Utilizes Python (Flask) and PyTorch backend for ML‑based threat detection, and a real‑time frontend with an interactive dashboard that visualizes network topology, allows scanning, and displays threat logs and summaries.",
  image: "/project image/main-Logo.jpg",
  link: "https://fo-detector.vercel.app/",
  github: "https://github.com/your‑username/fo‑detector",
  category: "Full Stack",
  technologies: ["Next.js", "Flask (Python)", "PyTorch", "API", "Network packet analyzer"],
  status: "completed",
  year: "2023",
},
{
  id: 4,
  title: "AlartEye",
  description: "AI-powered real-time drowsiness detection tool using computer vision.",
  longDescription:
    "An AI-powered web application deployed on Vercel that monitors the user’s webcam feed and analyzes facial landmarks and eye movements to detect signs of drowsiness (such as prolonged eye closure or head tilt). When drowsiness is detected, an alert is triggered instantly to help prevent fatigue-related accidents. Built using a computer‑vision algorithm based on eye aspect ratio, head posture detection, and threshold-based real‑time evaluation.",
  image: "/project image/drowsiness_detector.png",
  link: "https://drowsiness-detector-eta.vercel.app/",
  github: "https://github.com/gnanadeep/drowsiness-detector-eta",
  category: "AI / Computer Vision",
  technologies: ["JavaScript", "WebRTC", "TensorFlow.js and OpenCV.js", "Facial Landmarks", "Browser‑based detection"],
  status: "completed",
  year: "2024"
},
{
  id: 5,
  title: "Flames",
  description: "Real‑time flame detection system in images/video streams.",
  longDescription:
    "A flame detection application deployed on Vercel that analyzes video frames or images in real time to detect and visualize fire or flame using deep learning or computer vision techniques. The system likely employs convolutional neural networks or temporal feature analysis to differentiate between flame and non‑flame frames and provides immediate visual feedback or alerts.",
  image: "/project image/flames_logo.png",
  link: "https://vercel.com/gnanadeep‑s‑projects/flames/9DmKZJCPdh7tELYkNrKCtJCVZNs1",
  github: "https://github.com/gnanadeep/flames",
  category: "Game",
  technologies: ["JavaScript", "Node.js", "TensorFlow.js and custom ML model", "Video stream processing", "Deep learning"],
  status: "completed",
  year: "2025"
},
{
  id: 6,
  title: "Green Thicks Launch Page",
  description: "Organic produce marketing site with clean, responsive design.",
  longDescription:
    "A marketing and launch page for Green Thicks, an e‑commerce platform offering 100% certified organic vegetables with a promise of farm‑to‑table delivery within 24 hours. The site features category browsing (leafy greens, root vegetables, fruit vegetables, herbs), product highlights, company mission, sustainable packaging messaging, newsletter signup forms, and customer support pages.",
  image: "/project image/Screenshot 2025-07-04 003103.png",
  link: "greenthicks-live.vercel.app",
  github: "https://github.com/gnanadeep/green-thicks-launch-page",
  category: "React",
  technologies: [" React", "Tailwind CSS", "Responsive UI", "Forms", "Static content"],
  status: "completed",
  year: "2025"
},
{
  id: 7,
  title: "AS Creations Webpage",
  description: "Business/portfolio website for AS Creations with a clean, branded interface.",
  longDescription:
    "A static landing page developed and deployed for AS Creations, showcasing its branding, offerings, and contact details. The project focuses on clean design, responsive layout, and optimized user experience. Built using basic HTML, CSS, and deployed via Vercel for fast, serverless hosting. It serves as a digital identity for the business and includes basic navigation and styled sections.",
  image: "/project image/AS_creations-logo.jpeg",
  link: "https://ascreations.vercel.app/",
  github: "https://github.com/GnanadeepGumpula/ascreations-webpage",
  category: "HTML/CSS",
  technologies: ["HTML", "CSS", "JavaScript", "Vercel Hosting"],
  status: "completed",
  year: "2025"
},
{
  id: 8,
  title: "Project A_N_D",
  description: "A Drone-based delivery system for medical supplies.",
  longDescription:"A drone-based delivery system for medical supplies, featuring a web application for real-time tracking and management. The project includes a user-friendly interface, secure authentication, and integration with drone hardware for automated deliveries.",
  image: "/project image/project_AND-logo.png",
  link: "https://api-server-demo.herokuapp.com",
  github: "https://github.com/gnanadeep/rest-api-server",
  category: "Ideas(ppt)",
  technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
  status: "completed",
  year: "2023",
},
{
  id: 9,
  title: "Green Thicks API Server",
  description: "A RESTful API server for Green Thicks, an e-commerce platform for organic produce.",
  longDescription:"A robust and scalable REST API server built with Node.js and Express. Features include JWT authentication, rate limiting, comprehensive API documentation with Swagger, automated testing, and deployment pipelines. The API supports CRUD operations, file uploads, and real-time notifications.",
  image: "/project image/hero.jpg",
  link: "https://project-and.vercel.app/",
  github: "https://github.com/gnanadeep/project-and",
  category: "Next.js",
  technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
  status: "completed",
  year: "2024",
},
{
  id: 10,
  title: "GreenThicks.live",
  description: "Frontend for Green Thicks, an e-commerce platform for organic produce.",
  longDescription:"A modern, responsive frontend for Green Thicks, an e-commerce platform specializing in organic produce. Built with React and Tailwind CSS, the site features a clean design, product listings, shopping cart functionality, and user authentication. It integrates with a RESTful API for dynamic content and real-time updates.",
  image: "/project image/favicon.ico",
  link: "https://greenthicks.live",
  github: "https://github.com/gnanadeep/project-ideas",
  category: "Mobile App",
  technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"], 
  status: "completed",
  year: "2024",
},
{
  id: 11,
  title: "Intern Verification Page",
  description: "A verification page for internship certificates with secure authentication.",
  longDescription:"A secure verification page for internship certificates, allowing users to verify the authenticity of their certificates. The page features a user-friendly interface, secure authentication, and integration with a backend service for certificate validation.",
  image: "/project image/Logo - Copy.jpg",
  link: "https://careers.greenthicks.live",
  github: "https://github.com/gnanadeep/project-ideas",
  category: "Mobile App",
  technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"], 
  status: "completed",
  year: "2025",
},
{
  id: 12,
  title: "personal system Assisstant",
  description: "A personal system assistant that automates tasks and provides real-time information.",
  longDescription:"A personal system assistant that automates tasks and provides real-time information. The assistant features voice recognition, natural language processing, and integration with various APIs to perform tasks such as setting reminders, fetching weather updates, and managing schedules.",
  image: "/project image/Screenshot 2025-04-26 141726.png",
  link: "https://story-writing.vercel.app/",
  github: "https://github.com/gnanadeep/personal-system-assistant",
  category: "Python",
  technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","python"], 
  status: "completed",
  year: "2025",
},
]

export const categories = ["All", "React", "Full Stack", "HTML/CSS", "Mobile App", "Game", "Python", "Node.js","Next.js", "AI / Computer Vision", "Ideas(ppt)", "VideoGraphy", "Story Writing", "Others"]

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
