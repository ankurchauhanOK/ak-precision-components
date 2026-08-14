import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { builtAroundMachines, machineFleet } from "@/data/smartFactory";

export default function BuiltAroundMachinesSection() {
  const machines = machineFleet.filter(
    (m) => m.name === "JYOTI DX 200" || m.name === "ACE VMC 740 PRO"
  );

  return (
    <section className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              {builtAroundMachines.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              {builtAroundMachines.heading}
            </h2>
            <p className="mt-4 text-gray-metallic max-w-2xl mx-auto leading-normal">
              {builtAroundMachines.subhead}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((machine, i) => (
            <AnimatedSection key={machine.id} delay={i * 0.1}>
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={machine.image}
                    alt={`${machine.name} — ${machine.type}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-xl">{machine.name}</p>
                    <p className="text-white/80 text-sm">{machine.type}</p>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-metallic">{machine.spec}</p>
                  <span className="flex-shrink-0 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
                    On our floor
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="text-center mt-10">
            <Button href={builtAroundMachines.ctaHref} variant="outline">
              {builtAroundMachines.cta}
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}