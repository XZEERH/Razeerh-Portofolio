"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "ID" | "EN" | "MY" | "AR" | "JP" | "KR" | "CN" | "DE" | "FR" | "ES";

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ID: { home: "Beranda", about: "Tentang", stack: "Teknologi", projects: "Proyek", contact: "Kontak", explore: "Jelajahi", role: "Pengembang Perangkat Lunak" },
  EN: { home: "Home", about: "About", stack: "Stack", projects: "Projects", contact: "Contact", explore: "Explore", role: "Software Developer" },
  MY: { home: "Laman Utama", about: "Tentang", stack: "Teknologi", projects: "Projek", contact: "Hubungi", explore: "Teroka", role: "Pembangun Perisian" },
  AR: { home: "الرئيسية", about: "حول", stack: "التقنيات", projects: "المشاريع", contact: "اتصل", explore: "استكشف", role: "مطور برامج" },
  JP: { home: "ホーム", about: "約", stack: "技術", projects: "プロジェクト", contact: "連絡先", explore: "探る", role: "ソフトウェア開発者" },
  KR: { home: "홈", about: "정보", stack: "기술", projects: "프로젝트", contact: "연락처", explore: "탐색", role: "소프트웨어 개발자" },
  CN: { home: "首页", about: "关于", stack: "技术", projects: "项目", contact: "联系", explore: "探索", role: "软件开发者" },
  DE: { home: "Startseite", about: "Über", stack: "Technologien", projects: "Projekte", contact: "Kontakt", explore: "Erkunden", role: "Softwareentwickler" },
  FR: { home: "Accueil", about: "À propos", stack: "Technologies", projects: "Projets", contact: "Contact", explore: "Explorer", role: "Développeur Logiciel" },
  ES: { home: "Inicio", about: "Sobre", stack: "Tecnologías", projects: "Proyectos", contact: "Contacto", explore: "Explorar", role: "Desarrollador de Software" }
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
  if (!context) throw new Error("useLang must be used within LanguageProvider");
  return context;
};