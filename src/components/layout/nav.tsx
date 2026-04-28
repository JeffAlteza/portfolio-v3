import Link from "next/link";

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between gap-6 rounded-full border border-border bg-[rgba(15,15,18,0.8)] p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_10px_30px_rgba(0,0,0,0.5)] [backdrop-filter:blur(20px)_saturate(1.2)] md:left-1/2 md:right-auto md:-translate-x-1/2 md:gap-10 md:py-[0.6rem] md:pr-[0.6rem] md:pl-[1.2rem]"
    >
      <Link
        href="#"
        className="flex items-center gap-2 pl-2 text-[0.9rem] font-medium tracking-[-0.02em] md:pl-0"
      >
        <span
          aria-hidden
          className="relative block h-[18px] w-[18px] rounded-[4px] bg-accent shadow-[0_0_12px_var(--color-accent-glow)]"
        >
          <span className="absolute inset-[4px] rounded-[2px] bg-bg" />
        </span>
        <span>jeffrey.alteza</span>
      </Link>

      <ul className="hidden items-center gap-[0.2rem] md:flex">
        <li>
          <Link
            href="#work"
            className="rounded-full px-[0.9rem] py-2 text-[0.82rem] text-text-dim transition-colors duration-200 hover:bg-bg-hover hover:text-text"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="rounded-full px-[0.9rem] py-2 text-[0.82rem] text-text-dim transition-colors duration-200 hover:bg-bg-hover hover:text-text"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#services"
            className="rounded-full px-[0.9rem] py-2 text-[0.82rem] text-text-dim transition-colors duration-200 hover:bg-bg-hover hover:text-text"
          >
            Services
          </Link>
        </li>
      </ul>

      <Link
        href="#contact"
        className="rounded-full bg-text px-4 py-2 text-[0.82rem] font-medium text-bg transition-colors duration-200 hover:bg-accent-bright"
      >
        Get in touch
      </Link>
    </nav>
  );
}
