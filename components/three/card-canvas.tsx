"use client";

import "@/lib/suppress-three-warnings";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CanvasCleanup } from "@/components/three/canvas-cleanup";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface CardShapeProps {
  shapeType: "torusKnot" | "octahedron" | "icosahedron";
  isHovered: boolean;
}

function CardShape({ shapeType, isHovered }: CardShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((_, delta) => {
    if (meshRef.current) {
      if (!prefersReducedMotion) {
        const speedMultiplier = isHovered ? 2.2 : 1.0;
        meshRef.current.rotation.x += delta * 0.4 * speedMultiplier;
        meshRef.current.rotation.y += delta * 0.7 * speedMultiplier;
      }

      const targetScale = isHovered ? 1.2 : 1.0;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        delta * 6
      );
    }
  });

  const renderGeometry = () => {
    switch (shapeType) {
      case "torusKnot":
        return <torusKnotGeometry args={[1.2, 0.35, 64, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[1.55, 1]} />;
      case "icosahedron":
      default:
        return <icosahedronGeometry args={[1.55, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={[0.7, 0.35, 0]}>
      {renderGeometry()}
      <meshStandardMaterial
        color={isHovered ? "#ffe066" : "#d4af37"}
        wireframe
        transparent
        opacity={isHovered ? 0.65 : 0.35}
        emissive="#d4af37"
        emissiveIntensity={isHovered ? 0.4 : 0.15}
      />
    </mesh>
  );
}

export interface CardCanvasProps {
  shapeType: "torusKnot" | "octahedron" | "icosahedron";
  isHovered?: boolean;
}

export function CardCanvas({ shapeType, isHovered = false }: CardCanvasProps) {
  const isMobile = useIsMobile();

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.8], fov: 50 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 0, 0);
        }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffd700" />
        <Suspense fallback={null}>
          <CardShape shapeType={shapeType} isHovered={isHovered} />
        </Suspense>
        <CanvasCleanup />
      </Canvas>
    </div>
  );
}
