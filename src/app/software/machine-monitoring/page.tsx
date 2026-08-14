import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function MachineMonitoringPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-light">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Machine Monitoring
            </h1>
            <p className="text-base md:text-[17px] text-gray-metallic leading-[1.5] mb-8">
              Live machine status, OEE tracking, downtime analysis, and
              predictive alerts to maximize equipment productivity.
            </p>
            <Button href="/contact" variant="primary">
              Book a Demo
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-navy mb-4">Key Features</h3>
              <ul className="space-y-3 text-sm text-gray-metallic">
                <li>• Real-time machine status dashboard</li>
                <li>• OEE (Overall Equipment Effectiveness)</li>
                <li>• Downtime tracking & analysis</li>
                <li>• Production count monitoring</li>
                <li>• Predictive maintenance alerts</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-navy mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-gray-metallic">
                <li>• Increase machine utilization</li>
                <li>• Reduce unplanned downtime</li>
                <li>• Data-driven maintenance planning</li>
                <li>• Improve overall productivity</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}