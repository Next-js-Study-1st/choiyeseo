import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("post");

  return Response.json({ ok: true });
}

