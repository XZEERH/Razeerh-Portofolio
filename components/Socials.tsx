"use client";

import { motion } from "framer-motion";
import { socialsData } from "@/data/socials";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function Socials() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 relative w-full container mx-auto px-6 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter font-space">Temukan Saya</h2>
        <p className="text-white/50 mt-4 text-base font-light">Jejak digital dan portofolio publik saya.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {socialsData.map((social, idx) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-3 px-6 py-4 bg-[#0a0a0a] border border-white/5 rounded-full hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <social.icon size={20} className="text-white/70 group-hover:text-white transition-colors" />
            <span className="text-white/70 group-hover:text-white font-medium text-sm tracking-wide transition-colors">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}