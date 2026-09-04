import { NextResponse } from "next/server";
import { isOwnerAuthed } from "@/lib/auth";
import { leadsToCsv, readLeads } from "@/lib/leads";

export async function GET() {
  if (!(await isOwnerAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const csv = leadsToCsv(await readLeads());
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="dasara-enquiries.csv"`,
    },
  });
}
