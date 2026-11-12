import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function VmcPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Manufacturing
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              VMC Machining
            </h1>
            <p className="section-description text-deep-forest mb-8">
              When the geometry gets harder, the process has to stay controlled.
              We machine complex profiles and components on 3-axis and 4-axis VMC equipment
              with attention to dimensional accuracy, repeatability and surface finish.
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