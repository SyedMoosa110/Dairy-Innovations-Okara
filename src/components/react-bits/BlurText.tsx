import { motion } from 'framer-motion'

/** React Bits "BlurText" pattern: words blur into focus on scroll-in. */
export default function BlurText({ text, className = '', delay = 0.06 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-[filter,transform]"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: i * delay, duration: 0.6, ease: 'easeOut' }}
        >{w}&nbsp;</motion.span>
      ))}
    </span>
  )
}
