"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "ID" | "EN" | "MY" | "AR" | "JP" | "KR" | "CN" | "DE" | "FR" | "ES";

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

// Data Bahasa
const translations: Record<Language, Record<string, string>> = {
  ID: { home: "Beranda", about: "Tentang Saya", stack: "Teknologi", projects: "Proyek", contact: "Kontak", explore: "Jelajahi", role: "Software Engineer" },
  EN: { home: "Home", about: "About Me", stack: "Tech Stack", projects: "Projects", contact: "Contact", explore: "Explore", role: "Software Engineer" },
  MY: { home: "Laman Utama", about: "Mengenai Saya", stack: "Teknologi", projects: "Projek", contact: "Hubungi", explore: "Teroka", role: "Jurutera Perisian" },
  AR: { home: "الرئيسية", about: "حولي", stack: "التقنيات", projects: "المشاريع", contact: "اتصل", explore: "استكشف", role: "مهندس برمجيات" },
  JP: { home: "ホーム", about: "私について", stack: "技術スタック", projects: "プロジェクト", contact: "連絡先", explore: "探る", role: "ソフトウェアエンジニア" },
  KR: { home: "홈", about: "내 소개", stack: "기술 스택", projects: "프로젝트", contact: "연락처", explore: "탐색", role: "소프트웨어 엔지니어" },
  CN: { home: "首页", about: "关于我", stack: "技术栈", projects: "项目", contact: "联系", explore: "探索", role: "软件工程师" },
  DE: { home: "Startseite", about: "Über Mich", stack: "Technologien", projects: "Projekte", contact: "Kontakt", explore: "Erkunden", role: "Softwareentwickler" },
  FR: { home: "Accueil", about: "À Propos", stack: "Technologies", projects: "Projets", contact: "Contact", explore: "Explorer", role: "Ingénieur Logiciel" },
  ES: { home: "Inicio", about: "Sobre Mí", stack: "Tecnologías", projects: "Proyectos", contact: "Contacto", explore: "Explorar", role: "Ingeniero de Software" }
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ID");
  const [isChanging, setIsChanging] = useState(false);

  const setLang = (newLang: Language) => {
    if (newLang === lang) return;
    setIsChanging(true);
    setTimeout(() => {
      setLangState(newLang);
      setIsChanging(false);
    }, 400); // Overlay blur duration
  };

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <AnimatePresence>
        {isChanging && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => {
  const context = useContext(LanguageContext);
  
  // PERBAIKAN: Jangan melempar (throw) error saat proses build halaman "_not-found" di Vercel.
  // Kembalikan nilai default agar proses prerender aman dan sukses 100%.
  if (!context) {
    return {
      lang: "ID",
      setLang: () => {},
      t: (key: string) => key
    };
  }
  
  return context;
};