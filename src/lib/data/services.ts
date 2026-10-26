import type { Service } from "@/types";

export const services: Service[] = [
  {
    icon: "automation",
    title: "AI Automation Systems",
    description:
      "End-to-end n8n workflows connecting your tools, data, and LLMs. Support triage, content pipelines, voice agents — built to run unattended, log everything, fail gracefully.",
    tools: ["n8n", "OpenAI", "Anthropic", "Groq", "Vapi"],
  },
  {
    icon: "backend",
    title: "Backend API Development",
    description:
      "Production Laravel and Node APIs with authentication, queues, observability, and Docker deployment. Built for teams that need the system to still work at 3am.",
    tools: ["Laravel", "Node", "JWT", "Docker", "MySQL"],
  },
  {
    icon: "agentic",
    title: "Agentic Engineering",
    description:
      "Claude Code workflows with role-based subagents, system plans, and architecture docs. I ship faster with AI because the AI is held to engineering standards.",
    tools: ["Claude Code", "Subagents", "MCP", "Anthropic API"],
  },
  {
    icon: "llm",
    title: "LLM Integration",
    description:
      "Embed AI into your existing product. Tool-calling, structured outputs, RAG, streaming — wired into your backend with proper error handling and cost control.",
    tools: ["Anthropic", "OpenAI", "Gemini", "Vertex AI"],
  },
];

export interface TechCategory {
  label: string;
  items: string[];
}

export const techCategories: TechCategory[] = [
  {
    label: "Backend / Frameworks",
    items: ["Laravel", "Filament", "JavaScript", "TypeScript", "NestJS"],
  },
  {
    label: "Frontend / Styling",
    items: ["Livewire", "Blade", "Next.js", "React.js", "Tailwind CSS", "HTML"],
  },
  {
    label: "Databases",
    items: ["MySQL"],
  },
  {
    label: "APIs & Integrations",
    items: [
      "REST API",
      "Webhook",
      "HTTP Request",
      "Unmand API",
      "ZKteco API",
      "Telegram API",
      "Gmail API",
      "Google Sheets",
      "NewsAPI",
      "Open-Meteo API",
      "Big Data Cloud API",
      "Firebase Cloud Messaging",
    ],
  },
  {
    label: "AI / Automation",
    items: [
      "n8n",
      "AI Agent",
      "Basic LLM Chain",
      "Groq LLM",
      "GPT-4o-mini",
      "Switch Node",
      "Merge Node",
    ],
  },
  {
    label: "GTM / RevOps",
    items: ["Clay", "Instantly", "Clay CLI"],
  },
  {
    label: "Architecture / Patterns",
    items: ["Microservice", "Domain Driven Design", "Event Sourcing", "Multitenancy"],
  },
  {
    label: "Libraries / Hardware",
    items: ["Spatie Media Library", "ZKteco Biometric"],
  },
];
