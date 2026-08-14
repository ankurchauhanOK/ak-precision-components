import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { audiences } from "@/data/smartFactory";

export default function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-light">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              {audiences.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              {audiences.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.items.map((audience, i) => (
            <AnimatedSection key={audience.title} delay={i * 0.08}>
              <div className="bg-white rounded-3xl border border-gray-100 p-8 h-full hover:shadow-md hover:border-gray-200 transition-all duration-300">
                <span className="inline-block text-xs font-medium text-accent-blue bg-accent-blue/10 rounded-full px-3 py-1 mb-4">
                  {audience.scope}
                </span>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-metallic leading-normal">
                  {audience.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="text-center mt-10">
            <p className="text-navy font-semibold text-lg">
              {audiences.note}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}