import { animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

/** React Bits "CountUp" pattern. Starts when scrolled into view (or immediately if `immediate`). */
export default function CountUp({ to, from = 0, duration = 2, decimals = 0, suffix = '', prefix = '', separator = ',', immediate = false, className = '' }:
  { to: number; from?: number; duration?: number; decimals?: number; suffix?: string; prefix?: string; separator?: string; immediate?: boolean; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const fmt = (n: number) => {
    const [i, d] = n.toFixed(decimals).split('.')
    return prefix + i.replace(/\B(?=(\d{3})+(?!\d))/g, separator) + (d ? '.' + d : '') + suffix
  }
  useEffect(() => {
    if (!immediate && !inView) return
    const c = animate(from, to, { duration, ease: 'easeOut', onUpdate: (v) => { if (ref.current) ref.current.textContent = fmt(v) } })
    return () => c.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, immediate, to, from, duration])
  return <span ref={ref} className={className}>{fmt(from)}</span>
}
