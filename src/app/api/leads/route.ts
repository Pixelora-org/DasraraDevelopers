import { NextResponse } from "next/server";
import { isOwnerAuthed } from "@/lib/auth";
import { readLeads } from "@/lib/leads";

export async function GET() {
  if (!(await isOwnerAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ leads: await readLeads() });
}
