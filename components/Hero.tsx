"use client";

import { motion } from "framer-motion";
import { ChevronDown, MousePointer2 } from "lucide-react";
import dynamic from "next/dynamic";

const RobotScene = dynamic(() => import("./three/RobotScene"), { ssr: false });

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 3D Robot Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <RobotScene />
      </div>

      {/* Indikator Mouse untuk Mobile (Diganti Kursor PC) */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 md:hidden flex flex-col items-center animate-pulse text-white/50">
        <span className="text-sm tracking-wider mb-2">Geser Layar</span>
        {/* Ikon Kursor */}
        <MousePointer2 size={28} className="text-neon-cyan drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center mt-32 md:mt-0 pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 glow-text drop-shadow-2xl"
        >
          RAZEERH
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl md:text-4xl font-light tracking-[0.5em] text-neon-cyan mt-4 glow-text uppercase"
        >
          Developer
        </motion.h2>
      </div>

      {/* Explore Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center cursor-pointer pointer-events-auto"
        onClick={scrollToAbout}
      >
        <span className="text-sm uppercase tracking-widest text-white/50 mb-2 hover:text-white transition-colors">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-neon-cyan" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}