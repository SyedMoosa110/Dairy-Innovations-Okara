import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { BUSINESS, waLink } from '../data/site'

export default function TopBar() {
  return (
    <div className="hidden bg-deep text-xs text-slate-400 md:block">
      <div className="container-x flex h-10 items-center justify-between">
        <span className="flex items-center gap-2"><MapPin size={13} className="text-gold" />{BUSINESS.short}</span>
        <div className="flex items-center gap-6">
          <a href={`tel:${BUSINESS.tel1}`} className="flex items-center gap-2 hover:text-white"><Phone size={13} className="text-gold" />{BUSINESS.phone1}</a>
          <a href={`tel:${BUSINESS.tel2}`} className="hover:text-white">{BUSINESS.phone2}</a>
          <a href={waLink('Assalam-o-Alaikum, I need information about your TMR mixers.')} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-gold hover:text-gold-light"><MessageCircle size={13} />WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
