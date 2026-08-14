import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import { capabilities } from "@/data/smartFactory";

export default function Capabilities7Section() {
  return (
    <section className="py-20 md:py-28 bg-gray-light">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              One Platform
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              Seven Capabilities. <span className="text-accent-blue">One Product.</span>
            </h2>
            <p className="mt-4 text-gray-metallic max-w-2xl mx-auto">
              Not seven separate software tools — one ecosystem that covers the
              most important part of your shop floor.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:shadow-md hover:border-gray-200 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-navy text-lg">{cap.title}</h3>
                  <span className="text-sm font-medium text-accent-blue">
                    {cap.number}
                  </span>
                </div>
                <p className="text-sm text-gray-metallic leading-normal">
                  {cap.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={0.35}>
            <div className="bg-navy rounded-2xl p-6 h-full flex flex-col justify-center group">
              <h3 className="font-semibold text-white text-lg mb-2">
                One subscription. One dashboard.
              </h3>
              <p className="text-sm text-gray-400">
                Every capability runs on the same platform — no separate tools,
                integrations or logins.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}