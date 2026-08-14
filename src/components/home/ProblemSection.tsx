import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { problem } from "@/data/smartFactory";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <p className="text-xs font-medium text-accent-blue-light uppercase tracking-[0.16em] mb-3">
              {problem.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight text-white">
              {problem.heading}
            </h2>
            <p className="mt-6 text-emerald-400 font-semibold text-lg">
              {problem.resolution}
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {problem.points.map((point, i) => (
              <AnimatedSection key={point} delay={i * 0.06}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 flex items-start gap-4">
                  <span className="text-accent-blue-light text-lg font-semibold leading-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-200 leading-normal">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}