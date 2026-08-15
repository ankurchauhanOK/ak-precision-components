"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projectsPage } from "@/data/smartFactory";

const filters = ["All", "Manufacturing", "Software"] as const;
type Filter = (typeof filters)[number];

function MachineCard({
  project,
  mirrored,
}: {
  project: (typeof projectsPage.projects)[number];
  mirrored?: boolean;
}) {
  const info = (order: string) => (
    <div className={`p-6 md:p-8 lg:p-10 flex flex-col min-w-0 ${order}`}>
      <span className="text-xs font-medium text-forest tracking-[0.2em]">
        {project.number} — {project.tab}
      </span>
      <h2 className="mt-3 text-2xl md:text-[30px] font-semibold tracking-tight text-deep-forest">
        {project.name}
      </h2>
      <p className="mt-1.5 text-sm font-medium text-forest">
        {project.category}
      </p>
      <p className="mt-4 text-[15px] md:text-base leading-normal text-sage max-w-[520px]">
        {project.description}
      </p>

      <dl className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 max-w-[560px]">
        {project.specs.map((spec) => (
          <div key={spec.label}>
            <dt className="text-xs font-medium uppercase tracking-[0.14em] text-sage">
              {spec.label}
            </dt>
            <dd className="mt-1 text-base font-medium text-deep-forest">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 pt-6 border-t border-light-sage flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-sage">
            {project.rateLabel}
          </p>
          <p className="mt-1 text-base font-medium text-deep-forest">{project.rateValue}</p>
        </div>
        <Link
          href={project.href}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-base font-medium bg-action-green text-white transition-colors duration-200 hover:bg-action-green-dark"
        >
          {project.cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );

  const imageCol = (order: string) => (
    <div
      className={`relative ${order} bg-warm-bg p-4 md:p-6 flex items-center justify-center ${
        mirrored ? "lg:border-r" : "lg:border-l"
      } border-light-sage`}
    >
      <div className="relative w-full h-56 lg:h-[380px] rounded-xl overflow-hidden bg-white">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-contain object-center"
        />
      </div>
    </div>
  );

  return (
    <article className="bg-white rounded-2xl border border-light-sage shadow-sm overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_360px]">
        {mirrored ? (
          <>
            {imageCol("order-1 lg:order-2")}
            {info("order-2 lg:order-1")}
          </>
        ) : (
          <>
            {info("order-2 lg:order-1")}
            {imageCol("order-1 lg:order-2")}
          </>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const showMachines =
    activeFilter === "All" || activeFilter === "Manufacturing";
  const showSoftware =
    activeFilter === "All" || activeFilter === "Software";

  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-warm-bg">
      <Container>
        <AnimatedSection>
          <div className="max-w-[640px]">
            <p className="text-xs font-medium text-forest uppercase tracking-[0.16em]">
              {projectsPage.eyebrow}
            </p>
            <h1 className="mt-3 text-[clamp(36px,4vw,48px)] font-semibold leading-[1.1] tracking-tight text-deep-forest">
              {projectsPage.heading}
            </h1>
            <p className="mt-5 text-base md:text-[17px] leading-[1.55] text-sage max-w-[560px]">
              {projectsPage.subhead}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 md:mt-14 rounded-[28px] bg-[#F7F8FA] border border-light-sage/70 shadow-soft px-4 sm:px-6 md:px-10 py-6 md:py-10">
          <div className="flex gap-2 flex-nowrap overflow-x-auto">
            {filters.map((f) => {
              const active = activeFilter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={active}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-white text-deep-forest shadow-soft border border-light-sage"
                      : "text-sage hover:text-deep-forest border border-transparent"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto mt-8 md:mt-10 w-full max-w-none sm:max-w-[92%] md:max-w-[88%]"
            >
              {showMachines && (
                <div className="space-y-8 md:space-y-10">
                  <MachineCard project={projectsPage.projects[0]} />

                  <div className="py-2 text-center">
                    <p className="text-[15px] md:text-base text-sage leading-normal">
                      {projectsPage.statement.text}{" "}
                      <Link
                        href={projectsPage.statement.href}
                        className="text-forest font-medium hover:text-sage transition-colors"
                      >
                        {projectsPage.statement.linkText}
                        <span aria-hidden> →</span>
                      </Link>
                    </p>
                  </div>

                  <MachineCard project={projectsPage.projects[1]} mirrored />
                </div>
              )}

              {showSoftware && (
                <div className="space-y-8 md:space-y-10">
                  <MachineCard project={projectsPage.projects[2]} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}