import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/site'

export default function WhatsAppFloat() {
  return (
    <a href={waLink('Assalam-o-Alaikum, I need information about your TMR mixers.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 items-center gap-2 border border-gold bg-obsidian/90 px-4 font-display text-[15px] uppercase tracking-[.14em] text-gold shadow-xl backdrop-blur transition-colors hover:bg-gold hover:text-obsidian">
      <MessageCircle size={22} /><span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
