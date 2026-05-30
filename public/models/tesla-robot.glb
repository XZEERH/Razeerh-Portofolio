"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function RobotModel() {
  // Pastikan path file benar: public/models/tesla-robot.glb
  const { scene } = useGLTF("/models/tesla-robot.glb");
  const robotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!robotRef.current) return;
    
    // Mouse/Touch tracking (-1 to +1 range)
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    // Memutar keseluruhan model secara smooth mengikuti kursor/jari
    // Ini metode paling aman jika nama tulang/bone dalam GLB tidak standar
    const targetRotationX = (pointerY * Math.PI) / 6; // Atas bawah
    const targetRotationY = (pointerX * Math.PI) / 4; // Kiri Kanan

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
  return (
    <Canvas 
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]} // Optimasi untuk mobile & retina display
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f3ff" />
      <directionalLight position={[-10, 10, -5]} intensity={1} color="#bc13fe" />
      <spotLight position={[0, 10, 0]} intensity={2} penumbra={1} color="#ffffff" />
      
      <Environment preset="city" />
      
      <Suspense fallback={null}>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
          <RobotModel />
        </Float>
        <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#00f3ff" />
      </Suspense>
    </Canvas>
  );
}

// Preload model agar loading lebih cepat
useGLTF.preload("/models/tesla-robot.glb");