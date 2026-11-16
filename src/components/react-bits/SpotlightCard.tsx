import { useRef, type ReactNode } from 'react'

/** React Bits "SpotlightCard" pattern: radial glow follows the cursor. */
export default function SpotlightCard({ children, className = '', color = 'rgba(230,215,180,0.12)' }: { children: ReactNode; className?: string; color?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    ref.current!.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current!.style.setProperty('--y', `${e.clientY - r.top}px`)
    ref.current!.style.setProperty('--o', '1')
  }
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={() => ref.current?.style.setProperty('--o', '0')}
      className={`relative overflow-hidden ${className}`}>
      <div aria-hidden className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{ opacity: 'var(--o,0)', background: `radial-gradient(420px circle at var(--x,50%) var(--y,50%), ${color}, transparent 60%)` }} />
      <div className="relative">{children}</div>
    </div>
  )
}
