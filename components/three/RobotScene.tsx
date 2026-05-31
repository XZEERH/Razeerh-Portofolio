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

  // Mencari tulang kepala secara otomatis di dalam GLB
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isBone && (child.name.toLowerCase().includes('head') || child.name.toLowerCase().includes('neck'))) {
        if (!headRef.current) headRef.current = child;
      }
    });
  }, [scene]);

  useFrame((state) => {
    // Idle breathing animation untuk badan
    const t = state.clock.getElapsedTime();
    if (robotRef.current) {
      robotRef.current.position.y = -2.5 + Math.sin(t * 1.5) * 0.02; 
    }

    // Kepala mengikuti mouse dengan limitasi realistis
    if (headRef.current) {
      const pointerX = state.pointer.x;
      const pointerY = state.pointer.y;
      
      // Limit rotasi agar tidak patah leher (maks 45 derajat)
      const targetY = THREE.MathUtils.clamp(pointerX * 0.8, -0.8, 0.8);
      const targetX = THREE.MathUtils.clamp(-pointerY * 0.5, -0.5, 0.5);

      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, 0.05);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, 0.05);
    }
  });

  // Posisi diturunkan agar framing kamera fokus dari perut ke atas
  return (
    <group ref={robotRef} position={[0, -2.5, 0]} scale={2.8}>
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
      // Framing Kamera Khusus: Fokus ke dada & kepala
      camera={{ position: [0, 1.2, 4], fov: 40 }}
      dpr={[1, 1.5]} // Optimasi Mobile FPS
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