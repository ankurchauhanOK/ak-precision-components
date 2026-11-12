import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function InventoryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Software
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Inventory Management
            </h1>
            <p className="section-description text-deep-forest mb-8">
              Knowing what you have is only the first step. Knowing what you
              need next is better.
              Track raw materials, work-in-progress and finished goods with
              real-time visibility across your inventory.
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
                <li>• Multi-location inventory tracking</li>
                <li>• Barcode / QR code scanning</li>
                <li>• Stock transfer management</li>
                <li>• Reorder level alerts</li>
                <li>• Inventory valuation reports</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="card-title text-deep-forest mb-4">Benefits</h3>
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