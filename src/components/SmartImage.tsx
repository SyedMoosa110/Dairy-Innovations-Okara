import { useState } from 'react'
import { Camera } from 'lucide-react'

interface Props { src: string[]; alt: string; className?: string; eager?: boolean }

/** Tries each URL in order (client photo first, then stock). If all fail, shows a dark architectural placeholder. */
export default function SmartImage({ src, alt, className = '', eager }: Props) {
  const [i, setI] = useState(0)
  if (i >= src.length) {
    return (
      <div role="img" aria-label={alt} className={`relative flex items-center justify-center overflow-hidden bg-[#0d1218] ${className}`}
        style={{ backgroundImage: 'linear-gradient(135deg,#12171F,#090C10)' }}>
        <div className="absolute inset-0 opacity-[.07]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0 1px,transparent 1px 48px),repeating-linear-gradient(90deg,#fff 0 1px,transparent 1px 48px)' }} />
        <Camera className="relative text-gold/60" size={28} strokeWidth={1.25} />
      </div>
    )
  }
  return <img key={src[i]} src={src[i]} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setI((n) => n + 1)} className={`object-cover ${className}`} />
}
