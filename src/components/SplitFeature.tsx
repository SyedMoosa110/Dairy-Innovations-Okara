import { Play } from 'lucide-react'
import { IMG, VIDEOS } from '../data/site'
import { useSite } from '../hooks/useSite'
import SmartImage from './SmartImage'
import BlurText from './react-bits/BlurText'

export default function SplitFeature() {
  const { setVideo, setStoryOpen } = useSite()
  return (
    <section id="story" className="grid lg:grid-cols-2">
      <button onClick={() => setVideo({ ...VIDEOS[3], title: 'Precision Mixing in a Commercial Dairy' })} aria-label="Play feature film"
        className="group relative block min-h-[380px] overflow-hidden lg:min-h-[560px]">
        <SmartImage src={IMG.barn} alt="Modern commercial dairy barn" className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-obsidian/30" />
        <span className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:text-gold"><Play size={30} fill="currentColor" /></span>
        <span className="absolute bottom-6 left-6 font-display text-sm uppercase tracking-[.28em] text-white/80">Watch the film</span>
      </button>
      <div className="flex items-center bg-forest-deep px-6 py-16 sm:px-12 lg:px-16">
        <div className="max-w-lg">
          <p className="eyebrow">Case Study • Punjab Commercial Dairy</p>
          <h2 className="mt-4 font-serif text-4xl font-medium italic leading-tight text-white sm:text-5xl"><BlurText text="A herd fed by measurement, not estimation." /></h2>
          <p className="mt-5 leading-relaxed text-slate-300">After moving to a hydraulic TMR mixer with 4-point digital weighing, a commercial dairy near Okara brought every ration to specification — and stopped paying for feed it didn't need.</p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
            <div><dt className="font-display text-xs uppercase tracking-[.25em] text-slate-400">Feed waste</dt><dd className="font-display text-5xl font-semibold text-gold">−22%</dd></div>
            <div><dt className="font-display text-xs uppercase tracking-[.25em] text-slate-400">Ration accuracy</dt><dd className="font-display text-5xl font-semibold text-gold">99.8%</dd></div>
          </dl>
          <button onClick={() => setStoryOpen(true)} className="mt-8 inline-flex min-h-[48px] items-center gap-3 border-b border-gold font-display text-[15px] uppercase tracking-[.2em] text-gold hover:text-gold-light">Read Case Study →</button>
        </div>
      </div>
    </section>
  )
}
