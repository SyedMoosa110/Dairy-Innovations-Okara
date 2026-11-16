import { motion } from 'framer-motion'

/** React Bits "SplitText" pattern: staggered per-character reveal. */
export default function SplitText({ text, className = '', delay = 0, stagger = 0.03 }: { text: string; className?: string; delay?: number; stagger?: number }) {
  const words = text.split(' ')
  let i = 0
  return (
    <span className={className} aria-label={text}>
      {words.map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden>
          {w.split('').map((ch) => (
            <motion.span
              key={i}
              className="inline-block will-change-transform"
              initial={{ opacity: 0, y: 40, rotateX: -70 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: delay + stagger * i++, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >{ch}</motion.span>
          ))}
          {wi < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  )
}
