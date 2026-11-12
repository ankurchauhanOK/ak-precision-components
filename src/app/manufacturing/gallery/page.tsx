import Container from "@/components/ui/Container";

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Manufacturing
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Gallery
            </h1>
            <p className="section-description text-deep-forest">
              Before we show you the result, look at where it is made.
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