"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#050505] mt-20 relative overflow-hidden">
      {/* Subtle background glow di footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-white/5 rounded-[100%] blur-[60px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center justify-center relative z-10">
        <div className="text-2xl font-bold tracking-tight font-space text-white mb-2">
          RAZEERH.
        </div>
        <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-6">
          Premium Portofolio Experience
        </p>
        <p className="text-white/30 text-xs font-light">
          © {new Date().getFullYear()} RAZEERH DEV. All rights reserved.
        </p>
      </div>
    </footer>
  );
}