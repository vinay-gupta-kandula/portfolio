import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaDatabase, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiNumpy, SiPandas } from 'react-icons/si'

const categories = [
  {
    name: 'Core Data Science',
    items: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Scikit-learn'],
    icon: <FaPython className="w-6 h-6" />
  },
  {
    name: 'Statistics & Experimentation',
    items: ['A/B Testing', 'Statistical Testing', 'Hypothesis Testing', 'Causal Inference', 'Experimental Design'],
    icon: <SiPandas className="w-6 h-6" />
  },
  {
    name: 'Data Visualization',
    items: ['Plotly', 'Matplotlib', 'Seaborn', 'Streamlit', 'Tableau'],
    icon: <FaPython className="w-6 h-6" />
  },
  {
    name: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LLM Fine-tuning'],
    icon: <SiTensorflow className="w-6 h-6" />
  },
  {
    name: 'Databases & SQL',
    items: ['SQL', 'PostgreSQL', 'MongoDB', 'Query Optimization', 'ETL'],
    icon: <FaDatabase className="w-6 h-6" />
  },
  {
    name: 'Tools & Deployment',
    items: ['Git', 'DVC', 'MLflow', 'Docker', 'Jupyter', 'Kaggle'],
    icon: <FaDocker className="w-6 h-6" />
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold gradient-text mb-12">Skills & Technologies</h2>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            variants={itemVariants}
            className="card p-6 rounded-xl hover:scale-105 hover:bg-white/8 transition transform cursor-pointer"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 text-white">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-lg">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-full hover:border-cyan-400/50 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
