import Link from "next/link";

export function Hero() {
  return (
    <section className="relative z-10 pt-40 pb-28 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-8">
        <h1 className="mb-7 max-w-[18ch] text-[clamp(2.8rem,6.5vw,5.2rem)] font-medium leading-[1.02] tracking-[-0.04em]">
          Fullstack engineering for the{" "}
          <span className="accent-gradient">AI-native era.</span>
        </h1>

        <p className="mb-10 max-w-[38rem] text-[1.15rem] leading-[1.55] font-normal text-text-dim">
          I&apos;m <strong className="font-medium text-text">Jeffrey</strong> —
          a fullstack developer and AI automation specialist. I build{" "}
          <strong className="font-medium text-text">
            production-grade APIs
          </strong>
          , fullstack applications, and{" "}
          <strong className="font-medium text-text">
            agentic workflow systems
          </strong>{" "}
          that bring real automation to your business, from backend systems to
          GTM and lead-ops pipelines (Clay, Instantly, n8n).
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-text px-[1.15rem] py-[0.7rem] text-[0.88rem] font-medium tracking-[-0.01em] text-bg transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-px hover:bg-accent-bright hover:shadow-[0_8px_24px_var(--color-accent-glow)]"
          >
            View selected work
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path
                d="M3 8h10m0 0L9 4m4 4l-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border-bright bg-bg-card px-[1.15rem] py-[0.7rem] text-[0.88rem] font-medium tracking-[-0.01em] text-text transition-all duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:border-accent hover:bg-bg-hover"
          >
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path
                d="M2 4l6 4 6-4M2 4v8h12V4M2 4h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            Book an intro call
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4 md:gap-8">
          <MetaItem label="Experience" value="3+ years backend" />
          <MetaItem label="Focus" value="AI & GTM automation · APIs" />
          <MetaItem label="Location" value="Philippines · Remote" />
          <MetaItem
            label="Status"
            value={
              <>
                <span className="mr-1.5 inline-block h-[6px] w-[6px] rounded-full bg-green shadow-[0_0_6px_var(--color-green)]" />
                Open to work
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.05em] text-text-muted">
        {label}
      </div>
      <div className="text-[0.95rem] font-medium text-text">{value}</div>
    </div>
  );
}
