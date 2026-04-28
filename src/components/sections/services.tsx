import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { services, techCategories } from "@/lib/data/services";
import type { Service, ServiceIcon } from "@/types";

export function Services() {
  return (
    <section id="services" className="relative z-10 py-24">
      <div className="mx-auto max-w-[1200px] px-8">
        <SectionHeader
          kicker="03 — Services"
          title="How I work with clients."
          description="Full-time remote, project-based, or retainer."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={services.length * 80} className="mt-8">
          <div className="rounded-[14px] border border-border bg-bg-card p-6 md:p-10">
            <div className="mb-8 font-mono text-[0.72rem] uppercase tracking-[0.05em] text-text-muted">
              The stack I reach for
            </div>
            <div className="divide-y divide-border">
              {techCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="grid gap-2 py-5 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:items-baseline md:gap-x-8"
                >
                  <div className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-accent-bright">
                    {cat.label}
                  </div>
                  <div className="font-mono text-[0.88rem] leading-[1.75] text-text-dim">
                    {cat.items.join("  ·  ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[14px] border border-border bg-bg-card p-[1.8rem] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-border-accent">
      <div className="mb-5 grid h-9 w-9 place-items-center rounded-[9px] border border-border-accent bg-accent-soft text-accent-bright">
        <ServiceIconSvg icon={service.icon} />
      </div>
      <h3 className="mb-2 text-[1.15rem] font-medium tracking-[-0.02em]">
        {service.title}
      </h3>
      <p className="mb-4 text-[0.9rem] leading-[1.55] text-text-dim">
        {service.description}
      </p>
      <div className="border-t border-border pt-[0.8rem] font-mono text-[0.72rem] tracking-[0.02em] text-text-muted">
        {service.tools.join(" · ")}
      </div>
    </article>
  );
}

function ServiceIconSvg({ icon }: { icon: ServiceIcon }) {
  const props = {
    viewBox: "0 0 16 16",
    fill: "none",
    className: "h-4 w-4",
  } as const;

  if (icon === "automation") {
    return (
      <svg {...props}>
        <path
          d="M8 2v12M2 8h12M4.5 4.5l7 7M11.5 4.5l-7 7"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  if (icon === "backend") {
    return (
      <svg {...props}>
        <rect
          x="2"
          y="3"
          width="12"
          height="10"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M2 6h12M5 9h2M5 11h4"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  if (icon === "agentic") {
    return (
      <svg {...props}>
        <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
        <circle cx="14" cy="8" r="1" fill="currentColor" />
        <circle cx="2" cy="8" r="1" fill="currentColor" />
      </svg>
    );
  }
  // llm
  return (
    <svg {...props}>
      <path
        d="M4 4l-2 2v4l2 2M12 4l2 2v4l-2 2M6 11l4-6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
