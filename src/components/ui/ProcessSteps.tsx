"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

type ProcessStep = {
  number: string;
  title: string;
  desc: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  className?: string;
};

export default function ProcessSteps({ steps, className = "" }: ProcessStepsProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 ${className}`}>
      {steps.map((step, i) => (
        <AnimatedSection key={step.number} delay={i * 0.08}>
          <div className="relative">
            <span className="text-4xl md:text-5xl font-semibold text-light-sage leading-none">
              {step.number}
            </span>
            <h3 className="mt-4 text-base md:text-lg font-semibold text-deep-forest">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-sage leading-relaxed">
              {step.desc}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-5 -right-3 w-3 h-px bg-light-sage" aria-hidden />
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}