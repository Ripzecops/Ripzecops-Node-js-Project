"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { buildWaLink } from "@/lib/wa";
import { OFFERS } from "@/lib/config";
import { useFx } from "@/lib/providers/FxProvider";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";
import Image from "next/image";

const GlobeBadge = dynamic(() => import("@/components/three/GlobeBadge"), { ssr: false });
const IronManHeroScene = dynamic(() => import("@/components/three/IronManHeroScene"), { ssr: false });

export default function Hero() {
  const { fxEnabled } = useFx();
  const reduced = usePrefersReducedMotion();
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(titleRef.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }).fromTo(
      subtitleRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.35",
    );
    return () => {
      tl.kill();
    };
  }, []);

  const offerBadges = useMemo(() => OFFERS, []);

  return (
    <div onMouseMove={handleMouseMove} className="relative overflow-hidden bg-[#050B14]">
      {/* 3D Background Scene */}
      {fxEnabled && !reduced && <IronManHeroScene />}

      {/* Hero Background Image with Parallax */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: 1.05
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none"
      >
        <Image
          src="/bacground 3d.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/50 to-[#050B14]" />
      </motion.div>


      <Section className="relative min-h-[90vh] flex items-center pt-20 pb-10 sm:pt-32 z-10">
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0 text-shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-2 mb-6"
            >
              <Badge tone="blue">Tactical Excellence</Badge>
              <Badge tone="blue">Next-Gen Support</Badge>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-7xl drop-shadow-2xl title-text"
            >
              PREMIUM IT <span className="text-arc-400 heading-glow italic">PROJECT SERVICES</span> WITH FULL SUPPORT
            </h1>

            <p ref={subtitleRef} className="mt-8 max-w-2xl text-lg text-zinc-300 sm:text-xl md:mx-0 mx-auto leading-relaxed font-medium">
              We specialize in delivering high-end, production-ready IT solutions.
              From AI agents to complex web systems, we bridge the gap between concept and code.
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row justify-center md:justify-start items-center">
              <a
                href={buildWaLink()}
                target="_blank"
                rel="noreferrer"
                className="glow-btn px-10 py-5 text-sm"
              >
                Launch Your Project
              </a>
              <Button href="/services" variant="secondary" className="px-10 py-5 text-sm bg-white/5 border-arc-500/20 backdrop-blur-md hover:bg-arc-500/10">
                Explore Services
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4">
              {offerBadges.map((b) => (
                <div key={b} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-arc-500/50 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-arc-400 animate-pulse group-hover:shadow-glow"></div>
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-arc-500 to-transparent relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white/40"
            />
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
