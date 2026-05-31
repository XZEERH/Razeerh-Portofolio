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
    // 1. Kunci mati rotasi badan, hanya animasi nafas (y)
    if (robotRef.current) {
      robotRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.015; 
      robotRef.current.rotation.set(0, 0, 0); // Kunci Total Rotasi Badan
    }

    // 2. Tracking murni hanya pada kepala
    if (headRef.current) {
      const pointerX = state.pointer.x;
      const pointerY = state.pointer.y;
      
      const targetY = THREE.MathUtils.clamp(pointerX * 1.2, -1.0, 1.0); // Kiri-Kanan
      const targetX = THREE.MathUtils.clamp(-pointerY * 0.8, -0.6, 0.6); // Atas-Bawah

      // Smooth tracking menggunakan lerp
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, 0.08);
      headRef.current.rotation.z = 0; // Kunci kemiringan leher
    }
  });

  return (
    // Posisi diturunkan agar framing kamera pas di dada atas dan kepala
    <group ref={robotRef} position={[0, -1.5, 0]} scale={2.4}>
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
      // Framing Kamera Khusus: Fokus tepat di kepala & dada
      camera={{ position: [0, 0.4, 2.5], fov: 45 }}
      // Optimasi Performa Mobile (Limit resolusi shadow & pixel ratio)
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