"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/config";
import { buildWaLink } from "@/lib/wa";
import BrandMark from "@/components/BrandMark";
import FxToggle from "@/components/FxToggle";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    );
  }, []);

  return (
    <div className="sticky top-0 z-40">
      <div
        ref={navRef}
        className={[
          "mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6",
          scrolled ? "glass rounded-b-3xl" : "",
        ].join(" ")}
      >
        <BrandMark />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-100 hover:text-white link-underline focus-ring title-text"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <FxToggle />
          </div>

          <a
            href={buildWaLink()}
            target="_blank"
            rel="noreferrer"
            className="glow-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
