import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV } from '../data/site'
import { useSite } from '../hooks/useSite'
import { useLockScroll } from '../hooks/useLockScroll'
import Logo from './Logo'

export default function Navbar() {
  const { openQuote } = useSite()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useLockScroll(open)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16); h()
    window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h)
  }, [])
  // Desktop nav only from xl (1280px) up so logo + links + button never collide; below that we use the drawer.
  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-white/10 bg-obsidian/80 backdrop-blur-xl' : 'border-white/5 bg-obsidian/55 backdrop-blur-md'}`}>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <a href="#home" aria-label="Dairy Innovations Okara — home" className="shrink-0"><Logo /></a>
        <nav className="hidden items-center gap-9 xl:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="relative whitespace-nowrap py-2 font-display text-[15px] font-medium uppercase tracking-[.16em] text-slate-300 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:text-white hover:after:w-full">{n.label}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button onClick={() => openQuote()} className="btn btn-gold hidden whitespace-nowrap sm:inline-flex">Request Quote</button>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="grid h-12 w-12 place-items-center text-white hover:text-gold xl:hidden"><Menu /></button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[80] bg-obsidian xl:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="container-x flex h-20 items-center justify-between"><Logo /><button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-12 w-12 place-items-center text-white"><X /></button></div>
            <nav className="container-x flex flex-col pt-6">
              {NAV.map((n) => <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="border-b border-white/10 py-5 font-display text-3xl uppercase tracking-[.12em] text-white">{n.label}</a>)}
              <button onClick={() => { setOpen(false); openQuote() }} className="btn btn-gold mt-8">Request Quote</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
