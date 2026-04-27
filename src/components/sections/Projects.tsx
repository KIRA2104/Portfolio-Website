import { motion } from "framer-motion"
import { Code, ExternalLink } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Badge } from "@/components/ui/Badge"
import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

export function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" className="max-w-6xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-3xl font-heading font-bold text-foreground md:text-4xl"
      >
        Projects
      </motion.h2>
      <p className="mb-12 max-w-2xl text-lg leading-8 text-foreground-secondary">
        A mix of full-stack systems and applied AI work, with an emphasis on usable interfaces and production-minded implementation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured project - spans 2 columns */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="md:col-span-2"
          >
            <ProjectCard project={featuredProject} featured />
          </motion.div>
        )}

        {/* Other projects */}
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1 * (index + 1),
              ease: [0.33, 1, 0.68, 1]
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    techStack: string[]
    githubUrl?: string
    liveUrl?: string
  }
  featured?: boolean
}

function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative rounded-[1.75rem] border border-border bg-surface/80 p-6 transition-all duration-500 hover:border-primary/25 hover:shadow-[0_30px_90px_-50px_hsl(var(--primary)/0.45)]",
        featured && "md:p-8"
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3
            className={cn(
              "text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors",
              featured && "text-2xl md:text-3xl"
            )}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background/50 p-2 text-foreground-secondary transition-colors hover:border-primary/30 hover:bg-background hover:text-foreground"
                aria-label="View on GitHub"
              >
                <Code size={18} />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background/50 p-2 text-foreground-secondary transition-colors hover:border-primary/30 hover:bg-background hover:text-foreground"
                aria-label="View live site"
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>

        <p
          className={cn(
            "text-foreground-secondary leading-relaxed mb-6",
            featured && "text-lg md:text-xl"
          )}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-background/30 backdrop-blur-sm border-foreground/10 group-hover:border-foreground/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
