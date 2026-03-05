"use client";

import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import Section from "@/components/ui/Section";
import FinalCTA from "@/components/sections/FinalCTA";
import { BRAND } from "@/lib/config";
import { motion } from "framer-motion";
import { useFx } from "@/lib/providers/FxProvider";

const Globe = dynamic(() => import("@/components/three/Globe"), { ssr: false });

export default function ContactPage() {
  const { fxEnabled } = useFx();

  return (
    <div className="bg-[#050B14] min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-hud-grid bg-[length:50px_50px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-arc-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-arc-500/10 border border-arc-500/30 mb-6 group transition-all hover:bg-arc-500/20">
              <span className="w-2 h-2 rounded-full bg-arc-500 animate-pulse" />
              <span className="text-[10px] font-black text-arc-400 uppercase tracking-[0.3em]">Direct Uplink Active</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-white title-text italic tracking-tighter uppercase mb-6 drop-shadow-glow">
              MISSION <span className="text-arc-400">CONTROL</span>
            </h1>
            <p className="max-w-2xl mx-auto text-zinc-400 text-sm lg:text-base leading-relaxed font-medium">
              Initialize communication sequence. Our tactical teams are standing by to project-manage your vision from concept to completion.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
            {/* Form Section */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Visual/Info Section */}
            <div className="lg:col-span-5 space-y-8">
              {/* 3D Global Visualization */}
              <div className="hud-panel aspect-square relative rounded-3xl group overflow-hidden border-arc-500/20">
                <div className="absolute inset-0 z-0">
                  {fxEnabled && <Globe radius={2.2} points={2000} />}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-arc-400/80 uppercase tracking-widest">Global Ops Coverage</span>
                    <span className="text-[10px] font-mono text-zinc-500">24/7/365</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ["20%", "95%", "20%"] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className="h-full bg-arc-500 shadow-glow"
                    />
                  </div>
                </div>

                {/* HUD Data Overlays */}
                <div className="absolute top-6 left-6 font-mono text-[8px] text-zinc-500 space-y-1 opacity-40">
                  <div>LAT: 40.7128 N</div>
                  <div>LNG: 74.0060 W</div>
                </div>
              </div>

              {/* Fast Contact Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="hud-panel p-8 rounded-3xl border-stark-500/20 group hover:border-stark-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-stark-500/10 border border-stark-500/30 flex items-center justify-center text-stark-500 text-xl font-black group-hover:scale-110 transition-transform">
                    WA
                  </div>
                  <div>
                    <h3 className="text-white font-bold title-text tracking-tight">RAPID DEPLOYMENT</h3>
                    <p className="text-xs text-zinc-500 font-mono">Status: Available Now</p>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                  For immediate tactical assistance and real-time project consultation, connect via our encrypted WhatsApp channel.
                </p>

                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-4 rounded-xl bg-stark-500 text-white font-black text-xs uppercase tracking-[0.2em] shadow-glow-red hover:bg-stark-400 transition-all active:scale-95"
                >
                  Direct WhatsApp Uplink
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </div>
  );
}
