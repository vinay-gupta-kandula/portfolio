import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -120])
  const y2 = useTransform(scrollY, [0, 800], [0, -60])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-40 top-0 w-[720px] h-[720px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/10 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-0 top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-indigo-600/10 to-cyan-500/10 blur-2xl"
      />
      <div className="absolute inset-0 bg-grid-lines opacity-5" />
    </div>
  )
}
