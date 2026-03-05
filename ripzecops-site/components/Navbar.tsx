"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/config";
import BrandMark from "@/components/BrandMark";
import FxToggle from "@/components/FxToggle";
import { AnimatePresence, motion } from "framer-motion";
import NavButton from "@/components/ui/NavButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="sticky top-0 z-50">
      <div
        ref={navRef}
        className={[
          "relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 transition-all duration-500",
          scrolled ? "glass border-b border-arc-500/10 backdrop-blur-3xl py-4" : "",
        ].join(" ")}
      >
        <div className="relative group">
          <BrandMark onClick={toggleMenu} />

          {/* Visual Tooltip for Logo click */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: scrolled ? 0 : 1, x: 0 }}
            className="absolute -right-28 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2 pointer-events-none"
          >
            <div className="w-8 h-[1px] bg-arc-500/40" />
            <span className="text-[9px] font-mono text-arc-500 tracking-[0.2em] uppercase">Toggle Menu</span>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-2" aria-label="Primary navigation">
          {NAV_LINKS.map((l) => (
            <NavButton key={l.href} href={l.href}>
              {l.label}
            </NavButton>
          ))}
          <div className="ml-6 pl-6 border-l border-white/10">
            <FxToggle />
          </div>
        </nav>

        {/* Global FX Toggle (Visible on all mobile screens) */}
        <div className="xl:hidden flex items-center gap-4">
          <FxToggle />
        </div>

        {/* Advanced Radial Menu (90 degree quadrant) */}
        <AnimatePresence>
          {menuOpen && (
            <div className="absolute top-1/2 left-10 lg:left-14 z-[60] pointer-events-none">
              <div className="relative w-[400px] h-[400px] flex items-center justify-center -translate-y-1/2">
                {/* SVG Connection Arcs */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 overflow-visible">
                  <motion.circle
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 0.25, rotate: -45 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    cx="0" cy="200" r="220"
                    fill="none"
                    stroke="url(#arc-grad)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <defs>
                    <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00d2ff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {NAV_LINKS.map((link, i) => {
                  // Precise Angle calculation for 90 degree quadrant (from -45 to 45 degrees)
                  const startAngle = -Math.PI / 4;
                  const endAngle = Math.PI / 4;
                  const angle = startAngle + (i / (NAV_LINKS.length - 1)) * (endAngle - startAngle);
                  const radius = 240;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                      animate={{ x, y, opacity: 1, scale: 1 }}
                      exit={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 25,
                        delay: i * 0.05
                      }}
                      className="absolute left-0 pointer-events-auto"
                    >
                      <NavButton
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="bg-black/90 border-arc-500/30 shadow-[0_0_30px_rgba(0,210,255,0.1)] min-w-[120px] justify-center"
                      >
                        {link.label}
                      </NavButton>

                      {/* Connection Dot to Arc */}
                      <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-2 h-2 rounded-full bg-arc-500/20 flex items-center justify-center">
                        <div className="w-[4px] h-[4px] bg-arc-500 rounded-full shadow-glow" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Immersive Backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-ink-950/70 backdrop-blur-[10px] z-[45]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
