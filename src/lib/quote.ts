import { BUSINESS, PRODUCTS, waLink } from '../data/site'

export interface QuoteForm { herd: number; cbm: number; scale: string; productId: string; name: string; city: string; phone: string }
export const HERD_OPTIONS = [{ label: '50', value: 50 }, { label: '100', value: 100 }, { label: '200', value: 200 }, { label: '300+', value: 300 }]
export const CBM_OPTIONS = [5, 8, 10, 14]
export const SCALE_OPTIONS = ['4-Point Digital Load Cell System', 'Digital System + Printer', 'No weighing system']
export const recommendCbm = (herd: number) => (herd <= 60 ? 5 : herd <= 150 ? 8 : herd <= 250 ? 10 : 14)
export const defaultForm = (): QuoteForm => ({ herd: 100, cbm: 8, scale: SCALE_OPTIONS[0], productId: 'hyd-5-8', name: '', city: '', phone: '' })

export const buildMessage = (f: QuoteForm) => {
  const p = PRODUCTS.find((x) => x.id === f.productId)
  return [
    `Assalam-o-Alaikum ${BUSINESS.name}, I would like a quotation.`,
    `Name: ${f.name || '-'}`, `City: ${f.city || '-'}`,
    `Herd size: ${f.herd >= 300 ? '300+' : f.herd} animals`,
    `Mixer: ${f.cbm} CBM${p ? ' – ' + p.name : ''}`, `Weighing system: ${f.scale}`,
  ].join('\n')
}
export const whatsappUrl = (f: QuoteForm) => waLink(buildMessage(f))
