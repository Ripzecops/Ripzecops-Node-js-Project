"use client";

import Section from "@/components/ui/Section";
import { SUPPORT_ITEMS } from "@/lib/config";
import { motion } from "framer-motion";

export default function FullSupport() {
  return (
    <Section className="mt-14 overflow-visible">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hud-panel rounded-3xl p-6 sm:p-8 border-arc-500/30 overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-600 opacity-50 uppercase tracking-[0.3em] pointer-events-none">
          Support_Protocol_Init
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between relative z-10">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl title-text italic uppercase tracking-tighter">
              FULL <span className="text-arc-400">SUPPORT</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-400 sm:text-base font-medium">
              A complete, guided delivery — from documentation to explanation and deployment support.
            </p>
          </div>
          <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest border-l border-arc-500/30 pl-4 py-1">
            Status: <span className="text-arc-400 drop-shadow-glow">Optimal</span>
          </div>
        </div>

        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
        >
          {SUPPORT_ITEMS.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 }
              }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 rounded-xl border border-arc-500/10 bg-white/[0.02] p-4 hover:border-arc-400/40 hover:bg-arc-500/5 transition-all group"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-arc-500/30 bg-arc-500/10 text-arc-400 font-black text-xs group-hover:shadow-glow transition-all">
                ✓
              </span>
              <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Section>
  );
}
