import React from 'react'
import { motion } from 'framer-motion'
import ParallaxBackground from './ParallaxBackground'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <ParallaxBackground />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <p className="text-sm tracking-[0.35em] uppercase text-cyan-300/80 mb-4">Kandula</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block gradient-text">VINAY GUPTA</span>
              </h1>
            </div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-cyan-400 font-semibold">
                Data Scientist | Data Analyst
              </p>
              <p className="mt-4 text-slate-300 text-lg max-w-xl leading-relaxed">
                I build data science solutions, statistical models, and visual analytics that turn data into decisions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 font-semibold hover:bg-white/5 transition"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            className="group w-full h-96 card rounded-2xl flex items-center justify-center p-6 relative overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-fuchsia-500/10 blur-xl opacity-40"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.75, 0.45],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute inset-4 rounded-[1.75rem] border border-white/10 opacity-50"
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute left-6 top-6 z-20 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-md"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Data Science
            </motion.div>
            <div className="relative z-50 w-72 h-72 sm:w-80 sm:h-80">
              <img
                src="/vinay.png"
                alt="Kandula Vinay Gupta"
                className="w-full h-full object-cover object-[50%_48%] rounded-full border border-white/10 shadow-2xl transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

