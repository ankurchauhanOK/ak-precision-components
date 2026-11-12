import Container from "@/components/ui/Container";

const industries = [
  { name: "Automotive", desc: "Engine components, transmission parts, brackets, and precision fittings for automotive and EV manufacturers." },
  { name: "Agriculture", desc: "Tractor components, implement parts, and custom machined parts for agricultural equipment." },
  { name: "Electrical", desc: "Enclosures, bus bars, connectors, and custom components for electrical and electronics industry." },
  { name: "Medical", desc: "Surgical instrument components, device parts, and precision machined implants." },
  { name: "Heavy Engineering", desc: "Large format machined components for construction, mining, and heavy equipment." },
  { name: "OEM Manufacturing", desc: "Original equipment manufacturing for industrial machinery and automation systems." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Manufacturing
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Industries We Serve
            </h1>
            <p className="section-description text-deep-forest">
              The part may be small. Its role rarely is.
              Precision components become part of larger systems, machines and products.
              We work across the industries currently represented on our site.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white rounded-2xl border border-light-sage p-6 hover:shadow-md transition-all">
                <h3 className="card-title text-deep-forest mb-2">{ind.name}</h3>
                <p className="card-description text-sage">{ind.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}