import { NextResponse } from "next/server";
import { addLead } from "@/lib/leads";
import { contactEmails } from "@/lib/auth";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\d{10}$/;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    phone?: string;
    email?: string;
    villa?: string;
    message?: string;
  };

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").replace(/\D/g, "");
  const email = String(body.email || "").trim();

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!PHONE.test(phone)) {
    return NextResponse.json({ error: "Enter a 10-digit mobile number." }, { status: 400 });
  }
  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: "Enter an email with @, like name@domain.com." }, { status: 400 });
  }

  const lead = await addLead({
    name,
    phone,
    email,
    villa: String(body.villa || "Any villa").trim(),
    message: String(body.message || "").trim(),
  });

  return NextResponse.json({ ok: true, id: lead.id, inbox: contactEmails() });
}
