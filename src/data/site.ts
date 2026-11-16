export const BUSINESS = {
  name: 'Dairy Innovations Okara',
  address: 'Madina Market, Main GT Rd, Okara, Punjab, Pakistan',
  short: 'Madina Market, Main GT Rd, Okara',
  phone1: '+92 333 5524580', phone2: '0300-1105580',
  tel1: '+923335524580', tel2: '03001105580', whatsapp: '923335524580',
} as const

export const waLink = (text: string) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`

/**
 * Every photo slot resolves in this order:
 *   1) /public/images/dairy-innovations/<file>   <- drop the client's own photo here
 *   2) one or more Unsplash candidates
 *   3) a dark architectural placeholder (never a broken image)
 */
const LOCAL = '/images/dairy-innovations/'
const un = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`
const slot = (file: string, ids: string[]): string[] => [LOCAL + file, ...ids.map(un)]

export const IMG = {
  hero: slot('hero-mixer.jpg', ['photo-1530267981375-f0de937f5f13', 'photo-1592982537447-7440770cbfc9', 'photo-1589923188900-85dae523342b']),
  mixer5: slot('mixer-5cbm.jpg', ['photo-1605000797499-95a51c5269ae', 'photo-1530267981375-f0de937f5f13', 'photo-1592982537447-7440770cbfc9']),
  mixer10: slot('mixer-10cbm.jpg', ['photo-1589923188900-85dae523342b', 'photo-1592982537447-7440770cbfc9', 'photo-1530267981375-f0de937f5f13']),
  scale: slot('weigh-scale.jpg', ['photo-1581091226825-a6a2a5aee158', 'photo-1565514020179-026b92b84bb6', 'photo-1581092160562-40aa08e78837']),
  parlor: slot('parlor-systems.jpg', ['photo-1516467508483-a7212febe31a', 'photo-1527153857715-3908f2bae5e8', 'photo-1500595046743-cd271d694d30']),
  install: slot('farm-installation.jpg', ['photo-1500595046743-cd271d694d30', 'photo-1464226184884-fa280b87c399', 'photo-1574943320219-553eb213f72d']),
  barn: slot('dairy-barn.jpg', ['photo-1516467508483-a7212febe31a', 'photo-1527153857715-3908f2bae5e8', 'photo-1500595046743-cd271d694d30']),
  field: slot('field-operations.jpg', ['photo-1574943320219-553eb213f72d', 'photo-1464226184884-fa280b87c399', 'photo-1500382017468-9049fed747ef']),
  steel: slot('workshop.jpg', ['photo-1565514020179-026b92b84bb6', 'photo-1581091226825-a6a2a5aee158', 'photo-1581092160562-40aa08e78837']),
  silage: slot('silage-feed.jpg', ['photo-1625246333195-78d9c38ad449', 'photo-1574943320219-553eb213f72d', 'photo-1464226184884-fa280b87c399']),
}

export interface Product {
  id: string; name: string; short: string; image: string[]; tag: string
  specs: { Capacity: string; 'Drive Type': string; 'Weighing Accuracy': string }
}
export const PRODUCTS: Product[] = [
  { id: 'hyd-5-8', name: 'Hydraulic TMR Feed Mixer', short: '5–8 CBM', image: IMG.mixer5, tag: 'Flagship',
    specs: { Capacity: '5–8 CBM', 'Drive Type': 'Tractor PTO + hydraulic', 'Weighing Accuracy': '99.8%' } },
  { id: 'vert-10-14', name: 'Vertical Twin-Auger TMR Mixer', short: '10–14 CBM', image: IMG.mixer10, tag: 'High Capacity',
    specs: { Capacity: '10–14 CBM', 'Drive Type': 'Heavy-duty PTO + hydraulic', 'Weighing Accuracy': '99.8%' } },
  { id: 'scale-4pt', name: '4-Point Digital Weigh Scale & Load Cell System', short: 'Retrofit or factory-fit', image: IMG.scale, tag: 'Precision',
    specs: { Capacity: 'Up to 10,000 kg', 'Drive Type': '12 V DC indicator', 'Weighing Accuracy': '99.8%' } },
  { id: 'parlor', name: 'Automated Dairy Parlor & Farm Accessories', short: 'Custom farm layouts', image: IMG.parlor, tag: 'Farm Systems',
    specs: { Capacity: 'Per farm design', 'Drive Type': 'Electric / hydraulic', 'Weighing Accuracy': 'n/a' } },
]

export const NEWS = [
  { id: 'n1', title: 'Hydraulic TMR mixer commissioned on a 120-cow commercial dairy near Okara', date: 'Nov 2026', place: 'Okara', image: IMG.install },
  { id: 'n2', title: 'Vertical twin-auger mixer delivered to a Sahiwal herd', date: 'Oct 2026', place: 'Sahiwal', image: IMG.mixer10 },
  { id: 'n3', title: '4-point load cell retrofit completed in Pakpattan', date: 'Oct 2026', place: 'Pakpattan', image: IMG.scale },
  { id: 'n4', title: 'Live mixing demonstration at a Punjab agricultural expo', date: 'Sep 2026', place: 'Punjab', image: IMG.field },
  { id: 'n5', title: 'Updated hydraulic auger geometry for dense silage rations', date: 'Sep 2026', place: 'Workshop', image: IMG.silage },
]

export const VIDEOS = [
  { id: 'v1', title: 'Hydraulic Auger Technology', desc: 'How dual hydraulic augers blend long-stem forage uniformly.', image: IMG.mixer5, length: '2:14', src: undefined as string | undefined },
  { id: 'v2', title: 'Load Cell Calibration', desc: 'On-site calibration for 99.8% ration accuracy.', image: IMG.scale, length: '3:02', src: undefined as string | undefined },
  { id: 'v3', title: 'TMR Ration Mixing', desc: 'A full mixing cycle: silage, concentrate and minerals.', image: IMG.silage, length: '4:30', src: undefined as string | undefined },
  { id: 'v4', title: 'Farm Installation, Okara', desc: 'Delivery to first mix: on-site commissioning.', image: IMG.install, length: '2:48', src: undefined as string | undefined },
  { id: 'v5', title: 'Spares & Hydraulics', desc: 'Workshop tour and the parts we keep in stock.', image: IMG.steel, length: '1:55', src: undefined as string | undefined },
]

export const DOWNLOADS = [
  { id: 'd1', title: 'TMR Technical Datasheet', meta: 'Capacities, drive, weighing', file: 'tmr-technical-datasheet.txt' },
  { id: 'd2', title: 'Load Cell Calibration Guide', meta: 'Step-by-step procedure', file: 'load-cell-calibration-guide.txt' },
  { id: 'd3', title: 'Hydraulic Maintenance Manual', meta: 'Service intervals and safety', file: 'hydraulic-maintenance-manual.txt' },
  { id: 'd4', title: '2026 Product Catalog', meta: 'Full range overview', file: 'product-catalog-2026.txt' },
]

export const STATS = [
  { value: 500, suffix: '+', label: 'Farms Equipped' },
  { value: 99.8, suffix: '%', label: 'Ration Accuracy', decimals: 1 },
  { value: 24, suffix: '/7', label: 'Punjab Field Support' },
]

export const NAV = [
  { label: 'Home', href: '#home' }, { label: 'TMR Mixers', href: '#machinery' }, { label: 'Farm Systems', href: '#machinery' },
  { label: 'Installations', href: '#news' }, { label: 'Media', href: '#media' }, { label: 'Resources', href: '#resources' },
]
