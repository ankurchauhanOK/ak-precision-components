import AnimatedSection from "@/components/ui/AnimatedSection";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { credibility, manufacturingLinks } from "@/data/smartFactory";

export default function ManufacturingCredibilitySection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <AnimatedSection>
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em] mb-3">
              {credibility.eyebrow}
            </p>
            <h2 className="text-[clamp(30px,3vw,40px)] font-semibold leading-[1.15] tracking-tight">
              {credibility.heading}
            </h2>
            <p className="mt-6 text-sage leading-normal">
              {credibility.paragraphs[0]}
            </p>
            <p className="mt-6 text-sage leading-normal">
              {credibility.paragraphs[1]}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {credibility.flow.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-deep-forest bg-warm-bg border border-light-sage rounded-xl px-4 py-2">
                    {step}
                  </span>
                  {i < credibility.flow.length - 1 && (
                    <span className="text-forest font-semibold">→</span>
                  )}
                </span>
              ))}
            </div>
            <div className="relative h-52 rounded-2xl overflow-hidden mt-8">
              <Image
                src={credibility.image}
                alt={credibility.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {manufacturingLinks.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="block bg-white rounded-2xl border border-light-sage p-6 h-full hover:shadow-md hover:border-light-sage transition-all duration-300 group"
                >
                  <h3 className="font-semibold text-deep-forest group-hover:text-forest transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sage mt-2 mb-3">{item.desc}</p>
                  <span className="text-sm font-medium text-forest">
                    Explore →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}