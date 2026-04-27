import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"

const stats = [
  { value: "Product Thinking", label: "Interfaces shaped around clarity and flow." },
  { value: "Full-Stack Build", label: "From backend services to polished front-end delivery." },
  { value: "AI + Engineering", label: "Applied ML projects grounded in real use cases." },
  { value: "Fast Collaboration", label: "Comfortable iterating quickly with teams and feedback." },
]

export function About() {
  return (
    <Section id="about" className="max-w-6xl mx-auto px-6">
      <div className="grid items-start gap-12 md:grid-cols-[1.25fr_0.95fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-primary">About</p>
          <h2 className="mb-6 max-w-xl text-3xl font-heading font-bold text-foreground md:text-5xl">
            Building dependable products with an eye for the interface.
          </h2>
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-foreground-secondary">
              I&apos;m a Computer Science undergrad at MIT ADT University, Pune, passionate about building
              full-stack systems, intelligent interfaces, and real-world AI applications. Currently
              interning as a .NET Developer at POXO RFID Automation.
            </p>
            <p className="text-lg leading-relaxed text-foreground-secondary">
              My work spans from building scalable backend services to crafting intuitive user
              interfaces, with a strong focus on performance and user experience.
            </p>
          </div>

          <div className="mt-8 rounded-[2rem] border border-border bg-surface/80 p-6 shadow-[0_22px_70px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.22em] text-foreground-secondary">
              Current focus
            </p>
            <p className="mt-3 text-lg leading-8 text-foreground">
              Shipping practical interfaces, stronger front-end systems, and AI-assisted workflows that make complex software feel simple.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                type: "spring",
                stiffness: 100 
              }}
              className="group rounded-[1.75rem] border border-border bg-surface/80 p-6 shadow-[0_16px_50px_-35px_rgba(0,0,0,0.9)] transition-colors hover:border-primary/30"
            >
              <p className="text-xl md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-foreground-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
