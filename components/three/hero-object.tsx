"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerMeshRef = useRef<THREE.Mesh>(null!);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x -= delta * 0.2;
      outerMeshRef.current.rotation.y -= delta * 0.3;
    }
  });

  return (
    <group>
      {/* Outer Gold Wireframe Icosahedron */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Dense Wireframe Core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.4, 2]} />
        <meshStandardMaterial
          color="#f3cf65"
          wireframe
          emissive="#d4af37"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
}
