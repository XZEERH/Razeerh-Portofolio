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
    nav_home: "Beranda", nav_about: "Tentang", nav_stack: "Teknologi", nav_proj: "Proyek", nav_contact: "Kontak",
    hero_role: "Pengembang Perangkat Lunak", hero_explore: "Jelajahi",
    about_title: "Tentang Saya", about_desc1: "Saya adalah pengembang perangkat lunak yang berdedikasi menciptakan pengalaman digital yang mulus dan elegan. Fokus utama saya adalah arsitektur modern dan desain UI/UX yang minimalis namun bertenaga.", about_desc2: "Mengutamakan performa tanpa kompromi dan pendekatan Mobile First, memastikan setiap baris kode bernilai tinggi untuk pengguna akhir.", about_exp: "Tahun Pengalaman", about_proj: "Proyek Sukses", about_role: "Pengembang",
    stack_title: "Teknologi", stack_sub: "Teknologi esensial yang saya gunakan untuk membangun produk digital.",
    proj_title: "Proyek", proj_sub: "Karya terpilih yang menunjukkan kualitas dan dedikasi.", proj_demo: "Demo",
    soc_title: "Media Sosial", soc_sub: "Jejak digital dan portofolio publik saya.",
    cont_title: "Kontak", cont_sub: "Mari diskusikan ide Anda.", cont_name: "Nama Lengkap", cont_email: "Email Valid", cont_msg: "Pesan", cont_send: "Kirim Pesan", cont_wa: "Respon cepat untuk pertanyaan langsung.", cont_wa_user: "Username", cont_wa_num: "Nomor", cont_wa_btn: "Chat WhatsApp"
  },
  EN: { 
    nav_home: "Home", nav_about: "About", nav_stack: "Stack", nav_proj: "Projects", nav_contact: "Contact",
    hero_role: "Software Developer", hero_explore: "Explore",
    about_title: "About Me", about_desc1: "I am a software developer dedicated to creating seamless and elegant digital experiences. My main focus is modern architecture and minimalist yet powerful UI/UX design.", about_desc2: "Prioritizing uncompromising performance and a Mobile First approach, ensuring every line of code delivers high value.", about_exp: "Years Experience", about_proj: "Projects Done", about_role: "Engineer",
    stack_title: "Tech Stack", stack_sub: "Essential technologies I use to build digital products.",
    proj_title: "Projects", proj_sub: "Selected works demonstrating quality and dedication.", proj_demo: "Live Demo",
    soc_title: "Socials", soc_sub: "My digital footprint and public portfolio.",
    cont_title: "Contact", cont_sub: "Let's discuss your ideas.", cont_name: "Full Name", cont_email: "Valid Email", cont_msg: "Message", cont_send: "Send Message", cont_wa: "Quick response for direct inquiries.", cont_wa_user: "Username", cont_wa_num: "Number", cont_wa_btn: "WhatsApp Chat"
  },
  MY: { nav_home: "Laman Utama", nav_about: "Tentang", nav_stack: "Teknologi", nav_proj: "Projek", nav_contact: "Hubungi", hero_role: "Pembangun Perisian", hero_explore: "Teroka", about_title: "Mengenai Saya", about_desc1: "Saya seorang pembangun perisian yang berdedikasi...", about_desc2: "Mengutamakan prestasi tanpa kompromi...", about_exp: "Tahun Pengalaman", about_proj: "Projek Berjaya", about_role: "Jurutera", stack_title: "Teknologi", stack_sub: "Teknologi penting yang saya gunakan.", proj_title: "Projek", proj_sub: "Karya terpilih yang menunjukkan kualiti.", proj_demo: "Demo", soc_title: "Media Sosial", soc_sub: "Jejak digital saya.", cont_title: "Hubungi", cont_sub: "Mari bincangkan idea anda.", cont_name: "Nama Penuh", cont_email: "E-mel", cont_msg: "Mesej", cont_send: "Hantar", cont_wa: "Respon pantas.", cont_wa_user: "Nama Pengguna", cont_wa_num: "Nombor", cont_wa_btn: "Sembang WhatsApp" },
  AR: { nav_home: "الرئيسية", nav_about: "حول", nav_stack: "التقنيات", nav_proj: "المشاريع", nav_contact: "اتصل", hero_role: "مطور برامج", hero_explore: "استكشف", about_title: "عني", about_desc1: "أنا مطور برمجيات مكرس...", about_desc2: "إعطاء الأولوية للأداء...", about_exp: "سنوات الخبرة", about_proj: "مشاريع ناجحة", about_role: "مهندس", stack_title: "التقنيات", stack_sub: "التقنيات الأساسية التي أستخدمها.", proj_title: "المشاريع", proj_sub: "أعمال مختارة.", proj_demo: "عرض", soc_title: "وسائل التواصل", soc_sub: "بصمتي الرقمية.", cont_title: "اتصل", cont_sub: "دعنا نناقش أفكارك.", cont_name: "الاسم الكامل", cont_email: "البريد الإلكتروني", cont_msg: "الرسالة", cont_send: "إرسال", cont_wa: "استجابة سريعة.", cont_wa_user: "اسم المستخدم", cont_wa_num: "رقم", cont_wa_btn: "دردشة واتساب" },
  JP: { nav_home: "ホーム", nav_about: "私について", nav_stack: "技術", nav_proj: "プロジェクト", nav_contact: "連絡先", hero_role: "ソフトウェア開発者", hero_explore: "探る", about_title: "私について", about_desc1: "私はシームレスでエレガントなデジタル体験の創造に専念するソフトウェア開発者です。", about_desc2: "妥協のないパフォーマンスを優先します。", about_exp: "年の経験", about_proj: "成功したプロジェクト", about_role: "エンジニア", stack_title: "技術スタック", stack_sub: "デジタル製品の構築に使用する必須技術。", proj_title: "プロジェクト", proj_sub: "品質と献身を示す選ばれた作品。", proj_demo: "デモ", soc_title: "ソーシャル", soc_sub: "私のデジタルフットプリント。", cont_title: "連絡先", cont_sub: "あなたのアイデアについて話し合いましょう。", cont_name: "フルネーム", cont_email: "メール", cont_msg: "メッセージ", cont_send: "送信", cont_wa: "迅速な対応。", cont_wa_user: "ユーザー名", cont_wa_num: "番号", cont_wa_btn: "WhatsAppチャット" },
  KR: { nav_home: "홈", nav_about: "소개", nav_stack: "기술", nav_proj: "프로젝트", nav_contact: "연락처", hero_role: "소프트웨어 개발자", hero_explore: "탐색", about_title: "내 소개", about_desc1: "저는 소프트웨어 개발자입니다...", about_desc2: "타협 없는 성능을 우선시합니다...", about_exp: "년 경험", about_proj: "성공적인 프로젝트", about_role: "엔지니어", stack_title: "기술 스택", stack_sub: "제가 사용하는 필수 기술들입니다.", proj_title: "프로젝트", proj_sub: "품질과 헌신을 보여주는 선택된 작품들.", proj_demo: "데모", soc_title: "소셜 미디어", soc_sub: "나의 디지털 발자취.", cont_title: "연락처", cont_sub: "아이디어를 논의해 봅시다.", cont_name: "성명", cont_email: "이메일", cont_msg: "메시지", cont_send: "보내기", cont_wa: "빠른 응답.", cont_wa_user: "사용자 이름", cont_wa_num: "번호", cont_wa_btn: "WhatsApp 채팅" },
  CN: { nav_home: "首页", nav_about: "关于", nav_stack: "技术", nav_proj: "项目", nav_contact: "联系", hero_role: "软件开发者", hero_explore: "探索", about_title: "关于我", about_desc1: "我是一名致力于创造无缝优雅数字体验的软件开发者。", about_desc2: "优先考虑不妥协的性能。", about_exp: "年经验", about_proj: "成功项目", about_role: "工程师", stack_title: "技术栈", stack_sub: "我用来构建数字产品的基本技术。", proj_title: "项目", proj_sub: "展示质量的精选作品。", proj_demo: "演示", soc_title: "社交媒体", soc_sub: "我的数字足迹。", cont_title: "联系", cont_sub: "让我们讨论您的想法。", cont_name: "全名", cont_email: "电子邮件", cont_msg: "信息", cont_send: "发送", cont_wa: "快速回复。", cont_wa_user: "用户名", cont_wa_num: "号码", cont_wa_btn: "WhatsApp聊天" },
  DE: { nav_home: "Startseite", nav_about: "Über", nav_stack: "Technologien", nav_proj: "Projekte", nav_contact: "Kontakt", hero_role: "Softwareentwickler", hero_explore: "Erkunden", about_title: "Über Mich", about_desc1: "Ich bin ein Softwareentwickler...", about_desc2: "Kompromisslose Leistung priorisieren...", about_exp: "Jahre Erfahrung", about_proj: "Erfolgreiche Projekte", about_role: "Ingenieur", stack_title: "Technologien", stack_sub: "Wesentliche Technologien, die ich verwende.", proj_title: "Projekte", proj_sub: "Ausgewählte Werke.", proj_demo: "Demo", soc_title: "Soziale Medien", soc_sub: "Mein digitaler Fußabdruck.", cont_title: "Kontakt", cont_sub: "Lassen Sie uns diskutieren.", cont_name: "Vollständiger Name", cont_email: "E-Mail", cont_msg: "Nachricht", cont_send: "Senden", cont_wa: "Schnelle Antwort.", cont_wa_user: "Benutzername", cont_wa_num: "Nummer", cont_wa_btn: "WhatsApp-Chat" },
  FR: { nav_home: "Accueil", nav_about: "À propos", nav_stack: "Technologies", nav_proj: "Projets", nav_contact: "Contact", hero_role: "Développeur Logiciel", hero_explore: "Explorer", about_title: "À Propos", about_desc1: "Je suis un développeur de logiciels...", about_desc2: "Prioriser les performances...", about_exp: "Années d'expérience", about_proj: "Projets réussis", about_role: "Ingénieur", stack_title: "Technologies", stack_sub: "Technologies essentielles que j'utilise.", proj_title: "Projets", proj_sub: "Œuvres sélectionnées.", proj_demo: "Démo", soc_title: "Réseaux Sociaux", soc_sub: "Mon empreinte numérique.", cont_title: "Contact", cont_sub: "Discutons de vos idées.", cont_name: "Nom Complet", cont_email: "Email", cont_msg: "Message", cont_send: "Envoyer", cont_wa: "Réponse rapide.", cont_wa_user: "Nom d'utilisateur", cont_wa_num: "Numéro", cont_wa_btn: "Chat WhatsApp" },
  ES: { nav_home: "Inicio", nav_about: "Sobre", nav_stack: "Tecnologías", nav_proj: "Proyectos", nav_contact: "Contacto", hero_role: "Desarrollador de Software", hero_explore: "Explorar", about_title: "Sobre Mí", about_desc1: "Soy un desarrollador de software...", about_desc2: "Priorizando el rendimiento...", about_exp: "Años de Experiencia", about_proj: "Proyectos Exitosos", about_role: "Ingeniero", stack_title: "Tecnologías", stack_sub: "Tecnologías esenciales que utilizo.", proj_title: "Proyectos", proj_sub: "Obras seleccionadas.", proj_demo: "Demostración", soc_title: "Redes Sociales", soc_sub: "Mi huella digital.", cont_title: "Contacto", cont_sub: "Discutamos tus ideas.", cont_name: "Nombre Completo", cont_email: "Correo", cont_msg: "Mensaje", cont_send: "Enviar", cont_wa: "Respuesta rápida.", cont_wa_user: "Usuario", cont_wa_num: "Número", cont_wa_btn: "Chat de WhatsApp" }
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
    }, 400); 
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
            className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center pointer-events-none"
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
  if (!context) return { lang: "ID" as Language, setLang: () => {}, t: (key: string) => key };
  return context;
};