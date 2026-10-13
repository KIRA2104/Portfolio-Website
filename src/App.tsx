import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Skills } from "@/components/sections/Skills"
import { Responsibilities } from "@/components/sections/Responsibilities"
import { Contact } from "@/components/sections/Contact"
import { useLenis } from "@/hooks/useLenis"
import { useCursor } from "@/hooks/useCursor"
import { useRef } from "react"

function App() {
  useLenis()
  const { cursorRef } = useCursor()
  const mainRef = useRef<HTMLElement>(null)

  return (
    <>
      <div className="frame-vignette" />
      {/* Custom cursor - desktop only */}
      <div className="custom-cursor" ref={cursorRef} />

      <Navbar />

      <main ref={mainRef} className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.16),transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-[42rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.12),transparent_70%)] blur-3xl" />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Responsibilities />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
