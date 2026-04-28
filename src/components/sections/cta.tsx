export function CTA() {
  return (
    <section
      id="contact"
      className="relative z-10 py-32 text-center"
    >
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="relative overflow-hidden rounded-[20px] border border-border bg-bg-card px-6 py-16 md:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 left-1/2 h-full w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse,var(--color-accent-glow),transparent_60%)]"
          />

          <div className="relative z-[1]">
            <h2 className="mx-auto mb-5 max-w-[20ch] text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.03em]">
              Let&apos;s ship something{" "}
              <span className="accent-gradient">worth running.</span>
            </h2>

            <p className="mx-auto mb-10 max-w-[38rem] text-[1.05rem] leading-[1.55] text-text-dim">
              I take on a small number of serious clients at a time. If
              you&apos;re building a product that needs a fullstack engineer
              who understands both the backend and the AI layer, I&apos;d love
              to hear about it.
            </p>

            <a
              href="mailto:jeffreyalteza03@gmail.com"
              className="group inline-flex items-center gap-3 rounded-[10px] border border-border-bright bg-bg-elev px-[1.4rem] py-[0.9rem] font-mono text-[0.95rem] text-text transition-all duration-300 hover:border-accent hover:bg-accent-soft hover:text-accent-bright"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-3.5 w-3.5 text-text-muted transition-colors duration-300 group-hover:text-accent-bright"
              >
                <path
                  d="M2 4l6 4 6-4M2 4v8h12V4M2 4h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              jeffreyalteza03@gmail.com
            </a>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 font-mono text-[0.75rem] text-text-muted md:flex-row md:gap-12">
              <span>
                Based<strong className="ml-2 font-medium text-text">Philippines</strong>
              </span>
              <span>
                Available<strong className="ml-2 font-medium text-text">Immediately</strong>
              </span>
              <span>
                Timezone<strong className="ml-2 font-medium text-text">PHT (UTC+8)</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
