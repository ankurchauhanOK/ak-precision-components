import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ProductionManagementPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Software
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Production Management
            </h1>
            <p className="section-description text-deep-forest mb-8">
              Production becomes easier to manage when everyone can see the
              same thing.
              Track jobs from assignment to completion, see current production
              status and identify delays before they disappear into paperwork.
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
                <li>• Production scheduling board</li>
                <li>• Job card creation & tracking</li>
                <li>• Operator & machine assignment</li>
                <li>• Real-time production status</li>
                <li>• Delay & bottleneck alerts</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="card-title text-deep-forest mb-4">Benefits</h3>
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