import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const contactLinks = [
    { icon: <FiMail className="w-5 h-5" />, label: 'Email', href: 'mailto:kvinaygupta4242@gmail.com', text: 'kvinaygupta4242@gmail.com' },
    { icon: <FiGithub className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com/vinay-gupta-kandula', text: 'github.com/vinay-gupta-kandula' },
    { icon: <FiLinkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com/in/vinay-gupta-kandula', text: 'linkedin.com/in/vinay-gupta-kandula' }
  ]

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold gradient-text mb-12">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-slate-300 text-lg">
            I'm always open to interesting projects and collaboration opportunities. Feel free to reach out!
          </p>

          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 card rounded-xl hover:scale-105 hover:bg-white/8 transition transform group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 text-cyan-400 group-hover:text-indigo-400 transition">
                  {link.icon}
                </div>
                <div>
                  <p className="text-sm text-slate-400">{link.label}</p>
                  <p className="text-slate-100 font-medium">{link.text}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card p-8 rounded-2xl space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500/50 outline-none transition text-white placeholder-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500/50 outline-none transition text-white placeholder-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-cyan-500/50 outline-none transition text-white placeholder-slate-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-600 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition transform hover:scale-105"
          >
            {submitted ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
