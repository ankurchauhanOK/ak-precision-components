import Container from "@/components/ui/Container";

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Gallery
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5]">
              Before we show you the result, look at where it is made.
              <br />
              Machines, inspection equipment, components and the production environment
              behind our work.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-warm-bg rounded-2xl flex items-center justify-center"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}