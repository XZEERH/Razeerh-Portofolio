"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    window.location.href = `mailto:hello@razeerh.dev?subject=Pesan dari ${formData.get('name')}&body=${formData.get('message')} (%0A%0ABalas ke: ${formData.get('email')})`;
  };

  return (
    <section id="contact" className="py-24 relative w-full container mx-auto px-6 max-w-5xl border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-space">{t('cont_title')}</h2>
        <p className="text-white/50 mt-4 text-lg font-light">{t('cont_sub')}</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
          className="flex-1 bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl flex flex-col gap-6 shadow-xl"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-medium">{t('cont_name')}</label>
            <input name="name" required type="text" placeholder="John Doe" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-medium">{t('cont_email')}</label>
            <input name="email" required type="email" placeholder="john@example.com" className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-medium">{t('cont_msg')}</label>
            <textarea name="message" required rows={4} placeholder="Ketik pesan Anda di sini..." className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-cyan focus:outline-none transition-colors resize-none" />
          </div>
          <button type="submit" className="mt-4 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors w-full">
            {t('cont_send')}
          </button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0, x: 20, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.6 }}
          className="lg:w-1/3 bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
              <FaWhatsapp size={28} />
            </div>
            <h3 className="text-xl font-bold text-white font-space mb-1">WhatsApp</h3>
            <p className="text-white/50 text-sm mb-6">{t('cont_wa')}</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">{t('cont_wa_user')}</p>
                <p className="text-white font-medium">Razeerh</p>
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">{t('cont_wa_num')}</p>
                <p className="text-white font-mono">+62 8XX XXXX XXXX</p>
              </div>
            </div>
          </div>

          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#1EBE5A] transition-colors mt-8 flex justify-center items-center gap-2">
            <FaWhatsapp size={20} /> {t('cont_wa_btn')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}