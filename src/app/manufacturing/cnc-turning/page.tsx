import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CncTurningPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Manufacturing
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              CNC Turning
            </h1>
            <p className="section-description text-deep-forest mb-8">
              Every revolution has to land in the same place.
              We use CNC turning for repeatable production of components with tight dimensional
              requirements and complex geometries. Accuracy up to 0.005 mm.
            </p>
            <Button href="/contact" variant="primary">
              Request Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}