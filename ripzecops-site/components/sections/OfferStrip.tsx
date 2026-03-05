"use client";

import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import { OFFERS } from "@/lib/config";
import { motion } from "framer-motion";

export default function OfferStrip() {
  return (
    <Section className="mt-8">
      <div className="hud-panel rounded-3xl p-5 sm:p-6 border-arc-500/30">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between relative z-10">
          <div>
            <div className="text-sm font-extrabold text-white title-text">Get 2 Projects at Affordable Price!</div>
            <div className="mt-1 text-sm text-ink-200">
              Limited-time combo offer designed to deliver maximum value.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {OFFERS.map((o) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Badge tone="gold">{o}</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
