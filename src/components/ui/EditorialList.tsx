"use client";

import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

type EditorialItem = {
  number: string;
  title: string;
  desc: string;
  href?: string;
};

type EditorialListProps = {
  items: EditorialItem[];
  className?: string;
};

export default function EditorialList({ items, className = "" }: EditorialListProps) {
  return (
    <div className={`divide-y divide-light-sage ${className}`}>
      {items.map((item, i) => (
        <AnimatedSection key={item.number} delay={i * 0.06}>
          {item.href ? (
            <Link
              href={item.href}
              className="group flex items-start gap-6 md:gap-10 py-6 md:py-8 transition-colors"
            >
              <span className="text-4xl md:text-5xl font-semibold text-light-sage leading-none shrink-0 w-16 md:w-20">
                {item.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-deep-forest group-hover:text-forest transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-sage leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span
                className="text-forest text-lg mt-1 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                aria-hidden
              >
                →
              </span>
            </Link>
          ) : (
            <div className="flex items-start gap-6 md:gap-10 py-6 md:py-8">
              <span className="text-4xl md:text-5xl font-semibold text-light-sage leading-none shrink-0 w-16 md:w-20">
                {item.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-semibold text-deep-forest">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-sage leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          )}
        </AnimatedSection>
      ))}
    </div>
  );
}