"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    let io: IntersectionObserver | undefined;

    if (el && typeof IntersectionObserver !== "undefined") {
      // Fires on observe for elements already in the viewport.
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setVisible(true);
              io?.disconnect();
            }
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
      );
      io.observe(el);
    }

    // Fallback when IO is unavailable; safety net if it never fires.
    const safety = window.setTimeout(
      () => setVisible(true),
      io ? 1200 : 0
    );

    return () => {
      io?.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
