"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

const fadeVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 0.95 }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative w-full container mx-auto px-6">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} exit="exit" variants={fadeVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest glow-text">My Project</h2>
        <p className="text-white/50 mt-4 text-lg">Project yang telah saya buat</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div 
            key={project.id}
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} exit="exit" variants={fadeVariants}
            className="glass-panel rounded-2xl overflow-hidden flex flex-col group border border-white/5 hover:border-neon-cyan/50 transition-colors"
          >
            {/* Placeholder Image for project (Abstract Gradient) */}
            <div className="h-48 w-full bg-gradient-to-br from-dark-800 to-dark-700 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-3xl font-black text-white/10 uppercase tracking-widest">{project.title.split(' ')[0]}</h3>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-white/60 text-sm mb-6 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 hover:bg-neon-cyan hover:text-dark-900 font-semibold transition-all">
                  <ExternalLink size={18} /> Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 text-white hover:bg-white hover:text-dark-900 border border-white/10 transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}