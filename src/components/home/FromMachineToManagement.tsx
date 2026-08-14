"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { machineToManagement } from "@/data/smartFactory";

export default function FromMachineToManagement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.45"],
  });

  const floorOpacity = useTransform(scrollYProgress, [0, 0.12], [0.25, 1]);
  const connectivityOpacity = useTransform(scrollYProgress, [0.12, 0.28], [0.25, 1]);
  const platformOpacity = useTransform(scrollYProgress, [0.28, 0.48], [0.25, 1]);
  const intelligenceOpacity = useTransform(scrollYProgress, [0.48, 0.68], [0.25, 1]);
  const managementOpacity = useTransform(scrollYProgress, [0.68, 0.85], [0.25, 1]);

  const line1 = useTransform(scrollYProgress, [0.1, 0.22], [0, 1]);
  const line2 = useTransform(scrollYProgress, [0.26, 0.38], [0, 1]);
  const line3 = useTransform(scrollYProgress, [0.46, 0.58], [0, 1]);
  const line4 = useTransform(scrollYProgress, [0.66, 0.8], [0, 1]);

  return (
    <section className="py-20 md:py-28 bg-deep-forest overflow-hidden">
      <Container>
        <div className="text-center mb-14">
          <p className="text-xs font-medium text-sage uppercase tracking-[0.16em] mb-3">
            {machineToManagement.eyebrow}
          </p>
          <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-white">
            {machineToManagement.heading}
          </h2>
        </div>

        <div ref={ref} className="max-w-xl mx-auto">
          {/* SHOP FLOOR */}
          <motion.div style={{ opacity: floorOpacity }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <p className="text-xs font-medium text-sage uppercase tracking-widest mb-4">
                Shop Floor
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                {machineToManagement.floor.map((machine) => (
                  <span
                    key={machine}
                    className="px-4 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm font-semibold"
                  >
                    {machine}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CONNECTOR */}
          <motion.div style={{ scaleY: line1 }} className="h-10 w-px bg-sage mx-auto origin-top" />

          {/* CONNECTIVITY */}
          <motion.div style={{ opacity: connectivityOpacity }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-white font-semibold">
                {machineToManagement.connectivity}
              </p>
            </div>
          </motion.div>

          {/* CONNECTOR */}
          <motion.div style={{ scaleY: line2 }} className="h-10 w-px bg-sage mx-auto origin-top" />

          {/* PLATFORM */}
          <motion.div style={{ opacity: platformOpacity }}>
            <div className="bg-gradient-to-br from-forest to-action-green rounded-2xl px-6 py-6 text-center shadow-lg">
              <p className="text-white font-semibold text-lg">
                {machineToManagement.platform}
              </p>
              <p className="text-sage text-sm mt-1">
                {machineToManagement.platformSub}
              </p>
            </div>
          </motion.div>

          {/* CONNECTOR + SPLIT */}
          <motion.div style={{ scaleY: line3 }} className="h-10 w-px bg-sage mx-auto origin-top" />

          {/* INTELLIGENCE */}
          <motion.div style={{ opacity: intelligenceOpacity }}>
            <div className="flex justify-center gap-4 flex-wrap py-2">
              {machineToManagement.intelligence.map((item) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center min-w-28"
                >
                  <p className="text-sage text-xl mb-1">●</p>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CONNECTOR */}
          <motion.div style={{ scaleY: line4 }} className="h-10 w-px bg-sage mx-auto origin-top" />

          {/* MANAGEMENT */}
          <motion.div style={{ opacity: managementOpacity }}>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center">
              <p className="text-white font-semibold">
                {machineToManagement.management}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/smart-factory"
            className="inline-flex items-center gap-2 text-sage font-medium hover:text-white transition-colors"
          >
            See the full architecture →
          </Link>
        </div>
      </Container>
    </section>
  );
}