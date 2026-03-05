"use client";

import React from "react";
import { useFx } from "@/lib/providers/FxProvider";

export default function FxToggle() {
  const { fxEnabled, setFxEnabled } = useFx();
  return (
    <button
      type="button"
      className="hud-panel px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-ink-800 active:scale-95 border-arc-500/30 group"
      onClick={() => setFxEnabled(!fxEnabled)}
      aria-pressed={fxEnabled}
      aria-label="Toggle background effects"
      title="Background FX"
    >
      <span className="flex items-center gap-2">
        <span className="text-ink-300">CORE FX:</span>
        <span className={fxEnabled ? "text-arc-400 drop-shadow-glow" : "text-stark-500"}>
          {fxEnabled ? "OPTIMIZED" : "STABLE"}
        </span>
      </span>
    </button>
  );
}
