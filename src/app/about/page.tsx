import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              ABOUT AKPC
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              We understand factories
              <br />
              <span className="text-forest">because we run one.</span>
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-sage leading-normal mb-6">
                AK Precision Components began with precision component
                manufacturing. Working on our own shop floor taught us what
                factory problems actually look like: tolerances, tooling,
                machines, inspection, production pressure and the information
                that gets lost between them.
              </p>
              <p className="text-sage leading-normal mb-6">
                That experience is shaping where AKPC goes next.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-sage leading-normal mb-6">
                Manufacturing gives us the physical understanding. Software
                helps us make factory workflows visible. Our Industrial Partner
                Network helps connect factories with the technical expertise
                they need.
              </p>
              <h2 className="text-2xl font-semibold mb-4 mt-8">Our Vision</h2>
              <p className="text-sage leading-normal">
                A manufacturing ecosystem where practical engineering, useful
                software and the right technical expertise are easier to access.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}