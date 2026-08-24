"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FlowDiagram from "@/components/ui/FlowDiagram";
import EditorialList from "@/components/ui/EditorialList";
import ProcessSteps from "@/components/ui/ProcessSteps";
import { collaborationPage } from "@/data/smartFactory";

export default function CollaborationPage() {
  const {
    hero,
    problem,
    transition,
    proposition,
    howItWorks,
    localServices,
    whyCollaborate,
    cta,
  } = collaborationPage;

  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-4">
                {hero.eyebrow}
              </p>
              <h1 className="text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight text-deep-forest">
                {hero.heading}
              </h1>
              <p className="mt-6 text-base md:text-[17px] leading-[1.55] text-sage max-w-[580px]">
                {hero.subhead}
              </p>
              <div className="mt-8">
                <Button href={hero.ctaHref} arrow>
                  {hero.cta}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest">
                {problem.heading}
              </h2>
              <p className="mt-2 text-[clamp(24px,2.5vw,36px)] font-semibold text-forest leading-[1.2]">
                {problem.subheading}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 max-w-[640px] space-y-6">
            {problem.paragraphs.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <p className="text-base md:text-[17px] leading-[1.6] text-sage">{p}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* The Transition */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest">
                {transition.statement}
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-12 md:mt-16">
            <FlowDiagram nodes={transition.flow} />
          </div>
        </Container>
      </section>

      {/* Core Proposition */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] tracking-tight text-deep-forest">
                {proposition.heading.map((line, li) => (
                  <span key={li} className="block">
                    {line.map((seg, si) => (
                      <span key={si} className={seg.color === "forest" ? "text-forest" : ""}>
                        {seg.text}
                      </span>
                    ))}
                  </span>
                ))}
              </h2>
            </div>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 max-w-[640px] space-y-6">
            {proposition.paragraphs.map((p, i) => (
              <AnimatedSection key={i} delay={0.08 + i * 0.08}>
                <p className="text-base md:text-[17px] leading-[1.6] text-sage">{p}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 md:mt-14 rounded-2xl border border-light-sage bg-white/60 px-6 md:px-10 py-6 md:py-8 max-w-[640px]">
              <p className="text-base md:text-lg font-semibold text-deep-forest">
                {proposition.highlight.left}
              </p>
              <p className="text-base md:text-lg font-semibold text-forest mt-1">
                {proposition.highlight.right}
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest max-w-xl">
              {howItWorks.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-10 md:mt-14">
            <ProcessSteps steps={howItWorks.steps} />
          </div>
        </Container>
      </section>

      {/* Local Services */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest max-w-xl">
              {localServices.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 max-w-[800px]">
            <EditorialList
              items={localServices.items.map((item, i) => ({
                number: `0${i + 1}`,
                title: item,
                desc: "",
              }))}
            />
          </div>
        </Container>
      </section>

      {/* Why Collaborate */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest max-w-xl">
              {whyCollaborate.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 gap-8 md:gap-10 max-w-[800px]">
            {whyCollaborate.points.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.08}>
                <h3 className="text-lg font-semibold text-deep-forest">{point.title}</h3>
                <p className="mt-2 text-sm text-sage leading-relaxed">{point.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-deep-forest text-white">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
                {cta.heading}
              </h2>
              <p className="mt-3 text-xl md:text-2xl font-semibold text-forest">
                {cta.subheading}
              </p>
              <p className="mt-4 text-base text-sage max-w-xl mx-auto">
                {cta.subhead}
              </p>
              <div className="mt-10">
                <Button href={cta.ctaHref} variant="secondary" arrow>
                  {cta.cta}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}