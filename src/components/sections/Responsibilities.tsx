import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { responsibilities } from "@/data/responsibilities"

export function Responsibilities() {
  return (
    <Section id="responsibilities" className="max-w-5xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-3xl font-heading font-bold text-foreground md:text-4xl"
      >
        Positions of Responsibility
      </motion.h2>

      <div className="grid gap-5 md:grid-cols-3">
        {responsibilities.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="group rounded-[1.75rem] border border-border bg-surface/75 p-6 transition-colors hover:border-primary/25 hover:bg-surface-elevated"
          >
            <div className="mb-5 h-10 w-10 rounded-2xl bg-primary/12 p-3 text-primary transition-transform group-hover:scale-110">
              <div className="h-full w-full rounded-full bg-primary/70" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">{role.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground-secondary">{role.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
