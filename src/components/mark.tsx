export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M24 3c1.4 6.2 5.2 10.4 11.2 13C29.2 18.6 25.4 22.8 24 29 22.6 22.8 18.8 18.6 12.8 16 18.8 13.4 22.6 9.2 24 3Z"
      />
      <path
        fill="currentColor"
        d="M24 19c.9 4.1 3.4 6.8 7.4 8.5-4 1.7-6.5 4.4-7.4 8.5-.9-4.1-3.4-6.8-7.4-8.5 4-1.7 6.5-4.4 7.4-8.5Z"
      />
    </svg>
  );
}
