"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

export default function ServicesHero() {
    return (
        <Section className="pt-20 lg:pt-32 relative z-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 lg:mb-24"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-arc-500/10 border border-arc-500/30 mb-6 transition-all hover:bg-arc-500/20">
                        <span className="w-2 h-2 rounded-full bg-arc-500 animate-pulse" />
                        <span className="text-[10px] font-black text-arc-400 uppercase tracking-[0.3em]">Operational Sectors Active</span>
                    </div>
                    <h1 className="text-4xl lg:text-7xl font-black text-white title-text italic tracking-tighter uppercase mb-6 drop-shadow-glow">
                        TECHNICAL <span className="text-arc-400">CAPABILITIES</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-zinc-400 text-sm lg:text-base leading-relaxed font-medium">
                        Explore our specialized project categories. Each sector is backed by senior-level expertise and high-performance execution frameworks.
                    </p>

                    <div className="flex justify-center gap-4 mt-12 overflow-x-auto pb-4 no-scrollbar">
                        {["SECURE", "OPTIMIZED", "SCALABLE", "INTELLIGENT"].map((tag) => (
                            <div key={tag} className="flex-shrink-0 px-4 py-1 border-l border-zinc-800 text-[10px] font-mono text-zinc-500 tracking-widest">
                                {tag}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
