import { motion } from "framer-motion"
import { BriefcaseBusiness, Code, Mail, MapPin, Phone } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Magnetic } from "@/components/ui/Magnetic"

export function Contact() {
  return (
    <Section id="contact" className="max-w-5xl mx-auto px-6">
      <div className="rounded-[2rem] border border-border bg-surface/75 px-6 py-16 text-center shadow-[0_28px_90px_-52px_hsl(var(--primary)/0.35)] md:px-12">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-8"
        >
          Let&apos;s build <span className="text-foreground-secondary italic">something</span>.
        </motion.h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-foreground-secondary">
          If you need a developer who cares about both implementation quality and how the product feels to use, we should talk.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 grid gap-4 md:grid-cols-3"
        >
          <motion.a
            whileHover={{ y: -4 }}
            href="mailto:talelegaurav01@gmail.com"
            className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-background/30 px-5 py-5 text-foreground-secondary transition-all duration-300 hover:border-primary/30 hover:text-foreground"
          >
            <Mail size={20} />
            <span className="text-lg font-mono">talelegaurav01@gmail.com</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="tel:+919356403851"
            className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-background/30 px-5 py-5 text-foreground-secondary transition-all duration-300 hover:border-primary/30 hover:text-foreground"
          >
            <Phone size={20} />
            <span className="text-lg font-mono">+91 9356403851</span>
          </motion.a>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-background/30 px-5 py-5 text-foreground-secondary">
            <MapPin size={20} />
            <span className="text-lg font-mono uppercase tracking-[0.22em]">Pune, India</span>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mb-16">
          <Magnetic>
            <a
              href="https://github.com/KIRA2104"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-background/30 p-4 text-foreground-secondary transition-all hover:border-primary/30 hover:bg-background hover:scale-110 hover:text-foreground"
              aria-label="GitHub"
            >
              <Code size={24} />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://linkedin.com/in/gauravtalele"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-background/30 p-4 text-foreground-secondary transition-all hover:border-primary/30 hover:bg-background hover:scale-110 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={24} />
            </a>
          </Magnetic>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Magnetic>
            <Button
              onClick={() => window.open("mailto:talelegaurav01@gmail.com")}
              variant="primary"
              size="lg"
              className="h-16 px-12 text-lg"
            >
              Say Hello
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </Section>
  )
}
