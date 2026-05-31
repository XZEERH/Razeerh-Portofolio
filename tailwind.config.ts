import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Mendaftarkan font premium ke sistem Tailwind
        sans: ['var(--font-inter)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: "#00f3ff",
          blue: "#003cff",
          purple: "#bc13fe",
        },
        dark: {
          900: "#050505",
          800: "#0a0a0a",
          700: "#141414",
        }
      },
    },
  },
  plugins: [],
};
export default config;