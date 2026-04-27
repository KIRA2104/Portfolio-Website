export interface Experience {
  id: string
  role: string
  company: string
  location: string
  duration: string
  points: string[]
}

export const experience: Experience[] = [
  {
    id: "poxo",
    role: ".NET Developer Intern",
    company: "POXO RFID Automation",
    location: "Pune, India",
    duration: "July 2025 – Present",
    points: [
      "Developed and maintained backend services using .NET for RFID-based industrial automation systems",
      "Designed and implemented a Face Recognition System with full pipeline including face detection, feature extraction, similarity-based identity matching, and secure database storage",
      "Optimized recognition latency and system performance to support real-time authentication workflows",
    ],
  },
  {
    id: "him-village",
    role: "UI/UX Testing Intern",
    company: "Him Village ePrahari Foundation",
    location: "Remote",
    duration: "Jun 2025 – Jun 2025",
    points: [
      "Performed end-to-end UI/UX testing to identify usability issues and interface inconsistencies",
      "Documented defects, workflow gaps, and accessibility concerns with clear reproduction steps",
      "Collaborated with developers to improve interface quality and user experience",
    ],
  },
]
