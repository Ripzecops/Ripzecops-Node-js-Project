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
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Link
                href={href}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
                className={[
                    "text-sm font-semibold text-ink-100 hover:text-white transition-all duration-300 font-heading tracking-widest uppercase px-3 py-2 rounded-lg border border-transparent hover:border-arc-500/20 hover:bg-arc-500/5 block",
                    className
                ].join(" ")}
            >
                {children}
            </Link>
        </motion.div>
    );
}
