import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/config";
import { motion } from "framer-motion";

export default function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-4 group">
      <div className="relative h-14 w-14 overflow-visible">
        {/* Animated HUD Container */}
        <div className="absolute inset-0 rounded-xl border border-arc-500/30 bg-ink-900/40 backdrop-blur-xl shadow-glow group-hover:border-arc-400/60 transition-all duration-500" />

        {/* Corner Brackets */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-arc-500/50 group-hover:border-arc-400 transition-colors" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-arc-500/50 group-hover:border-arc-400 transition-colors" />

        <div className="relative h-full w-full p-2 flex items-center justify-center overflow-hidden rounded-xl">
          <Image
            src="/bacground 3d.png"
            alt={`${BRAND.name} logo`}
            fill
            className="object-contain p-1.5 group-hover:scale-115 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="text-2xl font-black tracking-tighter text-white font-[family-name:var(--font-heading)] heading-glow uppercase italic group-hover:text-arc-400 transition-colors">
          {BRAND.name}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-[1px] bg-arc-500 animate-pulse" />
          <span className="text-[10px] text-arc-400 font-bold uppercase tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">
            Ops Cluster 92
          </span>
        </div>
      </div>
    </Link>
  );
}
