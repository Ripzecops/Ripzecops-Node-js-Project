"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Globe from "@/components/three/Globe";
import { useEffect, useState } from "react";

export default function GlobeBadge() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className="absolute bottom-2 right-2 h-[260px] w-[260px] rounded-full border border-arc-500/20 bg-ink-950/40 shadow-[0_0_30px_rgba(0,210,255,0.1)] backdrop-blur-md md:h-[320px] md:w-[320px] overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.1], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[3, 2, 4]} intensity={1.2} />
        <Environment preset="city" />
        <Globe />
      </Canvas>
    </div>
  );
}
