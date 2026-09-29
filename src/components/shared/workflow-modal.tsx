"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import type { Workflow } from "@/types";

interface Props {
  workflow: Workflow | null;
  onClose: () => void;
}

export function WorkflowModal({ workflow, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [prevItem, setPrevItem] = useState(workflow);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Reset to the first image when a different item opens.
  if (prevItem !== workflow) {
    setPrevItem(workflow);
    setIndex(0);
  }

  const images = workflow?.images ?? [];

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!workflow) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [workflow, onClose, prev, next]);

  useEffect(() => {
    if (workflow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [workflow]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {workflow && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative z-10 w-full max-w-3xl rounded-2xl border border-border-bright bg-bg-card overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
              <div>
                <p className="font-mono text-[0.72rem] tracking-[0.08em] text-text-muted uppercase mb-1">
                  {workflow.id}
                  {workflow.featured && " / Featured"}
                </p>
                <h2 className="text-[1.2rem] font-medium tracking-[-0.02em] text-text">
                  {workflow.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:border-border-bright hover:text-text"
              >
                <X size={15} />
              </button>
            </div>

            {/* Carousel */}
            {images.length > 0 && (
              <div className="relative mx-6 overflow-hidden rounded-xl border border-border bg-bg aspect-video">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={images[index]}
                      alt={`${workflow.title} screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </motion.div>
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg border border-border-bright bg-bg-card/80 text-text-muted backdrop-blur-sm transition-colors hover:text-text"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-lg border border-border-bright bg-bg-card/80 text-text-muted backdrop-blur-sm transition-colors hover:text-text"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Dots */}
            {images.length > 1 && (
              <div className="flex justify-center gap-1.5 pt-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className="h-1.5 rounded-full transition-all duration-200"
                    style={{
                      width: i === index ? "20px" : "6px",
                      background: i === index ? "var(--color-accent)" : "var(--color-border-bright)",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="px-6 py-5">
              <p className="text-[0.875rem] leading-[1.6] text-text-dim mb-4">
                {workflow.description}
              </p>
              <div className="font-mono text-[0.72rem] tracking-[0.02em] text-text-muted">
                {workflow.stack.join(" · ")}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
