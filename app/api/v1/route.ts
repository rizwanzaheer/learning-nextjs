import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";



export async function GET(request: NextRequest) {
  const token = request.cookies.get("token") || request.cookies.set("token", "localTokenTesting").get("token");
  console.log("token is: ", token);


  return NextResponse.json({ token });

  // return new Response("Hello, Next.js!", {
  //   status: 200,
  //   headers: { "Set-Cookie": `token=${'token.value'}` },
  // });
}
