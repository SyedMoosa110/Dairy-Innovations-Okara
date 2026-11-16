import { useSite } from '../hooks/useSite'
import Modal from './Modal'
import CountUp from './react-bits/CountUp'

export default function StoryModal() {
  const { storyOpen, setStoryOpen, openQuote } = useSite()
  return (
    <Modal open={storyOpen} onClose={() => setStoryOpen(false)} title="Case Study • Punjab Commercial Dairy">
      <div className="p-6 sm:p-8">
        <p className="font-serif text-3xl italic leading-snug text-white">“Every ration is now exact. We stopped guessing — and stopped wasting feed.”</p>
        <p className="mt-3 text-sm text-slate-500">Sample testimonial — replace with the client's real farm quote.</p>
        <div className="mt-8 grid grid-cols-2 gap-px bg-white/10">
          {[{ v: 22, s: '%', l: 'Feed waste reduction' }, { v: 99.8, s: '%', l: 'Ration accuracy', d: 1 }].map((x) => (
            <div key={x.l} className="bg-slate2 p-5"><CountUp immediate to={x.v} decimals={x.d ?? 0} suffix={x.s} className="font-display text-5xl font-semibold text-gold" /><p className="mt-1 font-display text-xs uppercase tracking-[.25em] text-slate-400">{x.l}</p></div>))}
        </div>
        <button onClick={() => { setStoryOpen(false); openQuote('hyd-5-8') }} className="btn btn-gold mt-8">Request Quote</button>
      </div>
    </Modal>
  )
}
