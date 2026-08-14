import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CustomDevelopmentPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-warm-bg">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              Software
            </p>
            <h1 className="text-[clamp(32px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-8">
              Custom Software Development
            </h1>
            <p className="text-base md:text-[17px] text-sage leading-[1.5] mb-8">
              Tailored software solutions built specifically for your
              manufacturing operations. From simple tools to complex platforms.
            </p>
            <Button href="/contact" variant="primary">
              Book a Demo
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="font-semibold text-deep-forest mb-4">What We Build</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• Custom dashboards & reporting tools</li>
                <li>• Production tracking systems</li>
                <li>• Quality management platforms</li>
                <li>• Integration with existing ERP/MES</li>
                <li>• Mobile apps for shop floor</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-light-sage p-6">
              <h3 className="font-semibold text-deep-forest mb-4">Why Work With Us</h3>
              <ul className="space-y-3 text-sm text-sage">
                <li>• We understand factory operations</li>
                <li>• Cloud & on-premise deployment</li>
                <li>• Modern tech stack</li>
                <li>• Ongoing support & maintenance</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}