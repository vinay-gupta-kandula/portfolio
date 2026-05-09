import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  const items = [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Aditya College of Engineering and Technology',
      date: '2023–2027',
      details: 'CGPA: 9.32 / 10',
    },
    {
      degree: 'Intermediate (MPC)',
      school: 'Aditya Junior College',
      date: '2021–2023',
      details: 'Percentage: 97.40%',
    },
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-16" aria-label="Education">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        Education
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 bg-white/3 rounded-xl border border-white/5"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{it.degree}</h3>
                <p className="text-sm text-slate-300">{it.school}</p>
              </div>
              <div className="text-sm text-cyan-300 font-medium">{it.date}</div>
            </div>
            <p className="mt-4 text-slate-300 text-sm">{it.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
