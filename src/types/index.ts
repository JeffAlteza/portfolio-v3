export type WorkflowStatus = "live" | "testing" | "in-progress";

export interface WorkflowNode {
  label: string;
  active?: boolean;
}

export interface Workflow {
  id: string;
  featured?: boolean;
  title: string;
  description: string;
  status: WorkflowStatus;
  stack: string[];
  nodes?: WorkflowNode[];
  images?: string[];
  /** CSS grid column span for desktop (1–6). Defaults differ per card. */
  span?: "feature" | "side" | "third" | "half";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  image?: string;
  images?: string[];
}

export type ServiceIcon = "automation" | "backend" | "agentic" | "llm";

export interface Service {
  icon: ServiceIcon;
  title: string;
  description: string;
  tools: string[];
}
