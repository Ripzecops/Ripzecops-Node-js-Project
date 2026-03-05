"use client";

import { useMemo, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SERVICES } from "@/lib/config";
import { buildWaLink, buildWaMessage } from "@/lib/wa";
import { useToast } from "@/lib/providers/ToastProvider";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  contact: z.string().min(6, "Enter phone or email"),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Write a short message"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const { showToast } = useToast();
  const [waMsg, setWaMsg] = useState<string | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLFormElement>(null);

  const serviceOptions = useMemo(() => SERVICES.map((s) => s.title), []);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      contact: "",
      service: "",
      message: "",
    },
  });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const onSubmit = (values: FormValues) => {
    const msg = buildWaMessage(values);
    setWaMsg(msg);
    showToast({
      title: "CONNECTION SECURE",
      description: "Data packets ready. Transmit via encrypted WhatsApp channel.",
    });
  };

  return (
    <motion.form
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateX: rotate.x,
        rotateY: rotate.y
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onSubmit={form.handleSubmit(onSubmit)}
      className="hud-panel p-8 border-arc-500/30 relative perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-arc-500 opacity-40" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-arc-500 opacity-40" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-arc-500 opacity-40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-arc-500 opacity-40" />

      <div className="flex justify-between items-start mb-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div>
          <h2 className="text-xl font-black text-white title-text italic tracking-tighter uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-arc-400 animate-pulse shadow-glow" />
            Project <span className="text-arc-400">Initialization</span>
          </h2>
          <p className="text-[10px] text-arc-300/60 font-mono mt-1 uppercase tracking-widest">System Status: Awaiting Input...</p>
        </div>
        <div className="text-[10px] font-mono text-zinc-500 text-right opacity-50">
          SECURE_NODE: RF-92
          <br />
          PORT: TCP/8080
        </div>
      </div>

      <div className="grid gap-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
        <Field label="Operator Identification" error={form.formState.errors.name?.message}>
          <div className="relative group">
            <input
              className="w-full rounded-lg border border-arc-500/20 bg-ink-950/90 px-4 py-3 text-sm text-white focus:border-arc-500/60 focus:ring-1 focus:ring-arc-500/30 transition-all font-mono placeholder:text-zinc-700"
              placeholder="Full Name"
              {...form.register("name")}
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none opacity-20 group-focus-within:opacity-100 transition-opacity">
              <div className="w-1 h-3 bg-arc-500 animate-pulse" />
            </div>
          </div>
        </Field>

        <Field label="Communication Channel" error={form.formState.errors.contact?.message}>
          <input
            className="w-full rounded-lg border border-arc-500/20 bg-ink-950/90 px-4 py-3 text-sm text-white focus:border-arc-500/60 focus:ring-1 focus:ring-arc-500/30 transition-all font-mono placeholder:text-zinc-700"
            placeholder="Email or Phone Number"
            {...form.register("contact")}
          />
        </Field>

        <Field label="Sector Selection" error={form.formState.errors.service?.message}>
          <div className="relative">
            <select
              className="w-full rounded-lg border border-arc-500/20 bg-ink-950/90 px-4 py-3 text-sm text-white focus:border-arc-500/60 focus:ring-1 focus:ring-arc-500/30 transition-all font-mono appearance-none"
              {...form.register("service")}
            >
              <option value="" className="bg-ink-900">Select Project Sector</option>
              {serviceOptions.map((o) => (
                <option key={o} value={o} className="bg-ink-900">
                  {o.toUpperCase()}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-arc-500/50">▼</div>
          </div>
        </Field>

        <Field label="Mission Briefing" error={form.formState.errors.message?.message}>
          <textarea
            className="min-h-[140px] w-full resize-none rounded-lg border border-arc-500/20 bg-ink-950/90 px-4 py-3 text-sm text-white focus:border-arc-500/60 focus:ring-1 focus:ring-arc-500/30 transition-all font-mono placeholder:text-zinc-700"
            placeholder="Describe your requirements and timeline..."
            {...form.register("message")}
          />
        </Field>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-arc-500/5 border border-arc-500/40 px-6 py-4 text-xs font-black text-arc-400 uppercase tracking-[0.3em] font-heading hover:bg-arc-500/20 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,210,255,0.1)]"
          >
            Encrypt & Package
          </button>

          <AnimatePresence>
            {waMsg && (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                href={buildWaLink(waMsg)}
                target="_blank"
                rel="noreferrer"
                className="flex-1 glow-btn text-center text-xs flex items-center justify-center gap-2"
              >
                Launch Transmission
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Technical Overlay */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-zinc-600 uppercase tracking-widest pointer-events-none select-none">
        <span>Prot: Stark-UX-4</span>
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-zinc-800" />
          <div className="w-1 h-1 bg-zinc-800" />
          <div className="w-1 h-1 bg-arc-500" />
        </div>
        <span>CRC: Approved</span>
      </div>
    </motion.form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <label className="text-[10px] font-bold text-arc-500/70 uppercase tracking-[0.2em] font-mono">
          {label}
        </label>
        {error ? (
          <motion.span
            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-bold text-stark-400 italic"
          >
            ! {error}
          </motion.span>
        ) : null}
      </div>
      {children}
    </div>
  );
}
