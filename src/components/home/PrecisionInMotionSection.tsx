"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { videoStory } from "@/data/smartFactory";

export default function PrecisionInMotionSection() {
  return (
    <section className="bg-warm-bg pt-0 pb-16 md:pb-24">
      <div className="w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-0 md:mt-0 w-full"
          >
            <VideoPlayer src={videoStory.videoSrc} />
          </motion.div>

          <AnimatedSection delay={0.1}>
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {videoStory.steps.map((step, i) => (
                <span key={step} className="flex items-center gap-2 md:gap-3">
                  <span className="text-xs font-medium text-sage uppercase tracking-[0.2em]">
                    {step}
                  </span>
                  {i < videoStory.steps.length - 1 && (
                    <span className="text-forest text-xs" aria-hidden>
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}