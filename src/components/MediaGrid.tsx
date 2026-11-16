import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { VIDEOS } from '../data/site'
import { useSite } from '../hooks/useSite'
import SmartImage from './SmartImage'

export default function MediaGrid() {
  const { setVideo } = useSite()
  const tile = (i: number) => {
    const v = VIDEOS[i]
    return (
      <motion.button key={v.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.6 }}
        onClick={() => setVideo(v)} aria-label={`Play ${v.title}`} className="group relative min-h-[200px] xs:min-h-[220px] overflow-hidden text-left sm:min-h-[260px]">
        <SmartImage src={v.image} alt={v.title} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/35 to-obsidian/25" />
        <span className="absolute left-4 top-4 sm:left-5 sm:top-5 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full border border-white/40 text-white transition-colors group-hover:border-gold group-hover:text-gold"><Play size={15} fill="currentColor" /></span>
        <span className="absolute right-4 top-4 sm:right-5 sm:top-5 font-display text-xs sm:text-sm tracking-widest text-slate-300">{v.length}</span>
        <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5 font-display text-lg sm:text-xl font-semibold uppercase tracking-[.03em] sm:tracking-[.05em] text-white">{v.title}</span>
      </motion.button>
    )
  }
  return (
    <section id="media" className="bg-obsidian pb-16 md:pb-28">
      <div className="container-x">
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {tile(0)}
          <div className="flex min-h-[200px] xs:min-h-[220px] flex-col items-start justify-center bg-gold p-6 text-obsidian sm:min-h-[260px] sm:p-8">
            <p className="font-display text-xs sm:text-[13px] font-semibold uppercase tracking-[.22em] sm:tracking-[.28em] text-obsidian/70">Media</p>
            <h2 className="mt-2 font-display text-3xl xs:text-4xl sm:text-5xl font-semibold uppercase leading-[1.02]">Field Operations &amp; Engineering</h2>
          </div>
          {tile(1)}{tile(2)}{tile(3)}{tile(4)}
        </div>
      </div>
    </section>
  )
}
