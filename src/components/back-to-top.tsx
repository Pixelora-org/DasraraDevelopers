"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function BackToTop() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const hasDock = pathname !== "/contact";

  useEffect(() => {
    if (pathname.startsWith("/owner")) return;

    function onScroll() {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const wellDown = max > 0 && y > Math.max(480, max * 0.55);
      setShow(wellDown);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname.startsWith("/owner") || !show) return null;

  return (
    <button
      type="button"
      aria-label="Go to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-4 z-50 flex h-11 w-11 items-center justify-center bg-ink text-white shadow-md md:hidden ${
        hasDock
          ? "bottom-[calc(5.75rem+env(safe-area-inset-bottom))]"
          : "bottom-[calc(1.5rem+env(safe-area-inset-bottom))]"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden>
        <path d="M6 14l6-6 6 6" strokeWidth="1.6" />
      </svg>
    </button>
  );
}
