"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
    IconCode,
    IconPhone,
    IconBrain,
    IconShield,
    IconSpark,
    IconPen
} from "@/components/icons";

const CARDS = [
    {
        title: "Web Apps",
        desc: "Modern websites, dashboards, admin panels, and full-stack web apps designed for high performance.",
        icon: IconCode,
        color: "blue"
    },
    {
        title: "Mobile Apps",
        desc: "Clean UI, responsive UX, and reliable performance for cross-platform mobile experiences.",
        icon: IconPhone,
        color: "red"
    },
    {
        title: "AI / ML",
        desc: "Model pipelines, training workflows, evaluation, and practical AI integrations for your business.",
        icon: IconBrain,
        color: "blue"
    },
    {
        title: "Cyber Security",
        desc: "Security tools, analysis, monitoring concepts, and security-focused implementations.",
        icon: IconShield,
        color: "red"
    },
    {
        title: "AI Agents",
        desc: "Agent workflows, tool usage, prompt chains, and autonomous automation-focused projects.",
        icon: IconSpark,
        color: "blue"
    },
    {
        title: "UI/UX",
        desc: "Wireframes, UI kits, premium landing pages, and clean design systems for modern brands.",
        icon: IconPen,
        color: "red"
    },
];

export default function PortfolioContent() {
    return (
        <Section className="py-24 relative overflow-hidden">
            {/* Background HUD Decorative Elements */}
            <div className="absolute inset-0 bg-hud-grid bg-[length:50px_50px] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-arc-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stark-500/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10 mb-20"
            >
                <h1 className="text-5xl font-black text-white sm:text-7xl title-text mb-6 uppercase tracking-tighter italic">
                    PROJECT <span className="text-arc-400 heading-glow">ARCHIVE</span>
                </h1>
                <p className="max-w-3xl mx-auto text-zinc-400 text-lg sm:text-xl leading-relaxed font-medium">
                    A definitive collection of specialized IT solutions. Each mission is executed with precision,
                    leveraging next-gen technology to deliver tactical superiority.
                </p>
                <div className="w-48 h-1 bg-gradient-to-r from-transparent via-arc-500 to-transparent mx-auto mt-10 rounded-full shadow-glow"></div>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                {CARDS.map((card, idx) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className={`group relative hud-panel p-8 rounded-3xl border-2 transition-all duration-500 ${card.color === 'blue' ? 'border-arc-500/20 hover:border-arc-400/60' : 'border-stark-500/20 hover:border-stark-400/60'
                            }`}
                    >
                        {/* Corner Decorative Dots */}
                        <div className="absolute top-4 right-4 flex gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full ${card.color === 'blue' ? 'bg-arc-500/40' : 'bg-stark-500/40'}`} />
                            <div className={`w-1.5 h-1.5 rounded-full ${card.color === 'blue' ? 'bg-arc-500/20' : 'bg-stark-500/20'}`} />
                        </div>

                        <div className={`mb-6 p-4 w-fit rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500 ${card.color === 'blue' ? 'group-hover:shadow-glow' : 'group-hover:shadow-glow-red'
                            }`}>
                            <card.icon className={`w-8 h-8 ${card.color === 'blue' ? 'text-arc-400' : 'text-stark-400'}`} />
                        </div>

                        <h3 className="text-2xl font-bold text-white title-text mb-4 tracking-wide group-hover:text-arc-400 transition-colors">
                            {card.title}
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                            {card.desc}
                        </p>

                        {/* Tactical Line */}
                        <div className="mt-8 flex items-center gap-4">
                            <div className={`h-[1px] flex-1 bg-gradient-to-r from-transparent ${card.color === 'blue' ? 'via-arc-500/30' : 'via-stark-500/30'
                                } to-transparent`} />
                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                                Active
                            </div>
                            <div className={`h-[1px] flex-1 bg-gradient-to-r from-transparent ${card.color === 'blue' ? 'via-arc-500/30' : 'via-stark-500/30'
                                } to-transparent`} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
