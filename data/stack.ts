import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiVuedotjs, SiFirebase, SiSupabase, SiVercel, SiNetlify } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import { Bot } from "lucide-react";

export const stackData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", percentage: 95, icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", percentage: 90, icon: FaCss3Alt, color: "#1572B6" },
      { name: "TailwindCSS", percentage: 95, icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", percentage: 85, icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", percentage: 80, icon: SiTypescript, color: "#3178C6" },
      { name: "React", percentage: 85, icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", percentage: 80, icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Vue.js", percentage: 70, icon: SiVuedotjs, color: "#4FC08D" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", percentage: 75, icon: FaNodeJs, color: "#339933" },
      { name: "Python", percentage: 70, icon: FaPython, color: "#3776AB" },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "Firebase", percentage: 80, icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", percentage: 75, icon: SiSupabase, color: "#3ECF8E" },
    ]
  },
  {
    category: "Development Tools",
    items: [
      { name: "Termux", percentage: 90, icon: VscTerminalCmd, color: "#FFFFFF" },
      { name: "VS Code", percentage: 95, icon: TbBrandVscode, color: "#007ACC" },
    ]
  },
  {
    category: "Hosting & Repository",
    items: [
      { name: "GitHub", percentage: 90, icon: FaGithub, color: "#FFFFFF" },
      { name: "Vercel", percentage: 85, icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", percentage: 80, icon: SiNetlify, color: "#00C7B7" },
    ]
  },
  {
    category: "AI Tools",
    items: [
      { name: "Claude", percentage: 90, icon: Bot, color: "#D97757" },
      { name: "Google AI Studio", percentage: 85, icon: Bot, color: "#4285F4" },
      { name: "DeepSeek", percentage: 80, icon: Bot, color: "#4D6BFE" },
      { name: "Gravity", percentage: 75, icon: Bot, color: "#FFFFFF" },
      { name: "AgentAI", percentage: 80, icon: Bot, color: "#00f3ff" },
      { name: "AICode", percentage: 85, icon: Bot, color: "#bc13fe" },
    ]
  }
];