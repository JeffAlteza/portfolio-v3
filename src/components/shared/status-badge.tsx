import { cn } from "@/lib/utils";
import type { WorkflowStatus } from "@/types";

const config: Record<
  WorkflowStatus,
  { label: string; text: string; dot: string; glow: string }
> = {
  live: {
    label: "In production",
    text: "text-green",
    dot: "bg-green",
    glow: "shadow-[0_0_6px_var(--color-green)]",
  },
  testing: {
    label: "Testing",
    text: "text-amber",
    dot: "bg-amber",
    glow: "shadow-[0_0_6px_var(--color-amber)]",
  },
  "in-progress": {
    label: "In progress",
    text: "text-amber",
    dot: "bg-amber",
    glow: "shadow-[0_0_6px_var(--color-amber)]",
  },
};

export function StatusBadge({
  status,
  label,
}: {
  status: WorkflowStatus;
  label?: string;
}) {
  const c = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elev px-2.5 py-1 font-mono text-[11px] tracking-wide",
        c.text
      )}
    >
      <span className={cn("h-[5px] w-[5px] rounded-full", c.dot, c.glow)} />
      {label ?? c.label}
    </span>
  );
}
