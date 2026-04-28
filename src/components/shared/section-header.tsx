interface Props {
  kicker: string;
  title: string;
  description?: string;
}

export function SectionHeader({ kicker, title, description }: Props) {
  return (
    <div className="mb-16 max-w-4xl">
      <div className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-accent-bright">
        <span className="h-px w-3.5 bg-accent" />
        {kicker}
      </div>
      <h2 className="mb-4 max-w-[22ch] text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.05] tracking-[-0.03em]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[40rem] text-[17px] leading-relaxed text-text-dim">
          {description}
        </p>
      )}
    </div>
  );
}
