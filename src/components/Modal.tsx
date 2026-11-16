import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, type ReactNode } from 'react'
import { useLockScroll } from '../hooks/useLockScroll'

export default function Modal({ open, onClose, title, children, wide }: { open: boolean; onClose: () => void; title: string; children: ReactNode; wide?: boolean }) {
  useLockScroll(open)
  useEffect(() => {
    if (!open) return
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h)
  }, [open, onClose])
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
          <motion.div role="dialog" aria-modal="true" aria-label={title} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`max-h-[92vh] w-full overflow-y-auto border border-white/10 bg-slate2 shadow-2xl rounded-t-xl sm:rounded-none ${wide ? 'sm:max-w-4xl' : 'sm:max-w-xl'}`}>
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate2/95 px-4 sm:px-6 py-3 sm:py-4 backdrop-blur">
              <h2 className="font-display text-base sm:text-lg font-semibold uppercase tracking-wider sm:tracking-[.18em] text-white truncate pr-2">{title}</h2>
              <button onClick={onClose} aria-label="Close" className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center text-slate-300 hover:text-gold"><X size={20} className="sm:hidden" /><X size={22} className="hidden sm:block" /></button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
