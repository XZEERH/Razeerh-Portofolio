"use client";

import { motion } from "framer-motion";
import { Copy, ArrowUpRight, Mail, Phone } from "lucide-react";
import { useState } from "react";

const fadeVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50 }
};

export default function Contact() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const contactInfo = [
    { type: "Email", value: "hello@razeerh.dev", icon: Mail, link: "mailto:hello@razeerh.dev" },
    { type: "WhatsApp", value: "+62 812 3456 7890", icon: Phone, link: "https://wa.me/6281234567890" }
  ];

  return (
    <section id="contact" className="py-24 relative w-full container mx-auto px-6 max-w-3xl">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} exit="exit" variants={fadeVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-widest glow-text">Contact Me</h2>
        <p className="text-white/50 mt-4 text-lg">Mari berkolaborasi</p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {contactInfo.map((info) => (
          <motion.div 
            key={info.type}
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} exit="exit" variants={fadeVariants}
            className="glass-panel p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="p-4 bg-white/5 rounded-full text-neon-cyan">
                <info.icon size={24} />
              </div>
              <div>
                <p className="text-sm text-white/50">{info.type}</p>
                <p className="text-lg md:text-xl text-white font-medium">{info.value}</p>
              </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
              <button 
                onClick={() => handleCopy(info.value)}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10 text-sm"
              >
                <Copy size={16} /> 
                {copiedText === info.value ? "Copied!" : "Copy"}
              </button>
              <a 
                href={info.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neon-purple/20 text-neon-purple hover:bg-neon-purple hover:text-white transition-colors border border-neon-purple/30 text-sm font-semibold"
              >
                Buka <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}