import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { whyAK } from "@/data/smartFactory";

export default function WhyAKSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-light">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              {whyAK.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight max-w-3xl mx-auto">
              {whyAK.heading}
            </h2>
            <p className="mt-4 text-gray-metallic max-w-2xl mx-auto leading-normal">
              {whyAK.subhead}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyAK.pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-md hover:border-gray-200 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue to-blue-400 flex items-center justify-center text-white font-semibold mb-4">
                  {pillar.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-navy mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-metallic leading-normal">
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
                className="text-sm font-semibold text-navy bg-white border border-gray-200 rounded-xl px-4 py-2"
              >
                {pillar.title}
              </span>
            ))}
            <span className="text-accent-blue text-2xl font-semibold">=</span>
            <span className="text-sm font-semibold text-white bg-navy rounded-xl px-5 py-2.5">
              {whyAK.result}
            </span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}