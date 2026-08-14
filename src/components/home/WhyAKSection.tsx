import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { whyAK } from "@/data/smartFactory";

export default function WhyAKSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-bg">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              {whyAK.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight max-w-3xl mx-auto">
              {whyAK.heading}
            </h2>
            <p className="mt-4 text-sage max-w-2xl mx-auto leading-normal">
              {whyAK.subhead}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyAK.pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-light-sage p-6 h-full hover:shadow-md hover:border-light-sage transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest to-action-green flex items-center justify-center text-white font-semibold mb-4">
                  {pillar.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-deep-forest mb-2">{pillar.title}</h3>
                <p className="text-sm text-sage leading-normal">
                  {pillar.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            {whyAK.pillars.map((pillar) => (
              <span
                key={pillar.title}
                className="text-sm font-semibold text-deep-forest bg-white border border-light-sage rounded-xl px-4 py-2"
              >
                {pillar.title}
              </span>
            ))}
            <span className="text-forest text-2xl font-semibold">=</span>
            <span className="text-sm font-semibold text-white bg-deep-forest rounded-xl px-5 py-2.5">
              {whyAK.result}
            </span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}