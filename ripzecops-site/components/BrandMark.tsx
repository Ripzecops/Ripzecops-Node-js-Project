import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/config";

export default function BrandMark({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-5 group cursor-pointer relative z-[70]"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative h-14 w-14 flex items-center justify-center p-1"
      >
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full border border-arc-500/10 bg-arc-500/5 blur-[2px] group-hover:bg-arc-500/10 transition-all duration-500" />

        {/* Inner Reactor Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-[2px] border-dashed border-arc-500/40 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[4px] border border-arc-400/20 rounded-full before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-1 before:bg-arc-400 before:rounded-full before:shadow-glow"
        />

        {/* Energy Core */}
        <div className="relative w-7 h-7 rounded-full bg-gradient-radial from-arc-300 via-arc-500 to-transparent flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.6)] group-hover:shadow-[0_0_30px_rgba(0,210,255,0.8)] transition-all">
          <div className="w-3 h-3 rounded-full bg-white shadow-inner animate-pulse" />
        </div>

        {/* Technical Deco */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-arc-400 opacity-40" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-arc-400 opacity-40" />
      </motion.div>

      <div className="flex flex-col leading-none">
        <div className="text-2xl font-black tracking-[-0.05em] text-white font-heading uppercase italic group-hover:text-arc-400 transition-colors tracking-widest">
          {BRAND.name}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-[1px] w-6 bg-gradient-to-r from-arc-500 to-transparent" />
          <span className="text-[9px] text-arc-400/80 font-mono font-bold uppercase tracking-[0.4em] animate-pulse">
            ACTIVE CORE
          </span>
        </div>
      </div>
    </div>
  );
}
