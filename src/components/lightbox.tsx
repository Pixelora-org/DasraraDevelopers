"use client";

import { useEffect } from "react";
import { Photo } from "@/components/photo";

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
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-3 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-2xl text-white hover:text-gold"
        aria-label="Close"
      >
        ×
      </button>
      <div
        className="relative h-[82dvh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Photo
          src={src}
          alt={alt}
          fill
          fade={false}
          className="object-contain"
          sizes="(min-width: 1024px) 64rem, 100vw"
        />
      </div>
    </div>
  );
}
