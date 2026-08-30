import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function QualityControlPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Quality Control
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              Quality records should tell you more than whether a part passed.
              <br />
              Digital checklists, defect tracking and quality analytics to
              maintain consistent product quality.
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
              <h3 className="font-semibold text-deep-forest mb-4">Key Features</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Digital QC checklists</li>
                <li>• Defect recording & classification</li>
                <li>• Real-time quality dashboards</li>
                <li>• First article inspection reports</li>
                <li>• Supplier quality tracking</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="font-semibold text-deep-forest mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Paperless quality processes</li>
                <li>• Faster defect identification</li>
                <li>• Quality trend analysis</li>
                <li>• Improved customer confidence</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}