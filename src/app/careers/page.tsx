import Container from "@/components/ui/Container";

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              CAREERS
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              We are building an engineering company across the physical and
              digital factory.
            </h1>
            <p className="section-description text-deep-forest">
              Manufacturing, software and industrial technology require people
              who want to understand how things actually work.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-xl">
            <h2 className="section-title text-3xl mb-4">Open positions coming soon.</h2>
            <p className="section-description text-deep-forest">
              We are building our manufacturing, software and industrial
              technology capabilities. Open positions will appear here as they
              become available.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}