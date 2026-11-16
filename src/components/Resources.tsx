import { ArrowRight } from 'lucide-react'
import { DOWNLOADS, STATS } from '../data/site'
import { downloadDoc } from '../lib/downloads'
import CountUp from './react-bits/CountUp'

export default function Resources() {
  return (
    <section id="resources" className="grid lg:grid-cols-2">
      <div className="bg-slate2 px-6 py-16 sm:px-12 lg:py-24 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-16">
        <p className="eyebrow">Technical Resources</p>
        <h2 className="h-section mb-10 text-white">Documents &amp; Manuals</h2>
        <ul className="border-t border-white/10">
          {DOWNLOADS.map((d) => (
            <li key={d.id} className="border-b border-white/10">
              <button onClick={() => downloadDoc(d.title, d.file)} className="group flex min-h-[80px] w-full items-center justify-between gap-4 py-4 text-left">
                <span><span className="block font-display text-xl font-semibold uppercase tracking-[.05em] text-white transition-colors group-hover:text-gold">{d.title}</span><span className="text-sm text-slate-400">{d.meta}</span></span>
                <ArrowRight className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center bg-deep px-6 py-16 sm:px-12 lg:py-24 lg:pl-16 lg:pr-[max(2rem,calc((100vw-1280px)/2+2rem))]">
        <div className="w-full">
          <p className="eyebrow">Impact</p>
          <div className="mt-6 divide-y divide-white/10 border-y border-gold/40">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4 py-6">
                <span className="font-display text-sm uppercase tracking-[.25em] text-slate-300 sm:text-base">{s.label}</span>
                <CountUp to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} className="font-display text-5xl font-semibold text-gold sm:text-6xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
