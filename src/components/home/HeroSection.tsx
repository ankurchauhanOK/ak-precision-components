"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { hero } from "@/data/smartFactory";

function HeadlineLine({ text, accent }: { text: string; accent?: string }) {
  if (!accent) return <>{text}</>;
  const [before, after] = text.split(accent);
  return (
    <>
      {before}
      <span className="text-accent-blue">{accent}</span>
      {after}
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white pt-20 md:pt-24 pb-16 md:pb-20">
      <div className="w-full">
        <div className="flex flex-col items-start text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em]"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-[1100px] text-[clamp(38px,4.5vw,58px)] font-semibold leading-[1.08] tracking-[-2.24px] text-navy"
          >
            {hero.headline.map((line, i) => (
              <Fragment key={line.text}>
                {i > 0 && <br />}
                <HeadlineLine text={line.text} accent={line.accent} />
              </Fragment>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-4"
          >
            <Button href={hero.ctaHref} variant="secondary" arrow>
              {hero.cta}
            </Button>
            <Button href={hero.ctaSecondaryHref} variant="outline" arrow>
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
