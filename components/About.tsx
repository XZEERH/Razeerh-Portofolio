"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t } = useLang();
  
  // Fisika Tali dan Kartu
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const rotateZ = useTransform(dragX, [-200, 200], [-15, 15]);

  // PERBAIKAN: Posisi SVG dihitung di luar kotak "style" agar TypeScript bahagia
  const ropeX = useTransform(dragX, (x: number) => `calc(50% + ${x}px)`);
  const ropeY = useTransform(dragY, (y: number) => 150 + y);

  return (
    <section id="about" className="py-32 relative w-full container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-16 min-h-screen">
      
      {/* 3D Hanging ID Card Area */}
      <div className="relative flex-1 flex justify-center w-full h-[500px]">
        
        {/* Tali Lanyard SVG yang Mengikuti Kartu */}
        <svg className="absolute top-[-100px] left-0 w-full h-[300px] z-0 pointer-events-none" style={{ overflow: 'visible' }}>
          <motion.line 
            x1="50%" y1="0" 
            x2={ropeX}  // <-- Atribut ini sudah dikeluarkan dari blok style
            y2={ropeY}  // <-- Dan ditempatkan langsung sebagai atribut SVG
            stroke="rgba(255,255,255,0.15)" strokeWidth="6" strokeLinecap="round"
          />
        </svg>

        {/* Kartu Fisik */}
        <motion.div 
          drag
          dragConstraints={{ left: -50, right: 50, top: -20, bottom: 50 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
          style={{ x: dragX, y: dragY, rotateZ }}
          className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-72 md:w-80 p-6 flex flex-col items-center relative z-10 cursor-grab active:cursor-grabbing shadow-2xl mt-[100px]"
        >
          {/* Titik Sambungan Tali */}
          <div className="absolute -top-4 w-12 h-6 bg-[#1a1a1a] rounded-t-lg border-t border-x border-white/20 flex justify-center items-center">
            <div className="w-6 h-1.5 rounded-full bg-white/30"></div>
          </div>

          <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-6 bg-zinc-900 border border-white/5">
            <Image src="/images/profile.jpg" alt="RAZEERH" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" sizes="300px" />
          </div>
          <h3 className="text-2xl font-bold font-space tracking-tight text-white">RAZEERH</h3>
          <p className="text-white/50 text-sm tracking-wide mt-1 font-inter">Software Engineer</p>
          
          <div className="w-full mt-8 pt-4 border-t border-white/5 flex justify-between px-2">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">ID / Serial</p>
              <p className="text-sm font-mono text-white/80">DEV-001</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-white/40 uppercase tracking-widest">Clearance</p>
              <p className="text-sm font-mono text-white">LEVEL 9</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Deskripsi Linear Style */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col gap-8"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-space">{t('about')}</h2>
        <div className="text-lg text-white/60 font-inter font-light leading-relaxed space-y-6">
          <p>
            Saya adalah pengembang perangkat lunak yang berdedikasi menciptakan pengalaman digital yang mulus dan elegan. Fokus utama saya adalah arsitektur modern dan desain UI/UX yang minimalis namun bertenaga.
          </p>
          <p>
            Mengutamakan performa tanpa kompromi dan pendekatan <strong className="text-white font-medium">Mobile First</strong>, memastikan setiap baris kode bernilai tinggi untuk pengguna akhir.
          </p>
        </div>
        
        <div className="flex gap-6 mt-4">
          <div className="flex flex-col">
            <span className="text-4xl font-space font-bold text-white">3+</span>
            <span className="text-xs text-white/40 uppercase tracking-widest mt-1">Tahun Pengalaman</span>
          </div>
          <div className="w-[1px] bg-white/10" />
          <div className="flex flex-col">
            <span className="text-4xl font-space font-bold text-white">50+</span>
            <span className="text-xs text-white/40 uppercase tracking-widest mt-1">Proyek Sukses</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}