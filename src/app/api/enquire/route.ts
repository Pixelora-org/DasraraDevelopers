import { NextResponse } from "next/server";
import { addLead } from "@/lib/leads";
import { contactEmails } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    phone?: string;
    email?: string;
    villa?: string;
    message?: string;
  };

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  const lead = await addLead({
    name,
    phone,
    email: String(body.email || "").trim(),
    villa: String(body.villa || "Any villa").trim(),
    message: String(body.message || "").trim(),
  });

  return NextResponse.json({ ok: true, id: lead.id, inbox: contactEmails() });
}
