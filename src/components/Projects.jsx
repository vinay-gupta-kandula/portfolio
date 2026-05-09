import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold gradient-text">Featured Projects</h2>
        <p className="mt-3 text-slate-300 text-lg max-w-2xl">
          Production-grade systems and applications I've built to solve real-world problems at scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
