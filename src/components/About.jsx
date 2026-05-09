import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 items-start"
      >
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-4xl font-bold gradient-text">About</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            I'm a Data Scientist and Data Analyst focused on turning complex datasets into clear, actionable insights. I've built production dashboards, A/B testing frameworks, and analytics pipelines that help teams make data-driven decisions.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            I believe in statistical rigor, reproducible analysis, and communicating findings clearly to both technical and non-technical stakeholders. My work spans data exploration, statistical modeling, experimentation design, machine learning, and visualization.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="card rounded-2xl p-6 h-fit"
        >
          <h3 className="font-semibold text-lg mb-4">Focus Areas</h3>
          <ul className="text-slate-300 space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">→</span>
              <span>A/B testing & experimentation design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">→</span>
              <span>Analytics dashboards & data visualization</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">→</span>
              <span>Statistical modeling & analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">→</span>
              <span>Machine learning & predictions</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
