import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/config";

export default function BrandMark({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 group cursor-pointer"
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="relative h-12 w-12 flex items-center justify-center"
      >
        {/* Animated HUD Icon Replacement */}
        <div className="absolute inset-0 rounded-full border-2 border-arc-500/30 group-hover:border-arc-400 group-hover:shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all duration-300" />
        <div className="w-6 h-6 rounded-full bg-arc-500/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-arc-400 shadow-glow animate-pulse" />
        </div>

        {/* Animated Orbits */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-dashed border-arc-500/20 rounded-full"
        />
      </motion.div>

      <div className="flex flex-col leading-tight">
        <div className="text-xl font-black tracking-tighter text-white font-heading heading-glow uppercase italic group-hover:text-arc-400 transition-colors">
          {BRAND.name}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-[1px] bg-arc-500" />
          <span className="text-[8px] text-arc-400/60 font-bold uppercase tracking-[0.2em]">
            SYSTEM CLUSTER 92
          </span>
        </div>
      </div>
    </div>
  );
}
