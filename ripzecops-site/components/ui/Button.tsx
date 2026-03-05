import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ href, variant = "primary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-xs font-black transition-all duration-500 active:scale-95 uppercase tracking-[0.2em] font-[family-name:var(--font-heading)] relative overflow-hidden group";
  const styles =
    variant === "primary"
      ? "bg-stark-500 text-white shadow-[0_0_30px_rgba(230,36,41,0.3)] hover:bg-stark-400 hover:shadow-[0_0_40px_rgba(230,36,41,0.5)]"
      : variant === "secondary"
        ? "bg-arc-500/10 text-arc-400 border border-arc-500/40 hover:bg-arc-500/20 hover:border-arc-400/60 shadow-[0_0_20px_rgba(0,210,255,0.1)] hover:shadow-[0_0_30px_rgba(0,210,255,0.2)]"
        : "bg-transparent text-arc-400 hover:bg-arc-500/10";

  const cls = cn(base, styles, className);

  if (href) {
    return (
      <Link href={href} className={cls}>
        {props.children}
      </Link>
    );
  }

  return <button className={cls} {...props} />;
}
