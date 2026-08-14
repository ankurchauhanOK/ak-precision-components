import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function InventoryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Inventory Management
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              Track raw materials, work-in-progress, and finished goods with
              real-time stock visibility and automated reorder alerts.
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
                <li>• Multi-location inventory tracking</li>
                <li>• Barcode / QR code scanning</li>
                <li>• Stock transfer management</li>
                <li>• Reorder level alerts</li>
                <li>• Inventory valuation reports</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="font-semibold text-deep-forest mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Prevent stockouts and overstocking</li>
                <li>• Reduce carrying costs</li>
                <li>• Real-time stock visibility</li>
                <li>• Faster inventory audits</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}