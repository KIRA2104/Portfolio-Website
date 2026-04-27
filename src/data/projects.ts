export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "fpas",
    title: "FPAS — Faculty Performance Appraisal System",
    description:
      "Full-stack institutional appraisal platform for MIT-ADT University. Features role-based access (Faculty/HOD/Dean/Admin), KPI scoring engine, AI-generated audit reports, and evidence upload system.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/KIRA2104/fpas",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "behavioral-auth",
    title: "Behavioral-Based Authentication System",
    description:
      "Behavioral biometric authentication using keystroke dynamics. Extracted dwell-time and flight-time features from 500+ login sessions across 20+ users, achieved 88% authentication accuracy.",
    techStack: ["Python", "Machine Learning", "Statistical Analysis"],
    githubUrl: "https://github.com/KIRA2104/behavioral-auth",
    featured: false,
  },
  {
    id: "sign-language",
    title: "AI-Based Sign Language Translator",
    description:
      "Real-time sign language translation using CNN-based gesture recognition. Preprocessed 3,000+ gesture images, achieved 92% accuracy with live webcam inference.",
    techStack: ["Python", "TensorFlow", "OpenCV", "CNN"],
    githubUrl: "https://github.com/KIRA2104/sign-language-translator",
    featured: false,
  },
  {
    id: "traffic-management",
    title: "Smart Traffic Management System",
    description:
      "AI-driven traffic signal optimization using computer vision. Used YOLOv8 for vehicle detection and lane-wise congestion analysis, improved simulated traffic flow efficiency by ~35%.",
    techStack: ["Python", "YOLOv8", "Computer Vision"],
    githubUrl: "https://github.com/KIRA2104/traffic-management",
    featured: false,
  },
]
