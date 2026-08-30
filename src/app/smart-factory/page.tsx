import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import {
  capabilities,
  dashboard,
  machineFleet,
  pricing,
  productPage,
} from "@/data/smartFactory";

const statusColor: Record<string, string> = {
  RUNNING: "bg-emerald-400",
  IDLE: "bg-amber-400",
  MAINTENANCE: "bg-rose-400",
};
const statusText: Record<string, string> = {
  RUNNING: "text-emerald-400",
  IDLE: "text-amber-400",
  MAINTENANCE: "text-rose-400",
};

export default function SmartFactoryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              {productPage.hero.eyebrow}
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              {productPage.hero.heading}
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              {productPage.hero.subhead}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary">
                {productPage.hero.ctaPrimary}
              </Button>
              <Button href="/contact" variant="outline">
                {productPage.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
                One Platform
              </p>
              <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
                Seven Capabilities
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-light-sage p-6 h-full hover:shadow-md hover:border-light-sage transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-deep-forest text-lg">{cap.title}</h3>
                    <span className="text-sm font-medium text-forest">
                      {cap.number}
                    </span>
                  </div>
                  <p className="text-sm text-sage leading-normal">
                    {cap.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
                The Dashboard
              </p>
              <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
                Everything live. Nothing guessed.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-deep-forest rounded-3xl p-6 md:p-10 shadow-2xl border border-forest">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-white font-semibold">{dashboard.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-sage/60 border border-sage/20 rounded-full px-2.5 py-0.5">Demo Data</span>
                  <span className="text-sage text-sm">{dashboard.shift}</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-sage text-sm mb-1">OEE</p>
                  <p className="text-3xl font-semibold text-emerald-400">{dashboard.oee}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-sage text-sm mb-1">Production</p>
                  <p className="text-3xl font-semibold text-white">{dashboard.production}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-sage text-sm mb-1">Downtime</p>
                  <p className="text-3xl font-semibold text-white">{dashboard.downtime}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-sage text-sm mb-1">Efficiency</p>
                  <p className="text-3xl font-semibold text-white">{dashboard.efficiency}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-[1fr_auto_auto_auto] md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-6 py-3 text-xs font-medium text-sage uppercase tracking-wider border-b border-white/10">
                  <span>Machine</span>
                  <span className="text-right">Status</span>
                  <span className="text-right">Cycle</span>
                  <span className="text-right">OEE</span>
                </div>
                {machineFleet.map((machine) => (
                  <div
                    key={machine.id}
                    className="grid grid-cols-[1fr_auto_auto_auto] md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-6 py-4 border-b border-white/5 last:border-0 items-center"
                  >
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {machine.name}
                      </p>
                      <p className="text-sage text-xs">{machine.type}</p>
                    </div>
                    <p
                      className={`text-sm font-semibold text-right flex items-center justify-end gap-2 ${statusText[machine.status]}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${statusColor[machine.status]}`} />
                      {machine.status}
                    </p>
                    <p className="text-sm text-light-sage text-right">{machine.cycleTime}</p>
                    <p className="text-sm text-light-sage text-right">
                      {machine.status === "RUNNING" ? `${machine.oee}%` : "—"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
                What&apos;s Included
              </p>
              <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
                Everything you need to go digital.
              </h2>
              <ul className="space-y-3">
                {productPage.included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-deep-forest font-medium">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-semibold text-sm">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-deep-forest rounded-3xl p-8">
                <p className="text-xs font-medium text-sage uppercase tracking-widest mb-6">
                  {productPage.architecture.label}
                </p>
                <div className="space-y-0">
                  {productPage.architecture.layers.map((layer, i) => (
                    <div key={layer} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-white/10 text-sage flex items-center justify-center text-sm font-semibold flex-shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-white font-semibold py-1">{layer}</p>
                        {i < productPage.architecture.layers.length - 1 && (
                          <div className="w-px h-8 bg-white/10 ml-4" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-warm-bg">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
                Deployment
              </p>
              <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
                Start small. Scale when ready.
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {productPage.deployment.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-light-sage p-6 h-full hover:shadow-md transition-all duration-300">
                  <p className="text-sm font-medium text-forest mb-3">{step.step}</p>
                  <h3 className="font-semibold text-deep-forest mb-2">{step.title}</h3>
                  <p className="text-sm text-sage leading-normal">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection>
            <div className="bg-white rounded-3xl border border-light-sage p-10 md:p-14 text-center max-w-3xl mx-auto shadow-sm">
              <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
                {pricing.eyebrow}
              </p>
              <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-4">
                {pricing.heading}
              </h2>
              <p className="text-4xl font-semibold text-deep-forest mb-2">
                {pricing.startingFrom}
              </p>
              <p className="text-sm text-sage mb-4">{pricing.range}</p>
              <p className="text-sm text-sage max-w-md mx-auto mb-8">
                {pricing.note}
              </p>
              <Button href="/contact" variant="secondary">
                {pricing.cta}
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <FinalCTASection />
    </>
  );
}