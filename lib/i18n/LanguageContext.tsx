"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "ID" | "EN" | "MY" | "AR" | "JP" | "KR" | "CN" | "DE" | "FR" | "ES";

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ID: { 
    nav_home: "Beranda", nav_about: "Tentang", nav_stack: "My Stack", nav_proj: "My Project", nav_contact: "Contact Me",
    hero_role: "Developer", hero_explore: "Explore",
    about_title: "Tentang Saya", 
    about_desc1: "Saya adalah pengembang lunak berumur 16 tahun yang berdedikasi menengah, berfokus pada penciptaan pengalaman digital masa depan. Serta mengkhususkan diri dalam arsitektur modern dan desain UI/UX kelas premium.", 
    about_desc2: "Dengan pendekatan mobile first dan performa tanpa kompromi, saya membangun website yang tidak hanya berfungsi dengan baik, tetapi juga memberikan kesan visual yang mendalam dan futuristik.", 
    about_exp: "Tahun Pengalaman", about_proj: "Proyek Selesai", about_role: "Fullstack Developer",
    stack_title: "My Stack", stack_sub: "Teknologi yang saya kuasai dan gunakan.",
    proj_title: "My Project", proj_sub: "Project yang telah saya buat.", proj_demo: "Demo",
    soc_title: "Media Sosial", soc_sub: "Terhubung dengan saya.",
    cont_title: "Contact Me", cont_sub: "Mari berkolaborasi.", cont_name: "Nama Anda", cont_email: "Email Anda", cont_msg: "Pesan Anda", cont_send: "Kirim Pesan", cont_wa: "Respon cepat untuk pertanyaan langsung.", cont_wa_user: "Nama Pengguna", cont_wa_num: "Nomor WhatsApp", cont_wa_btn: "Chat WhatsApp"
  },
  EN: { 
    nav_home: "Home", nav_about: "About", nav_stack: "My Stack", nav_proj: "My Project", nav_contact: "Contact Me",
    hero_role: "Developer", hero_explore: "Explore",
    about_title: "About Me", 
    about_desc1: "I am a 16-year-old software developer with medium dedication, focusing on creating future digital experiences. Specializing in modern architecture and premium class UI/UX design.", 
    about_desc2: "With a mobile-first approach and uncompromising performance, I build websites that not only function well, but also provide a deep and futuristic visual impression.", 
    about_exp: "Year Experience", about_proj: "Projects Done", about_role: "Fullstack Developer",
    stack_title: "My Stack", stack_sub: "Technologies I master and use.",
    proj_title: "My Project", proj_sub: "Projects I have created.", proj_demo: "Demo",
    soc_title: "Social Media", soc_sub: "Connect with me.",
    cont_title: "Contact Me", cont_sub: "Let's collaborate.", cont_name: "Your Name", cont_email: "Your Email", cont_msg: "Your Message", cont_send: "Send Message", cont_wa: "Quick response for direct inquiries.", cont_wa_user: "Username", cont_wa_num: "WhatsApp Number", cont_wa_btn: "WhatsApp Chat"
  },
  // (Bahasa lainnya fallback aman ke kunci aslinya jika tidak diterjemahkan lengkap)
  MY: { nav_home: "Laman Utama", nav_about: "Mengenai Saya", nav_stack: "Teknologi Saya", nav_proj: "Projek Saya", nav_contact: "Hubungi Saya", hero_role: "Developer", hero_explore: "Teroka", about_title: "Mengenai Saya", about_desc1: "Saya adalah pembangun perisian berumur 16 tahun...", about_desc2: "Dengan pendekatan mudah alih dahulu...", about_exp: "Tahun Pengalaman", about_proj: "Projek Selesai", about_role: "Pembangun Fullstack", stack_title: "Teknologi Saya", stack_sub: "Teknologi yang saya kuasai.", proj_title: "Projek Saya", proj_sub: "Projek yang telah saya buat.", proj_demo: "Demo", soc_title: "Media Sosial", soc_sub: "Berhubung dengan saya.", cont_title: "Hubungi Saya", cont_sub: "Mari bekerjasama.", cont_name: "Nama Anda", cont_email: "E-mel Anda", cont_msg: "Mesej Anda", cont_send: "Hantar Mesej", cont_wa: "Respon pantas.", cont_wa_user: "Nama Pengguna", cont_wa_num: "Nombor WhatsApp", cont_wa_btn: "Sembang WhatsApp" },
  AR: { nav_home: "الرئيسية", nav_about: "حولي", nav_stack: "تقنياتي", nav_proj: "مشاريعي", nav_contact: "اتصل بي", hero_role: "مطور", hero_explore: "استكشف", about_title: "نبذة عني", about_desc1: "أنا مطور برمجيات أبلغ من العمر 16 عامًا...", about_desc2: "مع نهج المحمول أولاً...", about_exp: "سنة خبرة", about_proj: "مشاريع منجزة", about_role: "مطور شامل", stack_title: "تقنياتي", stack_sub: "التقنيات التي أتقنها.", proj_title: "مشاريعي", proj_sub: "المشاريع التي أنشأتها.", proj_demo: "عرض", soc_title: "وسائل التواصل", soc_sub: "تواصل معي.", cont_title: "اتصل بي", cont_sub: "دعنا نتعاون.", cont_name: "اسمك", cont_email: "بريدك الإلكتروني", cont_msg: "رسالتك", cont_send: "إرسال", cont_wa: "استجابة سريعة.", cont_wa_user: "اسم المستخدم", cont_wa_num: "رقم واتساب", cont_wa_btn: "دردشة واتساب" },
  JP: { nav_home: "ホーム", nav_about: "私について", nav_stack: "マイスッタク", nav_proj: "マイプロジェクト", nav_contact: "連絡先", hero_role: "開発者", hero_explore: "探る", about_title: "私について", about_desc1: "私は16歳のソフトウェア開発者です...", about_desc2: "モバイルファーストのアプローチで...", about_exp: "年の経験", about_proj: "完了したプロジェクト", about_role: "開発者", stack_title: "マイスタック", stack_sub: "習得し使用する技術。", proj_title: "マイプロジェクト", proj_sub: "作成したプロジェクト。", proj_demo: "デモ", soc_title: "ソーシャルメディア", soc_sub: "私とつながる。", cont_title: "連絡先", cont_sub: "協力しましょう。", cont_name: "名前", cont_email: "メール", cont_msg: "メッセージ", cont_send: "送信", cont_wa: "迅速な対応。", cont_wa_user: "ユーザー名", cont_wa_num: "番号", cont_wa_btn: "チャット" },
  KR: { nav_home: "홈", nav_about: "소개", nav_stack: "내 스택", nav_proj: "내 프로젝트", nav_contact: "연락처", hero_role: "개발자", hero_explore: "탐색", about_title: "내 소개", about_desc1: "저는 16세 소프트웨어 개발자입니다...", about_desc2: "모바일 퍼스트 접근 방식으로...", about_exp: "년 경험", about_proj: "완료된 프로젝트", about_role: "개발자", stack_title: "내 스택", stack_sub: "마스터하고 사용하는 기술.", proj_title: "내 프로젝트", proj_sub: "만든 프로젝트.", proj_demo: "데모", soc_title: "소셜 미디어", soc_sub: "연결하세요.", cont_title: "연락처", cont_sub: "협력합시다.", cont_name: "이름", cont_email: "이메일", cont_msg: "메시지", cont_send: "보내기", cont_wa: "빠른 응답.", cont_wa_user: "사용자 이름", cont_wa_num: "번호", cont_wa_btn: "채팅" },
  CN: { nav_home: "首页", nav_about: "关于我", nav_stack: "我的技术栈", nav_proj: "我的项目", nav_contact: "联系我", hero_role: "开发者", hero_explore: "探索", about_title: "关于我", about_desc1: "我是一名16岁的软件开发者...", about_desc2: "采用移动优先策略...", about_exp: "年经验", about_proj: "完成项目", about_role: "开发者", stack_title: "我的技术栈", stack_sub: "掌握和使用的技术。", proj_title: "我的项目", proj_sub: "创建的项目。", proj_demo: "演示", soc_title: "社交媒体", soc_sub: "与我联系。", cont_title: "联系我", cont_sub: "合作吧。", cont_name: "名字", cont_email: "邮箱", cont_msg: "信息", cont_send: "发送", cont_wa: "快速回复。", cont_wa_user: "用户名", cont_wa_num: "号码", cont_wa_btn: "聊天" },
  DE: { nav_home: "Startseite", nav_about: "Über mich", nav_stack: "Meine Tech-Stack", nav_proj: "Meine Projekte", nav_contact: "Kontakt", hero_role: "Entwickler", hero_explore: "Erkunden", about_title: "Über mich", about_desc1: "Ich bin ein 16-jähriger Softwareentwickler...", about_desc2: "Mit einem Mobile First Ansatz...", about_exp: "Jahr Erfahrung", about_proj: "Projekte", about_role: "Entwickler", stack_title: "Meine Tech-Stack", stack_sub: "Technologien, die ich beherrsche.", proj_title: "Meine Projekte", proj_sub: "Projekte, die ich erstellt habe.", proj_demo: "Demo", soc_title: "Soziale Medien", soc_sub: "Verbinde dich mit mir.", cont_title: "Kontakt", cont_sub: "Lass uns zusammenarbeiten.", cont_name: "Name", cont_email: "E-Mail", cont_msg: "Nachricht", cont_send: "Senden", cont_wa: "Schnelle Antwort.", cont_wa_user: "Benutzername", cont_wa_num: "Nummer", cont_wa_btn: "Chat" },
  FR: { nav_home: "Accueil", nav_about: "À propos", nav_stack: "Ma Pile", nav_proj: "Mes Projets", nav_contact: "Contact", hero_role: "Développeur", hero_explore: "Explorer", about_title: "À propos", about_desc1: "Je suis un développeur de logiciels de 16 ans...", about_desc2: "Avec une approche Mobile First...", about_exp: "An d'Expérience", about_proj: "Projets Réalisés", about_role: "Développeur", stack_title: "Ma Pile", stack_sub: "Technologies que je maîtrise.", proj_title: "Mes Projets", proj_sub: "Projets créés.", proj_demo: "Démo", soc_title: "Réseaux Sociaux", soc_sub: "Connectez-vous.", cont_title: "Contact", cont_sub: "Collaborons.", cont_name: "Nom", cont_email: "Email", cont_msg: "Message", cont_send: "Envoyer", cont_wa: "Réponse rapide.", cont_wa_user: "Nom d'utilisateur", cont_wa_num: "Numéro", cont_wa_btn: "Chat" },
  ES: { nav_home: "Inicio", nav_about: "Sobre Mí", nav_stack: "Mi Stack", nav_proj: "Mis Proyectos", nav_contact: "Contacto", hero_role: "Desarrollador", hero_explore: "Explorar", about_title: "Sobre Mí", about_desc1: "Soy un desarrollador de software de 16 años...", about_desc2: "Con un enfoque Mobile First...", about_exp: "Año de Experiencia", about_proj: "Proyectos", about_role: "Desarrollador", stack_title: "Mi Stack", stack_sub: "Tecnologías que domino.", proj_title: "Mis Proyectos", proj_sub: "Proyectos creados.", proj_demo: "Demo", soc_title: "Redes Sociales", soc_sub: "Conéctate conmigo.", cont_title: "Contacto", cont_sub: "Colaboremos.", cont_name: "Nombre", cont_email: "Correo", cont_msg: "Mensaje", cont_send: "Enviar", cont_wa: "Respuesta rápida.", cont_wa_user: "Usuario", cont_wa_num: "Número", cont_wa_btn: "Chat" }
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ID");
  const [isChanging, setIsChanging] = useState(false);

  const setLang = (newLang: Language) => {
    if (newLang === lang) return;
    setIsChanging(true);
    // Efek buram dan animasi fade in/out tanpa reset halaman
    setTimeout(() => {
      setLangState(newLang);
      setIsChanging(false);
    }, 400); 
  };

  const t = (key: string) => translations[lang][key] || translations["ID"][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <AnimatePresence>
        {isChanging && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center pointer-events-none"
          >
            <div className="w-10 h-10 border-4 border-white/20 border-t-neon-cyan rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return { lang: "ID" as Language, setLang: () => {}, t: (key: string) => translations["ID"][key] || key };
  }
  return context;
};