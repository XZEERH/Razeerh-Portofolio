"use client";

import { motion } from "framer-motion";
import { socialsData } from "@/data/socials";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50 }
};

export default function Socials() {
  return (
    <section id="socials" className="py-24 relative w-full container mx-auto px-6">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} exit="exit" variants={fadeVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest glow-text">Media Sosial</h2>
        <p className="text-white/50 mt-4 text-lg">Terhubung dengan saya</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {socialsData.map((social) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} exit="exit" variants={fadeVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-panel flex flex-col items-center justify-center p-8 rounded-2xl gap-4 hover:bg-white/5 transition-all group"
          >
            <social.icon size={48} className="group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all" style={{ color: social.color }} />
            <span className="text-white font-medium tracking-wide">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}