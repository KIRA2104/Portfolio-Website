import { useEffect, useRef } from "react"

export function useCursor() {
  const primaryRef = useRef<HTMLDivElement>(null)
  const secondaryRef = useRef<HTMLDivElement>(null)
  const cursorPos = useRef<{ x: number; y: number } | null>(null)
  const primaryPos = useRef({ x: 0, y: 0 })
  const secondaryPos = useRef({ x: 0, y: 0 })
  const isHovered = useRef(false)
  const isTextHovered = useRef(false)

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
      isHovered.current = !!target.closest("button, a, [role='button']")
      isTextHovered.current = !!target.closest("h1, h2, h3, p, span, li, a") && !isHovered.current
    }

    const animate = () => {
      if (!cursorPos.current) {
        requestAnimationFrame(animate)
        return
      }

      const hovered = isHovered.current
      const textHovered = isTextHovered.current
      const isInteracting = hovered || textHovered

      // Primary
      primaryPos.current.x += (cursorPos.current.x - primaryPos.current.x) * 0.2
      primaryPos.current.y += (cursorPos.current.y - primaryPos.current.y) * 0.2
      if (primaryRef.current) {
        const scale = hovered ? 2 : 1
        primaryRef.current.style.transform = `translate(${primaryPos.current.x}px, ${primaryPos.current.y}px) translate(-50%, -50%) scale(${scale})`
        primaryRef.current.style.mixBlendMode = isInteracting ? "difference" : "normal"
        primaryRef.current.style.background = isInteracting ? "#ffffff" : "hsl(var(--primary))"
        primaryRef.current.style.opacity = "1"
      }

      // Secondary
      secondaryPos.current.x += (cursorPos.current.x - secondaryPos.current.x) * 0.1
      secondaryPos.current.y += (cursorPos.current.y - secondaryPos.current.y) * 0.1
      if (secondaryRef.current) {
        const scale = hovered ? 0 : 1.2
        secondaryRef.current.style.transform = `translate(${secondaryPos.current.x}px, ${secondaryPos.current.y}px) translate(-50%, -50%) scale(${scale})`
        secondaryRef.current.style.mixBlendMode = isInteracting ? "difference" : "normal"
        secondaryRef.current.style.borderColor = isInteracting ? "#ffffff" : "hsl(var(--primary) / 0.3)"
        secondaryRef.current.style.opacity = "1"
      }

      requestAnimationFrame(animate)
    }

    const handleMouseDown = (e: MouseEvent) => {
      const ripple = document.createElement("div")
      ripple.className = "custom-cursor-ripple animate-ripple"
      ripple.style.left = `${e.clientX}px`
      ripple.style.top = `${e.clientY}px`
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return { primaryRef, secondaryRef }
}
