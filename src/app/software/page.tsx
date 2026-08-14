import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const products = [
  {
    title: "Factory ERP",
    desc: "End-to-end enterprise resource planning for manufacturing units.",
    href: "/software/factory-erp",
  },
  {
    title: "Production Management",
    desc: "Plan, track, and optimize production workflows in real time.",
    href: "/software/production-management",
  },
  {
    title: "Inventory Management",
    desc: "Raw material, WIP, and finished goods tracking.",
    href: "/software/inventory",
  },
  {
    title: "AI Inspection",
    desc: "Computer vision powered quality inspection system.",
    href: "/software/ai-inspection",
  },
  {
    title: "Machine Monitoring",
    desc: "Live machine status, OEE, and predictive alerts.",
    href: "/software/machine-monitoring",
  },
  {
    title: "Quality Control",
    desc: "Digital QC checklists, defect tracking, and reporting.",
    href: "/software/quality-control",
  },
  {
    title: "Job Cards",
    desc: "Digital job card system from assignment to completion.",
    href: "/software/job-cards",
  },
  {
    title: "Custom Development",
    desc: "Tailored software solutions for your manufacturing needs.",
    href: "/software/custom-development",
  },
];

export default function SoftwarePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Industrial Software
              <br />
              <span className="text-forest">Built by Manufacturers.</span>
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              We build software that helps workshops and factories digitize
              operations, reduce waste, and improve productivity.
            </p>
            <Button href="/contact" variant="primary">
              Book a Demo
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-light-sage p-6 hover:shadow-md hover:border-light-sage transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forest to-action-green flex items-center justify-center text-white text-sm font-semibold mb-4">
                  {p.title.charAt(0)}
                </div>
                <h3 className="font-semibold text-deep-forest mb-2">{p.title}</h3>
                <p className="text-sm text-sage mb-4">{p.desc}</p>
                <Button href={p.href} variant="outline" className="text-sm px-4 py-2">
                  Learn More →
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}