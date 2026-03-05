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
          "relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 transition-all duration-500",
          scrolled ? "glass border-b border-arc-500/10 backdrop-blur-2xl" : "",
        ].join(" ")}
      >
        <BrandMark onClick={toggleMenu} />

        {/* Landscape / Desktop: Show All Options */}
        <nav className="hidden lg:flex items-center gap-4" aria-label="Primary navigation">
          {NAV_LINKS.map((l) => (
            <NavButton key={l.href} href={l.href}>
              {l.label}
            </NavButton>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
            <FxToggle />
          </div>
        </nav>

        {/* Global FX Toggle (Always visible in Landscape mobile if needed, or stick to hidden in portrait) */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="landscape:block hidden">
            <FxToggle />
          </div>
        </div>

        {/* Attractive Radial Menu (90 degree half-circle) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-20 left-6 z-[60]"
            >
              <div className="relative">
                {NAV_LINKS.map((link, i) => {
                  const angle = (i / (NAV_LINKS.length - 1)) * (Math.PI / 2);
                  const radius = 160;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{ x, y, opacity: 1 }}
                      exit={{ x: 0, y: 0, opacity: 0 }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                      className="absolute"
                    >
                      <NavButton
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="bg-ink-950/90 border-arc-500/40 shadow-[0_0_20px_rgba(0,210,255,0.2)] whitespace-nowrap"
                      >
                        {link.label}
                      </NavButton>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop for Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[45]"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
