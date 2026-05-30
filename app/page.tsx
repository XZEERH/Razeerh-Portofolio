"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothWheel: true }}>
      <main className="relative flex flex-col w-full overflow-hidden">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Socials />
        <Contact />
      </main>
    </ReactLenis>
  );
}