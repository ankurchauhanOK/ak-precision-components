import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function JobCardsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Software
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Job Card Tracking
            </h1>
            <p className="section-description text-deep-forest mb-8">
              A job should never disappear between one operation and the next.
              Digital job cards from assignment to completion, tracking every
              job through each stage of production.
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
                <li>• Digital job card creation</li>
                <li>• Operator & machine assignment</li>
                <li>• Status tracking (Queued → In Progress → Complete)</li>
                <li>• Time tracking per operation</li>
                <li>• Job history & archive</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="card-title text-deep-forest mb-4">Benefits</h3>
              <ul className="space-y-3 text-sm text-sage">
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