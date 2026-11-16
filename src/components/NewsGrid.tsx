import { motion } from 'framer-motion'
import { NEWS } from '../data/site'
import SmartImage from './SmartImage'

function Card({ n, large, i }: { n: (typeof NEWS)[number]; large?: boolean; i: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.07, duration: 0.5 }}
      className={`group relative overflow-hidden bg-obsidian ${large ? 'min-h-[300px] xs:min-h-[380px] sm:min-h-[440px] lg:h-full' : 'min-h-[200px] xs:min-h-[240px]'}`}>
      <SmartImage src={n.image} alt={n.title} className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 xs:p-5 sm:p-6">
        <p className="font-display text-xs sm:text-[13px] uppercase tracking-[.22em] sm:tracking-[.25em] text-gold">{n.date} · {n.place}</p>
        <h3 className={`mt-2 font-display font-semibold uppercase leading-tight tracking-[.02em] text-white ${large ? 'text-2xl xs:text-3xl sm:text-4xl' : 'text-base xs:text-lg sm:text-xl'}`}>{n.title}</h3>
      </div>
    </motion.article>
  )
}

export default function NewsGrid() {
  return (
    <section id="news" className="section-y bg-alabaster text-charcoal">
      <div className="container-x">
        <p className="eyebrow !text-gold-dark">Field Reports</p>
        <h2 className="h-section mb-12 text-charcoal">Recent Installations &amp; Field News</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card n={NEWS[0]} large i={0} />
          <div className="grid gap-4 sm:grid-cols-2">{NEWS.slice(1).map((n, i) => <Card key={n.id} n={n} i={i + 1} />)}</div>
        </div>
      </div>
    </section>
  )
}
