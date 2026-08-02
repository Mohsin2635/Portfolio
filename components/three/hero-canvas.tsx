"use client";

import "@/lib/suppress-three-warnings";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroObject } from "@/components/three/hero-object";
import { CanvasCleanup } from "@/components/three/canvas-cleanup";
import { useIsMobile } from "@/hooks/use-is-mobile";

export function HeroCanvas() {
  const isMobile = useIsMobile();

  return (
    <div className="relative h-72 w-72 md:h-80 md:w-80 cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffd700" />
        <Suspense fallback={null}>
          <HeroObject />
        </Suspense>
        <CanvasCleanup />
      </Canvas>
    </div>
  );
}
