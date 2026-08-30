import Container from "@/components/ui/Container";

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              CAREERS
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              We are building an engineering company across the physical and
              digital factory.
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5]">
              Manufacturing, software and industrial technology require people
              who want to understand how things actually work.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-4">Open positions coming soon.</h2>
            <p className="text-sage leading-normal">
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