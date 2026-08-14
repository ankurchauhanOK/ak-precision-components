import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { roadmap } from "@/data/smartFactory";

export default function RoadmapSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-light">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              {roadmap.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              {roadmap.heading}
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {roadmap.layers.map((layer, i) => (
            <AnimatedSection key={layer.year} delay={i * 0.06}>
              <div className="flex items-start gap-6 group">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 text-center">
                    <span className="text-sm font-medium text-accent-blue whitespace-nowrap">
                      {layer.year}
                    </span>
                  </div>
                  {i < roadmap.layers.length - 1 && (
                    <div className="w-px h-10 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-10 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm font-semibold text-navy bg-white border border-gray-200 rounded-xl px-4 py-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <p className="text-center text-gray-metallic max-w-2xl mx-auto leading-normal">
            {roadmap.closer}
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}