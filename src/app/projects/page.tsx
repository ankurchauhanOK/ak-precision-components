"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projectsPage } from "@/data/smartFactory";

const categories = ["cnc", "vmc", "software"] as const;
type Category = (typeof categories)[number];

const categoryLabels: Record<Category, string> = {
  cnc: "CNC",
  vmc: "VMC",
  software: "Software",
};

type Project = (typeof projectsPage.projects)[number];

function MachineShowcase({ project }: { project: Project }) {
  return (
    <article className="min-w-0">
      <div
        className={`relative w-full ${project.imageAspect} rounded-[20px] overflow-hidden bg-white shadow-soft`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover object-center"
        />
      </div>

      <div className="mt-8 md:mt-12 min-w-0">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-forest">
          {project.category}
        </span>

        <h2 className="mt-3 text-[clamp(30px,3.4vw,42px)] font-semibold leading-[1.1] tracking-tight text-deep-forest">
          {project.name}
        </h2>

        <p className="mt-4 text-base md:text-[17px] leading-[1.55] text-sage max-w-[720px]">
          {project.description}
        </p>

        <dl className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-light-sage/70 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 min-w-0">
          {project.specs.map((spec) => (
            <div key={spec.label} className="min-w-0">
              <dt className="text-[11px] uppercase tracking-[0.14em] text-sage">
                {spec.label}
              </dt>
              <dd className="mt-1.5 text-lg md:text-xl font-medium text-deep-forest break-words">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 pt-6 md:pt-8 border-t border-light-sage/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 min-w-0">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.14em] text-sage">
              {project.rateLabel}
            </p>
            <p className="mt-1 text-base font-medium text-deep-forest break-words">
              {project.rateValue}
            </p>
          </div>
          <Link
            href={project.href}
            className="inline-flex items-center justify-center gap-2 self-stretch sm:self-auto px-7 py-3.5 rounded-full bg-forest text-white text-sm font-medium hover:bg-deep-forest transition-colors shrink-0"
          >
            {project.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function MachineCard({
  project,
}: {
  project: (typeof projectsPage.projects)[number];
}) {
  const specsToShow = project.specs.slice(0, 3);

  return (
    <article className="bg-white rounded-[20px] md:rounded-[22px] border border-light-sage/70 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col min-w-0 h-full">
      <div className="relative w-full aspect-[16/10] bg-white">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col px-5 md:px-6 lg:px-7 pt-5 md:pt-6 lg:pt-7 pb-5 md:pb-6 lg:pb-7 min-w-0">
        <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-sage">
          {project.number} / {project.tab.toUpperCase()}
        </span>

        <h2 className="mt-2 text-xl md:text-2xl lg:text-[28px] font-semibold tracking-tight text-deep-forest">
          {project.name}
        </h2>
        <p className="mt-1 text-sm md:text-[15px] font-medium text-forest">
          {project.category}
        </p>

        <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-sage">
          {project.description}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 min-w-0">
          {specsToShow.map((spec) => (
            <div key={spec.label} className="min-w-0">
              <dt className="text-[11px] uppercase tracking-[0.14em] text-sage">
                {spec.label}
              </dt>
              <dd className="mt-0.5 text-sm md:text-base font-medium text-deep-forest break-words">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 pt-5 border-t border-light-sage/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-w-0">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.14em] text-sage">
              {project.rateLabel}
            </p>
            <p className="mt-0.5 text-sm md:text-base font-medium text-deep-forest break-words">
              {project.rateValue}
            </p>
          </div>
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-forest hover:text-deep-forest transition-colors shrink-0"
          >
            {project.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("cnc");

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

        <div className="mt-10 md:mt-14 flex justify-center">
          <div
            className="inline-flex gap-1.5 p-1.5 rounded-full bg-[#F7F8FA] border border-light-sage/70 shadow-soft"
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((c) => {
              const active = activeCategory === c;
              return (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(c)}
                  className={`shrink-0 px-5 md:px-7 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "bg-white text-deep-forest shadow-soft border border-light-sage"
                      : "text-sage hover:text-deep-forest border border-transparent"
                  }`}
                >
                  {categoryLabels[c]}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-10 md:mt-14 w-full"
          >
            {activeCategory !== "software" ? (
              <>
                <MachineShowcase
                  project={
                    activeCategory === "cnc"
                      ? projectsPage.projects[0]
                      : projectsPage.projects[1]
                  }
                />

                <div className="mt-12 md:mt-16 text-center">
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
              </>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <MachineCard project={projectsPage.projects[2]} />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
