import Container from "@/components/ui/Container";

const machines = [
  { name: "CNC Lathe", type: "Turning", specs: "Max turning dia: 300mm, Accuracy: ±0.005mm" },
  { name: "VMC", type: "Milling", specs: "Table size: 800x500mm, 4-axis capability" },
  { name: "Drilling Machine", type: "Drilling", specs: "Capacity: up to 32mm diameter" },
  { name: "Surface Grinder", type: "Grinding", specs: "Table size: 500x250mm, Ra 0.4μm" },
];

export default function MachinesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label text-forest mb-3">
              Manufacturing
            </p>
            <h1 className="page-title text-[clamp(32px,3vw,40px)] mb-8">
              Our Machines
            </h1>
            <p className="section-description text-deep-forest">
              Machines matter. Process control matters more.
              Our equipment gives us the capability to produce a range of turned, milled,
              drilled and finished components.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6">
            {machines.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl border border-light-sage p-6 hover:shadow-md transition-all">
                <span className="text-xs font-medium text-forest uppercase tracking-wider">{m.type}</span>
                <h3 className="card-title text-deep-forest mt-1 mb-2">{m.name}</h3>
                <p className="card-description text-sage">{m.specs}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}