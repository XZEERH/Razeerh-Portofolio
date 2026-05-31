"use client";

import { motion } from "framer-motion";
import { stackData } from "@/data/stack";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="py-24 relative w-full container mx-auto px-6">
      <div className="mb-20 md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-space">{t('stack')}</h2>
        <p className="text-white/50 mt-4 text-lg font-light">Teknologi esensial yang saya gunakan untuk membangun produk digital.</p>
      </div>

      <div className="flex flex-col gap-12">
        {stackData.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg font-medium text-white/80 mb-6 font-space">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-[#0a0a0a] border border-white/5 hover:border-white/20 hover:bg-[#111] p-6 rounded-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-white/5 rounded-xl text-white/70 group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-lg font-semibold text-white font-space">{item.name}</h4>
                        <span className="text-xs font-mono text-white/30">{item.percentage}%</span>
                      </div>
                      <p className="text-sm text-white/50 font-light leading-relaxed mb-4">{item.desc}</p>
                      
                      {/* Minimalist Progress Bar */}
                      <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }} whileInView={{ width: `${item.percentage}%` }} transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                          className="h-full bg-white/80"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}