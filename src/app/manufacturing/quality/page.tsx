import Container from "@/components/ui/Container";

export default function QualityPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Manufacturing
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Quality Control
            </h1>
            <p className="section-description text-deep-forest">
              Precision only means something when you can measure it.
              Inspection is part of the process, not something added after production.
              We check incoming material, in-process production and finished components
              against the required specifications.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-light-sage">
              <h3 className="card-title text-deep-forest mb-3">Inspection Equipment</h3>
              <ul className="space-y-2 text-sm text-sage">
                <li>• CMM (Coordinate Measuring Machine)</li>
                <li>• Profile Projector</li>
                <li>• Surface Roughness Tester</li>
                <li>• Micrometers & Gauges</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-light-sage">
              <h3 className="card-title text-deep-forest mb-3">Process</h3>
              <ul className="space-y-2 text-sm text-sage">
                <li>• Incoming Material Inspection</li>
                <li>• In-Process Inspection</li>
                <li>• Final Inspection</li>
                <li>• First Article Inspection</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-light-sage">
              <h3 className="card-title text-deep-forest mb-3">Certifications</h3>
              <ul className="space-y-2 text-sm text-sage">
                <li>• Material Test Certificates</li>
                <li>• Dimensional Reports</li>
                <li>• Traceability Records</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}