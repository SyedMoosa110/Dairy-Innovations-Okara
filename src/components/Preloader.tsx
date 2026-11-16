import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLockScroll } from '../hooks/useLockScroll'

/** Typography only: 1px gold progress line, then the two steel panels part like elevator doors. */
export default function Preloader() {
  const [p, setP] = useState(0)
  const [phase, setPhase] = useState<'load' | 'open' | 'done'>('load')
  useLockScroll(phase !== 'done')
  useEffect(() => {
    const DUR = 1800, t0 = performance.now(); let raf = 0
    const tick = (t: number) => {
      const x = Math.min(1, (t - t0) / DUR); setP(1 - Math.pow(1 - x, 2.2))
      if (x < 1) raf = requestAnimationFrame(tick)
      else { setTimeout(() => setPhase('open'), 350); setTimeout(() => setPhase('done'), 1500) }
    }
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf)
  }, [])
  if (phase === 'done') return null
  const open = phase === 'open'
  const panel = (side: 'l' | 'r') => (
    <motion.div className={`absolute top-0 h-full w-1/2 bg-obsidian ${side === 'l' ? 'left-0 border-r' : 'right-0 border-l'} border-white/10`}
      style={{ backgroundImage: 'repeating-linear-gradient(90deg,rgba(255,255,255,.018) 0 1px,transparent 1px 4px)' }}
      animate={{ x: open ? (side === 'l' ? '-100%' : '100%') : 0 }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} />
  )
  return (
    <div className="fixed inset-0 z-[100]" role="status" aria-label="Loading">
      {panel('l')}{panel('r')}
      <motion.div className="absolute inset-0 grid place-items-center px-6 text-center" animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.35 }}>
        <div className="w-full max-w-md px-2">
          <h1 className="font-display text-2xl xs:text-3xl sm:text-5xl font-semibold uppercase tracking-[.14em] sm:tracking-[.25em] text-white">Dairy Innovations</h1>
          <div className="mx-auto mt-6 sm:mt-8 h-px w-full bg-white/10"><div className="h-px bg-gold" style={{ width: `${p * 100}%` }} /></div>
          <div className="mt-4 flex justify-between font-display text-[10px] xs:text-[12px] uppercase tracking-wider sm:tracking-[.25em] text-slate-400">
            <span>Engineering Precision — Okara</span><span className="text-gold">{Math.round(p * 100)}%</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
