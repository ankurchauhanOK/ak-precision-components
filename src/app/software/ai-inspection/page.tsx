import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AiInspectionPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Software
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              AI Inspection
            </h1>
            <p className="section-description text-deep-forest mb-8">
              Some inspection decisions can be measured. Others can be seen.
              Visual quality inspection using computer vision to detect surface
              defects, dimensional deviations and more.
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
                <li>• Real-time defect detection</li>
                <li>• Surface quality analysis</li>
                <li>• OCR for part marking verification</li>
                <li>• Dimensional measurement</li>
                <li>• Pass/fail decision automation</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="card-title text-deep-forest mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Reduce manual inspection effort</li>
                <li>• Consistent quality standards</li>
                <li>• Real-time defect alerts</li>
                <li>• Inspection data analytics</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}