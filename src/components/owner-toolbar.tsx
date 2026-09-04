"use client";

import { useRouter } from "next/navigation";

export function OwnerToolbar() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/owner/logout", { method: "POST" });
    router.replace("/owner/login");
    router.refresh();
  }

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href="/api/leads/csv"
        className="bg-gold px-5 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase text-white hover:bg-gold-deep"
      >
        Download CSV
      </a>
      <button
        type="button"
        onClick={logout}
        className="border border-line px-5 py-2.5 text-[0.68rem] tracking-[0.16em] uppercase text-brown hover:border-gold"
      >
        Sign out
      </button>
    </div>
  );
}
