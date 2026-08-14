import Container from "@/components/ui/Container";

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-light">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Gallery
            </h1>
            <p className="text-base md:text-[17px] text-gray-metallic leading-[1.5]">
              A look at our facility, machines, and components.
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
                className="aspect-square bg-gray-light rounded-2xl flex items-center justify-center text-gray-metallic text-sm"
              >
                Image {i}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}