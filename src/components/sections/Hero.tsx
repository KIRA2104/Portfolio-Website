import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Magnetic } from "@/components/ui/Magnetic"
import { useRef } from "react"


const particles = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  x: (index * 137) % 1000,
  y: (index * 211) % 800,
  driftY: -8 - ((index * 7) % 16),
  duration: 3 + ((index * 5) % 10) / 5,
}))

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  const scrollToWork = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const name = "Gaurav Talele"
  const words = name.split(" ")

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-12"
    >
      {/* Subtle animated background */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.14]">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute h-1 w-1 rounded-full bg-primary"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [particle.y, particle.y + particle.driftY],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-primary/18 blur-3xl" />
        <div className="absolute right-[-5%] top-[18%] h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">

        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-black text-foreground tracking-[-0.04em] leading-[0.85] flex flex-wrap gap-x-4 md:gap-x-6">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden py-4 pr-2 -my-4">
              <span className="flex">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.1 + (wordIndex * word.length + charIndex) * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8"
        >
          <p className="text-2xl md:text-4xl text-foreground font-medium tracking-tight max-w-3xl">
            Building digital products, polished interfaces, and AI systems.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-6 max-w-2xl text-base leading-8 text-foreground-secondary md:text-lg"
        >
          I design polished interfaces and build backend systems that are fast, usable, and ready for real-world workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Magnetic>
            <Button onClick={scrollToWork} variant="primary" size="lg" className="min-w-[10rem]">
              View Work
            </Button>
          </Magnetic>
          <Magnetic>
            <Button onClick={scrollToContact} variant="outline" size="lg" className="min-w-[10rem]">
              Get in Touch
            </Button>
          </Magnetic>
        </motion.div>
      </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.55 }}
          className="grid w-full max-w-md grid-cols-2 gap-4 sm:gap-5 lg:w-[28rem] shrink-0"
        >
          {[
            { value: "3+", label: "Featured builds" },
            { value: "2", label: "Internships" },
            { value: "10+", label: "Tools used" },
            { value: "2027", label: "Graduation" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-border bg-surface/80 p-6 min-h-[8.5rem] flex flex-col items-center justify-center text-center shadow-[0_18px_40px_-30px_rgba(0,0,0,0.8)] backdrop-blur"
            >
              <p className="text-3xl md:text-4xl font-heading font-bold text-foreground">{item.value}</p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-foreground-secondary">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-foreground-secondary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
