import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MovingBorderCardProps {
  className?: string
  containerClassName?: string
  children: React.ReactNode
}

export function MovingBorderCard({ className, containerClassName, children }: MovingBorderCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const div = divRef.current
    const rect = div.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative rounded-xl border border-border overflow-hidden transition-all duration-300",
        containerClassName
      )}
    >
      {/* Hover spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-xl"
        style={{
          opacity,
          background: `radial-gradient(400px at ${position.x}px ${position.y}px, oklch(0.55 0.2 250 / 0.1), transparent 80%)`,
        }}
      />
      {/* Border glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-xl"
        style={{
          opacity,
          background: `radial-gradient(200px at ${position.x}px ${position.y}px, oklch(0.55 0.2 250 / 0.15), transparent 80%)`,
          WebkitMask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          padding: "1px",
          borderRadius: "inherit",
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
