"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/lib/i18n/LanguageContext";

const RobotScene = dynamic(() => import("./three/RobotScene"), { ssr: false });

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Ambient Radial (Apple Style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <RobotScene />
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center mt-64 md:mt-48 pointer-events-none mix-blend-difference text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter font-space"
        >
          RAZEERH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl font-light tracking-widest text-white/70 mt-2 font-inter"
        >
          {t('role')}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center cursor-pointer pointer-events-auto hover:opacity-70 transition-opacity"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">{t('explore')}</span>
        <ArrowDown size={20} className="text-white/60" />
      </motion.div>
    </section>
  );
}