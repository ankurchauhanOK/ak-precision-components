import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { finalCTA, site } from "@/data/smartFactory";

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <AnimatedSection>
          <div className="bg-navy text-white rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight mb-4">
              {finalCTA.heading}
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              {finalCTA.subhead}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="secondary">
                {finalCTA.ctaPrimary}
              </Button>
              <Button
                href={`mailto:${site.contactEmail}`}
                variant="outline"
                className="border-white/20 text-white hover:border-white/40 hover:bg-white/10"
              >
                {finalCTA.ctaSecondary}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}