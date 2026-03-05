"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/config";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#050B14] min-h-screen relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-hud-grid bg-[length:50px_50px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stark-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-arc-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Section className="py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-arc-500/10 border border-arc-500/30 mb-6 transition-all hover:bg-arc-500/20">
              <span className="w-2 h-2 rounded-full bg-arc-400 animate-pulse" />
              <span className="text-[10px] font-black text-arc-400 uppercase tracking-[0.3em]">Integrity Protocol 1.0</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-black text-white title-text italic tracking-tighter uppercase mb-6 drop-shadow-glow">
              DATA <span className="text-arc-400">PROTECTION</span>
            </h1>
            <p className="text-zinc-400 text-sm lg:text-base leading-relaxed font-medium">
              We value your trust as much as our engineering. Here’s a transparent breakdown of how we handle your digital signal.
            </p>
          </motion.div>

          <div className="space-y-8">
            <PolicySection
              title="Data Initialization"
              subtitle="What we collect"
              content="When you initiate a project uplink via our forms, we capture your name, contact frequency (email/phone), and mission briefing. This is strictly to ensure our tactical team understands your vision perfectly before we engage."
            />

            <PolicySection
              title="Security Clearance"
              subtitle="How we use it"
              content="Your data remains within the secure perimeter of RIPZECOPS. We don't sell your info to third-party hydras. We use it solely to build your project, communicate progress, and occasionally share major system updates If you opt-in."
            />

            <PolicySection
              title="Encrypted Relays"
              subtitle="Third-party systems"
              content="Our direct communication relies on WhatsApp. While our internal protocols are strict, these transmissions are also governed by their end-to-end encryption and terms. We also use subtle analytics to track site performance—essentially J.A.R.V.I.S. monitoring our own efficiency."
            />

            <PolicySection
              title="Operator Rights"
              subtitle="Your Control"
              content="You have full authorization over your data. If you wish to purge your records from our servers or request a copy of your transmission history, simply send a 'DEAUTHORIZE' request via our contact page. Sequence will be initiated within 48 hours."
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 p-8 rounded-3xl border border-white/5 bg-white/[0.01] text-center"
          >
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest leading-loose">
              Protocol Approved by RIPZECOPS Intelligence Core <br />
              Last Update: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} <br />
              Status: <span className="text-arc-400">Secure</span>
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

function PolicySection({ title, subtitle, content }: { title: string, subtitle: string, content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="hud-panel p-8 rounded-2xl border-arc-500/20 group hover:border-arc-500/40 transition-all flex flex-col md:flex-row gap-8"
    >
      <div className="md:w-1/3">
        <h3 className="text-arc-400 font-black title-text uppercase tracking-tighter text-xl italic">{title}</h3>
        <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em] mt-1">{subtitle}</p>
      </div>
      <div className="md:w-2/3">
        <p className="text-zinc-300 text-sm leading-relaxed font-medium">
          {content}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-arc-500/10 group-hover:border-arc-500/30 transition-colors" />
    </motion.div>
  );
}
