"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import VideoPlayer from "@/components/ui/VideoPlayer";
import EditorialList from "@/components/ui/EditorialList";
import ProcessSteps from "@/components/ui/ProcessSteps";
import { softwarePage } from "@/data/smartFactory";

export default function SoftwarePage() {
  const { hero, capabilities, projects, process, cta } = softwarePage;

  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24 bg-warm-bg">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="section-label text-forest mb-4">
                {hero.eyebrow}
              </p>
              <h1 className="page-title text-[clamp(32px,4vw,52px)] text-deep-forest">
                {hero.heading.map((line, li) => (
                  <span key={li} className="block">
                    {line.map((seg, si) => (
                      <span key={si} className={seg.color === "forest" ? "text-forest" : ""}>
                        {seg.text}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
              <p className="mt-6 section-description text-deep-forest max-w-[520px]">
                {hero.subhead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href={hero.ctaHref} arrow>
                  {hero.cta}
                </Button>
                <Link
                  href={hero.ctaSecondaryHref}
                  className="text-sm font-medium text-forest hover:text-sage transition-colors"
                >
                  {hero.ctaSecondary}
                  <span aria-hidden className="ml-1">→</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative rounded-[28px] overflow-hidden border border-light-sage bg-white shadow-soft aspect-[4/3]">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3vw,40px)] section-title text-deep-forest max-w-xl">
              {capabilities.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 max-w-[800px]">
            <EditorialList items={capabilities.items} />
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 md:py-28 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <h2 className="text-[clamp(28px,3vw,40px)] section-title text-deep-forest">
                {projects.heading}
              </h2>
              <p className="mt-4 section-description text-deep-forest max-w-[520px]">
                {projects.subhead}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 max-w-[900px]">
            <AnimatedSection delay={0.1}>
              <VideoPlayer src="/videos/cnc-to-vmc.mp4" />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="card-title text-deep-forest">
                    {projects.items[0].title}
                  </h3>
                  <p className="mt-1 text-sm text-sage">{projects.items[0].category}</p>
                </div>
                <p className="card-description text-sage max-w-[400px]">{projects.items[0].desc}</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3vw,40px)] section-title text-deep-forest max-w-xl">
              {process.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-10 md:mt-14">
            <ProcessSteps steps={process.steps} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-deep-forest text-white">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[clamp(28px,3vw,40px)] section-title">
                {cta.heading}
              </h2>
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