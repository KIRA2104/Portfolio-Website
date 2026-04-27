import { BriefcaseBusiness, Code, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Magnetic } from "@/components/ui/Magnetic"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-12 bg-background/70">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-foreground-secondary"
            >
              © {new Date().getFullYear()} Gaurav Talele. All rights reserved.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-foreground-secondary text-sm mt-1 opacity-70"
            >
              B.Tech Computer Science, MIT ADT University (2027)
            </motion.p>
          </div>

          <div className="flex items-center gap-4">
            <Magnetic>
              <a
                href="https://github.com/KIRA2104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground-secondary transition-all hover:border-primary/20 hover:bg-surface hover:text-foreground"
                aria-label="GitHub"
              >
                <Code size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="https://linkedin.com/in/gauravtalele"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground-secondary transition-all hover:border-primary/20 hover:bg-surface hover:text-foreground"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:talelegaurav01@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground-secondary transition-all hover:border-primary/20 hover:bg-surface hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  )
}
