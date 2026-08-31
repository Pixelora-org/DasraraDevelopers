export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        fill="currentColor"
        d="M32 10c2.2 8.4 8.2 14.2 16.8 17.2C40.2 30.4 34.2 36.2 32 44.6 29.8 36.2 23.8 30.4 15.2 27.2 23.8 24.2 29.8 18.4 32 10Z"
      />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </svg>
  );
}
