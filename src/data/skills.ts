export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["C++", "Python", "Java", "JavaScript", "C", "C#"],
  },
  {
    name: "Web & Frameworks",
    skills: ["HTML", "CSS", "React", "Node.js", "Spring Boot", "React Native", ".NET"],
  },
  {
    name: "Tools & Technologies",
    skills: ["OpenCV", "TensorFlow", "Git", "Arduino", "YOLO"],
  },
  {
    name: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "Artificial Intelligence", "Operating Systems", "Computer Networks"],
  },
]
