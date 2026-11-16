import { ArrowUpRight, Download } from 'lucide-react'
import { PRODUCTS } from '../data/site'
import { downloadSpec } from '../lib/downloads'
import { useSite } from '../hooks/useSite'
import SmartImage from './SmartImage'
import SpotlightCard from './react-bits/SpotlightCard'

export default function Machinery() {
  const { openQuote } = useSite()
  return (
    <section id="machinery" className="section-y bg-obsidian">
      <div className="container-x">
        <p className="eyebrow">Built in Okara</p>
        <h2 className="h-section mb-12 text-white">Core Machinery Lineup</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <SpotlightCard key={p.id} className="hairline flex h-full flex-col bg-slate2" color="rgba(230,215,180,0.12)">
              <div className="relative aspect-[16/10] overflow-hidden bg-obsidian">
                <SmartImage src={p.image} alt={p.name} className="h-full w-full transition-transform duration-700 hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate2 via-transparent to-obsidian/30" />
                <span className="absolute left-3 top-3 border border-gold/50 bg-obsidian/70 px-2.5 py-1 font-display text-[12px] uppercase tracking-[.2em] text-gold backdrop-blur">{p.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold uppercase leading-tight tracking-[.03em] text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.short}</p>
                <table className="mt-4 w-full text-sm"><tbody>
                  {Object.entries(p.specs).map(([k, v]) => (
                    <tr key={k} className="border-t border-white/10"><th className="py-2 pr-2 text-left font-normal text-slate-400">{k}</th><td className="py-2 text-right text-white">{v}</td></tr>
                  ))}
                </tbody></table>
                <div className="mt-auto grid gap-2 pt-5">
                  <button onClick={() => openQuote(p.id)} className="btn btn-gold w-full !px-4">Request Quote <ArrowUpRight size={16} /></button>
                  <button onClick={() => downloadSpec(p)} className="btn btn-outline w-full !px-4"><Download size={16} />Spec Sheet</button>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
