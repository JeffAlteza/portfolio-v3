"use client";

import { Fragment } from "react";
import { cn } from "@/lib/utils";
import type { Workflow } from "@/types";

const minHeightClasses: Record<NonNullable<Workflow["span"]>, string> = {
  feature: "md:min-h-[340px]",
  side: "md:min-h-[340px]",
  third: "",
  half: "",
};

export function WorkflowCard({ workflow, onClick }: { workflow: Workflow; onClick?: () => void }) {
  const minHeightClass = minHeightClasses[workflow.span ?? "third"];

  return (
    <article
      onClick={onClick}
      className={cn(
        "group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-[14px] border border-border bg-bg-card p-[1.8rem] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-0.5 hover:border-border-accent",
        onClick && "cursor-pointer",
        minHeightClass
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,var(--color-accent-soft),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-[1] mb-5 flex items-center">
        <span className="font-mono text-[0.7rem] tracking-[0.05em] text-text-muted">
          {workflow.id}
          {workflow.featured && " / Featured"}
        </span>
      </div>

      <h3
        className={cn(
          "relative z-[1] mb-2 font-medium tracking-[-0.02em]",
          workflow.featured ? "text-[1.45rem]" : "text-[1.15rem]"
        )}
      >
        {workflow.title}
      </h3>

      <p className="relative z-[1] mb-5 flex-1 text-[0.9rem] leading-[1.55] text-text-dim">
        {workflow.description}
      </p>

      {workflow.nodes && <NodeDiagram nodes={workflow.nodes} />}

      <div className="relative z-[1] flex flex-wrap gap-[0.3rem]">
        {workflow.stack.map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
    </article>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[5px] border border-border bg-bg-elev px-[0.55rem] py-[0.25rem] font-mono text-[0.68rem] tracking-[0.01em] text-text-dim">
      {children}
    </span>
  );
}

function NodeDiagram({
  nodes,
}: {
  nodes: NonNullable<Workflow["nodes"]>;
}) {
  return (
    <div className="relative z-[1] my-4 mb-[1.2rem] flex items-center justify-between gap-[0.4rem] rounded-lg border border-border bg-bg-elev p-[0.8rem]">
      {nodes.map((node, i) => (
        <Fragment key={`${node.label}-${i}`}>
          <div
            className={cn(
              "flex-1 rounded-[5px] border px-[0.5rem] py-[0.4rem] text-center font-mono text-[0.68rem]",
              node.active
                ? "border-border-accent bg-accent-soft text-accent-bright"
                : "border-border bg-bg-card text-text-dim"
            )}
          >
            {node.label}
          </div>
          {i < nodes.length - 1 && (
            <span
              aria-hidden
              className="flex-shrink-0 font-mono text-[0.7rem] text-text-muted"
            >
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
