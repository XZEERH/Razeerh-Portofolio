"use client";

import React, { Component, ReactNode, Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

// 🛡️ Error Boundary yang sesungguhnya
class ModelErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <div className="text-red-400 bg-dark-900/90 p-6 border border-red-500/50 rounded-xl text-sm w-80 text-center glass-panel shadow-[0_0_30px_rgba(255,0,0,0.2)]">
            ⚠️ <b>Robot 3D Gagal Dimuat</b><br/><br/>
            Cek apakah nama file sudah benar-benar:<br/>
            <code className="text-neon-cyan font-mono mt-3 block bg-white/5 p-2 rounded">public/models/tesla-robot.glb</code>
            <br/>(Perhatikan huruf kecil semua, tanpa spasi)
          </div>
        </Html>
      );
    }
    return this.props.children;
  }
}

function RobotModel() {
  // Hanya memuat model dari dalam komponen, tanpa preload luar!
  const { scene } = useGLTF("/models/tesla-robot.glb");
  const robotRef = useRef<THREE.Group | any>(null);

  useFrame((state) => {
    if (!robotRef.current) return;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;
    
    const targetRotationX = (pointerY * Math.PI) / 6;
    const targetRotationY = (pointerX * Math.PI) / 4;

    robotRef.current.rotation.y = THREE.MathUtils.lerp(robotRef.current.rotation.y, targetRotationY, 0.05);
    robotRef.current.rotation.x = THREE.MathUtils.lerp(robotRef.current.rotation.x, -targetRotationX, 0.05);
  });

  return (
    <group ref={robotRef} position={[0, -2.5, 0]} scale={2.2}>
      <primitive object={scene} />
    </group>
  );
}

export default function RobotScene() {
  const [mounted, setMounted] = useState(false);

  // Mencegah mismatch antara server dan client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas 
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]} 
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f3ff" />
      <directionalLight position={[-10, 10, -5]} intensity={1} color="#bc13fe" />
      <spotLight position={[0, 10, 0]} intensity={2} penumbra={1} color="#ffffff" />
      
      <Environment preset="city" />
      
      <ModelErrorBoundary>
        <Suspense fallback={<Html center><div className="text-neon-cyan animate-pulse font-mono tracking-widest text-sm">LOADING ASSETS...</div></Html>}>
          <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
            <RobotModel />
          </Float>
          <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#00f3ff" />
        </Suspense>
      </ModelErrorBoundary>
    </Canvas>
  );
}