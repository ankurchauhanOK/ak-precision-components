"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import EditorialList from "@/components/ui/EditorialList";
import { partnerNetworkPage } from "@/data/smartFactory";

export default function PartnerNetworkPage() {
  const {
    hero,
    forEquipmentCompanies,
    forFactories,
    automation,
    whyPartner,
    cta,
  } = partnerNetworkPage;

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
              <h1 className="text-[clamp(32px,4vw,52px)] font-semibold leading-[1.1] tracking-tight text-deep-forest whitespace-pre-line">
                {hero.heading}
              </h1>
              <p className="mt-6 text-base md:text-[17px] leading-[1.55] text-sage max-w-[580px]">
                {hero.subhead}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href={hero.ctaPrimaryHref} arrow>
                  {hero.ctaPrimary}
                </Button>
                <Button href={hero.ctaSecondaryHref} variant="secondary" arrow>
                  {hero.ctaSecondary}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Two-column audience section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* For Equipment Companies */}
            <AnimatedSection>
              <h2 className="text-[clamp(24px,3vw,36px)] font-semibold leading-[1.15] tracking-tight text-deep-forest">
                {forEquipmentCompanies.heading}
              </h2>
              <p className="mt-4 text-base md:text-[17px] leading-[1.55] text-sage">
                {forEquipmentCompanies.subhead}
              </p>

              <div className="mt-8 space-y-3">
                {forEquipmentCompanies.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                    <span className="text-sm text-sage">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href={forEquipmentCompanies.ctaHref} arrow>
                  {forEquipmentCompanies.cta}
                </Button>
              </div>
            </AnimatedSection>

            {/* For Factories */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-[clamp(24px,3vw,36px)] font-semibold leading-[1.15] tracking-tight text-deep-forest">
                {forFactories.heading}
              </h2>
              <p className="mt-4 text-base md:text-[17px] leading-[1.55] text-sage">
                {forFactories.subhead}
              </p>

              <div className="mt-8 space-y-3">
                {forFactories.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                    <span className="text-sm text-sage">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href={forFactories.ctaHref} arrow>
                  {forFactories.cta}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Automation & Integration */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-4">
                {automation.eyebrow}
              </p>
              <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest">
                {automation.heading}
              </h2>
              <p className="mt-4 text-base md:text-[17px] leading-[1.55] text-sage max-w-[580px]">
                {automation.subhead}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 max-w-[800px]">
            <EditorialList
              items={automation.capabilities.map((cap, i) => ({
                number: `0${i + 1}`,
                title: cap,
                desc: "",
              }))}
            />
          </div>
        </Container>
      </section>

      {/* Why Partner */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-deep-forest max-w-xl">
              {whyPartner.heading}
            </h2>
          </AnimatedSection>

          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 gap-8 md:gap-10 max-w-[800px]">
            {whyPartner.reasons.map((reason, i) => (
              <AnimatedSection key={reason.title} delay={i * 0.08}>
                <h3 className="text-lg font-semibold text-deep-forest">{reason.title}</h3>
                <p className="mt-2 text-sm text-sage leading-relaxed">{reason.desc}</p>
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
