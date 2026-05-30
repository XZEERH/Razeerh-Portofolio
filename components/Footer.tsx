"use client";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-white/10 glass-panel mt-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <p className="text-white/50 text-sm font-medium tracking-widest">
          © 2026 RAZEERH DEV
        </p>
        <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent mt-4"></div>
      </div>
    </footer>
  );
}