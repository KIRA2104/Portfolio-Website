import { cn } from "@/lib/utils"
import { motion, type HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"

export interface SectionProps extends HTMLMotionProps<"section"> {
  id: string
  className?: string
  children: React.ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, ...props }, ref) => {
    return (
      <motion.section
        ref={ref as React.Ref<HTMLElement>}
        id={id}
        className={cn("relative py-20 md:py-28 scroll-mt-24", className)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        {...props}
      >
        {children}
      </motion.section>
    )
  }
)

Section.displayName = "Section"

export { Section }
