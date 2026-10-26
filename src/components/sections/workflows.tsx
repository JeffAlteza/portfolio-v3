"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/section-header";
import { WorkflowCard } from "@/components/shared/workflow-card";
import { WorkflowModal } from "@/components/shared/workflow-modal";
import { Reveal } from "@/components/shared/reveal";
import { workflows } from "@/lib/data/workflows";
import type { Workflow } from "@/types";

export function Workflows() {
  const [selected, setSelected] = useState<Workflow | null>(null);

  return (
    <section id="work" className="relative z-10 py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <SectionHeader
          kicker="01 — Automation"
          title="AI workflows shipping in production."
          description="Systems built with n8n, custom code, and the modern LLM stack. Each one replaces a job — not a feature."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {workflows.map((wf, i) => (
            <Reveal
              key={wf.id}
              delay={i * 80}
              className={
                wf.span === "feature"
                  ? "md:col-span-4"
                  : wf.span === "side"
                  ? "md:col-span-2"
                  : wf.span === "third"
                  ? "md:col-span-2"
                  : "md:col-span-3"
              }
            >
              <WorkflowCard
                workflow={wf}
                onClick={wf.images?.length ? () => setSelected(wf) : undefined}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <WorkflowModal workflow={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
