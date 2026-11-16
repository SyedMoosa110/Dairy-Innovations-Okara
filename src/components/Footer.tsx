import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { BUSINESS, NAV, waLink } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep pb-24 pt-16 sm:pb-16">
      <div className="container-x grid gap-12 md:grid-cols-3">
        <div><Logo /><p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">Hydraulic TMR feed mixers, digital weighing and dairy farm systems — engineered and supported from Okara.</p></div>
        <div>
          <h3 className="font-display text-base uppercase tracking-[.25em] text-gold">Navigate</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 text-sm md:grid-cols-1">{NAV.map((n) => <li key={n.label}><a href={n.href} className="inline-block py-2 text-slate-300 hover:text-white">{n.label}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="font-display text-base uppercase tracking-[.25em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm text-slate-300">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" />{BUSINESS.address}</li>
            <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-gold" /><span><a href={`tel:${BUSINESS.tel1}`} className="hover:text-white">{BUSINESS.phone1}</a><br /><a href={`tel:${BUSINESS.tel2}`} className="hover:text-white">{BUSINESS.phone2}</a></span></li>
            <li><a href={waLink('Assalam-o-Alaikum')} target="_blank" rel="noreferrer" className="btn btn-outline"><MessageCircle size={18} />WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <p className="container-x mt-14 border-t border-white/10 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Dairy Innovations Okara. All rights reserved.</p>
    </footer>
  )
}
