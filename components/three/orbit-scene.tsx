"use client";

import "@/lib/suppress-three-warnings";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CanvasCleanup } from "@/components/three/canvas-cleanup";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function OrbitingContent() {
  const centralRef = useRef<THREE.Mesh>(null!);
  const orbitGroupRef = useRef<THREE.Group>(null!);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    if (centralRef.current) {
      centralRef.current.rotation.y += delta * 0.4;
      centralRef.current.rotation.x += delta * 0.2;
    }
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group>
      {/* Central Wireframe Icosahedron (radius 0.9) */}
      <mesh ref={centralRef}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#d4af37"
          wireframe
          emissive="#d4af37"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Orbiting Group with 3 Spheres */}
      <group ref={orbitGroupRef}>
        {/* Sphere 1: size 0.14, orbit radius 2.1 */}
        <mesh position={[2.1, 0, 0]}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial color="#ffe066" emissive="#ffd700" emissiveIntensity={0.8} />
        </mesh>
        {/* Sphere 2: size 0.09, orbit radius 2.6 */}
        <mesh position={[-2.6, 0.8, -1]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.6} />
        </mesh>
        {/* Sphere 3: size 0.11, orbit radius 1.7 */}
        <mesh position={[0, -1.7, 1.2]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#f3cf65" emissive="#f3cf65" emissiveIntensity={0.7} />
        </mesh>
      </group>
    </group>
  );
}

export function OrbitScene() {
  const isMobile = useIsMobile();

  return (
    <div className="relative flex items-center justify-center h-80 w-80 sm:h-96 sm:w-96">
      {/* Surrounding Concentric Circular Border Decorations */}
      <div className="absolute inset-0 rounded-full border border-gold/20 pointer-events-none" />
      <div className="absolute inset-8 rounded-full border border-dashed border-gold/30 pointer-events-none" />
      <div className="absolute inset-16 rounded-full border border-gold/15 pointer-events-none" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <Canvas
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffd700" />
        <Suspense fallback={null}>
          <OrbitingContent />
        </Suspense>
        <CanvasCleanup />
      </Canvas>
    </div>
  );
}
