"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    // @ts-ignore (Abaikan peringatan TypeScript, cara ini paling stabil di Next 15)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Socials />
      <Contact />
    </main>
  );
}