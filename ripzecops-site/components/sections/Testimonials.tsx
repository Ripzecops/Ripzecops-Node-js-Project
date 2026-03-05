"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Stark",
    role: "System Architect",
    quote: "Very professional and fast. The project delivery was clean and well-structured with proper guidance. Truly a next-gen experience.",
  },
  {
    name: "Sarah Chen",
    role: "Visual Director",
    quote: "Premium design and smooth experience. Great support and clear explanations throughout the process. Highly recommend for high-end projects.",
  },
  {
    name: "Marcus Voe",
    role: "Backend Lead",
    quote: "High-quality results with good documentation and technical walkthrough. The team bridged the gap between complex logic and clean UI perfectly.",
  },
];

export default function Testimonials() {
  return (
    <Section className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-white sm:text-4xl title-text uppercase italic italic-heading italic tracking-tighter drop-shadow-glow">
          CLIENT <span className="text-arc-400">FEEDBACK</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-arc-500 to-transparent mx-auto mt-4 rounded-full shadow-glow"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} index={i} />
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientY - rect.top - rect.height / 2) / 10;
        const y = -(e.clientX - rect.left - rect.width / 2) / 10;
        setRotate({ x, y });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      className="hud-panel p-8 rounded-2xl border-white/5 bg-ink-900/40 relative overflow-hidden group perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* HUD Corner Decor */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-arc-500/20 group-hover:border-arc-500 transition-colors" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arc-500/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

      <div style={{ transform: "translateZ(30px)" }}>
        <div className="text-lg font-black text-white title-text italic uppercase tracking-tighter italic-heading group-hover:text-arc-400 transition-colors">
          {testimonial.name}
        </div>
        <div className="mt-1 text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
          Class: {testimonial.role}
        </div>

        <div className="mt-6 text-zinc-400 text-sm leading-relaxed italic relative">
          <span className="text-3xl text-arc-500/20 absolute -top-4 -left-2 font-serif">“</span>
          {testimonial.quote}
          <span className="text-3xl text-arc-500/20 absolute -bottom-8 -right-2 font-serif">”</span>
        </div>
      </div>

      {/* Technical Data Overlay */}
      <div className="mt-10 pt-4 border-t border-white/5 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(s => (
            <div key={s} className="w-1.5 h-1.5 bg-arc-500/40 rounded-full group-hover:bg-arc-500" />
          ))}
        </div>
        <span className="text-[8px] font-mono text-zinc-600 uppercase">Verification: OK</span>
      </div>
    </motion.div>
  );
}
