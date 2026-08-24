"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { showcase } from "@/data/smartFactory";

const ROTATION_MS = 10000;
const TRANSITION_MS = 600;
const SWIPE_THRESHOLD = 50;

type Direction = 1 | -1;

export default function WhatWeDoShowcaseSection() {
  const { slides, closing } = showcase;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const reducedMotion = useReducedMotion();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const count = slides.length;

  const goTo = useCallback(
    (target: number) => {
      const clamped = ((target % count) + count) % count;
      let dir: Direction = 1;
      if (clamped === count - 1 && active === 0) dir = -1;
      else if (clamped === 0 && active === count - 1) dir = 1;
      else dir = clamped > active ? 1 : -1;
      if (clamped !== active) {
        setDirection(dir);
        setActive(clamped);
      }
    },
    [active, count]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setTimeout(next, ROTATION_MS);
    return () => clearTimeout(id);
  }, [next, reducedMotion]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) next();
    else prev();
  };

  const variants = {
    enter: (dir: Direction) => ({ opacity: 0, x: dir * 24 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: Direction) => ({ opacity: 0, x: dir * -24 }),
  };

  return (
    <section className="bg-warm-bg pb-20 md:pb-24" aria-label="What we do showcase">
      <Container>
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-4">
              {showcase.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest">
              {showcase.heading}
            </h2>
            <p className="mt-5 text-base md:text-[17px] leading-[1.55] text-sage max-w-[580px] mx-auto">
              {showcase.subhead}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 md:mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="AK Precision offerings"
            className="flex gap-7 w-full max-w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center"
          >
            {slides.map((slide, i) => {
              const isActive = active === i;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  id={`showcase-tab-${slide.id}`}
                  aria-selected={isActive}
                  aria-controls="showcase-panel"
                  onClick={() => goTo(i)}
                  className={`relative shrink-0 rounded-full px-7 py-3 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#F0F2F5] text-[#315C4A] border border-white/40 shadow-btn"
                      : "text-nav-text hover:bg-light-sage/40 hover:text-[#17251F] border border-transparent"
                  }`}
                >
                  <span>{slide.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 md:mt-14 mx-[-4px] md:mx-[-32px] lg:mx-[-80px]">
          <div
            role="tabpanel"
            id="showcase-panel"
            aria-labelledby={`showcase-tab-${slides[active].id}`}
            className="relative w-full aspect-[7/5] overflow-hidden bg-warm-bg"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: TRANSITION_MS / 1000, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[active].image}
                  alt={slides[active].imageAlt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 rounded-2xl border border-light-sage bg-white/60 px-6 py-5 text-center">
            <span className="text-sm font-semibold text-deep-forest">{closing.left}</span>
            <span className="text-sm font-medium text-forest" aria-hidden>
              {closing.plus}
            </span>
            <span className="text-sm font-semibold text-deep-forest">{closing.right}</span>
            <span className="text-sm font-semibold text-sage" aria-hidden>
              {closing.equals}
            </span>
            <span className="text-sm font-medium text-forest">{closing.result}</span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}