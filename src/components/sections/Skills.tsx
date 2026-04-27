import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { Badge } from "@/components/ui/Badge"
import { skillCategories } from "@/data/skills"

export function Skills() {
  return (
    <Section id="skills" className="max-w-5xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-3xl font-heading font-bold text-foreground md:text-4xl"
      >
        Skills
      </motion.h2>

      <div className="space-y-8 rounded-[2rem] border border-border bg-surface/65 p-6 md:p-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.name}>
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="text-xs font-mono text-foreground-secondary mb-6 uppercase tracking-[0.2em] border-l-2 border-primary/30 pl-4"
            >
              {category.name}
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.1 + skillIndex * 0.03,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Badge 
                    variant="secondary" 
                    className="cursor-default border border-primary/10 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground md:text-base"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
