"use client";

import Section from "@/components/ui/Section";
import { useState } from "react";

const faqs = [
  {
    q: "How do I start?",
    a: "Click ‘Chat on WhatsApp’ and share your requirements. We’ll guide you step-by-step.",
  },
  {
    q: "Do you provide full support?",
    a: "Yes. Documentation, explanation, research report, code walkthrough, and setup support are included.",
  },
  {
    q: "Can I get a combo offer?",
    a: "Yes. The combo offer provides 2 projects at an affordable price for a limited time.",
  },
  {
    q: "What about delivery time?",
    a: "Delivery depends on complexity, but we prioritize fast and reliable timelines.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="mt-14">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl title-text">FAQ</h2>
        <p className="mt-2 text-sm text-ink-200 sm:text-base">Quick answers to common questions.</p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div key={f.q} className="hud-panel hover:border-arc-400/50 transition-all duration-300">
              <button
                className="flex w-full items-center justify-between gap-4 p-6 text-left focus-ring relative z-10"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-bold text-white title-text tracking-wide">{f.q}</span>
                <span className={`text-arc-400 font-black text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {isOpen ? (
                <div className="px-6 pb-6 text-sm text-ink-100 leading-relaxed relative z-10 border-t border-arc-500/10 pt-4">
                  {f.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
