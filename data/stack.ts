import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiVuedotjs, SiFirebase, SiSupabase, SiVercel, SiNetlify } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import { Bot } from "lucide-react";

export const stackData = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", percentage: 95, icon: FaHtml5, desc: "Menguasai struktur dasar website modern, semantic HTML, dan aksesibilitas web." },
      { name: "CSS3", percentage: 90, icon: FaCss3Alt, desc: "Menguasai layout responsif, animasi modern, Flexbox, dan Grid." },
      { name: "TailwindCSS", percentage: 95, icon: SiTailwindcss, desc: "Utility-first CSS untuk mendesain UI responsif secara cepat dan presisi." },
      { name: "JavaScript", percentage: 85, icon: SiJavascript, desc: "Mengembangkan interaksi dinamis, manipulasi DOM, dan integrasi API modern." },
      { name: "TypeScript", percentage: 80, icon: SiTypescript, desc: "Penulisan kode statis yang ketat untuk mencegah bug pada skala produksi." },
      { name: "React", percentage: 85, icon: FaReact, desc: "Menciptakan komponen antarmuka interaktif dengan manajemen state modern." },
      { name: "Next.js", percentage: 80, icon: SiNextdotjs, desc: "Membangun arsitektur React yang skalabel dengan SSR/SSG untuk performa optimal." },
      { name: "Vue.js", percentage: 70, icon: SiVuedotjs, desc: "Framework progresif untuk membangun antarmuka pengguna yang reaktif." },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", percentage: 75, icon: FaNodeJs, desc: "Pengembangan server-side yang asinkron, cepat, dan non-blocking." },
      { name: "Python", percentage: 70, icon: FaPython, desc: "Automasi skrip dan pengolahan data untuk backend yang efisien." },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "Firebase", percentage: 80, icon: SiFirebase, desc: "Platform BaaS untuk integrasi database realtime dan autentikasi." },
      { name: "Supabase", percentage: 75, icon: SiSupabase, desc: "Alternatif open-source Firebase berbasis PostgreSQL untuk skalabilitas." },
    ]
  },
  {
    category: "Development Tools",
    items: [
      { name: "Termux", percentage: 90, icon: VscTerminalCmd, desc: "Terminal emulator dan environment Linux yang sangat mobile-friendly." },
      { name: "VS Code", percentage: 95, icon: TbBrandVscode, desc: "Code editor utama dengan ekosistem ekstensi yang mempercepat workflow." },
    ]
  },
  {
    category: "Hosting & Repository",
    items: [
      { name: "GitHub", percentage: 90, icon: FaGithub, desc: "Manajemen repositori, version control, dan kolaborasi tim." },
      { name: "Vercel", percentage: 85, icon: SiVercel, desc: "Infrastruktur cloud modern untuk deployment mulus CI/CD." },
      { name: "Netlify", percentage: 80, icon: SiNetlify, desc: "Platform hosting terpercaya untuk aplikasi web statis dan serverless." },
    ]
  },
  {
    category: "AI Tools",
    items: [
      { name: "Claude", percentage: 90, icon: Bot, desc: "AI asisten canggih untuk memecahkan logika kode dan arsitektur." },
      { name: "Google AI Studio", percentage: 85, icon: Bot, desc: "Eksplorasi dan integrasi model Gemini untuk aplikasi cerdas." },
      { name: "DeepSeek", percentage: 80, icon: Bot, desc: "Model AI bertenaga tinggi untuk analitik dan coding tingkat lanjut." },
      { name: "Gravity", percentage: 75, icon: Bot, desc: "Tool cerdas untuk automasi alur kerja pengembangan perangkat lunak." },
      { name: "AgentAI", percentage: 80, icon: Bot, desc: "Pemanfaatan agen AI otonom untuk tugas-tugas development berulang." },
      { name: "AICode", percentage: 85, icon: Bot, desc: "Plugin dan alat cerdas untuk menulis kode dengan lebih cepat dan aman." },
    ]
  }
];