import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function MachineMonitoringPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Software
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Machine Monitoring
            </h1>
            <p className="section-description text-deep-forest mb-8">
              A machine that is running is not necessarily a machine that is
              performing.
              Live status, OEE tracking, downtime analysis and alerts to help
              you understand what is actually happening on the shop floor.
            </p>
            <Button href="/contact" variant="primary">
              Talk to AKPC
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="card-title text-deep-forest mb-4">Key Features</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Real-time machine status dashboard</li>
                <li>• OEE (Overall Equipment Effectiveness)</li>
                <li>• Downtime tracking & analysis</li>
                <li>• Production count monitoring</li>
                <li>• Predictive maintenance alerts</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="card-title text-deep-forest mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-sage">
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