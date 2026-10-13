import { useEffect, useRef } from "react"
import { useSpring, useMotionValue } from "framer-motion"

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring motion
  const springConfig = { damping: 42, stiffness: 650, mass: 0.18 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1"
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    return () => window.removeEventListener("mousemove", onMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const updateX = x.on("change", (value) => {
      if (cursorRef.current) cursorRef.current.style.left = `${value}px`
    })
    const updateY = y.on("change", (value) => {
      if (cursorRef.current) cursorRef.current.style.top = `${value}px`
    })

    return () => {
      updateX()
      updateY()
    }
  }, [x, y])

  return { cursorRef }
}



