"use client";

import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function CanvasCleanup() {
  const { gl, scene } = useThree();
  const disposed = useRef(false);

  useEffect(() => {
    return () => {
      if (disposed.current) return;

      try {
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach((mat) => mat.dispose?.());
              } else {
                object.material.dispose?.();
              }
            }
          }
        });

        const ctx = gl?.getContext();
        if (ctx && !ctx.isContextLost()) {
          gl.dispose();
        }
      } catch (e) {
        // Silently handle any edge-case disposal errors during unmount
      } finally {
        disposed.current = true;
      }
    };
  }, [gl, scene]);

  return null;
}
