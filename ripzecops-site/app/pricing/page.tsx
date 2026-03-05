import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { buildWaLink } from "@/lib/wa";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent offers designed for maximum value. Get 2 projects at an affordable price with premium quality.",
};

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-hero-grad overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 bg-hud-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,210,255,0.05),transparent_50%)] pointer-events-none" />

      <Section className="relative z-10 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Badge tone="gold" className="animate-pulse-slow">Limited Time Offer</Badge>
            <Badge tone="blue">Enterprise Grade</Badge>
            <Badge tone="gold">Flash Sale</Badge>
          </div>

          <header className="mb-16">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tighter title-text heading-glow">
              OFFERS & <span className="text-stark-500">PRICING</span>
            </h1>
            <div className="mt-4 h-1 w-32 bg-gradient-to-r from-stark-500 to-transparent" />
            <p className="mt-8 max-w-2xl text-lg text-ink-100 leading-relaxed font-medium">
              Elite-tier delivery systems with comprehensive tactical support.
              Engineering excellence for the next generation of digital defense.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Combo Offer Card */}
            <div className="hud-panel p-8 group hover:border-stark-500/50 transition-colors duration-500">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black tracking-[0.3em] text-stark-500 uppercase">System Bundle</span>
                <div className="h-2 w-2 rounded-full bg-stark-500 shadow-[0_0_8px_theme('colors.stark.500')]" />
              </div>

              <h3 className="text-3xl font-extrabold text-white title-text mb-4">Tactical Duo</h3>
              <p className="text-sm text-ink-200 mb-8 leading-relaxed">
                Deploy two synchronized project modules with unified architectural integrity and full-spectrum support.
              </p>

              <div className="space-y-4 mb-10">
                {['Dual Architecture Design', 'Unified Logic Flow', 'Master Documentation', 'Priority Execution'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs font-bold text-ink-100">
                    <div className="h-1 w-1 bg-arc-400" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={buildWaLink("Hi RIPZECOPS, I want the 2 Projects combo offer. Please share the package price.")}
                target="_blank"
                rel="noreferrer"
                className="glow-btn w-full block text-center"
              >
                Request Access
              </a>
            </div>

            {/* Premium Delivery Card */}
            <div className="hud-panel p-8 border-arc-500/50 bg-ink-900/80">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-black tracking-[0.3em] text-arc-400 uppercase">Prime Protocol</span>
                <div className="h-2 w-2 rounded-full bg-arc-400 shadow-[0_0_8px_theme('colors.arc.400')]" />
              </div>

              <h3 className="text-3xl font-extrabold text-white title-text mb-4">Full Support</h3>
              <p className="text-sm text-ink-200 mb-8 leading-relaxed">
                Comprehensive post-deployment verification including live-fire walkthroughs and deep-code forensics.
              </p>

              <div className="space-y-4 mb-10">
                {['Live Code Walkthroughs', 'Deep Technical Reports', 'Installation Sovereignty', '24/7 Tactical Comms'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs font-bold text-ink-100">
                    <div className="h-1 w-1 bg-stark-500" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={buildWaLink()}
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden group/btn bg-arc-500 text-ink-950 font-black px-8 py-4 rounded-lg uppercase tracking-[0.2em] text-xs transition-all hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] w-full block text-center"
              >
                Initiate Link
              </a>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </div>
  );
}
