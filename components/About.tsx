"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};

export default function About() {
  return (
    <section id="about" className="py-32 relative w-full container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-16 min-h-screen">
      
      {/* 3D Hanging ID Card */}
      <motion.div 
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        exit="exit"
        className="relative flex-1 flex justify-center w-full"
      >
        {/* Tali Card */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-dark-900 to-white/20 z-0"></div>
        
        <motion.div 
          drag
          dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
          style={{ originY: -1 }} // Titik pivot ayunan di atas
          animate={{ rotateZ: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="glass-panel rounded-2xl w-72 md:w-80 p-6 flex flex-col items-center relative z-10 cursor-grab active:cursor-grabbing border-t-white/20 shadow-[0_0_30px_rgba(0,243,255,0.1)]"
        >
          {/* Lanyard Clip */}
          <div className="w-12 h-4 bg-zinc-800 rounded-t-md absolute -top-4 border border-white/10 flex justify-center items-center">
            <div className="w-4 h-2 rounded-full border border-white/30"></div>
          </div>

          <div className="w-full h-64 relative rounded-xl overflow-hidden mb-6 border border-white/10">
            {/* Foto Profil - Pastikan ada profile.jpg di public/images/ */}
            <Image 
              src="/images/profile.jpg" 
              alt="RAZEERH DEV" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
            {/* Fallback color if image not found during dev */}
            <div className="absolute inset-0 bg-dark-800 -z-10 flex items-center justify-center text-xs text-white/20">/images/profile.jpg</div>
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-wider text-white">RAZEERH</h3>
          <p className="text-neon-cyan text-sm tracking-widest mt-1">Fullstack Developer</p>
          
          <div className="w-full mt-6 pt-4 border-t border-white/10 flex justify-between px-2">
            <div className="text-center">
              <p className="text-xs text-white/50">ID</p>
              <p className="text-sm font-mono">#001-DEV</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-white/50">LEVEL</p>
              <p className="text-sm font-mono text-neon-purple">SENIOR</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Deskripsi */}
      <motion.div 
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        exit="exit"
        className="flex-1 flex flex-col gap-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest glow-text">Tentang Saya</h2>
        <div className="w-20 h-1 bg-neon-cyan rounded-full mb-4"></div>
        <p className="text-lg text-white/70 leading-relaxed">
          Saya adalah pengembang perangkat lunak yang berdedikasi tinggi, berfokus pada penciptaan pengalaman digital masa depan. Mengkhususkan diri dalam arsitektur modern dan desain UI/UX kelas premium.
        </p>
        <p className="text-lg text-white/70 leading-relaxed">
          Dengan pendekatan <span className="text-neon-purple font-semibold">Mobile First</span> dan performa tanpa kompromi, saya membangun website yang tidak hanya berfungsi dengan baik, tetapi juga memberikan kesan visual yang mendalam dan futuristik.
        </p>
        
        <div className="mt-8 flex gap-4">
          <div className="glass-panel px-6 py-4 rounded-xl border-l-2 border-neon-cyan">
            <h4 className="text-3xl font-bold text-white">3+</h4>
            <p className="text-sm text-white/50 uppercase tracking-wider">Tahun Pengalaman</p>
          </div>
          <div className="glass-panel px-6 py-4 rounded-xl border-l-2 border-neon-purple">
            <h4 className="text-3xl font-bold text-white">50+</h4>
            <p className="text-sm text-white/50 uppercase tracking-wider">Proyek Selesai</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}