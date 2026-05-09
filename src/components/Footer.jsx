import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/5 mt-12 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">KANDULA VINAY GUPTA</h3>
            <p className="text-slate-400">Data Scientist | Data Analyst</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vinay-gupta-kandula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vinay-gupta-kandula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-full bg-white/5 hover:bg-cyan-500/20 transition flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} KANDULA VINAY GUPTA. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
