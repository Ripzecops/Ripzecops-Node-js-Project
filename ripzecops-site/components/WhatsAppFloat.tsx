"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { buildWaLink } from "@/lib/wa";
import { BRAND } from "@/lib/config";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse rotation logic for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.a
      href={buildWaLink()}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl bg-ink-950/80 border border-arc-500/30 p-2 pr-5 text-sm font-extrabold text-arc-400 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition hover:border-arc-500 group overflow-hidden"
      aria-label={`Chat with ${BRAND.name} on WhatsApp`}
    >
      {/* HUD Scanning Effect */}
      <div className="absolute inset-0 bg-hud-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-arc-500/40 animate-scan opacity-0 group-hover:opacity-100" />

      {/* 3D Content Wrapper */}
      <div style={{ transform: "translateZ(20px)" }} className="flex items-center gap-3">
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-arc-500/40 bg-ink-900 group-hover:shadow-glow transition-all duration-300">
          <Image
            src="/wp dp.png"
            alt="WhatsApp Support"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-arc-500/20 to-transparent pointer-events-none" />
        </div>

        <div className="flex flex-col">
          <span className="uppercase font-[family-name:var(--font-heading)] tracking-[0.2em] text-[10px] text-arc-400 drop-shadow-glow">Secure Uplink</span>
          <span className="uppercase font-[family-name:var(--font-heading)] tracking-widest text-white text-xs">Transmit Now</span>
        </div>
      </div>

      {/* Decorative Corner Brackets */}
      <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-arc-500/40" />
      <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-arc-500/40" />
    </motion.a>
  );
}
