import { promises as fs } from "fs";
import path from "path";

export type Lead = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  villa: string;
  message: string;
};

function leadsPath() {
  const root = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), "data");
  return path.join(root, "leads.json");
}

async function ensureFile() {
  const file = leadsPath();
  await fs.mkdir(path.dirname(file), { recursive: true });
  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, "[]", "utf8");
  }
  return file;
}

export async function readLeads(): Promise<Lead[]> {
  const file = await ensureFile();
  const raw = await fs.readFile(file, "utf8");
  try {
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function addLead(input: Omit<Lead, "id" | "createdAt">): Promise<Lead> {
  const leads = await readLeads();
  const lead: Lead = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    ...input,
  };
  leads.unshift(lead);
  await fs.writeFile(await ensureFile(), JSON.stringify(leads, null, 2), "utf8");
  return lead;
}

export function leadsToCsv(leads: Lead[]) {
  const header = ["Date", "Name", "Phone", "Email", "Villa", "Message"];
  const rows = leads.map((l) =>
    [l.createdAt, l.name, l.phone, l.email, l.villa, l.message].map((cell) => {
      const value = String(cell ?? "").replaceAll('"', '""');
      return `"${value}"`;
    }),
  );
  return [header.join(","), ...rows.map((r) => r.join(","))].join("\n");
}
