import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMG } from '../data/site'
import { useSite } from '../hooks/useSite'
import SmartImage from './SmartImage'
import SplitText from './react-bits/SplitText'

const STRIP = ['5–14 CBM Capacity', '4-Sensor Digital Load Cells', 'Heavy-Duty PTO & Hydraulic Drive']

export default function Hero() {
  const { openQuote } = useSite()
  return (
    <section id="home" className="relative isolate flex min-h-[calc(100svh-120px)] flex-col overflow-hidden bg-obsidian md:min-h-[780px]">
      <SmartImage src={IMG.hero} alt="Heavy-duty agricultural mixer in a modern dairy facility" className="absolute inset-0 -z-20 h-full w-full" eager />
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(90deg, #090C10 0%, rgba(9,12,16,0.85) 45%, rgba(9,12,16,0.2) 100%)' }} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
      <div className="container-x flex flex-1 items-center py-16 md:py-24">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }} className="eyebrow mb-5">Hydraulic TMR &amp; Weighing Systems</motion.p>
          <h1 className="font-display text-[2.1rem] xs:text-[2.7rem] font-semibold uppercase leading-[0.98] tracking-[.01em] text-white sm:text-6xl lg:text-7xl">
            <SplitText text="PRECISION FEED" delay={2.4} /><br /><SplitText text="ENGINEERING FOR" delay={2.65} /><br /><SplitText text="MODERN DAIRY FARMS" delay={2.9} />
          </h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.3 }} className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Hydraulic TMR mixers with integrated digital weighing — designed, built and serviced in Okara for Punjab's commercial dairy operations.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.45 }} className="mt-8 sm:mt-9 flex flex-col xs:flex-row flex-wrap gap-3">
            <a href="#machinery" className="btn btn-gold w-full xs:w-auto text-center">Explore Machinery <ArrowRight size={18} /></a>
            <button onClick={() => openQuote()} className="btn btn-outline w-full xs:w-auto">Calculate Quote</button>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }} className="border-t border-white/10 bg-obsidian/55 backdrop-blur-md">
        <ul className="container-x grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STRIP.map((s) => <li key={s} className="py-3.5 sm:py-4 font-display text-xs xs:text-sm sm:text-[15px] uppercase tracking-wider sm:tracking-[.18em] text-slate-200 sm:px-6 sm:first:pl-0">{s}</li>)}
        </ul>
      </motion.div>
    </section>
  )
}
