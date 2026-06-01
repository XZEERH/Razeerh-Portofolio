"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageContext";

const languages = ["ID", "EN", "MY", "AR", "JP", "KR", "CN", "DE", "FR", "ES"] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const { lang, setLang, t } = useLang();

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 py-4 mix-blend-difference text-white">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight font-space cursor-pointer" onClick={() => scrollTo('#home')}>
            My Project Portofolio
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <button onClick={() => setShowLang(!showLang)} className="flex items-center gap-2 hover:opacity-70 transition bg-transparent">
                <Globe size={18} /> <span className="text-sm font-medium">{lang}</span>
              </button>
              <AnimatePresence>
                {showLang && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    // Perbaikan Z-Index dan Background Solid untuk Dropdown
                    className="absolute right-0 mt-4 bg-[#0a0a0a] border border-white/10 rounded-xl p-2 w-32 shadow-[0_0_40px_rgba(0,0,0,0.8)] z-[100]"
                  >
                    {languages.map(l => (
                      <button key={l} onClick={() => { setLang(l); setShowLang(false); }} className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${lang === l ? 'bg-white text-black font-semibold' : 'hover:bg-white/10 text-white/80'}`}>
                        {l}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => setIsOpen(true)} className="hover:opacity-70 transition">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] bg-[#050505] flex flex-col items-center justify-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition">
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 font-space text-4xl md:text-6xl tracking-tighter">
              {[
                { id: 'home', label: t('nav_home') }, 
                { id: 'about', label: t('nav_about') }, 
                { id: 'stack', label: t('nav_stack') }, 
                { id: 'projects', label: t('nav_proj') }, 
                { id: 'contact', label: t('nav_contact') }
              ].map((item, i) => (
                <motion.a
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(`#${item.id}`)}
                  className="text-white/40 hover:text-white cursor-pointer transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}