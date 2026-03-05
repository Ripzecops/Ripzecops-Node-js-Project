"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function Typewriter({ text, className, delay = 0 }: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let currentIndex = 0;

        const startTyping = () => {
            if (currentIndex < text.length) {
                setDisplayText(text.substring(0, currentIndex + 1));
                currentIndex++;
                timeout = setTimeout(startTyping, 50);
            } else {
                setIsDone(true);
            }
        };

        const initialTimeout = setTimeout(startTyping, delay * 1000);

        return () => {
            clearTimeout(timeout);
            clearTimeout(initialTimeout);
        };
    }, [text, delay]);

    return (
        <span className={className}>
            {displayText}
            {!isDone && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[4px] h-[1em] bg-arc-400 ml-1 align-middle"
                />
            )}
        </span>
    );
}
