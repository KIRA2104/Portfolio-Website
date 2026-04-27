import { useEffect, useRef, useState } from "react"

export function useCursor() {
  const primaryRef = useRef<HTMLDivElement>(null)
  const secondaryRef = useRef<HTMLDivElement>(null)
  const cursorPos = useRef<{ x: number; y: number } | null>(null)
  const primaryPos = useRef({ x: 0, y: 0 })
  const secondaryPos = useRef({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const isFirstMove = cursorPos.current === null
      cursorPos.current = { x: e.clientX, y: e.clientY }
      
      if (isFirstMove) {
        if (primaryRef.current) primaryRef.current.style.opacity = "1"
        if (secondaryRef.current) secondaryRef.current.style.opacity = "1"
        primaryPos.current = { x: e.clientX, y: e.clientY }
        secondaryPos.current = { x: e.clientX, y: e.clientY }
      }

      const target = e.target as HTMLElement
      const isInteractive = target.closest("button, a, [role='button']")
      setIsHovered(!!isInteractive)
    }

    const animate = () => {
      if (!cursorPos.current) {
        requestAnimationFrame(animate)
        return
      }

      // Primary Circle (Faster)
      primaryPos.current.x += (cursorPos.current.x - primaryPos.current.x) * 0.2
      primaryPos.current.y += (cursorPos.current.y - primaryPos.current.y) * 0.2
      
      if (primaryRef.current) {
        const scale = isHovered ? 2 : 1
        primaryRef.current.style.transform = `translate(${primaryPos.current.x}px, ${primaryPos.current.y}px) translate(-50%, -50%) scale(${scale})`
      }

      // Secondary Circle (Slower, trailing)
      secondaryPos.current.x += (cursorPos.current.x - secondaryPos.current.x) * 0.1
      secondaryPos.current.y += (cursorPos.current.y - secondaryPos.current.y) * 0.1
      
      if (secondaryRef.current) {
        const scale = isHovered ? 0 : 1.2
        secondaryRef.current.style.transform = `translate(${secondaryPos.current.x}px, ${secondaryPos.current.y}px) translate(-50%, -50%) scale(${scale})`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouseMove)
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isHovered])

  return { primaryRef, secondaryRef }
}

