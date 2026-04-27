import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { experience } from "@/data/experience"

export function Experience() {
  return (
    <Section id="experience" className="max-w-5xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-3xl font-heading font-bold text-foreground md:text-4xl"
      >
        Experience
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-0 md:left-[50%] top-0 bottom-0 w-px bg-border hidden md:block origin-top -translate-x-1/2" 
        />

        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className={`relative mb-10 rounded-[1.75rem] border border-border bg-surface/70 p-6 shadow-[0_16px_50px_-38px_rgba(0,0,0,0.9)] backdrop-blur md:mb-16 md:w-[calc(50%-2rem)] ${
              index % 2 === 0 ? "md:mr-auto text-left" : "md:ml-auto text-left"
            }`}
          >
            {/* Timeline dot */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`absolute top-2 w-4 h-4 bg-background border-2 border-primary rounded-full hidden md:block ${
                index % 2 === 0 ? "left-[calc(100%+2rem-9px)]" : "right-[calc(100%+2rem-9px)]"
              }`}
            />

            <div className="pl-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-heading font-bold text-foreground">{exp.role}</h3>
                <span className="text-foreground-secondary opacity-50">•</span>
                <span className="text-foreground-secondary font-mono text-sm uppercase tracking-wider">{exp.company}</span>
              </div>
              <p className="text-foreground-secondary text-sm font-mono mb-4 opacity-70 italic">
                {exp.duration} {exp.location && `• ${exp.location}`}
              </p>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-foreground-secondary leading-relaxed flex gap-3"
                  >
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
