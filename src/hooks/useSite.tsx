import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { VIDEOS } from '../data/site'

type Video = (typeof VIDEOS)[number]
interface Ctx {
  quoteOpen: boolean; quoteProduct?: string; openQuote: (id?: string) => void; closeQuote: () => void
  video: Video | null; setVideo: (v: Video | null) => void
  storyOpen: boolean; setStoryOpen: (v: boolean) => void
}
const C = createContext<Ctx | null>(null)
export function SiteProvider({ children }: { children: ReactNode }) {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>()
  const [video, setVideo] = useState<Video | null>(null)
  const [storyOpen, setStoryOpen] = useState(false)
  const openQuote = useCallback((id?: string) => { setQuoteProduct(id); setQuoteOpen(true) }, [])
  const v = useMemo<Ctx>(() => ({ quoteOpen, quoteProduct, openQuote, closeQuote: () => setQuoteOpen(false), video, setVideo, storyOpen, setStoryOpen }), [quoteOpen, quoteProduct, openQuote, video, storyOpen])
  return <C.Provider value={v}>{children}</C.Provider>
}
export const useSite = () => { const c = useContext(C); if (!c) throw new Error('useSite outside provider'); return c }
