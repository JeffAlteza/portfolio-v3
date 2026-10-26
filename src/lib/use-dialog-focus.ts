import { useEffect, useRef } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Moves focus into a dialog when it opens, keeps Tab inside it,
 * and returns focus to the previously focused element when it closes.
 */
export function useDialogFocus<T extends HTMLElement>(open: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;

    const previous = document.activeElement as HTMLElement | null;
    dialog.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = dialog.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onTab);
    return () => {
      document.removeEventListener("keydown", onTab);
      previous?.focus();
    };
  }, [open]);

  return ref;
}
