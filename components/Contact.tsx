"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLang } from "@/lib/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  // Handle Form Murni menggunakan URL mailto (karena belum setup backend)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    window.location.href = `mailto:hello@razeerh.dev?subject=Pesan dari ${name}&body=${message} (%0A%0ABalas ke: ${email})`;
  };

  return (
    <section id="contact" className="py-24 relative w-full container mx-auto px-6 max-w-5xl">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter font-space">{t('contact')}</h2>
        <p className="text-white/50 mt-4 text-lg font-light">Mari diskusikan ide Anda.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Modern Form */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="flex-1 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-medium">Nama Lengkap</label>
            <input name="name" required type="text" className="bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-medium">Email Valid</label>
            <input name="email" required type="email" className="bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/50 font-medium">Pesan</label>
            <textarea name="message" required rows={4} className="bg-transparent border-b border-white/10 py-2 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Ceritakan tentang proyek Anda..." />
          </div>
          <button type="submit" className="mt-4 bg-white text-black font-semibold py-3 rounded-xl hover:bg-white/80 transition-colors">
            Kirim Pesan
          </button>
        </motion.form>

        {/* WhatsApp Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="lg:w-1/3 bg-[#0a0a0a] border border-white/5 p-8 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
              <FaWhatsapp size={28} />
            </div>
            <h3 className="text-xl font-bold text-white font-space mb-1">WhatsApp</h3>
            <p className="text-white/50 text-sm mb-6">Respon cepat untuk pertanyaan langsung.</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Username</p>
                <p className="text-white font-medium">Razeerh</p>
              </div>
              <div>
                <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Nomor</p>
                <p className="text-white font-mono">+62 8XX XXXX XXXX</p>
              </div>
            </div>
          </div>

          <a 
            href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"
            className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-[#1EBE5A] transition-colors mt-8 flex justify-center items-center gap-2"
          >
            <FaWhatsapp size={20} /> Chat WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}