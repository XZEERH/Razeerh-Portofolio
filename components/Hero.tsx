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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <RobotScene />
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center mt-[22rem] md:mt-64 pointer-events-none mix-blend-difference text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter font-space drop-shadow-xl"
        >
          RAZEERH
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="text-2xl md:text-4xl font-semibold tracking-[0.4em] text-white mt-2 font-inter drop-shadow-lg uppercase"
        >
          {t('hero_role')}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center cursor-pointer pointer-events-auto"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        {/* Desain Card Tombol EXPLORE yang Jelas dan Premium */}
        <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-white">{t('hero_explore')}</span>
          <ArrowDown size={24} className="text-white animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}