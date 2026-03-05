"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { SERVICES } from "@/lib/config";
import { motion } from "framer-motion";
import { IconBrain, IconCap, IconCode, IconPen, IconPhone, IconShield, IconSpark } from "@/components/icons";

function ServiceIcon({ name }: { name: string }) {
  const cls = "h-6 w-6 text-arc-400 drop-shadow-glow";
  switch (name) {
    case "code":
      return <IconCode className={cls} />;
    case "phone":
      return <IconPhone className={cls} />;
    case "brain":
      return <IconBrain className={cls} />;
    case "shield":
      return <IconShield className={cls} />;
    case "spark":
      return <IconSpark className={cls} />;
    case "cap":
      return <IconCap className={cls} />;
    case "pen":
      return <IconPen className={cls} />;
    default:
      return <IconCode className={cls} />;
  }
}

export default function ServicesGrid({
  title = "Our Services",
  subtitle = "Modern solutions delivered with premium quality and clean execution.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section className="mt-24 relative overflow-visible">
      <div className="absolute inset-0 bg-hud-grid bg-[length:60px_60px] opacity-[0.03] pointer-events-none" />

      {/* Background Accent Glows */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-arc-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 mb-16"
      >
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl title-text mb-4 italic">
          SUPERIOR <span className="text-arc-400">SERVICES</span>
        </h2>
        <p className="max-w-2xl mx-auto text-zinc-400 font-medium sm:text-lg leading-relaxed">
          {subtitle}
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-arc-500 to-transparent mx-auto mt-8 rounded-full shadow-glow"></div>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
      >
        {SERVICES.map((s) => (
          <ServiceCard key={s.key} service={s} />
        ))}
      </motion.div>
    </Section>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="group relative h-full"
    >
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full rounded-2xl p-[1px] overflow-hidden transition-all duration-500 bg-gradient-to-br from-arc-500/20 to-transparent group-hover:from-arc-500/50"
      >
        {/* Inner Content Card */}
        <div className="relative h-full rounded-2xl bg-ink-900/90 backdrop-blur-xl p-8 border border-white/5 z-10 shadow-2xl flex flex-col items-center text-center overflow-hidden">

          {/* Animated Scan Line */}
          <div className="absolute inset-0 bg-scan-line opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arc-500/40 to-transparent animate-scan pointer-events-none opacity-0 group-hover:opacity-100" />

          {/* Corner Decals */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-arc-500/30 group-hover:border-arc-500 transition-colors" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-arc-500/30 group-hover:border-arc-500 transition-colors" />

          {/* Icon Section with 3D Pop */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="relative mb-8 p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-arc-500/50 group-hover:shadow-glow transition-all duration-500"
          >
            <ServiceIcon name={service.icon} />
            <div className="absolute -inset-4 rounded-full bg-arc-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <h3
            style={{ transform: "translateZ(30px)" }}
            className="text-2xl font-bold text-white title-text mb-4 group-hover:text-arc-400 transition-colors"
          >
            {service.title}
          </h3>

          <p
            style={{ transform: "translateZ(20px)" }}
            className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-200 transition-colors"
          >
            {service.desc}
          </p>

          {/* Bottom Decorative Data Section */}
          <div className="mt-auto pt-8 w-full">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-tighter text-zinc-600 font-mono group-hover:text-arc-400/50 transition-colors">
              <span>status: optimal</span>
              <span>id: {service.key.slice(0, 8)}</span>
              <span>ver: 2.0.4</span>
            </div>
            <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-arc-500/40" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
