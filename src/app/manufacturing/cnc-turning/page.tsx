import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CncTurningPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              CNC Turning
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              Every revolution has to land in the same place.
              <br />
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