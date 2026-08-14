import Container from "@/components/ui/Container";

export default function QualityPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-light">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Quality Control
            </h1>
            <p className="text-base md:text-[17px] text-gray-metallic leading-[1.5]">
              Every component undergoes rigorous inspection to ensure it meets
              your specifications.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-navy mb-3">Inspection Equipment</h3>
              <ul className="space-y-2 text-sm text-gray-metallic">
                <li>• CMM (Coordinate Measuring Machine)</li>
                <li>• Profile Projector</li>
                <li>• Surface Roughness Tester</li>
                <li>• Micrometers & Gauges</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-navy mb-3">Process</h3>
              <ul className="space-y-2 text-sm text-gray-metallic">
                <li>• Incoming Material Inspection</li>
                <li>• In-Process Inspection</li>
                <li>• Final Inspection</li>
                <li>• First Article Inspection</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <h3 className="font-semibold text-navy mb-3">Certifications</h3>
              <ul className="space-y-2 text-sm text-gray-metallic">
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