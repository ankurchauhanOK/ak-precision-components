"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { hero } from "@/data/smartFactory";

const colorClass: Record<string, string> = {
  forest: "text-forest",
  "deep-forest": "text-deep-forest",
  "action-green": "text-action-green",
  sage: "text-sage",
  "sage-hero": "text-[#8FA99B]",
};

function HeadlineLine({ segments }: { segments: { text: string; color: string }[] }) {
  return (
    <>
      {segments.map((s, i) => (
        <span key={i} className={colorClass[s.color] ?? "text-deep-forest"}>
          {s.text}
        </span>
      ))}
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-warm-bg pt-8 pb-8 md:pt-24 md:pb-20">
      <div className="w-full">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold text-forest uppercase tracking-[0.16em]"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 w-full text-[clamp(28px,7vw,58px)] font-semibold leading-[1.05] tracking-[-1.5px] md:mt-6 md:max-w-[1100px] md:text-[clamp(38px,4.5vw,58px)] md:leading-[1.08] md:tracking-[-2.24px] text-deep-forest"
          >
              {hero.headline.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                <HeadlineLine segments={line} />
              </Fragment>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 w-full flex flex-col gap-3 md:mt-10 md:flex-row md:gap-4"
          >
            <Button href={hero.ctaHref} variant="secondary" className="w-full md:w-auto">
              {hero.cta}
            </Button>
            <Button href={hero.ctaSecondaryHref} variant="outline" className="w-full md:w-auto">
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
