"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

type FlowNode = {
  label: string;
  sub?: string;
};

type FlowDiagramProps = {
  nodes: FlowNode[];
  className?: string;
};

export default function FlowDiagram({ nodes, className = "" }: FlowDiagramProps) {
  return (
    <div className={`flex flex-col items-center gap-0 ${className}`}>
      {nodes.map((node, i) => (
        <AnimatedSection key={node.label} delay={i * 0.12}>
          <div className="flex flex-col items-center">
            <div className="px-8 py-5 md:px-12 md:py-6 rounded-2xl bg-white border border-light-sage shadow-soft text-center min-w-[220px] md:min-w-[280px]">
              <p className="text-sm md:text-base font-semibold text-deep-forest">
                {node.label}
              </p>
              {node.sub && (
                <p className="mt-1 text-xs md:text-sm text-sage">{node.sub}</p>
              )}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex flex-col items-center my-3 md:my-4">
                <div className="w-px h-6 md:h-8 bg-light-sage" />
                <svg
                  className="w-4 h-4 text-forest"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M8 2v10M4 8l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}