import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-light">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              About
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Engineering Mindset.
              <br />
              <span className="text-accent-blue">Manufacturing Expertise.</span>
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-gray-metallic leading-normal mb-6">
                AK Precision Components is an engineering company that
                specializes in both precision component manufacturing and
                industrial software development.
              </p>
              <p className="text-gray-metallic leading-normal mb-6">
                We understand factories because we run one. We manufacture
                precision components, and we create the software that makes
                manufacturing smarter.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-metallic leading-normal mb-6">
                To be the engineering partner that helps manufacturers compete
                in both the physical and digital worlds — delivering precision
                components and smart factory solutions.
              </p>
              <h2 className="text-2xl font-semibold mb-4 mt-8">Our Vision</h2>
              <p className="text-gray-metallic leading-normal">
                A future where every workshop and factory has access to
                world-class manufacturing and intelligent software — from one
                partner.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}