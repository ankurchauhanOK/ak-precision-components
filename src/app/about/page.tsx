import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              ABOUT AKPC
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
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
              <h2 className="section-title text-3xl mb-4">Who We Are</h2>
              <p className="section-description text-deep-forest mb-6">
                AK Precision Components began with precision component
                manufacturing. Working on our own shop floor taught us what
                factory problems actually look like: tolerances, tooling,
                machines, inspection, production pressure and the information
                that gets lost between them.
              </p>
              <p className="section-description text-deep-forest mb-6">
                That experience is shaping where AKPC goes next.
              </p>
            </div>
            <div>
              <h2 className="section-title text-3xl mb-4">Our Mission</h2>
              <p className="section-description text-deep-forest mb-6">
                Manufacturing gives us the physical understanding. Software
                helps us make factory workflows visible. Our Industrial Partner
                Network helps connect factories with the technical expertise
                they need.
              </p>
              <h2 className="section-title text-3xl mb-4 mt-8">Our Vision</h2>
              <p className="section-description text-deep-forest">
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