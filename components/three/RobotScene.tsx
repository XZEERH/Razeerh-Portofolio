"use client";

import React, { Component, ReactNode, Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Html } from "@react-three/drei";
import * as THREE from "three";

class ModelErrorBoundary extends Component<{children: ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <Html center><div className="text-white/50 text-sm border border-white/10 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-md">Model Not Found</div></Html>;
    return this.props.children;
  }
}

function RobotModel() {
  const { scene } = useGLTF("/models/tesla-robot.glb");
  const robotRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Object3D | null>(null);

  useEffect(() => {
    scene.traverse((child) => {
      const node = child as any; 
      if (node.isBone && (node.name.toLowerCase().includes('head') || node.name.toLowerCase().includes('neck'))) {
        if (!headRef.current) headRef.current = node;
      }
    });
  }, [scene]);

  useFrame((state) => {
    // Kunci mati rotasi badan, berikan sedikit animasi pernapasan (naik-turun) yang natural
    if (robotRef.current) {
      robotRef.current.position.y = -4.0 + Math.sin(state.clock.elapsedTime * 1.5) * 0.015; 
      robotRef.current.rotation.set(0, 0, 0); 
    }

    // Hanya KEPALA yang bergerak mengikuti mouse/jari dengan batasan natural
    if (headRef.current) {
      const pointerX = state.pointer.x;
      const pointerY = state.pointer.y;
      
      const targetY = THREE.MathUtils.clamp(pointerX * 1.2, -1.0, 1.0); 
      const targetX = THREE.MathUtils.clamp(-pointerY * 0.8, -0.6, 0.6); 

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, 0.08);
      headRef.current.rotation.z = 0; 
    }
  });

  // Posisi Y robot diturunkan jauh ke -4.0, agar yang tertangkap layar adalah kepala dan dada
  return (
    <group ref={robotRef} position={[0, -4.0, 0]} scale={2.8}>
      <primitive object={scene} />
    </group>
  );
}

export default function RobotScene() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Canvas 
      // KAMERA DIARAHKAN TEPAT KE KEPALA DAN DADA ROBOT
      camera={{ position: [0, 1.5, 4.5], fov: 40 }}
      dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1} 
      performance={{ min: 0.5 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <spotLight position={[-5, 5, -5]} intensity={0.8} color="#e2e8f0" />
      <Environment preset="studio" />
      
      <ModelErrorBoundary>
        <Suspense fallback={null}>
          <RobotModel />
        </Suspense>
      </ModelErrorBoundary>
    </Canvas>
  );
}