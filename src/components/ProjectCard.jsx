import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition h-full flex flex-col group"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-semibold leading-snug flex-1 group-hover:text-cyan-400 transition">{project.title}</h3>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed flex-grow">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2 mb-4">
        {project.tech.map(tech => (
          <span
            key={tech}
            className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-white/5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 hover:border-cyan-500/50 transition"
        >
          <FiGithub className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        {project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600 text-black font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition"
          >
            <FiExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}
