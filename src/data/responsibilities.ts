export interface Responsibility {
  id: string
  title: string
  description: string
}

export const responsibilities: Responsibility[] = [
  {
    id: "cs-club",
    title: "Computer Science Club Member",
    description:
      "Contributed to technical events, peer coding sessions, and collaborative learning initiatives",
  },
  {
    id: "fest-committee",
    title: "Fest Committee Member",
    description:
      "Coordinated logistics and managed technical operations during the annual university fest",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description:
      "Participated in community-based technology workshops and social impact initiatives",
  },
]
