import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { buildCTA } from "@/data/smartFactory";

export default function BuildCTASection() {
  return (
    <section className="bg-deep-forest text-white py-14 md:py-14">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              {buildCTA.heading}
            </h2>
            <p className="mt-6 text-base md:text-[17px] leading-[1.55] text-sage max-w-xl mx-auto">
              {buildCTA.subhead}
            </p>
            <div className="mt-10">
              <Button href={buildCTA.ctaHref} variant="secondary" arrow>
                {buildCTA.cta}
              </Button>
              <Link
                href={buildCTA.ctaSecondaryHref}
                className="mt-4 block text-sm font-medium text-sage hover:text-white transition-colors"
              >
                {buildCTA.ctaSecondary}
              </Link>
            </div>
            <div className="mt-14 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-14">
                {buildCTA.contacts.map((contact) => (
                  <div key={contact.label}>
                    <span className="block text-xs uppercase tracking-widest text-sage mb-1.5">
                      {contact.label}
                    </span>
                    <span className="text-sm text-light-sage">
                      {contact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}