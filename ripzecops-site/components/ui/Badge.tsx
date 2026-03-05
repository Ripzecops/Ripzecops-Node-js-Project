import React from "react";
import { cn } from "@/lib/cn";

export default function Badge({
  children,
  className,
  tone = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "gold";
}) {
  const base =
    "inline-flex items-center px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md shadow-lg transition-all duration-300 relative font-[family-name:var(--font-heading)] before:absolute before:inset-0 before:skew-x-[-15deg] after:absolute after:inset-0 after:skew-x-[-15deg] after:border-t after:border-r";

  const toneCls =
    tone === "gold"
      ? "text-gold-400 before:bg-gold-500/10 before:border before:border-gold-500/30 after:border-gold-500/50 hover:before:bg-gold-500/20 shadow-gold-500/10"
      : "text-arc-400 before:bg-arc-500/10 before:border before:border-arc-500/30 after:border-arc-500/50 hover:before:bg-arc-500/20 shadow-arc-500/10";

  return (
    <div className={cn("relative inline-block group", className)}>
      <span className={cn(base, toneCls)}>
        <span className="relative z-10">{children}</span>
      </span>
    </div>
  );
}
