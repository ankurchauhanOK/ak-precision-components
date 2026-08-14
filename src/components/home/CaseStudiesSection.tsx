import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { caseStudies } from "@/data/smartFactory";

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              {caseStudies.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              {caseStudies.heading}
            </h2>
            <p className="mt-4 text-gray-metallic max-w-xl mx-auto">
              {caseStudies.note}
            </p>
          </div>
        </AnimatedSection>

        {caseStudies.items.map((study, i) => (
          <AnimatedSection key={study.title} delay={i * 0.1}>
            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-navy">{study.title}</h3>
                  <p className="text-sm text-gray-metallic mt-1">
                    {study.customer}
                  </p>
                </div>
                <div className="flex gap-6">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-semibold text-accent-blue">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-metallic max-w-24">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-light rounded-2xl p-6">
                  <p className="text-xs font-medium text-gray-metallic uppercase tracking-widest mb-3">
                    Before
                  </p>
                  <ul className="space-y-2">
                    {study.before.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-metallic">
                        <span className="text-rose-400 font-semibold">−</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-navy rounded-2xl p-6">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
                    After
                  </p>
                  <ul className="space-y-2">
                    {study.after.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                        <span className="text-emerald-400 font-semibold">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </Container>
    </section>
  );
}