import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { audiences } from "@/data/smartFactory";

export default function AudienceSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-bg">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
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
              <div className="bg-white rounded-3xl border border-light-sage p-8 h-full hover:shadow-md hover:border-light-sage transition-all duration-300">
                <span className="inline-block text-xs font-medium text-forest bg-forest/10 rounded-full px-3 py-1 mb-4">
                  {audience.scope}
                </span>
                <h3 className="text-xl font-semibold text-deep-forest mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-sage leading-normal">
                  {audience.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="text-center mt-10">
            <p className="text-deep-forest font-semibold text-lg">
              {audiences.note}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}