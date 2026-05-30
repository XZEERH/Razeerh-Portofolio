"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang Saya", href: "#about" },
  { name: "My Stack", href: "#stack" },
  { name: "My Project", href: "#projects" },
  { name: "Media Sosial", href: "#socials" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-dark-900/80 backdrop-blur-md border-b border-white/5" : "py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-widest text-white glow-text cursor-pointer" onClick={() => scrollTo('#hero')}>
            RAZEERH<span className="text-neon-cyan">.</span>
          </div>
          <button 
            onClick={() => setIsOpen(true)}
            className="text-white hover:text-neon-cyan transition-colors"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-dark-900/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-neon-purple transition-colors"
            >
              <X size={40} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-3xl md:text-5xl font-light text-white/70 hover:text-white hover:glow-text cursor-pointer transition-all uppercase tracking-widest"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}