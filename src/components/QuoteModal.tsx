import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PRODUCTS } from '../data/site'
import { useSite } from '../hooks/useSite'
import { CBM_OPTIONS, HERD_OPTIONS, SCALE_OPTIONS, defaultForm, recommendCbm, whatsappUrl, type QuoteForm } from '../lib/quote'
import Modal from './Modal'

const STEPS = ['Herd Size', 'Machine', 'Summary']
const input = 'h-12 w-full border border-white/15 bg-obsidian px-3 text-white placeholder:text-slate-500 focus:border-gold focus:outline-none'

export default function QuoteModal() {
  const { quoteOpen, quoteProduct, closeQuote } = useSite()
  const [step, setStep] = useState(0)
  const [f, setF] = useState<QuoteForm>(defaultForm())
  useEffect(() => { if (quoteOpen) { setStep(0); setF({ ...defaultForm(), productId: quoteProduct ?? 'hyd-5-8' }) } }, [quoteOpen, quoteProduct])
  const set = <K extends keyof QuoteForm>(k: K, v: QuoteForm[K]) => setF((s) => ({ ...s, [k]: v }))
  const rec = recommendCbm(f.herd)
  const valid = f.name.trim().length > 1 && f.city.trim().length > 1 && /^[+\d][\d\s-]{8,}$/.test(f.phone.trim())
  const choice = (on: boolean) => `min-h-[56px] border px-4 font-display text-xl uppercase tracking-[.1em] transition-colors ${on ? 'border-gold bg-gold text-obsidian' : 'border-white/15 text-slate-200 hover:border-gold/60'}`
  return (
    <Modal open={quoteOpen} onClose={closeQuote} title="Request a Quotation">
      <div className="p-6 sm:p-8">
        <ol className="mb-8 flex gap-2" aria-label="Progress">
          {STEPS.map((s, i) => <li key={s} className="flex-1"><div className={`h-px ${i <= step ? 'bg-gold' : 'bg-white/15'}`} /><span className={`mt-2 block font-display text-xs uppercase tracking-[.22em] ${i === step ? 'text-white' : 'text-slate-500'}`}>{i + 1}. {s}</span></li>)}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
            {step === 0 && (<div>
              <h3 className="mb-4 font-display text-2xl uppercase tracking-[.08em] text-white">Herd size</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{HERD_OPTIONS.map((h) => <button key={h.value} onClick={() => setF((s) => ({ ...s, herd: h.value, cbm: recommendCbm(h.value) }))} className={choice(f.herd === h.value)}>{h.label}</button>)}</div>
              <p className="mt-5 border-l-2 border-gold bg-white/[.03] p-3 text-sm text-slate-300">Suggested for this herd: <b className="text-gold">{rec} CBM hydraulic TMR mixer</b></p>
            </div>)}
            {step === 1 && (<div className="space-y-7">
              <div><h3 className="mb-4 font-display text-2xl uppercase tracking-[.08em] text-white">Mixer capacity (CBM)</h3>
                <div className="grid grid-cols-4 gap-3">{CBM_OPTIONS.map((c) => <button key={c} onClick={() => set('cbm', c)} className={choice(f.cbm === c)}>{c}{c === rec && <span className="block text-[10px] tracking-[.2em] opacity-70">SUGGESTED</span>}</button>)}</div></div>
              <div><h3 className="mb-4 font-display text-2xl uppercase tracking-[.08em] text-white">Weighing system</h3>
                <div className="grid gap-2">{SCALE_OPTIONS.map((s) => <button key={s} onClick={() => set('scale', s)} className={`${choice(f.scale === s)} text-left !font-sans !text-sm !normal-case !tracking-normal`}>{s}</button>)}</div></div>
              <div><label htmlFor="prod" className="mb-1 block text-sm text-slate-400">Model</label>
                <select id="prod" value={f.productId} onChange={(e) => set('productId', e.target.value)} className={input}>{PRODUCTS.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select></div>
            </div>)}
            {step === 2 && (<div className="space-y-4">
              <div className="border border-white/10 bg-obsidian p-4 text-sm leading-relaxed text-slate-300">
                <p className="mb-2 font-display text-xs uppercase tracking-[.25em] text-gold">Your specification</p>
                {f.herd >= 300 ? '300+' : f.herd} animals · {f.cbm} CBM · {PRODUCTS.find((p) => p.id === f.productId)?.name}<br />{f.scale}
              </div>
              {([['name', 'Full name', 'text', 'name'], ['city', 'City', 'text', 'address-level2'], ['phone', 'Phone / WhatsApp', 'tel', 'tel']] as const).map(([k, l, t, ac]) => (
                <div key={k}><label htmlFor={k} className="mb-1 block text-sm text-slate-400">{l}</label><input id={k} type={t} autoComplete={ac} value={f[k]} onChange={(e) => set(k, e.target.value)} className={input} /></div>))}
            </div>)}
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between gap-3">
          <button onClick={() => setStep((s) => s - 1)} className={`btn btn-outline ${step === 0 ? 'invisible' : ''}`}><ArrowLeft size={16} />Back</button>
          {step < 2
            ? <button onClick={() => setStep((s) => s + 1)} className="btn btn-gold">Next <ArrowRight size={16} /></button>
            : <a href={valid ? whatsappUrl(f) : undefined} target="_blank" rel="noreferrer" aria-disabled={!valid} className={`btn btn-gold ${valid ? '' : 'pointer-events-none opacity-40'}`}><MessageCircle size={18} />Send to WhatsApp</a>}
        </div>
      </div>
    </Modal>
  )
}
