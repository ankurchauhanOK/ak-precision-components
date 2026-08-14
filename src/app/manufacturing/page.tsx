import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const capabilities = [
  "CNC Turning",
  "VMC Machining",
  "Drilling",
  "Tapping",
  "Threading",
  "Surface Finishing",
];

const materials = [
  "Stainless Steel",
  "Carbon Steel",
  "Aluminum",
  "Brass",
  "Copper",
  "Plastic / Nylon",
];

const industries = [
  "Automotive",
  "Agriculture",
  "Electrical",
  "Medical",
  "Heavy Engineering",
  "OEM Manufacturing",
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Precision Components
              <br />
              <span className="text-forest">Engineered Excellence.</span>
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              Advanced CNC turning and VMC machining with tight tolerances,
              quality inspection, and on-time delivery for critical industries.
            </p>
            <Button href="/contact" variant="primary">
              Request Quote
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap}
                className="bg-white rounded-2xl border border-light-sage p-6 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-deep-forest">{cap}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-warm-bg">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">Materials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((m) => (
              <div
                key={m}
                className="bg-white rounded-2xl border border-light-sage p-6 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-deep-forest">{m}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">Industries We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div
                key={ind}
                className="bg-white rounded-2xl border border-light-sage p-6 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-deep-forest">{ind}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}