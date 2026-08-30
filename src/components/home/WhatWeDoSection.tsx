import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { whatWeDo } from "@/data/smartFactory";

export default function WhatWeDoSection() {
  const { eyebrow, heading, subhead, items, equation } = whatWeDo;

  return (
    <section id="capabilities" className="py-8 md:py-24 bg-warm-bg">
      <Container>
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-4">
              {eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest">
              {heading}
            </h2>
            <p className="mt-5 text-base md:text-[17px] leading-[1.55] text-sage max-w-[580px] mx-auto">
              {subhead}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <AnimatedSection key={item.number} delay={i * 0.08}>
              <Link
                href={item.href}
                className="group flex flex-col h-full bg-white rounded-2xl border border-light-sage p-6 hover:border-light-sage hover:shadow-soft transition-all duration-300"
              >
                <span className="text-xs font-medium text-forest tracking-[0.2em]">
                  {item.number}
                </span>
                <h3 className="mt-3 text-base font-semibold text-deep-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-normal text-sage flex-1">
                  {item.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-all duration-300 group-hover:gap-2.5">
                  {item.cta}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 rounded-2xl border border-light-sage bg-warm-bg/60 px-6 py-5 text-center">
            <span className="text-sm font-semibold text-deep-forest">{equation.left}</span>
            <span className="text-sm font-medium text-forest" aria-hidden>
              {equation.plus}
            </span>
            <span className="text-sm font-semibold text-deep-forest">{equation.right}</span>
            <span className="text-sm font-semibold text-sage" aria-hidden>
              {equation.equals}
            </span>
            <span className="text-sm font-medium text-forest">
              {equation.result}
            </span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}