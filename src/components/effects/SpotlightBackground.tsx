import { useRef, useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
  children: React.ReactNode
}

export function SpotlightBackground({ className, children }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="pointer-events-none absolute rounded-full transition-opacity duration-500"
        style={{
          left: position.x - 250,
          top: position.y - 250,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, oklch(0.55 0.2 250 / 0.08) 0%, transparent 70%)",
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </div>
  )
}
