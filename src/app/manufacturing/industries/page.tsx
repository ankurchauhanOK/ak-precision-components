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
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-light">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Industries We Serve
            </h1>
            <p className="text-base md:text-[17px] text-gray-metallic leading-[1.5]">
              Our precision components power critical industries.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
                <h3 className="font-semibold text-navy mb-2">{ind.name}</h3>
                <p className="text-sm text-gray-metallic leading-normal">{ind.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}