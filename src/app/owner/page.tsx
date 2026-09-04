import { readLeads } from "@/lib/leads";
import { OwnerToolbar } from "@/components/owner-toolbar";

export const dynamic = "force-dynamic";

export default async function OwnerPage() {
  const leads = await readLeads();

  return (
    <section className="min-h-screen bg-cream px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold-deep">Private</p>
            <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">Enquiries</h1>
            <p className="mt-2 text-sm text-muted">{leads.length} saved lead{leads.length === 1 ? "" : "s"}</p>
          </div>
          <OwnerToolbar />
        </div>

        <div className="mt-8 overflow-x-auto border border-line bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-cream text-[0.68rem] tracking-[0.14em] uppercase text-gold-deep">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Phone</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Villa</th>
                <th className="px-4 py-3 font-medium">Message</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-muted">
                    No enquiries yet.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} className="border-t border-line align-top text-brown">
                    <td className="whitespace-nowrap px-4 py-3">
                      {new Date(lead.createdAt).toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 text-ink">{lead.name}</td>
                    <td className="whitespace-nowrap px-4 py-3">{lead.phone}</td>
                    <td className="break-all px-4 py-3">{lead.email || "-"}</td>
                    <td className="px-4 py-3">{lead.villa}</td>
                    <td className="max-w-xs px-4 py-3">{lead.message || "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
