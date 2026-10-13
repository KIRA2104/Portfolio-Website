import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navItems } from "@/data/navigation"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { cn } from "@/lib/utils"
import { Magnetic } from "@/components/ui/Magnetic"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { activeSection } = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-500",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500 max-w-4xl",
          isScrolled
            ? "bg-background/75 backdrop-blur-xl border border-border/80 rounded-full shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)] px-6 py-2"
            : "bg-background/30 backdrop-blur-md border border-border/10 rounded-full px-4 py-2"
        )}>
          <div className="flex-shrink-0">
            <Magnetic>
              <a href="#" className="group flex items-center gap-1.5 transition-opacity hover:opacity-70">
                <div className="flex gap-0.5">
                  <div className="w-1 h-5 bg-foreground rounded-full" />
                  <div className="w-1 h-5 bg-primary rounded-full" />
                  <div className="w-1 h-5 bg-foreground rounded-full" />
                </div>
                <span className="text-sm font-bold tracking-widest uppercase">Gaurav</span>
              </a>
            </Magnetic>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-0.5 bg-surface/65 p-1 rounded-full border border-border/60">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap overflow-hidden",
                    activeSection === item.id ? "text-background" : "text-foreground-secondary hover:text-foreground"
                  )}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      initial={false}
                      className="absolute inset-0 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-surface rounded-full transition-colors border border-border/50 bg-surface/70"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            id="mobile-navigation"
            role="dialog"
            aria-label="Mobile navigation"
            className="fixed inset-4 z-40 bg-background/95 backdrop-blur-2xl border border-border rounded-3xl md:hidden overflow-hidden pt-24 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.7)]"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-left text-3xl font-heading font-bold transition-all",
                    activeSection === item.id
                      ? "text-foreground translate-x-2"
                      : "text-foreground-secondary opacity-60 hover:opacity-100"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
