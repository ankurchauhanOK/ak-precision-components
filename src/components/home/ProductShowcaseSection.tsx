import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { dashboard, machineFleet } from "@/data/smartFactory";

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

export default function ProductShowcaseSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              The Product
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              Meet <span className="text-forest">AK Smart Factory Lite</span>
            </h2>
            <p className="mt-4 text-sage max-w-2xl mx-auto">
              A practical factory monitoring and traceability platform for CNC
              and VMC machine shops — not a six-month ERP project.
            </p>
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
                <p className="text-sage text-xs mt-1">Overall equipment effectiveness</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-sage text-sm mb-1">Production</p>
                <p className="text-3xl font-semibold text-white">{dashboard.production}</p>
                <p className="text-sage text-xs mt-1">
                  Target {dashboard.targetVsActual.target}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-sage text-sm mb-1">Downtime</p>
                <p className="text-3xl font-semibold text-white">{dashboard.downtime}</p>
                <p className="text-sage text-xs mt-1">Logged this shift</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-sage text-sm mb-1">Efficiency</p>
                <p className="text-3xl font-semibold text-white">{dashboard.efficiency}</p>
                <p className="text-sage text-xs mt-1">Schedule adherence</p>
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

        <AnimatedSection delay={0.2}>
          <div className="text-center mt-10">
            <Button href="/smart-factory" variant="primary">
              See How It Works
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}