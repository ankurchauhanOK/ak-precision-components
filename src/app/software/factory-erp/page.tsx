import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FactoryErpPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Factory ERP
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              End-to-end enterprise resource planning designed for manufacturing units.
              Manage purchasing, production, inventory, sales, and finance in one place.
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
                <li>• Purchase order management</li>
                <li>• Production planning & scheduling</li>
                <li>• Inventory tracking across locations</li>
                <li>• Sales order & invoice management</li>
                <li>• Financial accounting & reporting</li>
                <li>• Vendor & customer management</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="font-semibold text-deep-forest mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Single source of truth for operations</li>
                <li>• Reduced paperwork and manual errors</li>
                <li>• Real-time business insights</li>
                <li>• Scalable from workshop to enterprise</li>
                <li>• Cloud & on-premise deployment</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}