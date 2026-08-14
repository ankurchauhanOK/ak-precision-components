import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function JobCardsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-light">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Job Card Tracking
            </h1>
            <p className="text-base md:text-[17px] text-gray-metallic leading-[1.5] mb-8">
              Digital job cards from assignment to completion. Track every job
              through each stage of production.
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
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-navy mb-4">Key Features</h3>
              <ul className="space-y-3 text-sm text-gray-metallic">
                <li>• Digital job card creation</li>
                <li>• Operator & machine assignment</li>
                <li>• Status tracking (Queued → In Progress → Complete)</li>
                <li>• Time tracking per operation</li>
                <li>• Job history & archive</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-navy mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-gray-metallic">
                <li>• Eliminate paper job cards</li>
                <li>• Real-time job status visibility</li>
                <li>• Accurate production data</li>
                <li>• Faster job closures</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}