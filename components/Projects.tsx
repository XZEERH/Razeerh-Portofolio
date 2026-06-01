"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-24 relative w-full container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
        className="mb-16 md:w-1/2"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-space">
          {t('proj_title')}
        </h2>
        <p className="text-white/50 mt-4 text-lg font-light">
          {t('proj_sub')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
            className="bg-[#0a0a0a] rounded-3xl overflow-hidden flex flex-col group border border-white/5 hover:border-white/20 transition-all duration-500"
          >
            <div className="h-48 w-full bg-[#111] relative overflow-hidden flex items-center justify-center border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"></div>
              <h3 className="text-4xl font-space font-black text-white/5 group-hover:scale-110 transition-transform duration-700 tracking-tighter">
                {project.title.split(' ')[0]}
              </h3>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-white mb-3 font-space tracking-tight">{project.title}</h3>
              <p className="text-white/50 text-sm mb-6 flex-1 font-light leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black hover:bg-white/80 font-semibold transition-colors text-sm">
                  <ExternalLink size={16} /> {t('proj_demo')}
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 rounded-xl bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-colors">
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