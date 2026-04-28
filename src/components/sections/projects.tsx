"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { ProjectModal } from "@/components/shared/project-modal";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <SectionHeader
          kicker="02 — Engineering"
          title="Fullstack systems built to last."
          description="Backend APIs, integrations, and fullstack applications. Production-deployed, Docker-containerized, built for teams that need the system to still work at 3am."
        />

        <div className="border-t border-border">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <ProjectRow project={p} onClick={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function ProjectRow({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative grid w-full cursor-pointer grid-cols-[auto_1fr] items-center gap-4 border-b border-border py-[1.8rem] text-left md:grid-cols-[auto_2fr_2.5fr_1fr] md:gap-8"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-8 -right-8 top-0 bottom-0 rounded-[12px] bg-bg-hover opacity-0 transition-opacity duration-300 group-hover:opacity-60"
      />

      <div className="relative z-[1] font-mono text-[0.8rem] text-text-muted">
        {project.id}
      </div>

      <div className="relative z-[1] text-[1.2rem] font-medium tracking-[-0.02em]">
        {project.title}
      </div>

      <div className="relative z-[1] col-span-2 text-[0.9rem] leading-[1.55] text-text-dim md:col-span-1">
        {project.description}
      </div>

      <div className="relative z-[1] col-span-2 font-mono text-[0.72rem] tracking-[0.02em] text-text-muted md:col-span-1">
        {project.stack.join(" · ")}
      </div>
    </button>
  );
}
