import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const res = await fetch(
    "https://api.github.com/search/users?q=rizwanzaheer&per_page=3"
  );
  const data = await res.json();
  return NextResponse.json(data);
}
