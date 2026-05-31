import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiVercel } from "react-icons/si";

export const stackData = [
  {
    category: "Frontend Development",
    items: [
      { name: "Next.js", percentage: 90, icon: SiNextdotjs, desc: "Membangun arsitektur React yang skalabel dengan SSR/SSG untuk performa optimal." },
      { name: "TypeScript", percentage: 85, icon: SiTypescript, desc: "Penulisan kode statis yang ketat untuk mencegah bug pada skala produksi." },
      { name: "TailwindCSS", percentage: 95, icon: SiTailwindcss, desc: "Utility-first CSS untuk mendesain UI responsif secara cepat dan presisi." },
      { name: "React", percentage: 90, icon: FaReact, desc: "Menciptakan komponen antarmuka interaktif dengan manajemen state modern." },
    ]
  },
  {
    category: "Backend & Ecosystem",
    items: [
      { name: "Node.js", percentage: 80, icon: FaNodeJs, desc: "Pengembangan server-side yang asinkron, cepat, dan non-blocking." },
      { name: "Python", percentage: 70, icon: FaPython, desc: "Automasi skrip dan pengolahan data integrasi AI." },
      { name: "Vercel", percentage: 90, icon: SiVercel, desc: "Infrastruktur cloud modern untuk deployment mulus CI/CD." },
      { name: "GitHub", percentage: 95, icon: FaGithub, desc: "Manajemen repositori dan kolaborasi menggunakan sistem Git." },
    ]
  }
];