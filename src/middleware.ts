import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/profile/:path*"],
};
