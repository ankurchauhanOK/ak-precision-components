import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CncTurningPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              CNC Turning
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              High-precision CNC turning with accuracy up to 0.005mm. We handle
              complex geometries and tight tolerances for critical applications.
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