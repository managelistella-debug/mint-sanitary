import { NextResponse } from "next/server";
import { isAuthenticated } from "./session";

/** Wrap a Next.js route handler so it 401s unless the admin session cookie is valid. */
export function requireAuth<Ctx>(
  handler: (req: Request, ctx: Ctx) => Promise<Response>
) {
  return async (req: Request, ctx: Ctx): Promise<Response> => {
    if (!(await isAuthenticated())) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }
    try {
      return await handler(req, ctx);
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : "Unexpected error.";
      return NextResponse.json({ error: message }, { status: 500 });
    }
  };
}
