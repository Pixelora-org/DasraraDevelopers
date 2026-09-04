import { cookies } from "next/headers";

export const OWNER_COOKIE = "dasara_owner";

export function ownerPassword() {
  return process.env.OWNER_PASSWORD || "DasaraOwner2026";
}

export function contactEmails() {
  const fromEnv = process.env.CONTACT_EMAIL;
  if (fromEnv) {
    return fromEnv
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return ["info.utsav@dasaradevelopers.com"];
}

export async function isOwnerAuthed() {
  const jar = await cookies();
  return jar.get(OWNER_COOKIE)?.value === ownerPassword();
}
