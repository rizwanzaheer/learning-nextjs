import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  console.log("in the middleware!!!");
  return NextResponse.redirect(new URL("/counter", req.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/about/:path*", // when ever this rout trigger then middleware redirect this page to '/counter' which is above
    // /*
    //  * Match all request paths except for the ones starting with:
    //  * - api (API routes)
    //  * - _next/static (static files)
    //  * - _next/image (image optimization files)
    //  * - favicon.ico (favicon file)
    //  */
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
