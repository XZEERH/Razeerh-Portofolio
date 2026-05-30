"use client";

import { motion } from "framer-motion";
import { stackData } from "@/data/stack";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50 }
};

export default function Stack() {
  return (
    <section id="stack" className="py-24 relative w-full container mx-auto px-6">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} exit="exit" variants={fadeVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest glow-text">My Stack</h2>
        <p className="text-white/50 mt-4 text-lg">Teknologi yang saya kuasai dan gunakan</p>
      </motion.div>

      <div className="flex flex-col gap-16">
        {stackData.map((category, catIdx) => (
          <motion.div 
            key={category.category}
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} exit="exit" variants={fadeVariants}
          >
            <h3 className="text-2xl font-semibold text-white/90 mb-6 border-l-4 border-neon-cyan pl-4">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item, idx) => (
                <div key={item.name} className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-dark-800 border border-white/5 group-hover:border-white/20 transition-colors">
                      <item.icon size={28} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white">{item.name}</h4>
                      <p className="text-xs text-white/40">{item.percentage}% Mastery</p>
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-dark-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}