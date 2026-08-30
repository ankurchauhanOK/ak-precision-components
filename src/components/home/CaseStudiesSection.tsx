import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { caseStudies } from "@/data/smartFactory";

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              {caseStudies.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              {caseStudies.heading}
            </h2>
            <p className="mt-4 text-sage max-w-xl mx-auto">
              {caseStudies.note}
            </p>
          </div>
        </AnimatedSection>

        {caseStudies.items.length > 0 && caseStudies.items.map((study, i) => (
          <AnimatedSection key={study.title} delay={i * 0.1}>
            <div className="bg-white rounded-3xl border border-light-sage p-8 md:p-10">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-deep-forest">{study.title}</h3>
                  <p className="text-sm text-sage mt-1">
                    {study.customer}
                  </p>
                </div>
                <div className="flex gap-6">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-semibold text-forest">
                        {stat.value}
                      </p>
                      <p className="text-xs text-sage max-w-24">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-warm-bg rounded-2xl p-6">
                  <p className="text-xs font-medium text-sage uppercase tracking-widest mb-3">
                    Before
                  </p>
                  <ul className="space-y-2">
                    {study.before.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-sage">
                        <span className="text-rose-400 font-semibold">−</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-deep-forest rounded-2xl p-6">
                  <p className="text-xs font-medium text-sage uppercase tracking-widest mb-3">
                    After
                  </p>
                  <ul className="space-y-2">
                    {study.after.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-light-sage">
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