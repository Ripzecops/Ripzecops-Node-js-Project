"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface NavButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function NavButton({ href, children, className, onClick }: NavButtonProps) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / 5;
        const rotateY = (x - centerX) / 5;
        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            style={{ perspective: 1000 }}
            animate={{
                rotateX: rotate.x,
                rotateY: rotate.y,
                scale: rotate.x !== 0 ? 1.05 : 1
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            <Link
                href={href}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
                className={[
                    "group relative overflow-hidden text-[11px] font-black tracking-[0.2em] text-zinc-400 uppercase px-6 py-3 rounded-lg border border-arc-500/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:text-white hover:border-arc-500/40 hover:shadow-[0_0_15px_rgba(0,210,255,0.15)] flex items-center gap-3",
                    className
                ].join(" ")}
            >
                {/* Animated Background Pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-arc-500/10 via-transparent to-arc-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Decorative Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-arc-500/30 group-hover:bg-arc-400 group-hover:shadow-glow transition-all" />

                {children}

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-arc-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-arc-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
        </motion.div>
    );
}
