import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed w-full z-40 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-black font-bold text-sm">KV</div>
          <span className="font-semibold text-sm hidden sm:inline">KANDULA VINAY GUPTA</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="text-sm hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="text-sm hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="text-sm hover:text-cyan-400 transition">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600 text-black text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition">Resume</a>
        </div>

        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-white/5 transition">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur-sm border-t border-white/5">
          <div className="flex flex-col px-6 py-4 gap-3">
            <a href="#about" onClick={() => setOpen(false)} className="py-2 text-sm hover:text-cyan-400 transition">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="py-2 text-sm hover:text-cyan-400 transition">Skills</a>
            <a href="#projects" onClick={() => setOpen(false)} className="py-2 text-sm hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-sm hover:text-cyan-400 transition">Contact</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600 text-black text-sm font-medium text-center">Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}
