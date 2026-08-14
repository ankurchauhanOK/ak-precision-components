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
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-light">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-accent-blue uppercase tracking-[0.16em] mb-3">
              Manufacturing
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Our Machines
            </h1>
            <p className="text-base md:text-[17px] text-gray-metallic leading-[1.5]">
              Modern CNC and conventional machinery for precision manufacturing.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 gap-6">
            {machines.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
                <span className="text-xs font-medium text-accent-blue uppercase tracking-wider">{m.type}</span>
                <h3 className="text-xl font-semibold text-navy mt-1 mb-2">{m.name}</h3>
                <p className="text-sm text-gray-metallic">{m.specs}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}