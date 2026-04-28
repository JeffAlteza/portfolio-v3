const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/JeffAlteza" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jeffrey-alteza-593632209",
  },
  { label: "Facebook", href: "https://www.facebook.com/babjeffrey/" },
  { label: "Instagram", href: "https://www.instagram.com/jeffreyalteza" },
  { label: "TikTok", href: "https://www.tiktok.com/@jepoyalteza" },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 border-t border-border py-8">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="flex flex-col items-center justify-between gap-4 font-mono text-[0.75rem] text-text-muted md:flex-row">
          <div>© 2026 Jeffrey Alteza.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href="mailto:jeffreyalteza03@gmail.com"
              className="text-text-dim transition-colors duration-200 hover:text-accent-bright"
            >
              Email
            </a>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim transition-colors duration-200 hover:text-accent-bright"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
