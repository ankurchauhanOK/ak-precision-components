import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProductionManagementPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Production Management
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              Plan, track, and optimize your production workflows in real time.
              From job assignment to final dispatch.
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
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="font-semibold text-deep-forest mb-4">Key Features</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Production scheduling board</li>
                <li>• Job card creation & tracking</li>
                <li>• Operator & machine assignment</li>
                <li>• Real-time production status</li>
                <li>• Delay & bottleneck alerts</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="font-semibold text-deep-forest mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Reduced lead times</li>
                <li>• Better resource utilization</li>
                <li>• Complete production visibility</li>
                <li>• Data-driven decision making</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}