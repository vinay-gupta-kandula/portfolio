import React from 'react'
import { motion } from 'framer-motion'

const timelineItems = [
  {
    title: 'A/B Testing & Experimentation',
    description: 'Designed and executed rigorous experimentation frameworks for evaluating product changes statistically.'
  },
  {
    title: 'Analytics Dashboards & Data Viz',
    description: 'Built interactive Streamlit and Plotly dashboards enabling self-service analytics for stakeholders.'
  },
  {
    title: 'Machine Learning Models',
    description: 'Developed and deployed predictive models using scikit-learn, TensorFlow, and PyTorch.'
  },
  {
    title: 'Data Pipeline & ETL Development',
    description: 'Built scalable data pipelines with version control (DVC) and experiment tracking (MLflow).'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export default function Timeline() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold gradient-text mb-12">Experience & Achievements</h2>

      <motion.div
        className="space-y-6 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-indigo-600/50" />

        {timelineItems.map((item, i) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-6 top-6 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-black ring-offset-2 ring-offset-cyan-400/30" />

            <div className="md:ml-32 card p-6 rounded-xl hover:scale-105 hover:bg-white/8 transition transform">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold group-hover:text-cyan-400">{item.title}</h3>
              </div>
              <p className="text-slate-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
