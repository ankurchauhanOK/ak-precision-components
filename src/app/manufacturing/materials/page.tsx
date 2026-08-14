import Container from "@/components/ui/Container";

const materials = [
  { name: "Stainless Steel", grades: "304, 316, 416, 17-4 PH" },
  { name: "Carbon Steel", grades: "EN8, EN9, EN24, EN36" },
  { name: "Aluminum", grades: "6061, 6082, 7075" },
  { name: "Brass", grades: "C360, C464" },
  { name: "Copper", grades: "C101, C110" },
  { name: "Plastic / Nylon", grades: "Delrin, PTFE, UHMW" },
];

export default function MaterialsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Materials
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5]">
              We work with a wide range of materials to meet your specifications.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl border border-light-sage p-6 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-deep-forest mb-2">{m.name}</h3>
                <p className="text-sm text-sage">{m.grades}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}