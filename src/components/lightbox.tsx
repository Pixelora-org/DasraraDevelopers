"use client";

import { useEffect } from "react";

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <button
      type="button"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-3 sm:p-4"
      onClick={onClose}
      aria-label="Close plan"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="max-h-[80dvh] w-full max-w-full object-contain" />
    </button>
  );
}
