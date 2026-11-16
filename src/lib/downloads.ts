import { BUSINESS, PRODUCTS, type Product } from '../data/site'

function save(body: string, file: string) {
  const url = URL.createObjectURL(new Blob([body], { type: 'text/plain' }))
  const a = document.createElement('a'); a.href = url; a.download = file; a.click(); URL.revokeObjectURL(url)
}
const head = (t: string) => [`${BUSINESS.name} — ${t}`, '='.repeat(48), BUSINESS.address, `${BUSINESS.phone1} | ${BUSINESS.phone2}`, '']
const block = (p: Product) => [p.name + ' (' + p.short + ')', ...Object.entries(p.specs).map(([k, v]) => `  ${k}: ${v}`), '']

// Placeholders generated from product data. Replace with real PDFs in /public/downloads when available.
export const downloadDoc = (title: string, file: string) => save([...head(title), ...PRODUCTS.flatMap(block)].join('\n'), file)
export const downloadSpec = (p: Product) => save([...head('Spec Sheet'), ...block(p)].join('\n'), `${p.id}-spec-sheet.txt`)
